import { publicPixel } from "@/font/font";
import { Typography } from "@mui/material";

const CustomH2 = (props) => {
  return (
    <Typography
      bgcolor="primary.main"
      py={1}
      px={2}
      mx="auto"
      mb={4}
      color="background.default"
      sx={{ typography: { sm: "h6", lg: "h5" } }}
      component="h2"
      className={publicPixel.className}
    >
      {props.children}
    </Typography>
  );
};

export default CustomH2;
