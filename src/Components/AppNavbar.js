import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import InsertDriveFileOutlinedIcon from "@material-ui/icons/InsertDriveFileOutlined";
import { Select } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    border :'1px'

  },
  root: {
    width: 500,
  },
  sectionNav: {
    display: "flex",
  },
}));

export default function AppNavbar(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  let history = useHistory();
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const logout = () => {
    setLoggedIn(false);
    history.push("/logout");
  };

  const renderMenu = (
    <Grid item md={4} xs={12}>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={logout}>Sign out</MenuItem>
      </Menu>
    </Grid>
  );

  const renderMobileMenu = (
    <Grid item md={8} xs={12}>
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
        <MenuItem onClick={handleProfileMenuOpen}>
          <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            // color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </MenuItem>
      </Menu>
    </Grid>
  );

  if ({ loggedIn } === false) {
    return <Redirect to="/logout" />;
  }

  return (
    <div className={classes.grow}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            showLabels
            className={classes.root}
          >
            <BottomNavigationAction
              label="My Wishlists"
              onClick={() => props.hideComponent("showSidebarWishlist")}
              icon={<FavoriteBorderIcon />}
            />
            <BottomNavigationAction
              label="My products"
              onClick={() => props.hideComponent("showSidebarProductList")}
              icon={<InsertDriveFileOutlinedIcon />}
            />
          </BottomNavigation>
          <div className={classes.grow} />
          <div className={classes.sectionNav}>
            <IconButton
              aria-label="account of current user"
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Select
              style={{
                color: "rgb(0, 0, 0)",
                fontSize: 15,
                border: "none",
              }}
            >
              <MenuItem value="TND">TND</MenuItem>
              <MenuItem value="USD">USD</MenuItem>
              <MenuItem value="EURO">EURO</MenuItem>
            </Select>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
