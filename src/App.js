import React, { useState } from 'react';
import { CSSTransitionGroup } from 'react-transition-group'
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import './app.scss';

function App() {
  const [onHomepage, setHomepage] = useState(true);

  if (onHomepage) return <FirstPage setHomepage={setHomepage} />
  else return <SecondPage setHomepage={setHomepage} />
}

export default App;
