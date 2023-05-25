import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#212B36",
      light: "#B2B3B5",
      contrastText: "#fff",
    },
    secondary: {
      main: "#F76448",
      light: "#FFDC22",
    },
  },
  typography: {
    variant1Lg: {
      fontSize: "18px",
      color: "#212B36",
    },
    variant2Lg: {
      fontSize: "16px",
      color: "#B2B3B5",
    },
    variant3Lg: {
      fontSize: "14px",
      color: "#B2B3B5",
    },
    textSize: {
      big: "18px",
      medium: "16px",
      small: "14px",
    },
  },
});

export default theme;
