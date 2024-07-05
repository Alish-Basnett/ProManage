import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import { Dashboard, Group, Settings } from "@mui/icons-material";
import "./LeftBar.css";

const LeftBar = ({ open, toggleDrawer }) => {
  return (
    <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
      <div
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
        className="leftbar-container"
      >
        <List className="leftbar-list">
          <ListItem className="leftbar-list-items">
            <ListItemIcon className="leftbar-list-icon">
              <Dashboard />
            </ListItemIcon>
            <ListItemText primary="Boards" />
          </ListItem>
          <ListItem className="leftbar-list-items">
            <ListItemIcon className="leftbar-list-icon">
              <Group />
            </ListItemIcon>
            <ListItemText primary="Members" />
          </ListItem>
          <ListItem className="leftbar-list-items">
            <ListItemIcon className="leftbar-list-icon">
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Workspace Settings" />
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
};

export default LeftBar;
