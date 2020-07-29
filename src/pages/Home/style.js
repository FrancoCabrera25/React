import { makeStyles } from "@material-ui/styles";

const centeredStyleObj = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export default makeStyles({
  container: {
    // height: "150",
    ...centeredStyleObj,
    flexDirection: "column",
  },
  cardContainer: {
    ...centeredStyleObj,
    width: "100%",
    height: "150px",
    padding: "1.5rem",
    flexDirection: "column",
  },
  title: {
    fontSize: "4rem",
  },
  TitleGridContainer: {
    ...centeredStyleObj,
  },
  textFieldSearch: {
    width: "90%",
  },
  searchButton: {
    marginLeft: ".5rem",
  },
  buttonContainer: {
    marginTop: ".5rem",
  },
  containerTopMovies: {
    margin: 20,
    padding: 10,
  },
});
