import { Box } from "@mui/material";
import React from "react"
import Banner from "./Banner";
import Excercises from "./Excercises";
import ExcerciseSearch from "./ExcerciseSearch";

const Home = () => {
  return (
    <Box>
      <Banner />
      <ExcerciseSearch />
    </Box>
  );
};

export default Home;
