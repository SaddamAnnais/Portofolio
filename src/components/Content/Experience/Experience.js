import CustomH2 from "@/components/CustomH2";
import { Box, Grid, Stack, Tab, Tabs, styled } from "@mui/material";
import { useState } from "react";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";
import { TabPanel } from "./TabContent/TabPanel";
import { MizanAmanah } from "./TabContent/MizanAmanah";
import { OJK } from "./TabContent/OJK";
import { MPI } from "./TabContent/MPI";

const StyledTab = styled((props) => (
  <Tab
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    disableRipple
  />
))(({ theme }) => ({
  color: theme.palette.primary.light,
  "&.Mui-selected": {
    color: theme.palette.primary.main,
    textShadow: "0 0 1px white",
  },
}));

const Experience = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Stack
      width={{ xs: "90%", md: "80%", lg: "70%" }}
      alignItems="center"
      color="primary.main"
      pt="5rem"
      minHeight="50rem"
      id = "experience"
    >
      <CustomH2>My Experience</CustomH2>
      <Grid container>
        <Grid item xs={12} sm={3} md={2}>
          <Box
            display={isSmallScreen ? "flex" : ""}
            justifyContent={isSmallScreen ? "center" : ""}
            alignItems={isSmallScreen ? "center" : ""}
            height="100%"
            width="100%"
          >
            <Tabs
              orientation={isSmallScreen ? "horizontal" : "vertical"}
              variant="scrollable"
              value={value}
              onChange={handleChange}
              sx={{
                borderRight: { xs: "none", sm: "1px solid" },
                borderBottom: {
                  xs: `4px solid ${theme.palette.background.paper}`,
                  sm: "none",
                },
              }}
              allowScrollButtonsMobile
            >
              <StyledTab label="Medco Power" />
              <StyledTab label="Mizan Amanah" />
              <StyledTab label="OJK" />
            </Tabs>
          </Box>
        </Grid>
        <Grid item xs={12} sm={9} md={10} color="primary.main">
            <MPI value={value} />
          <MizanAmanah value={value} />
          <OJK value={value}/>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Experience;
