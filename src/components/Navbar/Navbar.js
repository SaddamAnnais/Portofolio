import { AppBar, Toolbar, debounce, keyframes } from "@mui/material";
import DrawerContent from "./DrawerContent";
import ListItemContent from "./ListItemContent";
import { useState, useEffect } from "react";


const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = debounce(() => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    }, 0);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

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

  return (
    <AppBar
      sx={{
        backdropFilter: "blur(5px)",
        WebkitBackdropFilter: "blur(5px)",
        bgcolor: "transparent",
        animation: `${moveIn} 0.2s`,
        transform: visible ? "translateY(0)" : "translateY(-100%)",
        transition: "transform 0.35s",
      }}
      color="transparent"
      elevation={0}
      component="nav"
      position="sticky"
    >
      <Toolbar sx={{ justifyContent: "flex-end", bgcolor: "secondary.main" }}>
        <ListItemContent />
        <DrawerContent />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;