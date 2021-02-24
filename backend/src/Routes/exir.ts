import express from "express";
import holloxController from "../Controllers/exir";

const exirRoute = (app: express.Application) => {
  app.get("/getUser", holloxController.getUser);
  app.get("/getUserTrade", holloxController.getUserTrade);
  app.get("/getAllOrder", holloxController.getAllOrder);
  app.get("/getBalance", holloxController.getBalance);
  app.get("/getOrderbook", holloxController.getOrderbook);
  app.get("/cancelOrder", holloxController.cancelOrder);
  app.get("/createOrder", holloxController.createOrder)
};
export default exirRoute;
