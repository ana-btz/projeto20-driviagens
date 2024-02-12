import { Router } from "express";
import { passengerSchema } from "../schemas.js";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import { passengerController } from "../controllers/passengers.controller.js";

const passengersRouter = Router();

passengersRouter.post(
  "/",
  validateSchema(passengerSchema),
  passengerController.create
);

export { passengersRouter };
