import { Toolbar, IconButton, Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { LINKS } from "../consts/links";
import MenuIcon from "@mui/icons-material/Menu";

export const NavToolbar = ({ handleDrawerToggle }: any) => {
  return (
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={ handleDrawerToggle }
        sx={{ mr: 2, display: { sm: "none" } }}
      >
        <MenuIcon />
      </IconButton>
      <Typography
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
      >
        KEKET.INK
      </Typography>
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        {LINKS.map((link) => (
          <Link key={link.url} className="link" to={link.url}>
            <Button sx={{ color: "#fff" }}>{link.title}</Button>
          </Link>
        ))}
      </Box>
    </Toolbar>
  );
};
