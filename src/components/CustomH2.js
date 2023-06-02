import { publicPixel } from "@/font/font";
import { Box, Typography } from "@mui/material";

const CustomH2 = (props) => {
  return (
    <Box bgcolor="primary.main" py={1} px={2} mx="auto" mb={4} >
      <Typography
        color="background.default"
        variant="h5"
        component="h2"
        className={publicPixel.className}
      >
        {props.children}
      </Typography>
    </Box>
  );
};

export default CustomH2;