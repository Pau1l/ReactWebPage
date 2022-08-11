import React from 'react';

import { makeStyles, AppBar, Toolbar, Typography} from '@material-ui/core';

const useStyles = makeStyles({
    Appbar:{
        position: 'static',
        backgroundColor: 'rgba(27,27,27, 0.95)',
        display: 'flex',
        justifyContent: 'center',
        allignItems: 'center',
        textAlign: 'center',
        fontFamily: 'Nunito',
        width: '100%',
        height: '300px',
        bottom: 0,
        color: '#CBA135',
    },
    AppbarWrapper:{
        margin: '0 auto',
    },
})

export default function WebFooter() {
    const classes = useStyles();
  return (
  <footer className={classes.Appbar}>
        <Toolbar className={classes.AppbarWrapper}>
          <Typography>
          Bow wow wow ipsizzle bling bling its fo rizzle amizzle, consectetuer adipiscing go to hizzle. 
          Nullam sapizzle velizzle, mah nizzle volutpat, fo shizzle my nizzle yo mamma, gravida vizzle, check it out. 
          Dang shiz phat. Tellivizzle erizzle. Shizznit izzle dolor dapibizzle turpis tempizzle dang. Fo shizzle for sure izzle izzle turpizzle. 
          izzle pimpin'. 
          </Typography>
        </Toolbar>
  </footer>
  )
}