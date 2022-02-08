/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useSelector } from 'react-redux';
import SearchRender from '../components/utilityComponents/SearchRender';

export default function FirstCard() {
  const { searchData } = useSelector((state) => state.searchData);

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
      {searchData != null ? <SearchRender data={searchData} /> : ''}
    </div>
  );
}
