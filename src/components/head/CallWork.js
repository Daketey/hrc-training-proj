import React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function CallWork() {
  return (
    <div
      style={{
        display: 'flex',
        position: 'absolute',
        left: '5vw',
        top: '-1.5vh',
        cursor: 'pointer',
      }}
    >
      <ArrowBackIcon
        style={{
          fontSize: '2.5vw',
          position: 'relative',
          top: '3.5vh',
          marginRight: '0.75vw',
          color: 'white',
        }}
      />
      <h1 style={{ fontWeight: 'normal', color: '#5daae0' }}>Call Workboard</h1>
    </div>
  );
}

export default CallWork;
