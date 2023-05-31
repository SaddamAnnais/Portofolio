import styled from "@emotion/styled";
import { Button, ButtonBase } from "@mui/material";

const NormalButton = styled(Button)({
  color: "primary",
  backgroundColor: "transparent",
  "&:hover": {
    backgroundColor: "transparent",
    color : "white",
    textShadow: "0 0 3px white",
  }
})

export default NormalButton;
