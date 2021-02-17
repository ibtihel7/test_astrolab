import React  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  bar :{

    color: 'inherit',
    backgroundColor  :"transparent"
  }

}));

export default function Navbar1(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar  className={classes.bar} position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {props.titleItem}
          </Typography>
          {/* <Button color="inherit">Edit</Button> */}
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
        </Toolbar>
      </AppBar>
    </div>
  );
}
