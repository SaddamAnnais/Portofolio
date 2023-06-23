import { IconButton, List, ListItem, SwipeableDrawer } from "@mui/material";
import { useState } from "react";
import CustomButton from "../CustomButton";
import NormalButton from "../NormalButton";
import { Menu as MenuIcon } from "@mui/icons-material";
import { Link } from "react-scroll";

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
        <CustomButton sx={{ margin: "0" }}>
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
            <Link to="about">
              <NormalButton onClick={() => setOpen(false)}>About</NormalButton>
            </Link>
          </ListItem>
          <ListItem sx={{ padding: "0.5rem", justifyContent: "center" }}>
            <Link to="experience">
              <NormalButton onClick={() => setOpen(false)}>Experience</NormalButton>
            </Link>
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
