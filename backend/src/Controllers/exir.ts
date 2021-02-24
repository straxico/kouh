import { Request, Response, NextFunction } from "express";
import holloxServices from "../Services/hollox";


const getUser = async (req: Request, res: Response) => {
    return holloxServices.getUser()
        .then(data => res.send({ msg: data }))
        .catch(err => res.send({ msg: err }))
};

const getUserTrade = async (req: Request, res: Response) => {
    return holloxServices.getUserTrade({ symbol: 'usdt-irt' })
        .then(data => res.send({ msg: data }))
        .catch(err => res.send({ msg: err }))
};

const getAllOrder = async (req: Request, res: Response) => {
    return holloxServices.getAllOrder({ symbol: 'usdt-irt' })
        .then(data => res.send({ msg: data }))
        .catch(err => res.send({ msg: err }))
};

const getBalance = async (req: Request, res: Response) => {
    return holloxServices.getBalance()
        .then(data => res.send({ msg: data }))
        .catch(err => res.send({ msg: err }))
};

const getOrderbook = async (req: Request, res: Response) => {
    return holloxServices.getOrderbook('usdt-irt')
        .then(data => res.send({ msg: data }))
        .catch(err => res.send({ msg: err }))
};

const cancelOrder = async (req: Request, res: Response) => {
    return holloxServices.cancelOrder('57f6f515-6da2-4abc-af59-3296dfe43514')
        .then(data => res.send({ msg: data }))
        .catch(err => res.send({ msg: err }))
};

const createOrder = async (req: Request, res: Response) => {
    return holloxServices.createOrder({ symbol: 'usdt-irt', price: 15000, side: 'buy', size: 5 })
        .then(data => res.send({ msg: data }))
        .catch(err => res.send({ msg: err }))
};

const holloxController = { getUser, createOrder, cancelOrder, getUserTrade, getAllOrder, getBalance, getOrderbook }

export default holloxController

