import { Application, Request, Response } from "express";
import user from "./Router/userRouter";
import staff from "./Router/staffRouter";
import project from "./Router/projectRouter";
import task from "./Router/taskRouter";

export const mainApp = (app: Application) => {
  app.use("/api/v1", user);
  app.use("/api/v1", staff);
  app.use("/api/v1", project);
  app.use("/api/v1", task);
  try {
    app.get("/", (req: Request, res: Response) => {
      try {
        return res.status(200).json({
          message: "Let's do this...!",
        });
      } catch (error) {
        return res.status(404).json({
          message: "Error recorded",
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
};