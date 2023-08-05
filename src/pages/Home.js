import React from "react";
import { Box } from "@mui/material";
import { Exercises, HeroBanner, SearchExercises } from "../Components/index";

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchExercises />
      <Exercises />
    </Box>
  );
};

export default Home;
