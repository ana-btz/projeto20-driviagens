import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { passengersRouter } from "./routes/passengers.routes.ts";

dotenv.config();

const app = express();

app
  .use(cors())
  .use(express.json())
  .get("/health", (_req, res) => res.send("OK!"))
  .use("/passengers", passengersRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
