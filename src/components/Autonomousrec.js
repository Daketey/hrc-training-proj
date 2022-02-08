import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import left from '../logos/auto_rec1.svg';
import right from '../logos/auto_rec2.svg';

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    top: '0vh',
    width: '11vw',
    height: '2vh',
    background: '#FC7500 0% 0% no-repeat padding-box',
    boxShadow: '0.5vw 0.2vw 1.2vh #00000029',
    borderRadius: '0px 0px 1.5vh 1.5vh',
    opacity: '1',
    color: '#FFFFFF',
    fontSize: 'calc(0.40vh + 0.50vw)',
    textAlign: 'center',
  },
});

function Autonomousrec() {
  const classes = useStyles();
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ zIndex: 1, marginTop: '-0.5vh' }}>
        <img
          src={left}
          alt={left}
          style={{
            marginLeft: '0vw',
            width: '0.5vw',
          }}
        />
        <img
          src={right}
          alt={right}
          style={{
            marginLeft: '10vw',
            width: '0.5vw',
          }}
        />
      </div>
      <div className={classes.root}>AUTONOMOUS RECEIVABLES</div>
    </div>
  );
}

export default Autonomousrec;
