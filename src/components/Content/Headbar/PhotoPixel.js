import { Box, Card, CardMedia, keyframes } from "@mui/material";
import { useState } from "react";

const photoEffect = keyframes`
  0% {
    opacity: 0;
    transform: translate(8%, 0%);
  }
  100% {
    opacity: 1;
    transform: translate(0px, 0px);
  }
`;

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
        // sm: 250,
        height:{ xs: 282, md: 333, lg: 366},
        width: { xs: 280, md: 330, lg: 360},
        bgcolor: "transparent",
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        sx={{
          height: "100%",
          animation: `${photoEffect} 3s ease`,
          animationFillMode: "backwards",
        }}
      >
        <CardMedia
          sx={{
            height: "85%",
            width: "85%",
            overflow: "hidden",
            position: "relative",
            top: hovered ? "21px" : "20px",
            left: hovered ? "23px" : "20px",
            opacity: 0.5,
            transition: "all 0.2s",
            backgroundPosition: "left",
          }}
          image="/MePixelGray.png"
        />
        <CardMedia
          sx={{
            height: "90%",
            width: "90%",
            overflow: "hidden",
            top: hovered ? "-2px" : 0,
            left: hovered ? "-8px" : 0,
            transition: "all 0.2s",
            position: "absolute",
            backgroundPosition: "left",
            animation: `${photoEffect} 1s ease-out`,
            animationFillMode: "backwards",
          }}
          image={hovered ? "/MePixelNormal.png" : "/MePixelGray.png"}
        />
      </Box>
    </Card>
  );
};

export default PhotoPixel;
