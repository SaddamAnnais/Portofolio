import { Box } from "@mui/material";
import CustomButton from "../CustomButton";
import NormalButton from "../NormalButton";
import { Link } from "react-scroll";

const ListItemContent = () => (
  <Box sx={{ display: { xs: "none", sm: "block" } }}>
    <Link to="about">
      <NormalButton>About</NormalButton>
    </Link>
    <Link to="experience">
    <NormalButton>Experience</NormalButton>
    </Link>
    <NormalButton>Projects</NormalButton>
    <NormalButton>Contact</NormalButton>
    <CustomButton>Resume</CustomButton>
  </Box>
);

export default ListItemContent;
