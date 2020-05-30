import React from 'react';

const SecondPage = ({ setHomepage }) => {
  return (
    <div class="second-page">
      <button className="button" onClick={() => setHomepage(true)}>Back</button>
      <p classsName="title">Your Plan,</p>
      <p className="title">&nbsp; &nbsp; Your Planet</p>
    </div>
  )
}

export default SecondPage;
