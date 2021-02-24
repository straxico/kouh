import logger from "../../../Utils/logger";
import MainAutoTrade from "./main";

const allowSymbolTrade: allowSymbolType[] = [
  {
    symbol: 'eth-irt',
    buyOrderSize: 0.005,
    sellorderSize: 0.005,
  }, {
    symbol: 'bch-irt',
    buyOrderSize: 0.01,
    sellorderSize: 0.01,
  }, {
    symbol: 'btc-irt',
    buyOrderSize: 0.0001,
    sellorderSize: 0.0001,
  }, {
    symbol: 'usdt-irt',
    buyOrderSize: 5,
    sellorderSize: 5,
  }, {
    symbol: 'link-irt',
    buyOrderSize: 0.03,
    sellorderSize: 0.03,
  }, {
    symbol: 'trx-irt',
    buyOrderSize: 100,
    sellorderSize: 100,
  }, {
    symbol: 'xrp-irt',
    buyOrderSize: 10,
    sellorderSize: 10,
  }, {
    symbol: 'xmr-irt',
    buyOrderSize: 0.03,
    sellorderSize: 0.03,
  }, {
    symbol: 'xtz-irt',
    buyOrderSize: 1,
    sellorderSize: 1,
  }

];

const autoTradeConfig: autoTradeConfigType = {
  SPACE_BETWEEN: 0.5, //%
  SPACE_FROM_TWO: 2, //%
};

const AutoTradeJob = async (job: any) => {

  return Promise.all(
    allowSymbolTrade.map((symbolItem) => MainAutoTrade(symbolItem, autoTradeConfig)),
  ).catch((err) => logger.error(["AutoTradeJob err", err]));
};

export default AutoTradeJob;
