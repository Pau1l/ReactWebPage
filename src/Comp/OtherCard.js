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
        backgroundColor: 'rgba(27,27,27,0.95)',
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
      
      </Typography>
      </div>
      <div className={classes.imag}>
        
      </div>
  </div>
  
  )
}
