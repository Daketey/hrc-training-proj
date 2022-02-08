import React from 'react';
import { useSelector } from 'react-redux';

export default function Callstat() {
  const { accepted } = useSelector((state) => state.accepted);
  return (
    <div style={{ marginLeft: '45vw' }}>
      <p>{accepted}</p>
    </div>
  );
}
