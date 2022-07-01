import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { LINKS } from "../consts/links";
import { DRAWERWIDTH } from "../consts/width";
import { Props } from "../model/props";


export const NavDrawer = ({props}: {props: Props}) => {


  const drawer = (
    <Box onClick={props.handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Keket.ink
      </Typography>
      <Divider />
      <List>
        {LINKS.map((link) => (
          <Link key={link.url} className="link" to={link.url}>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={link.title} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );
  
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
  {drawer}
  </Drawer>
  );
};

