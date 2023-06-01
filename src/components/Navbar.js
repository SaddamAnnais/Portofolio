import { AppBar, Toolbar } from "@mui/material";
import NormalButton from "./NormalButton";
import CustomButton from "./CustomButton";

const Navbar = () => {
  return (
      <AppBar position="static" color="transparent" >
        <Toolbar sx={{justifyContent: 'flex-end',}} >
          <NormalButton>About</NormalButton>
          <NormalButton>Experience</NormalButton>
          <NormalButton>Projects</NormalButton>
          <NormalButton>Contact</NormalButton>
          <CustomButton>Resume</CustomButton>
        </Toolbar>
      </AppBar>
  );
};

export default Navbar;
