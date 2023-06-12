import CustomH2 from "@/components/CustomH2";
import { Box, Stack, Typography } from "@mui/material";
import LanguangeTools from "./LanguageTools";
import GitHubCalendar from "react-github-calendar";
import { Fade } from "react-reveal";

const About = () => {
  return (
    <Stack
      maxWidth={{ xs: "90%", md: "80%", lg: "70%" }}
      justifyContent="center"
      alignItems="center"
      color="primary.main"
    >
      <Fade top>
        <CustomH2>About Me</CustomH2>
        <Typography
          color="primary.light"
          sx={{ typography: { sm: "h7", lg: "h6" } }}
          component="p"
          align="justify"
        >
          My name is Saddam Annais Shaquille and I'm a third year informatics
          engineering student at Bandung Institute of Technology. I’m interested
          in software engineering, web development, data analysis, and
          artificial intelligence. Passionate about using technology to solve
          real-world problems. <br /> <br />
          Here are some languages and tools I've used in my 3+ years of coding
          experience, along with my coding activities.
        </Typography>
        <LanguangeTools />
        <Box width={{ xs: "90vw", md: "80vw", lg: "70vw" }} sx={{overflowX:"auto"}}>
          <GitHubCalendar
            username="SaddamAnnais"
            blockSize={15}
            blockMargin={5}
            style={{
              minWidth: "40rem",
              marginTop: "3rem",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            theme={{
              background: "transparent",
              light: ["#0c2436", "#ffffff"],
              dark: ["#0c2436", "#ffffff"],
            }}
          />
        </Box>
      </Fade>
    </Stack>
  );
};

export default About;
