import React, { useState } from "react";
import { Box } from "@mui/material";
import { Exercises, HeroBanner, SearchExercises } from "../Components/index";

const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);
  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises />
    </Box>
  );
};

export default Home;
