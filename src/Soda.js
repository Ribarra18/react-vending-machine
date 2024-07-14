import React from "react";
import { Link } from "react-router-dom";

function Soda() {
  return (
    <div>
      <h1>Soda</h1>
      <p>Fizz, fizz, fizz!</p>
      <Link to="/">Go back</Link>
    </div>
  );
}

export default Soda;
