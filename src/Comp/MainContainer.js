import React from 'react';
import Card from './Card';
import { makeStyles, AppBar} from '@material-ui/core';

const useStyles = makeStyles({
    MainBar:{
        background: 'linear-gradient(45deg, rgba(27, 27, 27, 0.2) 30%, rgba(27,27,27, 0.5) 90%)',
        display: 'flex',
        justifyContent: 'center',
        allignItems: 'center',
        textAlign: 'center',
        fontFamily: 'Nunito',
        width: '100%',
        height: '100%',
        bottom: 0,
        overflow: 'hidden',
    },
    AppbarWrapper:{
        margin: '0 auto',
        height: '100%',
        width: '100%',
    },
})

export default function MainBar() {
    const classes = useStyles();
  return (
  <article className={classes.MainBar}>
        <div className={classes.AppbarWrapper}>
        <Card/>
        </div>
  </article>
  )
}