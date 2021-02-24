

type allowSymbolType = { symbol: exirSymbols, buyOrderSize: number, sellorderSize: number }

type autoTradeBalanceType = {
    irt: {
        pending: number,
        balance: number,
        available: number
    },
    pending: number,
    balance: number,
    available: number
};

type autoTradeConfigType = {
    SPACE_BETWEEN: number;
    SPACE_FROM_TWO: number;
}
type getUserCurrentAutoOrder = {
    buyOrders: GetAllOrderResData[];
    sellOrders: GetAllOrderResData[];
}

type initCreateOrderdataType = {
    orderbook: GetOrderBookRes;
    symbolItem: allowSymbolType;
    userBalance: autoTradeBalanceType;
    config: autoTradeConfigType;
    priceStep: number;
}


