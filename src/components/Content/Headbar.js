import { publicPixel } from "@/font/font";
import { Box, Grid, Stack, Typography } from "@mui/material";

const Headbar = () => {
  return (
    <Grid
      container
      spacing={2}
      maxWidth={{ xs: "100%", md: "85%", lg: "70%" }}
      margin="auto"
      mt="10rem"
    >
      <Grid item xs={7}>
        <Stack
          spacing={1}
          direction="column"
          alignItems="flex-start"
          justifyContent="center"
        >
          <Typography variant="h5" component="h1" color="primary.main">
            Hi there,
          </Typography>
          <Box bgcolor="primary.main" py={1} px={2}>
            <Typography
              color="background.default"
              variant="h5"
              component="h2"
              className={publicPixel.className}
            >
              I'm Saddam Annais
            </Typography>
          </Box>
          <Typography color="primary.main" variant="h5" component="h3">
            &#x2022; Computer Science Student
            <br />
            &#x2022; Software Engineer
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={5}>
        Test Img
      </Grid>
    </Grid>
  );
};

export default Headbar;
