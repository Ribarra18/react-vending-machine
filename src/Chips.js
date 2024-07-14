import React from 'react';
import { Link } from 'react-router-dom';

function Chips() {
  return (
    <div>
      <h1>Chips</h1>
      <p>Crunch, crunch, crunch!</p>
      <Link to="/">Go back</Link>
    </div>
  );
}

export default Chips;
