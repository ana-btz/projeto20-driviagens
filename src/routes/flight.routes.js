import { Router } from "express";
import { flightSchema } from "../schemas/flight.schema.js";
import { flightController } from "../controllers/flight.controller.js";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";

const flightRouter = Router();

flightRouter
  .post("/flights", validateSchema(flightSchema), flightController.create)
  .get("/flights", flightController.findAll);

export default flightRouter;
