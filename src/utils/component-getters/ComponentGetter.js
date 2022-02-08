import React from 'react';
import { MY_RENDER_APP } from '../Constants';
import FirstCard from '../../components/homePage/FirstCard';
import SecondCard from '../../components/homePage/SecondCard';

function componentGetter(props) {
  const { componentId, data } = props;
  switch (componentId) {
    case MY_RENDER_APP.FIRST_CARD:
      return <FirstCard data={data} />;
    case MY_RENDER_APP.SUMMARY_CARD:
      return <SecondCard />;
    default:
      return null;
  }
}

export default componentGetter;
