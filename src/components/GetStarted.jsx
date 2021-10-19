import React from 'react'
import { Link } from 'react-router-dom'

const GetStarted = () => {
  return (
    <div className="getStarted">
      <h1 className="title">
        Your Plan, &nbsp; &nbsp; <br/>
        &nbsp; &nbsp; &nbsp; Your Planet
      </h1>

      <Link to='/' className="button">Home</Link>

      <div>
        <div className="circle c1" />
        <div className="circle c1 ripple" />
        <div className="circle c2" />
        <div className="circle c2 ripple" />
        <div className="circle c3" />
        <div className="circle c3 ripple" />
        <div className="circle c4" />
        <div className="circle c4 ripple"/>
      </div>
    </div>
  )
}

export default GetStarted
