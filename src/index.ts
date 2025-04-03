// src/index.ts
import express, { Express, Request, Response, Router } from "express";
import dotenv from "dotenv";
import moviesRouter from "./routes/movies.router";

dotenv.config();

const app: Express = express();
const port = process.env.PORT ?? 3002;

app.use(express.json());

app.use("/movies", moviesRouter);

 
 
 
 

 
 
 
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
