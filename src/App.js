import { Box } from "@mui/material";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Excercisedetails from "./component/Excercisedetails";
import Home from "./component/Home";
import "./App.css";
import ExcerciseInfo from "./component/ExcerciseInfo";

const App = () => {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/excercise/:id" element={<ExcerciseInfo />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
