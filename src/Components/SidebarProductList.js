import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { connect } from "react-redux";
import axios from 'axios'
class SidebarProductList extends Component {

  componentDidMount = () => {
    axios
      .get("/get-products")
      .then((res) => this.props.updateproductsReducer(res.data));
  };
  
  render() {
    const { titleItem, products } = this.props;
    return (
      <div>
        <List>
          {products.map((el) => (
            <ListItem button component="a" onClick={() => titleItem(el)}>
              {el.name}
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.productsReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateproductsReducer: (products) => {
      dispatch({
        type: "UPDATE_PRODUCTS",
        products,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SidebarProductList);
