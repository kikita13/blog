import { AppBar, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import { Posts } from "../Posts/Posts";
import { Users } from "../Users/Users";
import { Props } from "./model/props";
import { NavDrawer } from "./components/NavDrawer";
import { NavToolbar } from "./components/NavToolbar";

export const Nav: any = (props: Props) => {
  const { window } = props;
  const container = window !== undefined ? () => window().document.body : undefined;
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const prop = {
    container,
    handleDrawerToggle,
    mobileOpen
  }

  return (
      <Box>
        <AppBar component="nav">
          <NavToolbar props={prop}/>
        </AppBar>
        <Box component="nav">
          <NavDrawer props={prop}/>
        </Box>
        <Box>
        <Toolbar />
        <Routes>
          <Route path="posts/*" element={<Posts />}></Route>
          <Route path="users/*" element={<Users />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
        </Box>
      </Box>
  );
};


