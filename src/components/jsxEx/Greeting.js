import React from 'react';

const Greeting = (props) => {
  const name = props.name;
  return (
    <div>
      <h2>Hello, {name}!</h2>
      <p>Current year: {new Date().getFullYear()}</p>
    </div>
  );
}

export default Greeting;