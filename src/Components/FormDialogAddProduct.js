import React, { Component } from "react";
import AddIcon from "@material-ui/icons/Add";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputLabel,
  FormControl,
  Grid,
  Select,
  MenuItem,
  ListItem,
  List,
  TextField,
} from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { connect } from "react-redux";

class FormDialogAddProduct extends Component {
  constructor(props) {
    super(props) 
  this.state = {
    open: false,
      name: "",
      imageUrl:"",
      price: "",
      currency: "",
      description: "",
      // wishlist: "",
      status: "",
  
     
  };
}
  


  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  
  handleWishlistChange = (e) => {
    const { wishlists } = this.props;
    this.setState({
      [e.target.name]: wishlists.find(el=>el._id == e.target.value).name,
    });
  };

  addProduct = () => {
    this.props.addReducer({ ...this.state, _id: Math.random() * 1000 + "" });
    this.setState({ open: false });
  };

  render() {
    const { wishlists } = this.props;

    return (
      <div>
        <List>
          <ListItem>
            <Button
              variant="outlined"
              color="primary"
              onClick={this.handleClickOpen}
            >
              <AddIcon />
              Add Product{" "}
            </Button>{" "}
          </ListItem>
        </List>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle  style ={{ textAlign: 'center'}}>Add Product</DialogTitle>
          <DialogContent>
            <div>
              <div>
                <Grid container>
                <Grid item md={12} xs={12 } style ={{ textAlign: 'center'}}>

                 <input accept="image/*" style={{ display: 'none'}}  id="icon-button-file" type="file" />
      <label htmlFor="icon-button-file">
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
      </label> 

{/* <img src={url} />    */}

</Grid>
                  <Grid item md={5} xs={8}>
                    <InputLabel
                        // shrink
                        id="demo-simple-select-placeholder-label-label"
                      >
                        Name
                      </InputLabel>
                      <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        name="name"
                        onChange={this.handleChange}
                      />
                  </Grid>
                  <Grid item md={4} xs={8}>
                    <InputLabel
                        shrink
                        id="demo-simple-select-placeholder-label-label"
                      >
                        Price
                      </InputLabel>
                      <TextField
                        autoFocus
                        margin="dense"
                        id="price"
                        name="price"
                        type ='number'
                        onChange={this.handleChange}
                      />
                  </Grid>

                  <Grid item md={3} xs={8}>
                    <FormControl fullWidth >
                      <InputLabel
                      
                        shrink
                        id="demo-simple-select-placeholder-label-label"
                      >
                        Currency
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-placeholder-label-label"
                        id="demo-simple-select-placeholder-label"
                        value={this.state.currency}
                        name='currency'
                        onChange={this.handleChange}
                        displayEmpty
                        width={1}

                      >
                        <MenuItem value={"TND"}>TND</MenuItem>
                        <MenuItem value={"EURO"}>EURO</MenuItem>
                        <MenuItem value={"USD"}>USD</MenuItem>
                      </Select>
                      
                      </FormControl>
                      
                  </Grid>
                  <Grid item md={12} xs={12}>
                  <InputLabel
                        shrink
                        id="demo-simple-select-placeholder-label-label"
                      >
                        Description
                      </InputLabel>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="description"
                      name="description"
                      fullWidth
                      onChange={this.handleChange}
                    />
                  </Grid>
                  <Grid item md={7} xs={8}>
                    <FormControl fullWidth >
                      <InputLabel
                      
                        id="demo-simple-select-placeholder-label-label"
                      >
                        Wishlist
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-placeholder-label-label"
                        // id="demo-simple-select-placeholder-label"
                        name="wishlist"
                        onChange={this.handleWishlistChange}
                        displayEmpty
                        width={1}
                      >
                        <MenuItem value=""></MenuItem>

                        {wishlists.map((el) => (
                          <MenuItem key={el._id} value={el._id}>
                            {el.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item md={5} xs={8}>
                    <FormControl fullWidth>
                      <InputLabel
                        shrink
                        id="demo-simple-select-placeholder-label-label"
                      >
                        Status
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-placeholder-label-label"
                        id="demo-simple-select-placeholder-label"
                        name="status"
                        value={this.state.status}
                        onChange={this.handleChange}
                        displayEmpty
                        width={1}
                      >
                        <MenuItem value=""></MenuItem>
                        <MenuItem value="To Buy">To Buy</MenuItem>
                        <MenuItem value="Bought">Bought</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </div>
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button
              variant="contained"
              onClick={this.addProduct}
              color="primary"  >
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    wishlists: state.wishlistReducer,
    // products: state.productsReducer,

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addReducer: (newproduct) => {
      dispatch({
        type: "ADD_PRODUCT",
        newproduct,
      });
    },
  };
};
export default connect( mapStateToProps,mapDispatchToProps)(FormDialogAddProduct);