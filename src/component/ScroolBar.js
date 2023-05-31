import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import ScrollBox from "./ScrollBox";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
const ScroolBar = ({ data, setBodyPart }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const handleMediaChange = (event) => {
      setIsSmallScreen(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaChange);

    // Initial check
    setIsSmallScreen(mediaQuery.matches);

    // Clean up the event listener
    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 2000,
    smooth: true,
    slidesToShow: isSmallScreen ? 2 : 5,
    autoplay: true,
    slidesToScroll: 2,
  };
  console.log(data, "ahmer");
  return (
    <Slider {...settings}>
      {data.map((item) => {
        return (
          <Box
            key={item.id || item}
            itemId={item.id || item}
            title={item.name || item}
            margin="0 40px"
          >
            <ScrollBox bodypart={item} setBodyPart={setBodyPart} />
          </Box>
        );
      })}
    </Slider>
  );
};

export default ScroolBar;
