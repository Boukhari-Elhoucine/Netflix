import { createMuiTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
export const formTheme = createMuiTheme({
  overrides: {
    MuiFilledInput: {
      root: {
        backgroundColor: "#333",
      },
      underline: {
        "&:after": {
          borderBottom: "2px solid #e11",
        },
      },
    },
    MuiFormLabel: {
      root: {
        color: "#818c81",
        "&$focused": {
          color: "#e11",
        },
      },
    },
    MuiInputBase: {
      input: {
        color: "#fff",
      },
    },
  },
  props: {
    MuiCheckbox: {
      disableRipple: false,
    },
  },
});
export const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    color: "#fff",
    marginBottom: "1rem",
    "& .Mui-error": {
      color: "#f80",
    },
    "& .MuiFormHelperText-root": {
      color: "#f80",
    },
    "&:hover": {
      backgroundColor: "#333",
    },
  },
}));
