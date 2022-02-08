/* eslint-disable eqeqeq */
/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useEffect, useState, useRef } from 'react';
import Popover from '@material-ui/core/Popover';
import CallIcon from '@material-ui/icons/Call';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Paper from '@material-ui/core/Paper';
import Radio from '@material-ui/core/Radio';
import CallEndIcon from '@material-ui/icons/CallEnd';
import { useSelector } from 'react-redux';
import {
  sipCall,
  hangupCall,
  sipStart,
  callMuteUnmute,
} from '../../utils/sipUtil';

const n = {
  virtualNumber: '18329007690',
  fullName: 'somya-mahapatra',
  sipUser: 'somya-mahapatra',
  sipToken: 'KklvuzGHWedyWRDTRetFF',
  incomingNumber: '18329007690',
};

const m = {
  asteriskIp: 'call-sandbox.highradius.com',
  iceServers:
    '[{"urls":"stun:global.stun.twilio.com:3478?transport=udp","url":"stun:global.stun.twilio.com:3478?transport=udp"},{"urls":"turn:global.turn.twilio.com:3478?transport=udp","credential":"WbMPi8a+kSZoNW4mz0ya0XOT3xxsZAhs+5Ir/XBOkAU=","url":"turn:global.turn.twilio.com:3478?transport=udp","username":"fe25ffdaa886be4a5b469d2508808e307b7ecbf5d4a2bd489df5ad0607f28d91"},{"urls":"turn:global.turn.twilio.com:3478?transport=tcp","credential":"WbMPi8a+kSZoNW4mz0ya0XOT3xxsZAhs+5Ir/XBOkAU=","url":"turn:global.turn.twilio.com:3478?transport=tcp","username":"fe25ffdaa886be4a5b469d2508808e307b7ecbf5d4a2bd489df5ad0607f28d91"},{"urls":"turn:global.turn.twilio.com:443?transport=tcp","credential":"WbMPi8a+kSZoNW4mz0ya0XOT3xxsZAhs+5Ir/XBOkAU=","url":"turn:global.turn.twilio.com:443?transport=tcp","username":"fe25ffdaa886be4a5b469d2508808e307b7ecbf5d4a2bd489df5ad0607f28d91"}]',
  sipTrunk: 'twiliofdev',
};

export default function Calling() {
  const { contactDetails } = useSelector((state) => state.contactDetails);
  const { accepted } = useSelector((state) => state.accepted);
  const [calling, setCalling] = useState(false);
  const [timer, setTimer] = useState(0);
  const [hour, setHour] = useState(0);
  const [name, setName] = useState({ firstName: null, lastName: null });
  useEffect(() => {
    sipStart(n, m);
    contactDetails
      ? setName({
          firstName: contactDetails[0].firstName,
          lastName: contactDetails[0].lastName,
        })
      : '';
  }, []);
  // eslint-disable-next-line no-return-assign
  useEffect(() => {
    contactDetails
      ? setName({
          firstName: contactDetails[0].firstName,
          lastName: contactDetails[0].lastName,
        })
      : '';
  }, [contactDetails]);
  useEffect(() => {
    accepted == 'CONFIRMED'
      ? setTimeout(() => setTimer(timer + 1), 1000)
      : setTimer(0);
  });

  const HandleCall = () => {
    sipCall('+918144669580');

    // hangupCall();
  };

  const HangUp = () => {
    hangupCall();
  };

  const MuteUnmute = () => {
    callMuteUnmute();
  };

  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedValue, setSelectedValue] = useState('a');

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{ marginLeft: '55vw' }}>
      <div>
        <div
          style={{
            height: '4.5vh',
            width: '15vw',
            marginLeft: '3vw',
            marginTop: '-1vh',
            borderRadius: '5vw',
            backgroundColor: '#283a46',
            display: 'flex',
          }}
        >
          {contactDetails ? (
            <div
              style={{
                marginLeft: '2vw',
                marginTop: '0.5vh',
                color: 'white',
                display: 'flex',
              }}
            >
              <div style={{ width: '8vw' }}>
                {name.firstName} {name.lastName}
              </div>
              {!calling ? (
                <ExpandMoreIcon
                  onChange={handleChange}
                  onClick={handleClick}
                  style={{ cursor: 'pointer' }}
                />
              ) : (
                <p
                  style={{
                    marginTop: '-0.1vh',
                    marginLeft: '-0.5vw',
                    color: '#14aff1',
                  }}
                >
                  {timer > 59 ? setHour(hour + 1) : hour} :{' '}
                  {timer < 60 ? timer : setTimer(0)}
                </p>
              )}
            </div>
          ) : (
            ''
          )}
          {!calling ? (
            <CallIcon
              onClick={() => {
                // sipCall('+918144669580');
                setCalling(!calling);
              }}
              style={{
                color: 'white',
                backgroundColor: '#8fd163',
                padding: '0.75vh',
                borderRadius: '5vw',
                position: 'absolute',
                left: '71vw',
                top: '1.3vh',
                cursor: 'pointer',
              }}
            />
          ) : (
            <CallEndIcon
              onClick={() => {
                hangupCall();
                setHour(0);
                setCalling(!calling);
              }}
              style={{
                color: 'white',
                backgroundColor: '#ff5b5b',
                padding: '0.75vh',
                borderRadius: '5vw',
                position: 'absolute',
                left: '71vw',
                top: '1.3vh',
                cursor: 'pointer',
              }}
            />
          )}
        </div>

        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorReference="anchorPosition"
          anchorPosition={{ top: 52.5, left: 1050 }}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <Paper
            style={{
              backgroundColor: '#283a46',
              height: '60vh',
              width: '25vw',
              border: '0.01vw solid #356680',
              borderRadius: 2,
              color: 'white',
              overflow: 'auto',
            }}
          >
            <h2 style={{ fontWeight: 'normal', marginLeft: '1.5vw' }}>
              Contacts
            </h2>
            {contactDetails
              ? contactDetails.map((item, index) => (
                  <Paper
                    style={{
                      backgroundColor: '#21303b',
                      height: '22vh',
                      width: '23vw',
                      marginLeft: '1vw',
                      borderRadius: 2,
                      color: 'white',
                    }}
                  >
                    {' '}
                    <p style={{ marginLeft: '0.75vw', paddingTop: '1.25vh' }}>
                      {item.firstName} {item.lastName}
                    </p>
                    <div style={{ display: 'flex', marginTop: '-0.5vh' }}>
                      <Radio
                        checked={selectedValue === 'a'}
                        onChange={handleRadioChange}
                        value="a"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'A' }}
                        style={{ color: '#14adee' }}
                      />
                      <div>
                        <p style={{ fontSize: 'calc(0.45vh + 0.45vw)' }}>
                          Business Number
                        </p>
                        <p style={{ marginTop: '-1vh' }}>{item.phoneNumber}</p>
                      </div>
                      <Radio
                        checked={selectedValue === 'b'}
                        onChange={handleRadioChange}
                        value="b"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'B' }}
                        style={{
                          color: '#14adee',
                          position: 'relative',
                          left: '1vw',
                        }}
                      />
                      <div style={{ marginLeft: '1vw' }}>
                        <p style={{ fontSize: 'calc(0.45vh + 0.45vw)' }}>
                          Mobile Number
                        </p>
                        <p style={{ marginTop: '-1vh' }}>{item.mobileNumber}</p>
                      </div>
                    </div>
                    <CallIcon
                      onClick={() => {
                        sipCall('+918144669580');
                        setAnchorEl(null);
                        setCalling(!calling);
                        setName({
                          firstName: item.firstName,
                          lastName: item.lastName,
                        });
                      }}
                      style={{
                        color: 'white',
                        background: 'transparent',
                        padding: '0.75vh',
                        border: '0.01vw solid #356680',
                        borderRadius: '5vw',
                        marginLeft: '1vw',
                        marginTop: '1vh',
                        cursor: 'pointer',
                      }}
                    />
                  </Paper>
                ))
              : ''}
          </Paper>
        </Popover>
      </div>
      {/* <button type="button" onClick={HandleCall}>
        CALL
      </button>
      <button type="button" onClick={MuteUnmute}>
        Mute/Unmute
      </button>
      <button type="button" onClick={HangUp}>
        Hang Up
      </button> */}
    </div>
  );
}
