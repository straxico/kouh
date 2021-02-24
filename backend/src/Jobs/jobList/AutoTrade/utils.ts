import holloxServices from "../../../Services/hollox";
import logger from "../../../Utils/logger";

export const deleteOrderList = async (
  AllorderList: getUserCurrentAutoOrder,
  deletConditionFn: (order: GetAllOrderResData) => void,
) => {
  const buyorderFilteredForDelete = AllorderList.buyOrders.filter(deletConditionFn);
  const sellorderFilteredForDelete = AllorderList.sellOrders.filter(deletConditionFn);

  const deletfn = async (orderlist: GetAllOrderResData[]) => {
    return await Promise.all(
      orderlist.map(
        async (order) =>
          await holloxServices.cancelOrder(order.id).then(res => {
            logger.info(['deleted', res.symbol, res.side, res.size, res.price])
          })
      ),
    ).catch((err) => {
      console.log(err);
      return err;
    });
  }


  return {
    forDeletBuy: buyorderFilteredForDelete,
    buyDeleted: await deletfn(buyorderFilteredForDelete),
    forDeletSell: sellorderFilteredForDelete,
    sellDeleted: await deletfn(sellorderFilteredForDelete),
  };
};



export const getUserCurrentAutoOrder = (
  symbolOrders: GetAllOrderRes,
  symbolItem: allowSymbolType,
) => {
  const userBuyAutoOrders = symbolOrders.filter(
    (order) => order.size == symbolItem.buyOrderSize && order.side == "buy",
  );
  const userSellAutoOrders = symbolOrders.filter(
    (order) => order.size == symbolItem.sellorderSize && order.side == "sell",
  );
  return { buyOrders: userBuyAutoOrders, sellOrders: userSellAutoOrders };
};

export const getSymbolUserBalance = async (symbol: exirSymbols): Promise<autoTradeBalanceType> => {
  try {
    const userBalance = await holloxServices.getBalance();
    const symbolSign = symbol.split('-')[0];
    const irt = {
      pending: userBalance.irt_pending,
      balance: userBalance.irt_balance,
      available: userBalance.irt_available
    };
    return {
      pending: userBalance?.[`${symbolSign}_pending`],
      balance: userBalance?.[`${symbolSign}_balance`],
      available: userBalance?.[`${symbolSign}_available`],
      irt,
    };
  } catch (err) {
    return err;
  }
};
