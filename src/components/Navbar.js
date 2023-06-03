import { AppBar, Toolbar, keyframes } from "@mui/material";
import NormalButton from "./NormalButton";
import CustomButton from "./CustomButton";

const moveIn = keyframes`
from {
  transform: translate(0px, -50%);
  opacity: 0;
}
to {
  transform: translate(0px, 0px);
  opacity: 1;
}
`;

const Navbar = () => {
  return (
      <AppBar position="static" color="transparent" >
        <Toolbar sx={{justifyContent: 'flex-end',}} >
          <NormalButton animate={`${moveIn} 0.5s ease-in`} >About</NormalButton>
          <NormalButton animate={`${moveIn} 0.5s ease-in`} >Experience</NormalButton>
          <NormalButton animate={`${moveIn} 0.5s ease-in`} >Projects</NormalButton>
          <NormalButton animate={`${moveIn} 0.5s ease-in`} >Contact</NormalButton>
          <CustomButton sx={{animate:`${moveIn} 0.5s ease-in`}} >Resume</CustomButton>
        </Toolbar>
      </AppBar>
  );
};

export default Navbar;
