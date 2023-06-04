import {
  AppBar,
  Toolbar,
  IconButton,
  List,
  ListItem,
  keyframes,
  Box,
  SwipeableDrawer,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import NormalButton from "./NormalButton";
import CustomButton from "./CustomButton";
import { useState } from "react";

const moveIn = keyframes`
  from {
    transform: translate(0px, -50%);
    opacity: 0;
  }
  to {
    transform: translate(0px, 0px);
    opacity: 1;
  }
`;

const Navbar = () => {
  const DrawerContent = () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <IconButton
          edge="start"
          aria-label="menu"
          sx={{ display: { xs: "block", sm: "none" }, color: "primary.main" }}
          onClick={() => setOpen(true)}
          component="div"
        >
          <CustomButton sx={{margin:"0", animate:`${moveIn} 0.5s ease-in`}}>
            <MenuIcon />
          </CustomButton>
        </IconButton>
        <SwipeableDrawer
          anchor="right"
          open={open}
          onClose={() => setOpen(false)}
          elevation={0}
          transitionDuration={{ appear: 500, enter: 500, exit: 500 }}
          PaperProps={{
            sx: { width: "35%" },
          }}
        >
          <List>
            <ListItem sx={{ padding: "0.5rem" }}>
              <NormalButton>About</NormalButton>
            </ListItem>
            <ListItem sx={{ padding: "0.5rem" }}>
              <NormalButton>Experience</NormalButton>
            </ListItem>
            <ListItem sx={{ padding: "0.5rem" }}>
              <NormalButton>Projects</NormalButton>
            </ListItem>
            <ListItem sx={{ padding: "0.5rem" }}>
              <NormalButton>Contact</NormalButton>
            </ListItem>
          </List>
        </SwipeableDrawer>
      </>
    );
  };
  const ListItemContent = () => (
    <Box sx={{ display: { xs: "none", sm: "block" } }}>
      <NormalButton animate={`${moveIn} 0.5s ease-in`}>About</NormalButton>
      <NormalButton animate={`${moveIn} 0.5s ease-in`}>Experience</NormalButton>
      <NormalButton animate={`${moveIn} 0.5s ease-in`}>Projects</NormalButton>
      <NormalButton animate={`${moveIn} 0.5s ease-in`}>Contact</NormalButton>
      <CustomButton sx={{ animate: `${moveIn} 0.5s ease-in` }}>
        Resume
      </CustomButton>
    </Box>
  );

  return (
    <AppBar position="static" color="transparent" elevation={0} component="nav">
      <Toolbar sx={{ justifyContent: "flex-end" }}>
        <ListItemContent />
        <DrawerContent />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
