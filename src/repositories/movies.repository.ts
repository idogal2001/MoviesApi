import { Movie } from "src/types/movie";
import data from "../data/movies.mock.json";

export const fetchMovies = (): Movie[] => {
  return data.Movies as unknown as Movie[];
};

export const fetchMovieByID = (id: number): Movie => {
  if (!data.Movies.some((movie) => movie.id === Number(id))) {
    throw new Error("can't find id");
    // res.status(404).send({ message: "Name is required!" });
  }
  const movie = data.Movies.find((movie) => movie.id === id);
  return movie as unknown as Movie;
};

export const addMovie = (requestMovie: Movie): Movie[] => {
  const newMovies = [...data.Movies, requestMovie];
  return newMovies as unknown as Movie[];
};

export const deleteMovie = (id: number): Movie => {
  if (!data.Movies.some((movie) => movie.id === Number(id))) {
    throw new Error("can't find id");
    // res.status(404).send({ message: "Name is required!" });
  }
  const newMovies = data.Movies.filter((movie) => movie.id === id);
  return newMovies as unknown as Movie;
};

export const editMovie = (newMovies: Movie[]): Movie[] => {
  if (!newMovies.some((newMovie) => data.Movies.some((movie) => movie.id === newMovie.id))
  ) {
    throw new Error("can't find movie's id's");
    // res.status(404).send({ message: "Name is required!" });
  }
  return newMovies;
};
