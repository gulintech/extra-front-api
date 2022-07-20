import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Breadcrumbs, IconButton, Toolbar, Typography } from "@mui/material";

export function Topbar(props: { drawerWidth: number; onMenuToggle: () => void }) {
  let location = useLocation();
  const [currentPageName, setCurrentPageName] = useState<string>("");

  useEffect(() => {
    const newLoc = location.pathname.replaceAll("/", "").replaceAll("_", " ");
    if (newLoc) {
      setCurrentPageName(newLoc[0].toUpperCase() + newLoc.substring(1));
    }
  }, [location]);

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${props.drawerWidth}px)` },
        ml: { sm: `${props.drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={props.onMenuToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          <Breadcrumbs>
            <Typography color="text.primary" sx={{ fontVariant: "small-caps" }}>
              App
            </Typography>
            <Typography color="text.primary" sx={{ fontVariant: "small-caps" }}>
              {currentPageName}
            </Typography>
          </Breadcrumbs>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
