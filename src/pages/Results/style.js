import { makeStyles } from "@material-ui/styles";

const centeredStyleObj = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export default makeStyles({
  resultContainer: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    // justifyContent: "center",
  },
});
