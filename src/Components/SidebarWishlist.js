import React , {Component} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import {connect} from 'react-redux'


class SidebarWishlist extends Component {


  render (){
    const { onClose, selectedValue, open ,wishlists} = this.props;
    const handleClose = () => {
      onClose(selectedValue);
    };
  
    const handleListItemClick = (value) => {
      onClose(value);
    };
  
    return (
      <nav className="Nav">

        <List>
           {/* <ListItem autoFocus button onClick={() => handleListItemClick('add Wishlist')}>
            <ListItemAvatar>
              <Avatar>
                <AddIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="add Wishlist" /> */}
          {/* </ListItem> */}
          {wishlists.map((el) => (
            <ListItem >
          
              {el.name}
             </ListItem>
           ))} 
  
         
        </List>
        </nav>
    );
  }
  



  }




const mapStateToProps=(state)=>
{
    return {
        wishlists:state.wishlistReducer
    }
}
const mapDispatchToProps=(dispatch)=>
{
    return {
        updatewishlistReducer:wishlists=>
        {
            dispatch({
                type:'UPDATE_WISHLISTS',
                wishlists
            })
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(SidebarWishlist);