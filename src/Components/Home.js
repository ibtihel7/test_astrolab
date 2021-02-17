import React, { Component } from "react";
import AppNavbar from "./AppNavbar";
import Navbar1 from "./Navbar1";
import Navbar2 from "./Navbar2";
import { Redirect } from "react-router-dom";

import SidebarWishlist from "./SidebarWishlist";
import SidebarProductList from "./SidebarProductList";
import FormDialogAddWishList from "./FormDialogAddWishList";
import FormDialogAddProduct from "./FormDialogAddProduct";
import Grid from "@material-ui/core/Grid";
import ProductItem from "./ProductItem";
import img from "../Images/empty.jpg";
class Home extends Component {
  constructor() {
    super();
    let loggedIn = false;

    const token = localStorage.getItem("token");
    if (token) loggedIn = true;
    this.state = {
      loggedIn,
      showSidebarWishlist: true,
      showSidebarProductList: false,
      title: "WishList",
      description: "description",
      price: "price",
      currency: "currency",
      image: img,
      wishlist: "wishlist",
      status: "status",
    };
  }

  hideComponent = (name) => {
    switch (name) {
      case "showSidebarWishlist":
        this.setState({
          showSidebarWishlist: true,
          showSidebarProductList: false,
          title: "WishList",
        });
        break;
      case "showSidebarProductList":
        this.setState({
          showSidebarProductList: true,
          showSidebarWishlist: false,
          title: "ProductList",
          description: "Description",
          price: "Price",
          currency: "Currency",
          image: img,
          wishlist: "Wishlist",
          status: "Status",
        });
        break;
      default:
    }
  };

  logout = () => {
    this.setState({
      loggedIn: false,
    });
  };
  dataItem = (e) => {
    this.setState({
      title: e.name,
      description: e.description,
      price: e.price,
      currency: e.currency,
      image: e.image,
      wishlist: e.wishlist,
      status: e.status,
    });
  };
  render() {
    if (this.state.loggedIn === false) {
      return <Redirect to="/logout" />;
    }
    const { showSidebarWishlist, showSidebarProductList } = this.state;
    return (
      <div className="home-container">
        <header>
          <AppNavbar hideComponent={this.hideComponent} />
        </header>
        <section >
        <Grid  container>
          <Grid  style={{borderStyle:'ridge' ,  borderWidth: "thin medium"}} item md={3} xs={12}>
            {showSidebarWishlist && <FormDialogAddWishList />}{" "}
            {showSidebarWishlist && (
              <SidebarWishlist titleItem={this.dataItem} />
            )}
          </Grid>
          {showSidebarWishlist && (
            <Grid   item md={9} xs={12}>
              <Navbar1 titleItem={this.state.title} />
              <Navbar2  />
            </Grid>
          )}
        </Grid>

        <Grid container>
          <Grid    style={{borderStyle:'ridge' ,  borderWidth: " medium"}} item md={3} xs={12}>
            {showSidebarProductList && <FormDialogAddProduct />}{" "}
            {showSidebarProductList && (
              <SidebarProductList    titleItem={this.dataItem} />
            )}
          </Grid>

          {showSidebarProductList && (
            <Grid   style={{borderStyle:'ridge' ,  borderWidth: "medium"}} item md={9} xs={12}>
              <ProductItem
                titleItem={this.state.title}
                description={this.state.description}
                price={this.state.price}
                currency={this.state.currency}
                image={this.state.image}
                wishlist={this.state.wishlist}
                status={this.state.status}
              />
            </Grid>
          )}
        </Grid>
        </section>
      </div>
    );
  }
}

export default Home;
