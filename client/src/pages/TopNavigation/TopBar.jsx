import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Menu,
  MenuItem,
  Badge,
} from "@mui/material";
import {
  Search as SearchIcon,
  Notifications as NotificationsIcon,
  AccountCircle,
  ArrowDropDown as ArrowDropDownIcon,
  HelpOutline as HelpOutlineIcon,
} from "@mui/icons-material";
import "./TopBar.css";
import logo from "../../assets/images/no_bg_black_logo.png";

const TopBar = () => {
  const [anchorElRecent, setAnchorElRecent] = useState(null);
  const [anchorElStarred, setAnchorElStarred] = useState(null);
  const [anchorElTemplate, setAnchorElTemplate] = useState(null);
  const [anchorElNotifications, setAnchorElNotifications] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleMenuOpen = (event, setAnchor) => {
    setAnchor(event.currentTarget);
  };

  const handleMenuClose = (setAnchor) => {
    setAnchor(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <div className="topnav-logo">
          <Link to={"/dashboard"}>
            <img src={logo} alt="ProManage Logo" width={"86px"} />
          </Link>
        </div>
        <div className="nav-section">
          <Typography
            variant="button"
            onClick={(e) => handleMenuOpen(e, setAnchorElRecent)}
          >
            Recent <ArrowDropDownIcon />
          </Typography>
          <Menu
            anchorEl={anchorElRecent}
            open={Boolean(anchorElRecent)}
            onClose={() => handleMenuClose(setAnchorElRecent)}
          >
            <MenuItem onClick={() => handleMenuClose(setAnchorElRecent)}>
              Option 1
            </MenuItem>
            <MenuItem onClick={() => handleMenuClose(setAnchorElRecent)}>
              Option 2
            </MenuItem>
          </Menu>

          <Typography
            variant="button"
            onClick={(e) => handleMenuOpen(e, setAnchorElStarred)}
          >
            Starred <ArrowDropDownIcon />
          </Typography>
          <Menu
            anchorEl={anchorElStarred}
            open={Boolean(anchorElStarred)}
            onClose={() => handleMenuClose(setAnchorElStarred)}
          >
            <MenuItem onClick={() => handleMenuClose(setAnchorElStarred)}>
              Option 1
            </MenuItem>
            <MenuItem onClick={() => handleMenuClose(setAnchorElStarred)}>
              Option 2
            </MenuItem>
          </Menu>

          <Typography
            variant="button"
            onClick={(e) => handleMenuOpen(e, setAnchorElTemplate)}
          >
            Template <ArrowDropDownIcon />
          </Typography>
          <Menu
            anchorEl={anchorElTemplate}
            open={Boolean(anchorElTemplate)}
            onClose={() => handleMenuClose(setAnchorElTemplate)}
          >
            <MenuItem onClick={() => handleMenuClose(setAnchorElTemplate)}>
              Option 1
            </MenuItem>
            <MenuItem onClick={() => handleMenuClose(setAnchorElTemplate)}>
              Option 2
            </MenuItem>
          </Menu>
        </div>
        <div className="nav-section right">
          <div className="search">
            <InputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
            <IconButton type="submit" aria-label="search">
              <SearchIcon />
            </IconButton>
          </div>
          <IconButton
            aria-label="show notifications"
            onClick={(e) => handleMenuOpen(e, setAnchorElNotifications)}
          >
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Menu
            anchorEl={anchorElNotifications}
            open={Boolean(anchorElNotifications)}
            onClose={() => handleMenuClose(setAnchorElNotifications)}
          >
            <MenuItem onClick={() => handleMenuClose(setAnchorElNotifications)}>
              Notification 1
            </MenuItem>
            <MenuItem onClick={() => handleMenuClose(setAnchorElNotifications)}>
              Notification 2
            </MenuItem>
          </Menu>
          <IconButton aria-label="help">
            <HelpOutlineIcon />
          </IconButton>
          <IconButton
            edge="end"
            aria-label="account of current user"
            onClick={(e) => handleMenuOpen(e, setAnchorElUser)}
          >
            <AccountCircle />
          </IconButton>
          <Menu
            anchorEl={anchorElUser}
            open={Boolean(anchorElUser)}
            onClose={() => handleMenuClose(setAnchorElUser)}
          >
            <MenuItem onClick={() => handleMenuClose(setAnchorElUser)}>
              Settings
            </MenuItem>
            <MenuItem onClick={() => handleMenuClose(setAnchorElUser)}>
              <Link to="/"> Log Out</Link>
            </MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
