/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
  root: {
    display: 'inline',
    position: 'absolute',
    left: '60vw',
    top: '-1.5vh',
    letterSpacing: '0.06vw',
  },
  enc: {
    display: 'flex',
  },
  top1: {
    color: 'white',
    fontWeight: '500',
    marginRight: '0.2vw',
  },
  top2: {
    color: 'grey',
    fontWeight: '600',
    marginTop: '2.6vh',
  },
  top3: {
    color: 'grey',
    marginLeft: '0vw',
    marginTop: '4vh',
  },
  bottom: {
    color: '#5DAAE0',
    marginTop: '-3vh',
    fontWeight: '500',
  },
});

function DisplayText(props) {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <div className={classes.enc}>
        <h2 className={classes.top1}>{props.num}</h2>
        <h2 className={classes.top2}>/</h2>
        <h4 className={classes.top3}>{props.den}</h4>
      </div>
      <h5 className={classes.bottom}>{props.text}</h5>
    </div>
  );
}

export default DisplayText;
