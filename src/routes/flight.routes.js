import { Router } from "express";
import { flightSchema } from "../schemas/flight.schema.js";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";

const flightRouter = Router();

flightRouter.post(
  "/flights",
  validateSchema(flightSchema),
  flightController.create
);

export default flightRouter;
