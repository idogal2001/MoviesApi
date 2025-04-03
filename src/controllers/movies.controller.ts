import { NextFunction, Request, Response } from "express";
import {
  fetchMoviesService,
  fetchMovieByIDService,
  addMovieService,
  deleteMovieByIDService,
  editMoviesService,
} from "src/services/movies.services";

export const fetchMovieByIDController = (
  { params: { id } }: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    res.json(fetchMovieByIDService(+id));
  } catch (e) {
    next(e);
  }
};

export const fetchMoviesController = (
  _: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    res.json(fetchMoviesService());
  } catch (e) {
    next(e);
  }
};

export const addMovieController = (
  { body: requestData }: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    res.json(addMovieService(requestData));
  } catch (e) {
    next(e);
  }
};

export const deleteMovieByIDController = (
  { params: { id } }: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    res.json(deleteMovieByIDService(+id));
  } catch (e) {
    next(e);
  }
};

export const editMoviesController = (
  { body: newMovies }: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    res.json(editMoviesService(newMovies));
  } catch (e) {
    next(e);
  }
};
