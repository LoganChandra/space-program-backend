import express from "express";
import * as http from "http";
import * as winston from "winston";
import * as expressWinston from "express-winston";
import cors from "cors";
import { CommonRoutesConfig } from "./src/common/common.routes.config";
import { PiRoutes } from "./src/pi/pi.routes.config";

import debug from "debug";
import db from "./src/config/database.config";


const app: express.Application = express();
const server: http.Server = http.createServer(app);
const port = process.env.PORT || 3000
const routes: Array<CommonRoutesConfig> = [];
const debugLog: debug.IDebugger = debug("app");

db.sync().then(() => {
  console.log("Connect to DB");
});

// to parse all incoming requests as JSON
app.use(express.json());

// to allow cross-origin requests
app.use(cors());

// to automatically log all HTTP requests handled by Express.js
const loggerOptions: expressWinston.LoggerOptions = {
  transports: [new winston.transports.Console()],
  format: winston.format.combine(
    winston.format.json(),
    winston.format.prettyPrint(),
    winston.format.colorize({ all: true })
  ),
};

if (!process.env.DEBUG) {
  loggerOptions.meta = false;
}

app.use(expressWinston.logger(loggerOptions));

// adding the routes to our array,
routes.push(new PiRoutes(app));

// this is a simple route to make sure everything is working properly
const runningMessage = `Server running at http://localhost:${port}`;
app.get("/", (req: express.Request, res: express.Response) => {
  res.status(200).send(runningMessage);
});

server.listen(port, () => {
  routes.forEach((route: CommonRoutesConfig) => {
    debugLog(`Routes configured for ${route.getName()}`);
  });
  console.log(runningMessage);
});

