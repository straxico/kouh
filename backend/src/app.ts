import express from "express";
import bodyParser from "body-parser";
import Routes from "./Routes";
import errorHandler from "errorhandler";

// Create Express server
const app: express.Application = express();

app.set("port", process.env.PORT || 4000);
// bodyParser configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
Routes(app);
// Error Handler. Provides full stack - remove for production
app.use(errorHandler());

export default app;
