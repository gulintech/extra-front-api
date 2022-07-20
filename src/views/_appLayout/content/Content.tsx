import { Route, Routes } from "react-router-dom";

import { Box, Toolbar } from "@mui/material";

import { Dashboard } from "../../dashboard/Dashboard";
import { Logs } from "../../logs/Logs";
import { Portfolio } from "../../portfolio/Portfolio";

export function Content(props: { drawerWidth: number }) {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        width: { sm: `calc(100% - ${props.drawerWidth}px)` },
      }}
    >
      <Toolbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="logs" element={<Logs />} />
        <Route path="portfolio" element={<Portfolio />} />
      </Routes>
    </Box>
  );
}
