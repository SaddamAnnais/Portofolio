import { Box, Typography } from "@mui/material";

export const TabPanel = (props) => {
  const { children, value, index, title, duration, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ px: 3, py: { xs: 3, sm: 0 } }}>
          <Typography component="h3" typography={{ xs: "h6", sm: "h5" }}>
            {title}
          </Typography>
          <Typography
            component="p"
            typography={{ xs: "h7", sm: "h6" }}
            color="primary.light"
          >
            {duration}
          </Typography>
          <Typography p={1} component="p" color="primary.light">
            {children}
          </Typography>
        </Box>
      )}
    </div>
  );
};
