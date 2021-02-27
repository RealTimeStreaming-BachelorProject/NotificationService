import logger from "./util/logger";
import { Express, Response, Request } from "express";
import nodemailer from "nodemailer";
import { packageUpdate } from "./templates/templates";
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "notificationservicebachelor@gmail.com",
    pass: process.env.EMAIL_PASS,
  },
});

export interface IPackageUpdateRequest extends Request {
  body: {
    packageID: string;
    updateMessage: string;
    updateDate: string;
    receiverEmail: string;
  };
}

export function registerControllers(app: Express) {
  app.post("/packageupdate", (req: IPackageUpdateRequest, res: Response) => {
    const { packageID, updateMessage, updateDate, receiverEmail } = req.body;
    if (!packageID || !updateMessage || !updateDate || !receiverEmail) {
      res.status(400).send("One or more body parameters invalid");
      return;
    }
    var mailOptions = {
      from: "'Notification Service' <notificationservicebachelor@gmail.com>",
      to: receiverEmail,
      subject: "Package Update",
      html: packageUpdate(
        updateMessage,
        `https://letmegooglethat.com/?q=${packageID}`, // TODO: A proper link to package history
        new Date(updateDate).toDateString()
      ),
    };
    try {
      transporter.sendMail(mailOptions, (error, _) => {
        if (error) throw error;
      });
      res.status(200).json({
          status: 200,
          message: "Package update sent"
      });
    } catch (error) {
      logger.error(error);
      res.status(200).json();
    }
  });
}