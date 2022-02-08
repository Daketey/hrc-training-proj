import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    left: '75vw',
    top: '1vh',
    color: 'white',
    display: 'flex',
  },
  search: {
    backgroundColor: '#5daae0',
    borderRadius: '2vw',
    fontSize: '1.75vw',
    zIndex: '1',
  },
  searchBar: {
    position: 'absolute',
    left: '2.5vw',
    top: '0.3vh',
    border: '2px solid #5daae0',
    backgroundColor: '#3d4d62',
    borderColor: '#5daae0',
    borderRadius: '5vw',
    width: '14vw',
    height: '4.5vh',
    marginLeft: '-2vw',
    color: 'white',
  },
});

function Searchbar() {
  const dispatch = useDispatch();
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div
        style={{
          width: '2.75vw',
          height: '5.5vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#5daae0',
          borderRadius: '10vw',
          zIndex: '1',
        }}
      >
        <SearchIcon className={classes.search} />
      </div>
      <div className={classes.searchBar}>
        <input
          onChange={(event) => {
            dispatch({ type: 'SEARCH', payload: event.target.value });
            dispatch({ type: 'GET_SEARCH_DATA' });
          }}
          type="text"
          placeholder="Search Name"
          style={{
            color: 'white',
            outline: 'none',
            background: 'transparent',
            border: 'none',
            position: 'absolute',
            top: '1.15vh',
            left: '2.5vw',
          }}
        />
      </div>
    </div>
  );
}

export default Searchbar;
