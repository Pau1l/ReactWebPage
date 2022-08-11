import React from 'react';

import { makeStyles, AppBar, Toolbar, IconButton} from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'


const useStyles = makeStyles({
    Appbar:{
        background: 'linear-gradient(45deg, #1B1B1B 30%, #1B1B1B 90%)',
        display: 'flex',
        justifyContent: 'center',
        allignItems: 'center',
        textAlign: 'center',
        height: '10%',
        fontFamily: 'Nunito',
        opacity: '0.95',
        position: 'static',
        color: '#CBA135',
    },
    AppbarTitle:{
        flexGrow: '1',
    },
    AppbarWrapper:{
        width: '60%',
        margin: '0 auto',
    },
    Icon:{
        color: '#CBA135',
        fontSize: '2rem',
    }
})

export default function Header() {
    const classes = useStyles();
  return (
  <AppBar className={classes.Appbar}>
        <Toolbar className={classes.AppbarWrapper}>
            <IconButton className={classes.Icon}>
                <ExpandMoreIcon />
            </IconButton>
            <h1 className={classes.AppbarTitle}>
                Title
            </h1>
            <IconButton>
                <SortIcon className={classes.Icon}/>
            </IconButton>
        </Toolbar>
        
  </AppBar>
  )
}