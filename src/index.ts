// src/index.ts
import express, { Express } from "express";
import dotenv from "dotenv";
import moviesRouter from "./routes/movies.router";
import errorHandling from "./middleware/errorhandler.middleware";
import logger from "./middleware/logger.middleware";

dotenv.config();

const app: Express = express();
const port = process.env.PORT ?? 3004;

app.use(express.json());
app.use("/movies", moviesRouter);

app.use(logger);
app.use(errorHandling);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
