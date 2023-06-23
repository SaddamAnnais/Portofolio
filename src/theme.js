import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { chillPixel, publicPixel } from "./font/font";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "rgba(217, 217, 217, 1)",
      light: "rgba(217, 217, 217, 0.6)",
    },
    secondary: {
      main: "rgba(17,50,74,0.8)",
    },
    background: {
      default: "#11324A",
      paper: "#16405F",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: chillPixel.style.fontFamily,
  },
  shadows: ["none"],
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "transparent",
          },
        },
      },
    },
  },
});

export default theme;
