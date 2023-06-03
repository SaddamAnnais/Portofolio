import CustomH2 from "@/components/CustomH2";
import { Stack, Typography } from "@mui/material";
import LanguangeTools from "./LanguageTools";

const About = () => {
  return (
    <Stack maxWidth={{ xs: "100%", md: "85%", lg: "70%" }}>
      <CustomH2>About Me</CustomH2>
      <Typography color="primary.light" variant="h6" component="p" >
        My name is Saddam Annais Shaquille and I'm a third year informatics
        engineering student at Bandung Institute of Technology. I’m interested
        in software engineering, web development, data analysis, and artificial
        intelligence. Passionate about using technology to solve real-world
        problems. <br /> <br />
        Here are some languages and tools I've used in my 3+ years of coding
        experience, along with my coding activities.
      </Typography>
      <LanguangeTools />
    </Stack>
  );
};

export default About;
