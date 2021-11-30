import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      light: "#ffb461",
      main: "#FFA23A",
      dark: "rgba(236, 236, 236, 0.3)",
      contrastText: "#000000",
    },
    secondary: {
      light: "#34977b",
      main: "#027D5B",
      dark: "rgba(236, 236, 236, 0.3)",
      contrastText: "#000",
    },
    headerBackground: {
      main: "#FFF4F0",
    },
  },
});
