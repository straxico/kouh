import {
  getUserCurrentAutoOrder,
  deleteOrderList,
  getSymbolUserBalance,
} from "./utils";
import { deleteCondition, createCondition } from "./tradeCondition";
import holloxServices from "../../../Services/hollox";
import getPriceStep from "../../../Utils/exirPriceStep";

const MainAutoTrade = async (
  symbolItem: allowSymbolType,
  config: autoTradeConfigType,
) => {
  try {
    const orders = await holloxServices.getAllOrder({
      symbol: symbolItem.symbol
    });
    const priceStep = getPriceStep(symbolItem.symbol);
    const userCurrentAutoOrder = getUserCurrentAutoOrder(orders, symbolItem);
    const userBalance = await getSymbolUserBalance(symbolItem.symbol);
    const orderbook = await holloxServices.getOrderbook(symbolItem.symbol);

    const filterForDelete = (order: GetAllOrderResData) =>
      deleteCondition(order, orderbook, config);

    const initCreateOrderdata = {
      orderbook,
      symbolItem,
      userBalance,
      priceStep,
      config,
    };

    const isDeleted = await deleteOrderList(userCurrentAutoOrder, filterForDelete);
    const haveBuyOrder = userCurrentAutoOrder.buyOrders.length - isDeleted.buyDeleted.length > 0;
    const haveSellOrder = userCurrentAutoOrder.sellOrders.length - isDeleted.sellDeleted.length > 0;
    if (!haveBuyOrder) {
      return await createCondition('buy', initCreateOrderdata);
    }
    if (!haveSellOrder) {
      return await createCondition('sell', initCreateOrderdata);
    }
  }
  catch (err) {
    return err
  }
};
export default MainAutoTrade;
