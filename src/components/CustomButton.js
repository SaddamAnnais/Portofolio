import styled from "@emotion/styled";
import { Button } from "@mui/material";

const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.background.default,
  backgroundColor: theme.palette.primary.main,
  borderRadius: 0,
  minWidth: "5rem",
  height: "2rem",
  paddingLeft: "1rem",
  paddingRight: "1rem",
  marginLeft: "1rem",
  marginRight: "1rem",
  marginTop: "1rem",
  marginBottom: "1rem",
  boxShadow: `4px 3px ${theme.palette.primary.light}`,
  position: 'relative',
  top: 0,
  left: 0,
  transition: "all 0.2s",
  textTransform: "none",
  // fontWeight: "900",
  "&:hover": {
    backgroundColor: "white",
    top: '-2px',
    left: '-2px',
    boxShadow: `8px 6px rgba(255, 255, 255, 0.5)`,
  },
}));

const CustomButton = (props) => {
  return <StyledButton>{props.children}</StyledButton>;
};

export default CustomButton;
