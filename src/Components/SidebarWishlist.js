import React, { Component } from "react";
import { connect } from "react-redux";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

class SidebarWishlist extends Component {
  render() {
    const { titleItem, wishlists } = this.props;
    return (
      <nav className="Nav">
        <List>
          {wishlists.map((el) => (
            <ListItem button component="a" onClick={() => titleItem(el)}>
              {el.name}
            </ListItem>
          ))}
        </List>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    wishlists: state.wishlistReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updatewishlistReducer: (wishlists) => {
      dispatch({
        type: "UPDATE_WISHLISTS",
        wishlists,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SidebarWishlist);
