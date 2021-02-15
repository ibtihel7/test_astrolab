import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';

import {
   
    InputLabel,
    FormControl,
    Select,
 
  } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display :"flex"
  },
});

export default function ProductItem(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image= {props.image} 
          title="Contemplative Reptile"
        />
      <CardActionArea>
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {props.titleItem}          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
         {props.description}

  </Typography>
        </CardContent>
        <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        {props.price} { props.currency}
      
          </Typography>
          </CardContent>

      </CardActionArea>
      <CardActions>
        
      <Button
        variant="text"
        color="inherit"
        className={classes.button}
        startIcon={<EditOutlinedIcon />}
      >
        Edit
      </Button>
          <Button
        variant="text"
        color="secondary"
        className={classes.button}
        startIcon={<DeleteOutlineIcon />}
      >
        Delete
      </Button>
      </CardActions>
      {/* {props.wishlist}  */}
    {props.status} 





    <FormControl fullWidth >
                      <InputLabel
                        shrink
                        id="demo-simple-select-placeholder-label-label"
                      >
                        Wishlist
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-placeholder-label-label"
                        id="demo-simple-select-placeholder-label"
                        defaultValue={props.wishlist} 
                        // displayEmpty
                        width={1}
                        disabled
                      >
                      </Select>
                      </FormControl>





    </Card>
  );
}
