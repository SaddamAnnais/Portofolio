import { Box } from "@mui/material";
import CustomButton from "./CustomButton";
import GitHubIcon from "@mui/icons-material/GitHub";

const SocialSidebar = () => {
  return (
    <Box position="sticky" bottom="0">
      <CustomButton
        sx={{ height: "2.5rem", width: "3rem", padding: "0.2rem" }}
        onClick={() => window.open("https://github.com/SaddamAnnais/")}
      >
        <GitHubIcon sx={{ height: "2rem", width: "2rem", margin: 0 }} />
      </CustomButton>
    </Box>
  );
};

export default SocialSidebar;
