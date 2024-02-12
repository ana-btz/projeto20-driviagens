import { Router } from "express";
import { citySchema } from "../schemas/city.schema.js";
import { cityController } from "../controllers/city.controller.js";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";

const cityRouter = Router();

cityRouter.post("/", validateSchema(citySchema), cityController.create);

export { cityRouter };
