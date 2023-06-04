import { IconButton, List, ListItem, SwipeableDrawer } from "@mui/material";
import { useState } from "react";
import CustomButton from "../CustomButton";
import NormalButton from "../NormalButton";
import { Menu as MenuIcon } from "@mui/icons-material";
import { moveIn } from "./Navbar";

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
        <CustomButton sx={{ margin: "0", animate: `${moveIn} 0.5s ease-in` }}>
          <MenuIcon />
        </CustomButton>
      </IconButton>
      <SwipeableDrawer
        anchor="top"
        open={open}
        onClose={() => setOpen(false)}
        elevation={0}
        transitionDuration={{ appear: 500, enter: 500, exit: 500 }}
      >
        <List>
          <ListItem sx={{ padding: "0.5rem", justifyContent: "center" }}>
            <NormalButton>About</NormalButton>
          </ListItem>
          <ListItem sx={{ padding: "0.5rem", justifyContent: "center" }}>
            <NormalButton>Experience</NormalButton>
          </ListItem>
          <ListItem sx={{ padding: "0.5rem", justifyContent: "center" }}>
            <NormalButton>Projects</NormalButton>
          </ListItem>
          <ListItem sx={{ padding: "0.5rem", justifyContent: "center" }}>
            <NormalButton>Contact</NormalButton>
          </ListItem>
        </List>
      </SwipeableDrawer>
    </>
  );
};

export default DrawerContent;