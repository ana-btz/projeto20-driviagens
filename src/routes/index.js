import { Router } from "express";
import cityRouter from "./city.routes.js";
import passengersRouter from "./passenger.routes.js";

const router = Router();

router.use(passengersRouter);
router.use(cityRouter);

export default router;