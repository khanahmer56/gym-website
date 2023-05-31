import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import EquipmentImage from "./equipment.png";
import MuscleImage from "./body-part.png";
import target from "./target.png";
import gymImg from "./gym.png";
const Details = ({ excerciseDetails }) => {
  const extrabodypart = [
    {
      name: "equipment",
      icon: EquipmentImage,
    },
    {
      name: "bodyPart",
      icon: MuscleImage,
    },
    {
      name: "target",
      icon: target,
    },
  ];
  return (
    <Stack
      sx={{
        gap: "60px",
        flexDirection: { lg: "row" },
        p: "20px",
        alignItems: "center",
      }}
    >
      <img
        src={excerciseDetails?.gifUrl}
        alt={excerciseDetails?.name}
        loading="lazy"
        className="detail-image"
      />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography fontSize={"35px"} fontWeight={"bold"}>
          {excerciseDetails?.name?.toUpperCase()}
        </Typography>
        <Typography fontSize={"20px"}>
          Excercise keeps you fit .{excerciseDetails?.name?.toUpperCase()}up is
          one of the best excercise to target your chest. It will help you
          improve your mood and gain energy
        </Typography>
        {extrabodypart.map((item) => (
          <Stack
            key={item.name}
            direction={"row"}
            gap="24px"
            alignItems={"center"}
          >
            <Button sx={{ bgcolor: "#fff2db", borderRadius: "50%", p: 2 }}>
              <img src={item?.icon} />
            </Button>
            <Typography>{item.name}</Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Details;
