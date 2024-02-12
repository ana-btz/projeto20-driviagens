import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { cityRouter } from "./routes/city.routes.js";
import { flightRouter } from "./routes/flight.routes.js";
import { travelRouter } from "./routes/travels.routes.js";
import { passengersRouter } from "./routes/passengers.routes.js";

dotenv.config();

const app = express();

app
  .use(cors())
  .use(express.json())
  .get("/health", (_req, res) => res.send("OK!"))
  .use("/passengers", passengersRouter)
  .use("/cities", cityRouter)
  .use("/flights", flightRouter)
  .use("/travels", travelRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
