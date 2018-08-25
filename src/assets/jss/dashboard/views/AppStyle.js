import { toolbar } from "../../similar";

export default theme => ({
  ...toolbar(theme),
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3
  },
  root: {
    flexGrow: 1,
    height: "100%",
    width: "100%",
    zIndex: 1,
    overflow: "hidden",
    position: "absolute",
    display: "flex"
  }
});
