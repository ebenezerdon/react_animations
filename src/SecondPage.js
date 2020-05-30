import React from 'react';

const SecondPage = ({ setHomepage }) => {
  return (
    <>
      <button onClick={() => setHomepage(true)}>Back</button>
      <h1>Second Page</h1>
    </>
  )
}

export default SecondPage;
