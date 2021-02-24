import express from "express";
import userRoute from "./user";
import Agendash from 'agendash';
import { agenda } from "../Jobs/agenda";
import exirRoute from "./exir";
const Routes = (app: express.Application) => {
  app.get("/", (req, res) => res.send({ route: "root" }));
  app.use('/dash', Agendash(agenda));
  userRoute(app);
  exirRoute(app)
};

export default Routes;
