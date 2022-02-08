/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useSelector } from 'react-redux';
import ErrorIcon from '@material-ui/icons/Error';
import HomePage from '../../../views/HomePage';
import SearchPage from '../../../views/SearchPage';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tab: {
    background: '#3d4d62',
    letterSpacing: '0.8vw',
    borderBottom: '0.01vh solid #5DAAE01A',
  },
}));

export default function SimpleTabs() {
  const { searchTerm } = useSelector((state) => state.searchTerm);
  // eslint-disable-next-line no-unused-expressions
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // eslint-disable-next-line no-unused-expressions
  return (
    <div
      className={classes.root}
      style={{ position: 'absolute', top: '2vh', left: '6.5vw' }}
    >
      <AppBar position="static" elevation={0}>
        <Tabs
          value={searchTerm ? 2 : value}
          onChange={handleChange}
          aria-label="simple tabs example"
          className={classes.tab}
          TabIndicatorProps={{
            style: {
              backgroundColor: 'white',
            },
          }}
        >
          <Tab label="TO CALL LIST (15)" {...a11yProps(0)} />
          <Tab label="FINISHED CALL LIST (0)" {...a11yProps(1)} />
          {searchTerm ? <Tab label="SEARCH RESULTS" {...a11yProps(2)} /> : ''}
        </Tabs>
      </AppBar>
      <div
        style={{
          position: 'absolute',
          top: '7.5vh',
          width: '92vw',
          height: '80vh',
          background: 'transparent',
        }}
      >
        <TabPanel value={value} index={0}>
          {searchTerm ? '' : <HomePage />}
        </TabPanel>
        <TabPanel value={value} index={1}>
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
        </TabPanel>
        {searchTerm ? (
          <TabPanel value={2} index={2}>
            <SearchPage />
          </TabPanel>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}
