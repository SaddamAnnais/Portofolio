import styled from "@emotion/styled";
import { Button } from "@mui/material";

const NormalButton = styled(Button)(({ theme, animate }) => ({
  color: theme.palette.primary.main,
  backgroundColor: "transparent",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "transparent",
    color: "white",
    textShadow: "0 0 2px white",
  },
  animation: animate,
}));

export default NormalButton;
