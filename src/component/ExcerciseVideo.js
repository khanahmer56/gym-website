import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const ExcerciseVideo = ({ exerciseVideos, name }) => {
  return (
    <Box
      sx={{
        p: "20px",
        mt: { xs: "20px", lg: "200px" },
      }}
    >
      <Typography variant="h4" sx={{ mb: "20px", textAlign: "center" }}>
        Watch <span style={{ color: "#ff2625" }}>{name?.toUpperCase()}</span>{" "}
        Exercise Videos
      </Typography>
      <Stack
        justifyContent={"flex-start"}
        flexWrap={"wrap"}
        alignItems={"center"}
        sx={{
          flexDirection: { xs: "column", lg: "row" },

          gap: { xs: "20px", lg: "80px" },
        }}
      >
        {exerciseVideos?.slice(0, 8).map((video, index) => (
          <a
            key={index}
            className="excercise-video"
            href={`https://www.youtube.com/watch?v=${video?.video?.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={video?.video?.thumbnails[0].url}
              alt={video?.video?.title}
              width="300px"
              height="200px"
              style={{ borderRadius: "10px" }}
            />
            <Box>
              <Typography
                variant="h6"
                sx={{
                  color: "#ff2625",
                  fontWeight: "bold",
                  textAlign: "center",
                  textDecoration: "none",
                  wordBreak: "break-word",
                  width: "300px",

                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                {video?.video?.title}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: "bold",
                  textAlign: "center",
                  textDecoration: "none",
                  wordBreak: "break-word",
                  width: "300px",

                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                {video?.video?.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExcerciseVideo;
