import { useState } from "react";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import { Content } from "./content/Content";
import { SideMenu } from "./sideMenu/SideMenu";
import { Topbar } from "./topbar/Topbar";

const drawerWidth = 300;

export function AppLayout() {
  const [isMobile, setIsMobile] = useState(false);

  const handleDrawerToggle = () => {
    setIsMobile(!isMobile);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Topbar drawerWidth={drawerWidth} onMenuToggle={handleDrawerToggle} />
      <SideMenu drawerWidth={drawerWidth} isMobile={isMobile} onMenuToggle={handleDrawerToggle} />
      <Content drawerWidth={drawerWidth} />
    </Box>
  );
}
