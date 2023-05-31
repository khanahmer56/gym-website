import { Button, Stack, Typography } from "@mui/material";

import React from "react";
import { Link } from "react-router-dom";

const Excercisedetails = ({ excercise }) => {
  return (
    <Link className="exercise-card" to={`/excercise/${excercise.id}`}>
      <img src={excercise.gifUrl} alt="excercise" width="80%" loading="lazy" />
      <Typography
        variant="subtitle1"
        sx={{ mt: "10px", color: "#000", textAlign: "center" }}
      >
        {excercise.name.toUpperCase()}
      </Typography>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button
          variant="contained"
          sx={{
            ml: "21px",
            color: "#fff",
            backgroundColor: "#ffa9a9",
            fontSize: "14px",
            marginBottom: "10px",
          }}
        >
          {excercise.bodyPart}
        </Button>
        <Button
          variant="contained"
          sx={{
            ml: "21px",
            color: "#fff",
            backgroundColor: "#ffa9a9",
            fontSize: "14px",
            marginBottom: "10px",
          }}
        >
          {excercise.target}
        </Button>
      </Stack>
    </Link>
  );
};

export default Excercisedetails;
