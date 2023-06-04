import { Box } from "@mui/material";
import CustomButton from "../CustomButton";
import { moveIn } from "./Navbar";
import NormalButton from "../NormalButton";


const ListItemContent = () => (
  <Box sx={{ display: { xs: "none", sm: "block" } }}>
    <NormalButton animate={`${moveIn} 0.5s ease-in`}>About</NormalButton>
    <NormalButton animate={`${moveIn} 0.5s ease-in`}>Experience</NormalButton>
    <NormalButton animate={`${moveIn} 0.5s ease-in`}>Projects</NormalButton>
    <NormalButton animate={`${moveIn} 0.5s ease-in`}>Contact</NormalButton>
    <CustomButton sx={{ animate: `${moveIn} 0.5s ease-in` }}>
      Resume
    </CustomButton>
  </Box>
);

export default ListItemContent;