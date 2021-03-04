if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
import express from "express";
import logger from "./util/logger";
import cors from "cors";
import { registerControllers } from "./controllers";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.NOTIFICATION_SERVICE_PORT ?? 10001;

(async () => {
  registerControllers(app);
  app.listen(PORT, () => {
    logger.info(`🚀 NotificationService Running On Port ${PORT}`);
  });
})().catch((e) => {
  logger.error(e);
});
