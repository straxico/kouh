import HollaEx from 'hollaex-node-lib';
import { EXIR_API_KEY, EXIR_API_SECRET } from '../Utils/secrets';

const client = new HollaEx({
    apiURL: "https://api.exir.io",
    baseURL: "/v1",
    apiKey: EXIR_API_KEY,
    apiSecret: EXIR_API_SECRET
});


const getUser = async () => {
    return client.getUser().then(res => JSON.parse(res)).catch(err => err)
};

const getUserTrade = async ({ symbol }: { symbol: exirSymbols }): Promise<getuserTradeRes> => {
    return client.getUserTrade(symbol).then(res => JSON.parse(res)).catch(err => err)
};

const getAllOrder = async ({ symbol }: { symbol: exirSymbols }): Promise<GetAllOrderRes> => {
    return client.getAllOrder(symbol).then(res => JSON.parse(res)).catch(err => err)
};

const getBalance = async (): Promise<GetBalanceRes> => {
    return client.getBalance().then(res => JSON.parse(res)).catch(err => err)
};

const getOrderbook = async (symbol: exirSymbols): Promise<GetOrderBookRes> => {
    return client.getOrderbook(symbol).then(res => JSON.parse(res)?.[symbol]).catch(err => err)
};

const cancelOrder = async (id: string): Promise<CancelOrderRes> => {
    return client.cancelOrder(id).then(res => JSON.parse(res)).catch(err => err)
};
const createOrder = async ({ symbol,
    side,
    size,
    price,
}: CreateOrderReq): Promise<CreateOrderRes> => {
    return client.createOrder(symbol, side, size, 'limit', price).then(res => JSON.parse(res)).catch(err => err)
};

const holloxServices = { createOrder, getUser, getUserTrade, getAllOrder, getBalance, getOrderbook, cancelOrder }

export default holloxServices