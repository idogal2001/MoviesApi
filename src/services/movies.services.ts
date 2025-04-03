import {
  fetchMovies,
  fetchMovieByID,
  addMovie,
  deleteMovie,
  editMovie
} from "src/repositories/movies.repository";
import { Movie } from "src/types/movie";

export const fetchMoviesService = () => {
  return fetchMovies();
};

export const fetchMovieByIDService = (id: number) => {
  return fetchMovieByID(id);
};

export const addMovieService = (requestMovie: Movie) => {
  return addMovie(requestMovie);
};

export const deleteMovieByIDService = (id: number) => {
  return deleteMovie(id);
};

export const editMoviesService = (newMovies: Movie[]) => {
  return editMovie(newMovies);
};