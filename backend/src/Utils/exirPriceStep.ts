const getPriceStep = (symbol: exirSymbols) => {
  switch (symbol) {
    case "bch-irt":
      return 10000;
    case "btc-irt":
      return 50000;
    case "eth-irt":
      return 5000;
    case "usdt-irt":
      return 1;
    case 'link-irt':
      return 100
    case 'xmr-irt':
      return 1000
    case 'xtz-irt':
      return 10
    default:
      return 1;
  }
};
export default getPriceStep;
