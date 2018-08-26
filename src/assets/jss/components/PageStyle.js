import { toolbar } from "../similar";

export default theme => ({
  ...toolbar(theme),
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3
  }
});
