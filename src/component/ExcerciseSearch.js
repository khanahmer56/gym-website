import React, { useEffect, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { Typography } from "@mui/material";
import { fetchData, options } from "../service";

import { getdata, exerciseData } from "../getdata";
import ScroolBar from "./ScroolBar";
import Excercises from "./Excercises";
const bodyPart2 = [
  "all",
  "chest",
  "back",
  "shoulders",
  "biceps",
  "triceps",
  "forearms",
  "abs",
  "quads",
  "hamstrings",
  "calves",
  "glutes",
];
const ExcerciseSearch = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [bodyPart, setBodyPart] = useState("all");

  const handleSearch = async () => {
    if (search) {
      const gymData = await getdata(
        "https://exercisedb.p.rapidapi.com/exercises/",
        exerciseData
      );
      const filteredData = gymData.filter((item) => {
        return (
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search)
        );
      });
      setData(filteredData);
      setSearch("");
      window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
    }
  };
  useEffect(() => {
    const getBodyPart = async () => {
      const gymDatas = await getdata(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseData
      );

      setBodyPart(["all", ...gymDatas]);
    };
    getBodyPart();
  }, []);
  console.log(bodyPart, "sdf");
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        marginTop={10}
      >
        <Typography
          variant="h3"
          fontWeight="bold"
          lineHeight="50px"
          textAlign="center"
          sx={{ fontSize: { xs: "30px", md: "40px" } }}
        >
          Awesome Exercises You <br /> Should Know
        </Typography>
        <Box sx={{ position: "relative" }}>
          <TextField
            value={search}
            sx={{
              width: { xs: "200px", md: "500px", lg: "1000px" },
              input: {
                border: "none",
              },
            }}
            placeholder="Search Excercises (e.g. pushups, squats ,chest, etc)"
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
          />
          <Button
            variant="contained"
            position="absolute"
            right="0"
            sx={{
              width: { xs: "100px", md: "200px" },
              height: "55px",
              fontSize: { xs: "15px", md: "15px" },

              bgcolor: "red",
              "&:hover": {
                backgroundColor: "red",
                boxShadow: "15px",
              },
            }}
            onClick={() => handleSearch()}
          >
            Search
          </Button>
        </Box>
        <Box position="relative" width="100%" padding="20px" mt={10}>
          <ScroolBar data={bodyPart2} setBodyPart={setBodyPart} />
        </Box>
      </Box>
      <Excercises data={data} setData={setData} />
    </>
  );
};

export default ExcerciseSearch;
