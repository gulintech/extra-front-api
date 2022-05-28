import { useState } from "react";

import { ThemeProvider } from "@mui/material";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import { Content } from "./content/Content";
import { SideMenu } from "./sideMenu/SideMenu";
import { darkTheme, lightTheme } from "./themes";
import { Topbar } from "./topbar/Topbar";

const drawerWidth = 300;

export function AppLayout() {
  const [isMobile, setIsMobile] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const handleDrawerToggle = () => {
    setIsMobile(!isMobile);
  };

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Topbar drawerWidth={drawerWidth} onMenuToggle={handleDrawerToggle} />
        <SideMenu drawerWidth={drawerWidth} isMobile={isMobile} onMenuToggle={handleDrawerToggle} />
        <Content drawerWidth={drawerWidth} />
      </Box>
    </ThemeProvider>
  );
}
