import React, { Component } from "react";
import { Link } from "react-router-dom";
import AppNavbar from './AppNavbar'
import Navbar1 from "./Navbar1";
import Navbar2 from "./Navbar2";
import Navv from './navv'
import SidebarWishlist from "./SidebarWishlist";
import SidebarProductList from './SidebarProductList'
import FormDialogAddWishList from "./FormDialogAddWishList";
import FormDialogAddProduct from "./FormDialogAddProduct";

class Home extends Component {
  render() {
    return (
      <div className="home-container">
     <header><AppNavbar/></header>   
     
          <FormDialogAddWishList />
          <SidebarWishlist />

          <FormDialogAddProduct />
<SidebarProductList/>
     <Navbar1 />
        <Navbar2 />
{/* <Navv/> */}
      </div>
    );
  }
}

export default Home;
