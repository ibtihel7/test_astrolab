import React, { Component } from "react";
import AppNavbar from "./AppNavbar";
import Navbar1 from "./Navbar1";
import Navbar2 from "./Navbar2";
import SidebarWishlist from "./SidebarWishlist";
import SidebarProductList from "./SidebarProductList";
import FormDialogAddWishList from "./FormDialogAddWishList";
import FormDialogAddProduct from "./FormDialogAddProduct";
import Grid from "@material-ui/core/Grid";
import ProductItem from './ProductItem'
class Home extends Component {
  state = {
    showSidebarWishlist: true,
    showSidebarProductList: false,
    title :'List',
    description :'',
    price:'',
    image:'',
    wishlist:'',
    status:''
  };

  hideComponent = (name) => {
    switch (name) {
      case "showSidebarWishlist":
        this.setState({
          showSidebarWishlist: true,
          showSidebarProductList: false,
        });
        break;
      case "showSidebarProductList":
        this.setState({
          showSidebarProductList: true,
          showSidebarWishlist: false,
        });
        break;
      default:
    }
  };

  dataItem =(e)=>{
    this.setState({
      title: e.name,
      description:e.description,
      price:e.price,
      currency:e.currency,
      image:e.image,
      wishlist:e.wishlist,
      status:e.status

    });
  }
  render() {
    const { showSidebarWishlist, showSidebarProductList } = this.state;
    return (
      <div className="home-container">
        <header>
          <AppNavbar hideComponent={this.hideComponent} />
        </header>
        <Grid container>
        <Grid item md={3} xs={12 }>
        {showSidebarWishlist && <FormDialogAddWishList />}{" "}
        {showSidebarWishlist && <SidebarWishlist  titleItem={this.dataItem}  />}
        </Grid>
        {showSidebarWishlist &&
        <Grid item md={9} xs={12 }>
        <Navbar1 titleItem={this.state.title}   />
        <Navbar2  />
        </Grid> }
        </Grid>

        <Grid container>

        <Grid item md={3} xs={12 }>

        {showSidebarProductList && <FormDialogAddProduct />}{" "}
        {showSidebarProductList && <SidebarProductList titleItem={this.dataItem}  />}
        </Grid>

        {showSidebarProductList &&
        <Grid item md={9} xs={12 }>
        <ProductItem titleItem={this.state.title}  
        description={this.state.description} 
        price={this.state.price} 
        currency={this.state.currency} 
        image={this.state.image} 
        wishlist={this.state.wishlist} 
        status={this.state.status} 
        />
        </Grid> }
      

        </Grid>
        <Grid container>

</Grid>

        {/* <Navv/> */}
      </div>
    );
  }
}

export default Home;
 