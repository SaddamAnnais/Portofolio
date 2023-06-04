import styled from "@emotion/styled";
import { Button } from "@mui/material";

const StyledButton = styled(Button)(({ theme, height, padding, width, animate, margin }) => ({
  color: theme.palette.background.default,
  backgroundColor: theme.palette.primary.main,
  borderRadius: 0,
  height: height ? height : "2rem",
  width: width ? width : "auto",
  minWidth: width ? width : "auto",
  maxWidth: width ? width : "auto",
  padding: padding ? padding : "0 1rem",
  marginLeft: margin ? margin : "1rem",
  marginRight: margin ? margin : "1rem",
  marginTop: margin ? margin : "1rem",
  marginBottom: margin ? margin : "1rem",
  boxShadow: `4px 3px ${theme.palette.primary.light}`,
  position: 'relative',
  top: 0,
  left: 0,
  transition: "all 0.2s",
  textTransform: "none",
  animation: animate,
  "&:hover": {
    backgroundColor: "white",
    top: '-2px',
    left: '-2px',
    boxShadow: `8px 6px rgba(255, 255, 255, 0.5)`,
  },
}));

const CustomButton = (props) => {
  return <StyledButton {...props.sx} >{props.children}</StyledButton>;
};

export default CustomButton;
