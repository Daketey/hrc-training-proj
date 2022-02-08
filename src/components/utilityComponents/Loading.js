import React from 'react';
import AutorenewIcon from '@material-ui/icons/Autorenew';

export default function Loading() {
  return (
    <div>
      <div
        style={{
          marginLeft: '0.5vw',
          marginTop: '1.5vh',
          backgroundColor: '#FFFFFF1A',
          width: '17vw',
          height: '3.5vh',
        }}
      />
      <div
        style={{
          marginLeft: '19.7vw',
          marginTop: '-3vh',
          backgroundColor: '#FFFFFF1A',
          width: '10vw',
          height: '3vh',
        }}
      />
      <div style={{ marginLeft: '12vw', marginTop: '13vh' }}>
        <div
          style={{
            display: 'inline',
            justifyContent: 'center',
          }}
        >
          <AutorenewIcon
            style={{ fontSize: 'calc(1.5vh + 1.5vw)', marginLeft: '0.5vw' }}
          />
          <p style={{ marginTop: '-0.75vh' }}>Loading...</p>
        </div>
      </div>
      <div
        style={{
          textAlign: 'center',
          borderLeft: '0.01vw solid #5DAAE01A',
          height: '20vh',
          width: '6.5vw',
          position: 'relative',
          top: '-19vh',
          left: '23.7vw',
          paddingTop: '5vh',
        }}
      >
        <div
          style={{
            backgroundColor: '#FFFFFF1A',
            height: '20vh',
            width: '4vw',
            marginLeft: '1vw',
            marginTop: '-1vw',
          }}
        />
      </div>
    </div>
  );
}
