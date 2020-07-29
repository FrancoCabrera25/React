import React, { useEffect } from "react";
import { Container, CircularProgress, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import { searchMovieById } from "../../redux/actions/search";
import { movieResult as movieResultSelector } from "../../redux/selectors";
const MovieDetail = ({ match }) => {
  const dispatch = useDispatch();
  const movieResult = useSelector((state) => movieResultSelector(state));
  console.log("movie", movieResult);
  useEffect(() => {
    const id = match.params.id;
    if (!movieResult || (movieResult && movieResult.id !== id)) {
      dispatch(searchMovieById(id));
    }
  });
  if (!movieResult) {
    return <CircularProgress size={50} color="primary" />;
  }
  return (
    <Container>
      <Typography variant="h3">{movieResult.title}</Typography>
      <img src={movieResult.image} alt={movieResult.title} />
      {/* <Typography><strong>Actores</strong>{movieResult.}</Typography> */}
    </Container>
  );
};

export default MovieDetail;
