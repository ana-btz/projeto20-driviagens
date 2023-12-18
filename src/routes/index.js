import { Router } from "express";
import passengersRouter from "./passenger.routes.js";

const router = Router();

router.use(passengersRouter);

export default router;