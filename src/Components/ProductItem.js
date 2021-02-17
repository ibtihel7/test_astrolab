import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import {
    ButtonGroup,
    InputLabel,
    FormControl,
    Select,
    Grid
  } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display :"flex"
  },
  disable:{
    color: "inherit !important" 
    }
});



export default function ProductItem(props) {
  const classes = useStyles();
  const [wishlist, setWishlist] = React.useState(props.wishlist);
  const [status, setStatus] = React.useState(props.status);

  const handleChange = (event) => {
    setWishlist(event.target.value);
    setStatus(event.target.value)
  };


  return ( <div>
    
    <Card className={classes.root}>
       <Grid  item md={6} xs={12 }>
        <CardMedia
          component="img"
          alt=""
          height="300"
          image= {props.image} 
        //   title="productImage"
        />
    </Grid>
    <Grid item  md={4} xs={12 }>

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

          </Grid>
          <Grid item md={2} xs={12 }>
      <CardActions>
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical outlined primary button group"
      >
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
        startIcon={<DeleteOutlineIcon 
        />}
      >
        Delete
      </Button>
      </ButtonGroup>
      </CardActions>
      </Grid>
    </Card>

<Grid item md={3} xs={12 }>
<FormControl disabled className={classes.disable} fullWidth   >

<InputLabel  className={classes.disable}  shrink={false} id="demo-simple-select-disabled-label">{props.wishlist}</InputLabel>
              <Select
                labelId="demo-simple-select"
                id="demo-simple-select"
                value={wishlist}
                onChange={handleChange}
                defaultValue={props.wishlist}   
              >
              </Select>
              </FormControl>
              </Grid>
              <Grid item md={3} xs={12 }>
              <FormControl fullWidth  disabled >

<InputLabel  className={classes.disable} shrink={false}  id="demo-simple-select-disabled-label">{props.status}</InputLabel>
      <Select
        labelId="demo-simple-select-placeholder-label-label"
        id="demo-simple-select-placeholder-label"
        value={status}
        onChange={handleChange}
        defaultValue={status}    
      >
      </Select>
      </FormControl>
      </Grid>
</div>
  );
}
