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


class SidebarProductList extends Component {


  render (){
    const { onClose, selectedValue, open ,products} = this.props;
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
          {products.map((el) => (
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
        products:state.productsReducer
    }
}
const mapDispatchToProps=(dispatch)=>
{
    return {
        updateproductsReducer:products=>
        {
            dispatch({
                type:'UPDATE_PRODUCTS',
                products
            })
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(SidebarProductList);