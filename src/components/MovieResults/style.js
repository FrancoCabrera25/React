import { makeStyles } from "@material-ui/styles";
export default makeStyles({
  container: {
    flexDirection: "row",
    display: "flex",
    width: "100%",
  },
  cardContainer: {
    // marginBottom: 8,
    // minWidth: "25%",
    // padding: "5px",
    margin: "5px",
    // [theme.breakpoints.down("md")]: {
    //   width: "50%",
    // },
  },
  cardGirdContainer: {
    flexDirection: "column",
  },
  posterContainer: {
    width: "140",
  },
  poster: {
    height: "350px",
    backgroundPosition: "center top",
  },
  titleContainer: {
    paddingLeft: 8,
  },
});
