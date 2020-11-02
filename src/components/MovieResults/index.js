import React from "react";
import {
  Card,
  Grid,
  Typography,
  Button,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
} from "@material-ui/core";
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
    <Grid item md={4} xs={12} sm={6}>
      {
        <Card className={classes.cardContainer}>
          <CardActionArea>
            <CardMedia className={classes.poster} image={image} title={title} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button
              size="small"
              color="primary"
              variant="contained"
              onClick={handleSeeMovieClick}
            >
              Ver mas
            </Button>
          </CardActions>
        </Card>

        /* <Card className={classes.cardContainer}>
        <Grid container className={classes.cardGirdContainer}>
          <Grid item className={classes.posterContainer}>
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
        </Grid> */
      }
      {/* </Card> */}
    </Grid>
  );
};

export default withRouter(MovieResult);
