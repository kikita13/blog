import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { LINKS } from "../consts/links";
import { DRAWERWIDTH } from "../consts/width";
import { Props } from "../model/props";
import { NavDrawerContent } from "./NavDrawerContent";


export const NavDrawer = (props: Props) => {
  return (
    <Drawer
    container={props.container}
    variant="temporary"
    open={props.mobileOpen}
    onClose={props.handleDrawerToggle}
    ModalProps={{
      keepMounted: true
    }}
    sx={{
      display: { xs: "block", sm: "none" },
      "& .MuiDrawer-paper": {
        boxSizing: "border-box",
        width: DRAWERWIDTH,
      },
    }}
  >          
    <NavDrawerContent
      props={props}
    />
  </Drawer>
  );
};


