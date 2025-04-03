import { Movie } from "src/types/movie";
import data from "../data/movies.mock.json";
import { CustomError } from "src/types/customerror";
import { STATUS_CODES } from "http";
import { StatusCodes } from "http-status-codes";

export const fetchMovies = (): Movie[] => {
  console.log(data.Movies as unknown as Movie[]);
  return data.Movies as unknown as Movie[];
};

export const fetchMovieByID = (id: number): Movie => {
  if (!data.Movies.some((movie) => movie.id === Number(id))) {
    throw new CustomError("can't find id", StatusCodes.NOT_FOUND);
  }
  const movie = data.Movies.find((movie) => movie.id === id);
  return movie as unknown as Movie;
};

export const addMovie = (requestMovie: Movie): Movie[] => {
  if (data.Movies.find((movie) => movie.id === requestMovie.id)) {
    throw new CustomError("id Allready in use", StatusCodes.NOT_FOUND);
  }
  const newMovies = [...data.Movies, requestMovie];
  return newMovies as unknown as Movie[];
};

export const deleteMovie = (id: number): Movie => {
  if (!data.Movies.find((movie) => movie.id === Number(id))) {
    throw new CustomError("can't find id", StatusCodes.NOT_FOUND);
  }
  const newMovies = data.Movies.filter((movie) => movie.id !== id);
  return newMovies as unknown as Movie;
};

export const editMovie = (newMovies: Movie[]): Movie[] => {
  if (
    !newMovies.some((newMovie) =>
      data.Movies.some((movie) => movie.id === newMovie.id)
    )
  ) {
    throw new CustomError("can't find movie's id's", StatusCodes.NOT_FOUND);
  }
  return newMovies;
};
