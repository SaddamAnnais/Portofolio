import { Grid, Stack } from "@mui/material";
import PhotoPixel from "./PhotoPixel";
import TextBanner from "./TextBanner";

const Headbar = () => {
  return (
    <Grid
      container
      spacing={2}
      columns={15}
      maxWidth={{xs: "90%", md: "80%", lg: "70%" }}
      mt={{xs:"3rem", sm: "4rem", md: "5rem"}}
      mb={{xs: "9rem", sm: "10rem", md: "20rem"}}
      wrap="wrap-reverse"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item md={9} lg={10}>
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
      <Grid item md={6} lg={5} >
        <PhotoPixel />
      </Grid>
    </Grid>
  );
};

export default Headbar;
