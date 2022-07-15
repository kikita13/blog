import { Drawer } from "@mui/material";
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


