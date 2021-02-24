type exirSymbols = "btc-irt" | "eth-irt" | "bch-irt" | "usdt-irt" | "xrp-irt" | "btc-usdt" | "pmn-usdt" | "eth-usdt" | "xrp-usdt" | "xtz-irt" | "link-irt" | "xmr-irt" | "dai-irt" | "xlm-irt" | "ada-irt" | "trx-irt";
type TradeSide = 'sell' | 'buy'
type TradeType = 'limit' | 'market'
type getuserTradeRes = { count: number, data: getuserTrageResData[] }

type getuserTradeResData = {
  symbol: exirSymbols,
  size: number;
  price: number;
  timestamp: string;
  side: TradeSide,
  fee: number
}

type GetAllOrderRes = GetAllOrderResData[]

type GetAllOrderResData = {
  created_at: string,
  title: string,
  side: TradeSide,
  type: TradeType,
  price: number,
  size: number,
  symbol: exirSymbols,
  id: string,
  created_by: number,
  filled: number
}

type GetBalanceRes = {
  updated_at: string;
  btc_balance: number,
  btc_available: number,
  btc_pending: number,
  eth_balance: number,
  eth_available: number,
  eth_pending: number,
  bch_balance: number,
  bch_available: number,
  bch_pending: number,
  usdt_balance: number,
  usdt_available: number,
  usdt_pending: number,
  irt_balance: number,
  irt_available: number,
  irt_pending: number,
  xrp_balance: number,
  xrp_available: number,
  xrp_pending: number,
  xmr_balance: number,
  xmr_available: number,
  xmr_pending: number,
  xlm_balance: number,
  xlm_available: number,
  xlm_pending: number,
  ada_balance: number,
  ada_available: number,
  ada_pending: number,
  pmn_balance: number,
  pmn_available: number,
  pmn_pending: number,
  xtz_balance: number,
  xtz_available: number,
  xtz_pending: number,
  trx_balance: number,
  trx_available: number,
  trx_pending: number,
  link_balance: number,
  link_available: number,
  link_pending: number,
  dai_balance: number,
  dai_available: number,
  dai_pending: number
};

type GetOrderBookRes = {
  bids: [number, number][];
  asks: [number, number][];
  timestamp: string;
};

type CancelOrderRes = {
  title: string,
  side: TradeSide,
  type: TradeType,
  price: number,
  size: number,
  symbol: exirSymbols,
  id: string,
  created_by: number,
  filled: number
}
type CreateOrderReq = {
  symbol: exirSymbols;
  side: TradeSide;
  size: number;
  price: number;
};

type CreateOrderRes = {
  symbol: exirSymbols,
  side: TradeSide,
  size: number,
  type: TradeType,
  price: number,
  id: string,
  created_by: number,
  filled: number,
  status: string
};
