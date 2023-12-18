import { Router } from "express";
import cityRouter from "./city.routes.js";
import flightRouter from "./flight.routes.js";
import passengersRouter from "./passenger.routes.js";

const router = Router();

router.use(cityRouter);
router.use(flightRouter);
router.use(passengersRouter);

export default router;
