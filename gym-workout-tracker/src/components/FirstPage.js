import React from 'react';

const FirstPage = () => {
  return (
    <div>
      <h1>Hello Worlds!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
}

export default FirstPage;