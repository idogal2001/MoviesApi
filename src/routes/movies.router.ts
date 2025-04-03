import express from "express";
import {
  fetchMoviesController,
  fetchMovieByIDController,
  addMovieController,
  deleteMovieByIDController,
  editMoviesController,
} from "../controllers/movies.controller";

const moviesRouter = express.Router();

moviesRouter.get("/:id", fetchMovieByIDController);
moviesRouter.get("/", fetchMoviesController);
moviesRouter.post("/", addMovieController);
moviesRouter.delete("/:id", deleteMovieByIDController);
moviesRouter.put("/", editMoviesController);

export default moviesRouter;
