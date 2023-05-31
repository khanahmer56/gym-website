import { Box, Pagination, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getdata, exerciseData } from "../getdata";
import Excercisedetails from "./Excercisedetails";
const Excercises = ({ data, setData, bodyPart }) => {
  console.log(data, "hellos");
  const [currentpage, setCurrentpage] = useState(1);
  const excersicePerPage = 9;
  const indexOfLastExcercise = currentpage * excersicePerPage;
  const indexOfFirstExcercise = indexOfLastExcercise - excersicePerPage;
  const currentExcercise = data.slice(
    indexOfFirstExcercise,
    indexOfLastExcercise
  );

  const paginate = (e, value) => {
    setCurrentpage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };
  if (data.length === 0) {
    return (
      <Box
        id="excercises"
        sx={{
          mt: { lg: "110px" },
          mt: "50px",
          p: "20px",
        }}
      >
        <Typography variant="h4" fontWeight="bold" sx={{ textAlign: "center" }}>
          Do Search For Excercises!!
        </Typography>
      </Box>
    );
  }
  return (
    <Box
      id="excercises"
      sx={{
        mt: { lg: "110px" },
        mt: "50px",
        p: "20px",
      }}
    >
      <Typography variant="h4" fontWeight="bold" sx={{ textAlign: "center" }}>
        Showing Results
      </Typography>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: 2, md: 4 }}
        justifyContent="center"
        alignItems="center"
        sx={{ mt: 5 }}
        flexWrap={"wrap"}
      >
        {currentExcercise.map((item, index) => {
          return <Excercisedetails excercise={item} key={index} />;
        })}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {data.length > 9 && (
          <Pagination
            count={Math.ceil(data.length / excersicePerPage)}
            defaultPage={1}
            page={currentpage}
            onChange={paginate}
            variant="outlined"
            shape="rounded"
            color="primary"
            sx={{ mb: 5 }}
          />
        )}
      </Stack>
    </Box>
  );
};

export default Excercises;
