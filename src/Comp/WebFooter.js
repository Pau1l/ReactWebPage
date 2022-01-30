import React from 'react';

import { makeStyles, AppBar, Toolbar, Typography} from '@material-ui/core';

const useStyles = makeStyles({
    Appbar:{
        position: 'static',
        backgroundColor: 'rgba(225, 179, 182, 1)',
        display: 'flex',
        justifyContent: 'center',
        allignItems: 'center',
        textAlign: 'center',
        fontFamily: 'Nunito',
        width: '100%',
        height: '300px',
        bottom: 0,
    },
    AppbarWrapper:{
        margin: '0 auto',
    },
})

export default function WebFooter() {
    const classes = useStyles();
  return (
  <AppBar className={classes.Appbar}>
        <Toolbar className={classes.AppbarWrapper}>
          <Typography>
            Footer
          </Typography>
        </Toolbar>
  </AppBar>
  )
}