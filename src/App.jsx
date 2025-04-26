import React from "react";
import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./Routes/routes";
import { Toaster } from "sonner";


const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
            <RouterProvider router={routes} />
      <Toaster expand={true} richColors />
    </ThemeProvider>
  );
}

export default App;