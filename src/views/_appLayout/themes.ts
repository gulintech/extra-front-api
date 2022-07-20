import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: { default: "#111827", paper: "#1f2937" },
    // text: { primary: "#0284c7" },
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});
