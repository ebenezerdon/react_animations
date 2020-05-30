import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group'

const FirstPage = ({ setHomepage }) => {
  return (
    <div className="first-page">
      <CSSTransitionGroup
        transitionName="fadeIn"
        transitionAppear={true}
      >
        <p className="title">
          Small changes can make a big impact on our planet
        </p>
      </CSSTransitionGroup>
      {/* <CSSTransitionGroup> */}
        <p className="sub-text">
          We all want a healthy planet for today and tomorrow.
          The small choices we make each day can help us get
          there. Learn simple tips from Google, the California
          Academy of Sciences, and the Ellen MacArthur Foundation
          to help people and the planet thrive together.
        </p>
      {/* </CSSTransitionGroup> */}
      {/* <CSSTransitionGroup> */}
        <button className="button blue"
          onClick={() => setHomepage(false)}>
            Let's get started
        </button>
      {/* </CSSTransitionGroup> */}
    </div>
  )
}

export default FirstPage;
