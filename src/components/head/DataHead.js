import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import TextButton from './headelements/TextButton';
import DisplayText1 from './headelements/headtext/DisplayText1';
import DisplayText2 from './headelements/headtext/DisplayText2';
import DisplayText3 from './headelements/headtext/DisplayText3';

const useStyle = makeStyles({
  root: {
    position: 'absolute',
    top: '7vh',
    width: '99.5vw',
  },
});

function CallWork() {
  const { getUserCall } = useSelector((state) => state.getUserCall);
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <TextButton />
      {getUserCall != null ? (
        <div>
          <DisplayText1
            text="Total Customer Called"
            num={getUserCall.overview.processedCustomerCount}
            den={getUserCall.overview.totalCustomerCount}
          />
          <div
            style={{
              position: 'absolute',
              left: '70vw',
              top: '0.5vh',
              borderRight: '0.1vw solid #5DAAE033',
              paddingRight: '1.5vw',
              height: '7vh',
            }}
          />
          <DisplayText2
            text="Total Time Spent on Call"
            num={getUserCall.overview.completedCallingMinutes}
            den={getUserCall.overview.expectedCallingMinutes}
          />
          <div
            style={{
              position: 'absolute',
              left: '84vw',
              top: '0.5vh',
              borderRight: '0.1vw solid #5DAAE033',
              paddingRight: '1.5vw',
              height: '7vh',
            }}
          />
          <DisplayText3
            text="Total Past Due Touched"
            num={getUserCall.overview.totalPastDueProcessed}
            den={parseInt(getUserCall.overview.totalPastDueAmount, 10)}
          />
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export default CallWork;
