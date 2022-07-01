import { List, ListItem, ListItemButton, ListItemText } from "@mui/material"
import { Link } from "react-router-dom"
import { LINKS } from "../consts/links"


export const NavList = () => {
  return(
    <List>
    {LINKS.map((link) => (
      <Link 
        key={link.url} 
        className="link" 
        to={link.url}>
        <ListItem disablePadding>
          <ListItemButton 
            sx={{ 
              textAlign: "center" }}>
            <ListItemText 
              primary={link.title} />
          </ListItemButton>
        </ListItem>
      </Link>
    ))}
  </List>
  )
}