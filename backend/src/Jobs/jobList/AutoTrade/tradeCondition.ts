import holloxServices from "../../../Services/hollox";
import logger from "../../../Utils/logger";

export const deleteCondition = (
  order: GetAllOrderResData,
  orderbook: GetOrderBookRes,
  config: autoTradeConfigType,
) => {
  const spaceBetween = ((orderbook.asks[0][0] - orderbook.bids[0][0]) / orderbook.asks[0][0]) * 100;
  const bigSpaceBetween = spaceBetween > config.SPACE_BETWEEN;

  if (order.side == 'buy') {
    const isTopBuy = order.price >= orderbook.bids[1][0];
    const isNotVerySpaceBuy =
      order.price < orderbook.bids[1][0] * (1 + config.SPACE_FROM_TWO / 100);

    const isDelete = !bigSpaceBetween || !isTopBuy || !isNotVerySpaceBuy;
    isDelete && logger.info(["delete buy for", { bigSpaceBetween, isTopBuy, isNotVerySpaceBuy }]);
    return isDelete;
  } else {
    const isTopSell = order.price <= orderbook.asks[1][0];
    const isNotVerySpaceSell =
      order.price > orderbook.asks[1][0] * (1 - config.SPACE_FROM_TWO / 100);
    const isDelete = !bigSpaceBetween || !isTopSell || !isNotVerySpaceSell;
    isDelete &&
      logger.info(["delete sell for", { bigSpaceBetween, isTopSell, isNotVerySpaceSell }]);

    return isDelete;
  }
};

export const createCondition = async (side: TradeSide, init: initCreateOrderdataType) => {
  const spaceBetween =
    ((init.orderbook.asks[0][0] - init.orderbook.bids[0][0]) / init.orderbook.asks[0][0]) * 100;
  const niceBuyPrice = init.orderbook.bids[1][0] + init.priceStep;
  const niceSellPrice = init.orderbook.asks[1][0] - init.priceStep;
  const availableFiat = init.userBalance.irt.available;
  const needFiat = niceBuyPrice * init.symbolItem.buyOrderSize;
  try {
    if (spaceBetween > init.config.SPACE_BETWEEN) {
      if (side == 'buy') {
        if (availableFiat >= needFiat) {
          return await holloxServices.createOrder({
            symbol: init.symbolItem.symbol,
            size: init.symbolItem.buyOrderSize,
            side,
            price: niceBuyPrice,
          }).then(res => {
            logger.info(['create', res])
            return res
          }).catch(err => { logger.error(['create', err]) });
        }
      } else {
        if (init.userBalance.available > init.symbolItem.sellorderSize) {
          return holloxServices.createOrder({
            symbol: init.symbolItem.symbol,
            size: init.symbolItem.sellorderSize,
            side,
            price: niceSellPrice,
          }).then(res => {
            logger.info(['create', res])
            return res
          }).catch(err => { logger.error(['create', err]) });
        }
      }
    } else {
      logger.info([
        "create err",
        `spaceBetween set at ${init.config.SPACE_BETWEEN} but now is ${spaceBetween}`,
      ]);
    }
  } catch (err) {
    return err;
  }
};
