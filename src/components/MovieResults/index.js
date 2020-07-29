import React from "react";
import { Card, Grid, Typography, Button } from "@material-ui/core";
import style from "./style";
import { withRouter } from "react-router-dom";
const MovieResult = ({
  resultType,
  title,
  image,
  id,
  description,
  history,
}) => {
  const classes = style();
  const handleSeeMovieClick = () => {
    history.push(`/movie/${id}`);
  };
  return (
    <Card className={classes.cardContainer}>
      <Grid container>
        <Grid item>
          <img src={image} alt={title} className={classes.poster} />
        </Grid>
        <Grid item className={classes.titleContainer}>
          <Typography>{title}</Typography>
          <Typography>{description}</Typography>
          <Typography>{resultType}</Typography>
          <Button
            color="primary"
            variant="contained"
            onClick={handleSeeMovieClick}
          >
            Ver Mas
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
};

export default withRouter(MovieResult);
