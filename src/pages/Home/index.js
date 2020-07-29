import React, { useState } from "react";
import {
  Container,
  Typography,
  Card,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";
import style from "./style";

export default ({ history }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };
  const handleCleanText = (event) => {
    setSearchText("");
  };
  const hanbleSearchText = (event) => {
    history.push(`/results?movieName=${searchText}`);
  };
  const classes = style();
  return (
    <Container className={classes.container}>
      <Card className={classes.cardContainer}>
        <Grid container className={classes.TitleGridContainer}>
          <Grid>
            <Typography className={classes.title}>Bienvenido</Typography>
          </Grid>
          <Grid>
            <label>Icono</label>
          </Grid>
        </Grid>
        <TextField
          className={classes.textFieldSearch}
          value={searchText}
          placeholder=" Buscar"
          onChange={handleSearchTextChange}
        ></TextField>
        <Grid className={classes.buttonContainer}>
          <Button variant="contained" onClick={handleCleanText}>
            Limpiar
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={hanbleSearchText}
            size="large"
            className={classes.searchButton}
          >
            Buscar
          </Button>
        </Grid>
      </Card>
      <Grid className={classes.containerTopMovies} container wrap="wrap">
        <Grid item xs>
          Los mejor 20
        </Grid>
        <Grid item xs>
          Lo mejor 20
        </Grid>
      </Grid>
    </Container>
  );
};
