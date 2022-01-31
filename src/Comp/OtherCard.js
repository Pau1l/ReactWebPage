import React from 'react';

import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    mainRoot:{
        height: 'auto',
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(225, 179, 182, 0)',
        fontFamily: 'Nunito',
        color: '#fff',
        textAlign: 'center',
        
    },

    Txt:{
        width: '50%',
    },
    imag:{
       maxWidth: '90%',
       maxHeight: '90%',
       padding: '10px',
    }
})

export default function OtherCard() {
    const  classes = useStyles()
  return (
  <div className={classes.mainRoot} id="canvas-container">
      <div className={classes.Txt}>
      <Typography variant="h5" style={{padding: '100px', fontWeight: 'bold',}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra quam eget orci consequat hendrerit. Fusce euismod sapien orci, vitae placerat nisi molestie a. 
      Sed condimentum lectus id leo commodo, eget pulvinar dui lacinia. Integer sodales dictum mattis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices 
      posuere cubilia curae; Sed rutrum nunc non est sodales finibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer orci
      </Typography>
      </div>
      <div className={classes.imag}>
        <img src={ require('./Assets/remote2.png') } alt='nullAlt' className={classes.imag}/>
      </div>
  </div>
  
  )
}
