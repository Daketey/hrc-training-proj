/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ArrowBackIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIcon from '@material-ui/icons/ArrowForwardIos';
import ErrorIcon from '@material-ui/icons/Error';
import Render from '../components/utilityComponents/Render';

export default function FirstCard() {
  const { getUserCall } = useSelector((state) => state.getUserCall);
  const { pageNumber } = useSelector((state) => state.pageNumber);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'GET_UPCOMING_SUMMARY' });
    dispatch({ type: 'GET_USER_CALL' });
    dispatch({ type: 'GET_PROFILE' });
  }, []);

  return (
    <div
      style={{
        position: 'absolute',
        top: '-0vh',
        left: '-0.5vw',
        height: '82.5vh',
        width: '93.5vw',
        padding: 'calc(0vh+0vw)',
        boxSizing: 'border-box',
      }}
    >
      {' '}
      {getUserCall != null ? (
        <Render data={getUserCall} />
      ) : (
        <div>
          <ErrorIcon
            style={{
              position: 'absolute',
              top: '35vh',
              left: '37vw',
              color: 'indianred',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '35vh',
              left: '39vw',
              color: 'white',
            }}
          >
            {' '}
            Something Went Wrong....{' '}
          </div>
        </div>
      )}
      {pageNumber <= 0 ? (
        <div
          style={{ color: '#FFFFFFA6', position: 'absolute', top: '38.7vh' }}
        >
          <ArrowBackIcon style={{ width: '0.8vw', marginLeft: '1.5vw' }} />
          <div
            onClick={() => {
              dispatch({ type: 'FORWARD' });
              dispatch({ type: 'GET_UPCOMING_SUMMARY' });
              dispatch({ type: 'GET_USER_CALL' });
            }}
            style={{
              backgroundColor: '#5daae0',
              width: '2vw',
              height: '4vh',
              borderRadius: '5vw',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: '89vw',
              marginTop: '-4vh',
              color: 'white',
              cursor: 'pointer',
            }}
          >
            <ArrowForwardIcon style={{ width: '0.8vw' }} />
          </div>
        </div>
      ) : pageNumber < 2 ? (
        <div
          style={{ color: '#FFFFFFA6', position: 'absolute', top: '38.7vh' }}
        >
          <div
            onClick={() => {
              dispatch({ type: 'BACKWARD' });
              dispatch({ type: 'GET_UPCOMING_SUMMARY' });
              dispatch({ type: 'GET_USER_CALL' });
            }}
            style={{
              backgroundColor: '#5daae0',
              width: '2vw',
              height: '4vh',
              borderRadius: '5vw',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: '1vw',
              marginTop: '0vh',
              color: 'white',
              cursor: 'pointer',
            }}
          >
            <ArrowBackIcon style={{ width: '0.8vw', marginLeft: '0.25vw' }} />
          </div>
          <div
            onClick={() => {
              dispatch({ type: 'FORWARD' });
              dispatch({ type: 'GET_UPCOMING_SUMMARY' });
              dispatch({ type: 'GET_USER_CALL' });
            }}
            style={{
              backgroundColor: '#5daae0',
              width: '2vw',
              height: '4vh',
              borderRadius: '5vw',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: '89vw',
              marginTop: '-4vh',
              color: 'white',
              cursor: 'pointer',
            }}
          >
            <ArrowForwardIcon style={{ width: '0.8vw' }} />
          </div>
        </div>
      ) : pageNumber === 2 ? (
        <div
          style={{ color: '#FFFFFFA6', position: 'absolute', top: '38.7vh' }}
        >
          <div
            onClick={() => {
              dispatch({ type: 'BACKWARD' });
              dispatch({ type: 'GET_UPCOMING_SUMMARY' });
              dispatch({ type: 'GET_USER_CALL' });
            }}
            style={{
              backgroundColor: '#5daae0',
              width: '2vw',
              height: '4vh',
              borderRadius: '5vw',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: '1vw',
              marginTop: '0vh',
              color: 'white',
              cursor: 'pointer',
            }}
          >
            <ArrowBackIcon style={{ width: '0.8vw', marginLeft: '0.25vw' }} />
          </div>
          <ArrowForwardIcon
            style={{
              width: '0.8vw',
              marginLeft: '89.5vw',
              marginTop: '-4vh',
              position: 'fixed',
            }}
          />
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
