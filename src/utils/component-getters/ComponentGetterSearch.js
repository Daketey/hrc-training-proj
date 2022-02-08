import React from 'react';
import SearchCard from '../../components/searchPage/SearchCard';

function componentGetter(props) {
  const { componentId, data } = props;
  switch (componentId) {
    case 'searchcard':
      return data ? <SearchCard data={data} /> : '';
    default:
      return null;
  }
}

export default componentGetter;
