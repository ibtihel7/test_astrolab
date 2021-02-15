import React, { Component } from "react";
import { Link } from "react-router-dom";
import AppNavbar from "./AppNavbar";
import Navbar1 from "./Navbar1";
import Navbar2 from "./Navbar2";
import Navv from "./navv";
import SidebarWishlist from "./SidebarWishlist";
import SidebarProductList from "./SidebarProductList";
import FormDialogAddWishList from "./FormDialogAddWishList";
import FormDialogAddProduct from "./FormDialogAddProduct";

class Home extends Component {
  state = {
    showSidebarWishlist: true,
    showSidebarProductList: false,
  };

  hideComponent = (name) => {
    switch (name) {
      case "showSidebarWishlist":
        this.setState({
          showSidebarWishlist: !this.state.showSidebarWishlist,
          showSidebarProductList: !this.state.showSidebarProductList,
        });
        break;
      case "showSidebarProductList":
        this.setState({
          showSidebarProductList: !this.state.showSidebarProductList,
          showSidebarWishlist: !this.state.showSidebarWishlist,
        });
        break;
      default:
    }
  };

  render() {
    const { showSidebarWishlist, showSidebarProductList } = this.state;
    return (
      <div className="home-container">
        <header>
          <AppNavbar hideComponent={this.hideComponent} />
        </header>
        {showSidebarWishlist && <FormDialogAddWishList />}{" "}
        {showSidebarWishlist && <SidebarWishlist />}
        {showSidebarProductList && <FormDialogAddProduct />}{" "}
        {showSidebarProductList && <SidebarProductList />}
        <Navbar1 />
        <Navbar2 />
        {/* <Navv/> */}
      </div>
    );
  }
}

export default Home;
