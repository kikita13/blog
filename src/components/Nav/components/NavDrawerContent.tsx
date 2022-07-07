import { Box, Divider, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { LINKS } from "../consts/links";
import { Props } from "../model/props";

export const NavDrawerContent = ({props}: {props: Props}) => {
  return (
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
};
