import React, { Component } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  ListItem,
  List,
  TextField,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import {connect} from 'react-redux'

class FormDialogAddWishList extends Component {

    state ={
        open :false ,
        name :''
    }

   handleClickOpen = () => {
    this.setState({open:true});
  };

   handleClose = () => {
    this.setState({open:false});
  };

  handleChange=(event)=>
  {
      this.setState({
          [event.target.name]:event.target.value
      })
  }

   addWishlist=()=>
  {
      this.props.addReducer({...this.state,_id:Math.random()*1000+''});
      this.setState({open:false});
  }

  render (){
  return (
    <div>
      <List>
        <ListItem>
          <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
            <AddIcon />
            Add Wishlist{" "}
          </Button>{" "}
        </ListItem>
      </List>
      <Dialog
        open={this.state.open}
        onClose={this.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add Wishlist</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="wishlist"
            label="Name"
            name="name"
            fullWidth
            onChange ={this.handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            Cancel
          </Button>
          <Button variant="contained" onClick={this.addWishlist} color="primary">
            Done
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}}
const mapDispatchToProps=(dispatch)=>
{
     return {
         addReducer:newwishlist=>
         {
             dispatch({
                 type:'ADD_WISHLIST',
                 newwishlist
             })

         }
     }
}
 
export default connect(null,mapDispatchToProps)(FormDialogAddWishList);
