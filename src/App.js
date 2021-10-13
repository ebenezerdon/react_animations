import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import GetStarted from './components/GetStarted'
import './app.scss'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/get-started" component={GetStarted}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
