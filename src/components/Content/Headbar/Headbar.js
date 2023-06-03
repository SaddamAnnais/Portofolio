import { Grid, Stack } from "@mui/material";
import PhotoPixel from "./PhotoPixel";
import TextBanner from "./TextBanner";

const Headbar = () => {
  return (
    <Grid
      container
      spacing={2}
      maxWidth={{ xs: "100%", md: "85%", lg: "70%" }}
      mt="5rem"
      mb="20rem"
    >
      <Grid item xs={8}>
        <Stack
          spacing={1}
          direction="column"
          alignItems="flex-start"
          justifyContent="center"
          height="100%"
        >
          <TextBanner />
        </Stack>
      </Grid>
      <Grid item xs={4} >
        <PhotoPixel />
      </Grid>
    </Grid>
  );
};

export default Headbar;
