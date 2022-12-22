import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline } from "@mui/material";
import React from "react";

interface Props {
  children: JSX.Element;
}

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#006064",
      light: "#428e92",
      dark: "#00363a",
    },
    secondary: {
      main: "#00bfa5",
      light: "#5df2d6",
      dark: "#5df2d6",
    },
    text: {
      primary: "#ffffff",
      secondary: "#000000",
    },
    background: {
      default: "#00363a",
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        style: {
          borderRadius: ".8em",
          boxShadow: "none",
        },
      },
    },
  },
});

export const ThemeConfig: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
