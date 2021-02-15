import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { connect } from "react-redux";

class SidebarProductList extends Component {
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
