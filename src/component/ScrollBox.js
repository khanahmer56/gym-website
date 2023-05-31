import { Box } from "@mui/material";
import React from "react";
import { Typography } from "@mui/material";
import gym from "../images/gym.png";
import { padding } from "@mui/system";

const ScrollBox = ({ bodypart, setBodyPart }) => {
  console.log(bodypart, "hhh");
  return (
    <Box
      width="150px"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      flexDirection="column"
      padding={2}
      sx={{
        "&:hover": {
          scale: 0.5,
          transition: "all 0.5s ease-in-out",
          cursor: "pointer",
        },
      }}
      onClick={() => {
        setBodyPart(bodypart);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <img src={gym} alt="gym" width="80px" />
      <Typography variant="h5" fontWeight="bold">
        {bodypart.toUpperCase()}
      </Typography>
    </Box>
  );
};

export default ScrollBox;
