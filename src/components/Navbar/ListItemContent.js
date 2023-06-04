import { Box } from "@mui/material";
import CustomButton from "../CustomButton";
import NormalButton from "../NormalButton";


const ListItemContent = () => (
  <Box sx={{ display: { xs: "none", sm: "block" } }}>
    <NormalButton >About</NormalButton>
    <NormalButton >Experience</NormalButton>
    <NormalButton >Projects</NormalButton>
    <NormalButton >Contact</NormalButton>
    <CustomButton >
      Resume
    </CustomButton>
  </Box>
);

export default ListItemContent;