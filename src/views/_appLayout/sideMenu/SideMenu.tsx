import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import SettingsIcon from "@mui/icons-material/Settings";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";

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
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary={"User settings"} />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );
}
