import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Freedalogo from '../../logos/Freeda.svg';
// import HomePage from './views/HomePage';

const useStyles = makeStyles({
  button: {
    position: 'fixed',
    top: '1vh',
    left: '91.5vw',
    width: '7vw',
    height: '5vh',
    backgroundColor: '#FC7500',
    border: 'none',
    color: 'white',
    borderRadius: '4vh',
    display: 'flex',
    overflow: 'hidden',
    boxShadow: '0.5vw 0.2vw 1.2vh #00000029',
    cursor: 'pointer',
  },
  para: {
    position: 'absolute',
    left: '0.85vw',
    top: '-0.25vh',
    fontSize: '1.8vh',
  },
});

function Freeda() {
  const classes = useStyles();
  return (
    <button type="button" className={classes.button}>
      <p className={classes.para}>FREEDA</p>
      <img
        src={Freedalogo}
        alt={Freedalogo}
        style={{
          position: 'absolute',
          top: '0vh',
          left: '5vw',
          width: '2vw',
          height: '5vh',
        }}
      />
    </button>
  );
}

export default Freeda;
