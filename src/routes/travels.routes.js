import { Router } from "express";
import { travelSchema } from "../schemas/travels.schema.js";
import { travelController } from "../controllers/travels.controller.js";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";

const travelRouter = Router();

travelRouter.post(
  "/travels",
  validateSchema(travelSchema),
  travelController.create
);

export default travelRouter;
