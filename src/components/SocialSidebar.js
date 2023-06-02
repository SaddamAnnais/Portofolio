import CustomButton from "./CustomButton";
import GitHubIcon from "@mui/icons-material/GitHub";

const SocialSidebar = () => {
  return (
    <CustomButton sx={{height: "2.5rem", width: "3rem", padding: "0.2rem"}}>
      <GitHubIcon sx={{height: "2rem", width: "2rem", margin: 0}} />
    </CustomButton>
  );
};

export default SocialSidebar;
