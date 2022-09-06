import { CommonRoutesConfig } from "../common/common.routes.config";
import express from "express";

// routes
const { calculate_pi } = require("./routes/calculate_pi");

export class PiRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, "PiRoutes");
  }

  configureRoutes() {
    this.app
      .route(`/pi/calculate`)
      .get(async (req: express.Request, res: express.Response) => {
        await calculate_pi(req, res);
      });

    return this.app;
  }
}
