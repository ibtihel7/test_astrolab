import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';
import {  Select } from "@material-ui/core";
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import AppsIcon from '@material-ui/icons/Apps';
import ReorderIcon from '@material-ui/icons/Reorder';


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  root: {
    width: 500,
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  }

}));

export default function Navbar2() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [grid, setGrid] = React.useState(0);

    const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };


  

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      // open={isMobileMenuOpen}
      // onClose={handleMobileMenuClose}
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
  );
 
  return ( <div className={classes.grow} >
      <AppBar position="static" color ="rgb(255,255,255)">
        <Toolbar>
          
        <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="To buy"  />
      <BottomNavigationAction label="Bought" />
      </BottomNavigation>
             <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
 
          <BottomNavigation
      value={grid}
      onChange={(event, newValue) => {
        setGrid(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Grid"    icon={<AppsIcon />} />
      <BottomNavigationAction label="List" icon={<ReorderIcon />} />

      </BottomNavigation>
          </div>
          
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>

  );
}























