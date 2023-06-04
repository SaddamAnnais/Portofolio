import TextAnimation from "@/components/TextAnimation";
import { publicPixel } from "@/font/font";
import { Box, Typography } from "@mui/material";
import { useState } from "react";

const TextBanner = () => {
  const [status1, setStatus1] = useState(false);
  const [status2, setStatus2] = useState(false);
  const [status3, setStatus3] = useState(false);
  const [status4, setStatus4] = useState(false);

  return (
    <>
      <Typography
        sx={{ typography: { sm:  "h6", lg: "h5" } }}
        component="h1"
        color="primary.main"
      >
        <TextAnimation
          text="Hi there,"
          start={true}
          finished={() => setStatus1(true)}
        />
      </Typography>
      {/* <Box > */}
        <Typography
          color="background.default"
          sx={{ typography: { sm:  "h6", lg: "h5" } }}
          component="h2"
          className={publicPixel.className}
          bgcolor={status1 ? "primary.main" : "transparent"} py={1} px={2}
        >
          <TextAnimation
            text="I'm Saddam Annais"
            start={status1}
            finished={() => setStatus2(true)}
          />
        </Typography>
      {/* </Box> */}
      <Typography
        color={status2 ? "primary.main" : "transparent"}
        sx={{ typography: { sm:  "h6", lg: "h5" } }}
        component="h3"
      >
        &#x2022;
        <TextAnimation
          text=" Computer Science Student"
          start={status2}
          finished={() => setStatus3(true)}
        />
      </Typography>
      <Typography
        color={status3 ? "primary.main" : "transparent"}
        sx={{ typography: { sm:  "h6", lg: "h5" } }}
        component="h3"
      >
        &#x2022;
        <TextAnimation
          text=" Software Engineer"
          start={status3}
          finished={() => setStatus4(true)}
        />
      </Typography>
    </>
  );
};

export default TextBanner;
