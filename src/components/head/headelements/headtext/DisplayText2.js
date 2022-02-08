/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
  root: {
    display: 'inline',
    position: 'absolute',
    left: '73vw',
    top: '-1.5vh',
    letterSpacing: '0.06vw',
  },
  enc: {
    display: 'flex',
  },
  sub: {
    position: 'relative',
    top: '-0.6vh',
    marginRight: '0.5vw',
  },
  top1: {
    color: 'white',
    fontWeight: '500',
  },
  top2: {
    color: 'grey',
    fontWeight: '500',
    marginTop: '2.6vh',
  },
  top3: {
    color: 'grey',
    marginLeft: '0vw',
    marginTop: '4vh',
  },
  bottom: {
    color: '#5daae0',
    marginTop: '-3vh',
    fontWeight: '500',
  },
});

function DisplayText2(props) {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <div className={classes.enc}>
        <h2 className={classes.top1}>
          {props.num}
          <sub className={classes.sub}>min</sub>
        </h2>
        <h2 className={classes.top2}>/</h2>
        <h4 className={classes.top3}>
          {props.den}
          <sub className={classes.sub}>min</sub>
        </h4>
      </div>
      <h5 className={classes.bottom}>{props.text}</h5>
    </div>
  );
}

export default DisplayText2;
