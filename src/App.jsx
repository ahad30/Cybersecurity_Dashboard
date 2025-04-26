import React from "react";
import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import "./App.css";
import Dashboard from "./components/Dashboard";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ p: 3 }}>
        <Dashboard />
      </Box>
    </ThemeProvider>
  );
}

export default App;