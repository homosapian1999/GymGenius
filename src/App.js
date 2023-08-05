import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Box } from "@mui/material";
import { Footer, Navbar } from "./Components/index";
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";

const App = () => {
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
