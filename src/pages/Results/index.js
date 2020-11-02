import React, { useEffect, useState } from "react";
import { Container, CircularProgress, Grid } from "@material-ui/core";
import queryString from "query-string";
import { useDispatch, useSelector } from "react-redux";
import { searchMovie } from "../../redux/actions/search";
import MovieResult from "../../components/MovieResults";
import { movieResults, isSearchLoading } from "../../redux/selectors";
import style from "./style";
export default ({ location }) => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => movieResults(state));

  const isLoading = useSelector((state) => isSearchLoading(state));
  const [isLooked, setIsLooked] = useState(false);
  const { movieName } = queryString.parse(location.search);

  const classes = style();

  useEffect(() => {
    if (movieName && !isLooked) {
      setIsLooked(true);
      dispatch(searchMovie(movieName));
    }
  }, [movies, movieName, isLooked]);

  const renderMovies = () => {
    if (movies) {
      return (
        <Grid container>
          {movies.map((value, index) => (
            <MovieResult key={index} {...value} />
          ))}
        </Grid>
      );
    } else if (isLoading) {
      return <CircularProgress size={100} color="primary" />;
    } else {
      return <div />;
    }
  };

  return <Container>{renderMovies()}</Container>;
};
