import styled from "@emotion/styled";
import { Button, ButtonBase } from "@mui/material";

const StyledButton = styled(Button)({
  color: "primary",
  backgroundColor: "primary",
  "&:hover": {
    backgroundColor: "transparent",
    color : "white",
    textShadow: "0 0 3px white",
  }
})

const CustomButton = (props) => {

}

export default NormalButton;
