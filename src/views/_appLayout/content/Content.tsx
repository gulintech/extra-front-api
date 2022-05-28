import { Box, Toolbar } from "@mui/material";

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
      REPLACE ME WITH ROUTE CONTENT
    </Box>
  );
}
