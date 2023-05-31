import { Button, Typography } from "@mui/material";
import React from "react";
import { Box } from "@mui/material";
import banner from "../images/banner.png";
const Banner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "100px", xs: "50px" },
        pl: { xs: 5, lg: 20 },
        position: "relative",
      }}
    >
      <Box display="flex" flexDirection="column">
        <Typography variant="h5" fontWeight="bold" color="red">
          Fitness Club
        </Typography>
        <Typography
          variant="h2"
          fontWeight="bold"
          sx={{ fontSize: { xs: "45px", lg: "65px" } }}
          lineHeight="60px"
        >
          Sweat , Smile <br /> And Repeat
        </Typography>
        <Typography
          variant="subtitle1"
          marginTop={"10px"}
          color="black"
          sx={{ px: 2 }}
        >
          Checkout the most effective excercise method for you
        </Typography>
        <Button
          variant="contained"
          sx={{
            bgcolor: "red",
            width: "200px",
            height: "45px",
            mt: 5,
            py: 2,
            "&:hover": {
              backgroundColor: "red",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        >
          Search Excercises
        </Button>
      </Box>
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <Typography
          variant="h1"
          fontWeight="bold"
          color="red"
          sx={{ opacity: 0.2, textAlign: "center", fontSize: "200px" }}
        >
          Excercise
        </Typography>
        <img
          src={banner}
          alt="banner"
          style={{
            position: "absolute",
            right: "20px",
            top: "-170px",
            width: "500px",
          }}
        />
      </Box>
    </Box>
  );
};

export default Banner;
