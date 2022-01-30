import React from 'react';

import { makeStyles, AppBar, Toolbar, IconButton} from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const useStyles = makeStyles({
    Appbar:{
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        display: 'flex',
        justifyContent: 'center',
        allignItems: 'center',
        textAlign: 'center',
        height: '10%',
        fontFamily: 'Nunito',
        opacity: '0.5',
        position: 'static',
    },
    AppbarTitle:{
        flexGrow: '1',
    },
    AppbarWrapper:{
        width: '60%',
        margin: '0 auto',
    },
    Icon:{
        color: '#fff',
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