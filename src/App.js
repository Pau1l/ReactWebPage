import './App.css';

import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './Comp/theme';
import { makeStyles } from '@material-ui/core';

//components
import Header from './Comp/Header';
import Card from './Comp/Card';
import WebFooter from './Comp/WebFooter';
import OtherCard from './Comp/OtherCard';
import MainBar from './Comp/MainContainer';

import pattern from './Comp/Assets/pattern.png'

const useStyles = makeStyles({
  root:{
    minHeight: '100vh',
    backgroundImage: `url(${pattern})`,
    backgroundRepeat: 'repeat',
    backgroundSize: 'contain',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
})

function App() {
  const classes=useStyles();
  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <Header/>
        <Card/>
        <MainBar/>
          <OtherCard/>
        <WebFooter/>
      </ThemeProvider>
    </div>
  );
}

export default App;
