import React, { useState } from 'react';
import './Sidebar.css';
import { Paper } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';

// import HomePage from './views/HomePage';

function Sidebar() {
  const [pop, setPop] = useState(false);

  return (
    <div>
      <Paper class="paper" elevation={3}>
        <div
          style={{
            borderBottom: '0.02vh solid rgb(230, 230, 230)',
            paddingTop: '8vh',
            width: '100%',
          }}
        />
        <MenuIcon
          class="bar"
          onClick={() => setPop(!pop)}
          cursor="pointer"
          fill="white"
        />
        <AccountCircleIcon
          style={{
            display: 'inline-block',
            fontSize: '2.5vw',
            marginTop: '84.9vh',
            color: 'white',
          }}
        />
        <Modal
          open={pop}
          onClose={() => setPop(false)}
          style={{ height: '100%' }}
        >
          <Paper class="paperTrans">
            <MenuIcon
              class="bar"
              onClick={() => setPop(!pop)}
              cursor="pointer"
              fill="white"
            />
            <h2
              style={{
                fontWeight: 'normal',
                position: 'absolute',
                top: '-0.65vh',
                left: '4vw',
                color: 'white',
              }}
            >
              MENU
            </h2>
            <div
              onClick={() => setPop(!pop)}
              onKeyDown={() => []}
              role="button"
              tabIndex={0}
              style={{
                display: 'flex',
                marginLeft: '2vh',
                color: 'white',
                position: 'absolute',
                top: '10vh',
                cursor: 'pointer',
              }}
            >
              <ArrowBackIcon style={{ width: '2.5vh', marginRight: '0.5vw' }} />
              Switch Back to Enterprise UI
            </div>
            <div
              style={{
                color: 'white',
                display: 'flex',
                position: 'absolute',
                top: '93vh',
              }}
            >
              <AccountCircleIcon
                style={{
                  display: 'inline-block',
                  fontSize: '2.5vw',
                  marginLeft: '1.5vh',
                }}
              />
              <h3
                style={{
                  position: 'absolute',
                  top: '-1.5vh',
                  left: '4vw',
                  fontWeight: 'normal',
                  width: '10vw',
                }}
              >
                John Smith
              </h3>
              <button
                type="button"
                className="button"
                style={{ marginLeft: '14vw', cursor: 'pointer' }}
              >
                Logout
              </button>
            </div>
          </Paper>
        </Modal>
      </Paper>
    </div>
  );
}

export default Sidebar;
