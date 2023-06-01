"use client"

import { Card, CardMedia } from "@mui/material";
import { useState } from "react";

const PhotoPixel = () => {
  const [hovered, setHovered] = useState(false);

  function handleMouseEnter() {
    setHovered(true);
  }

  function handleMouseLeave() {
    setHovered(false);
  }

  return (
    <Card
      elevation={0}
      sx={{
        height: 366,
        width: 360,
        bgcolor: "transparent",
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CardMedia
        sx={{
          height: "90%",
          width: "90%",
          position: 'relative',
          top: 0,
          left: 0,
          top: hovered ? "7px" : "5px",
          left: hovered ? "10px" : "8px",
          opacity: 0.5,
          transition: "all 0.2s",
        }}
        image="/MePixelGray.png"
      />
      <CardMedia
        sx={{
          height: "90%",
          width: "90%",
          top: hovered ? "-3px" : 0,
          left: hovered ? "-4px" : 0,
          transition: "all 0.2s",
          position: "absolute",
        }}
        image= {hovered ? "/MePixelNormal.png" : "/MePixelGray.png"}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </Card>
  );
};

export default PhotoPixel;
