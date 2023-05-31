import { chillPixel } from "@/font/font";
import { AppBar, Box, Button, Toolbar, Typography, useTheme } from "@mui/material";
import NormalButton from "./NormalButton";

const Navbar = () => {
  const theme = useTheme();

  return (
    <Box sx={{ flexGrow: 1 }}  >
      <AppBar position="static" color="transparent" >
        <Toolbar >
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <NormalButton>123</NormalButton>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
