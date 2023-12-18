import { Router } from "express";
import { citySchema } from "../schemas/city.schema.js";
import { cityController } from "../controllers/city.controller.js";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";

const cityRouter = Router();

cityRouter.post("/cities", validateSchema(citySchema), cityController.create);

export default cityRouter;
