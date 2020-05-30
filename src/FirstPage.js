import React, { useState } from 'react';
import { CSSTransitionGroup } from 'react-transition-group'

const FirstPage = ({ setHomepage }) => {
  return (
    <>
      <h1>First Page</h1>
      <button onClick={() => setHomepage(false)}>Let's get started</button>
    </>
  )
}

export default FirstPage;
