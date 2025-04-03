import { Movie } from "src/types/movie";
import data from "../data/movies.mock.json";
import { CustomError } from "src/types/customerror";

export const fetchMovies = (): Movie[] => {
  console.log(data.Movies as unknown as Movie[]);
  return data.Movies as unknown as Movie[];
};

export const fetchMovieByID = (id: number): Movie => {
  if (!data.Movies.some((movie) => movie.id === Number(id))) {
    throw new CustomError("can't find id");
  }
  const movie = data.Movies.find((movie) => movie.id === id);
  console.log(movie as unknown as Movie);
  return movie as unknown as Movie;
};

export const addMovie = (requestMovie: Movie): Movie[] => {
  if (data.Movies.find((movie) => movie.id === requestMovie.id)) {
    throw new Error("id Allready in use");
  }
  const newMovies = [...data.Movies, requestMovie];
  console.log(newMovies as unknown as Movie[]);
  return newMovies as unknown as Movie[];
};

export const deleteMovie = (id: number): Movie => {
  if (!(data.Movies.find((movie) => movie.id === Number(id)))) {
    throw new Error("can't find id");
  }
  const newMovies = data.Movies.filter((movie) => movie.id !== id);
  console.log(newMovies as unknown as Movie);
  return newMovies as unknown as Movie;
};

export const editMovie = (newMovies: Movie[]): Movie[] => {
  if (!newMovies.some((newMovie) => data.Movies.some((movie) => movie.id === newMovie.id))) {
    throw new Error("can't find movie's id's");
  }
  console.log(newMovies);
  return newMovies;
};
