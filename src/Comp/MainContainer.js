import React from 'react';

import { makeStyles, AppBar, Toolbar} from '@material-ui/core';

const useStyles = makeStyles({
    MainBar:{
        position: 'static',
        background: 'linear-gradient(45deg, rgba(201, 63, 46, 0.2) 30%, rgba(225, 179, 182, 0.5) 90%)',
        display: 'flex',
        justifyContent: 'center',
        allignItems: 'center',
        textAlign: 'center',
        fontFamily: 'Nunito',
        width: '100%',
        height: '500px',
        bottom: 0,
    },
    AppbarWrapper:{
        margin: '0 auto',
    },
})

export default function MainBar() {
    const classes = useStyles();
  return (
  <AppBar className={classes.MainBar}>
        <Toolbar className={classes.AppbarWrapper}>

        </Toolbar>
  </AppBar>
  )
}