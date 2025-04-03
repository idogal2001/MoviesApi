import { Request, Response } from "express";
import {
  fetchMoviesService,
  fetchMovieByIDService,
  addMovieService,
  deleteMovieByIDService,
  editMoviesService,
} from "src/services/movies.services";

export const fetchMovieByIDController = (
  { params: { id } }: Request,
  res: Response
): void => {
  try {
    res.json(fetchMovieByIDService(+id));
  } catch (e) {
    res.status(404).send("Sorry can't find that!");
  }
};

export const fetchMoviesController = (_: Request, res: Response): void => {
  res.json(fetchMoviesService());
};

export const addMovieController = (
  { body: requestData }: Request,
  res: Response
): void => {
  res.json(addMovieService(requestData));
};

export const deleteMovieByIDController = (
  { params: { id } }: Request,
  res: Response
): void => {
  try {
    res.json(deleteMovieByIDService(+id));
  } catch (e) {
    res.status(404).send("Sorry can't find that!");
  }
};

export const editMoviesController = (
  { body: newMovies }: Request,
  res: Response
): void => {
  try {
    res.json(editMoviesService(newMovies));
  } catch (e) {
    res.status(404).send("Sorry can't find that!");
  }
};
