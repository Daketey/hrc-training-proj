import React from 'react';
import Circle from '@material-ui/icons/FiberManualRecord';
import { useSelector } from 'react-redux';

function Footer() {
  const { pageNumber } = useSelector((state) => state.pageNumber);
  return (
    <div
      style={{
        display: 'flex',
        overflow: 'hidden',
        position: 'absolute',
        top: '97.2vh',
        left: '4vw',
        height: '2.5vh',
        width: '95vw',
        color: '#FFFFFFA6',
        fontSize: 'calc(0.4vh + 0.6vw)',
      }}
    >
      <div style={{ marginLeft: '2vw', width: '20vw' }}>
        {' '}
        Viewing {pageNumber * 5 + 1}-{pageNumber * 5 + 5} of 15
      </div>
      <div
        style={{ display: 'flex', marginLeft: '24vw', marginTop: '-0.25vh' }}
      >
        <Circle
          style={
            pageNumber === 0
              ? { color: '#FC7500', width: '1vw' }
              : { color: '#5daae0', width: '1vw' }
          }
        />
        <Circle
          style={
            pageNumber === 1
              ? { color: '#FC7500', width: '1vw' }
              : { color: '#5daae0', width: '1vw' }
          }
        />
        <Circle
          style={
            pageNumber === 2
              ? { color: '#FC7500', width: '1vw' }
              : { color: '#5daae0', width: '1vw' }
          }
        />
      </div>
      <div
        style={{
          marginLeft: '27.5vw',
          width: '18vw',
        }}
      >
        {' '}
        © Copyright 2018 HighRadius. All Rights Reserved.
      </div>
    </div>
  );
}

export default Footer;
