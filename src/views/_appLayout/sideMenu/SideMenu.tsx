import { NavLink } from "react-router-dom";

import AllInboxIcon from "@mui/icons-material/AllInbox";
import SettingsIcon from "@mui/icons-material/Settings";
import TableRowsIcon from "@mui/icons-material/TableRows";
import { Box, Divider, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Toolbar } from "@mui/material";

export function SideMenu(props: { drawerWidth: number; isMobile: boolean; onMenuToggle: () => void }) {
  return (
    <Box component="nav" sx={{ width: { sm: props.drawerWidth }, flexShrink: { sm: 0 } }} aria-label="mailbox folders">
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        container={window.document.body}
        variant="temporary"
        open={props.isMobile}
        onClose={props.onMenuToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: props.drawerWidth,
          },
        }}
      >
        <MenuLinks />
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: props.drawerWidth,
          },
        }}
        open
      >
        <MenuLinks />
      </Drawer>
    </Box>
  );
}

function MenuLinks() {
  return (
    <div>
      <Toolbar>GulinTech</Toolbar>
      <Divider />
      <List>
        <CustomLink to="portfolio" text="Portfolio" icon={<AllInboxIcon />} />
        <CustomLink to="logs" text="Logs" icon={<TableRowsIcon />} />
      </List>
      <Divider />
      <List>
        <CustomLink to="user_settings" text="User settings" icon={<SettingsIcon />} />
      </List>
    </div>
  );
}

function CustomLink(props: { to: string; text: string; icon: any }) {
  return (
    <NavLink to={props.to}>
      {({ isActive }) => (
        <ListItemButton selected={isActive}>
          <ListItemIcon>
            <>{props.icon}</>
          </ListItemIcon>
          <ListItemText primary={props.text} />
        </ListItemButton>
      )}
    </NavLink>
  );
}
