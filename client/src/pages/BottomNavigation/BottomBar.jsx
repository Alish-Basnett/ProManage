import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Menu,
  MenuItem,
  Divider,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import GroupIcon from "@mui/icons-material/Group";
import FilterListIcon from "@mui/icons-material/FilterList";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu"; // Import Menu icon
import LeftBar from "../LeftBar/LeftBar";
import "./BottomBar.css";

const BottomBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [leftBarOpen, setLeftBarOpen] = useState(false);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setLeftBarOpen(open);
  };

  return (
    <>
      <AppBar position="static" color="default" className="bottom-bar">
        <Toolbar>
          <div className="left-section">
            <IconButton onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className="project-name">
              Project Name
            </Typography>
            <IconButton>
              <StarIcon />
            </IconButton>
            <IconButton>
              <GroupIcon />
            </IconButton>
            <Button endIcon={<ArrowDropDownIcon />}>Board</Button>
          </div>
          <div className="right-section">
            <IconButton>
              <FilterListIcon />
            </IconButton>
            <Button>Filter</Button>
            <Divider orientation="vertical" flexItem />
            <IconButton>
              <GroupIcon />
            </IconButton>

            <Button endIcon={<ShareIcon />}>Share</Button>
            <IconButton onClick={handleMenuOpen}>
              <MoreVertIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              keepMounted
            >
              <MenuItem onClick={handleMenuClose}>Menu Item 1</MenuItem>
              <MenuItem onClick={handleMenuClose}>Menu Item 2</MenuItem>
              <MenuItem onClick={handleMenuClose}>Menu Item 3</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <LeftBar open={leftBarOpen} toggleDrawer={toggleDrawer} />
    </>
  );
};

export default BottomBar;
