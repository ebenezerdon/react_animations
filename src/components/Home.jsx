import React from 'react'
import { useHistory } from 'react-router-dom'

const Home = () => {
  const history = useHistory()

  return (
    <div className="home">
      <p className="title">
        Small changes can make a big impact on our planet
      </p>
      <p className="sub-text">
        We all want a healthy planet for today and tomorrow.
        The small choices we make each day can help us get
        there. Learn simple tips from Google, the California
        Academy of Sciences, and the Ellen MacArthur Foundation
        to help people and the planet thrive together.
      </p>
      <button
        className="button"
        onClick={() => history.push('/getStarted')}
      >
          Let's get started
      </button>
    </div>
  )
}

export default Home
