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

export const Nav = (props: { window: Window }) => {
  const { window } = props;
  const container = window !== undefined ? () => window.document.body : undefined;
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
      <Box>
        <AppBar component="nav">
          <NavToolbar
            container={container}
            handleDrawerToggle={handleDrawerToggle}
            mobileOpen={mobileOpen}
          />
        </AppBar>
        <Box component="nav">
          <NavDrawer
            container={container}
            handleDrawerToggle={handleDrawerToggle}
            mobileOpen={mobileOpen}
          />
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


