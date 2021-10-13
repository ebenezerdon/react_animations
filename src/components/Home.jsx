import React from 'react'
import { motion } from 'framer-motion'
import { useHistory } from 'react-router-dom'

const Home = () => {
  const history = useHistory()

  return (
    <div className="home">
      <motion.p
        className="title"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: [0, 1], y: [100, 100, 0] }}
        transition={{ ease: 'easeOut', duration: 1 }}
      >
        Small changes can make a big impact on our planet
      </motion.p>
      <motion.p
        className="sub-text"
        initial={{opacity: 0, y: 180}}
        animate={{opacity: [0, 0, 0, 1], y: [180, 180, 0]}}
        transition={{ ease: "easeOut", duration: 1.3 }}
      >
        We all want a healthy planet for today and tomorrow.
        The small choices we make each day can help us get
        there. Learn simple tips from Google, the California
        Academy of Sciences, and the Ellen MacArthur Foundation
        to help people and the planet thrive together.
      </motion.p>
      <motion.button
        className="button"
        onClick={() => history.push('/get-started')}
        initial={{opacity: 0, y: 180}}
        animate={{opacity: [0, 0, 0, 1], y: [180, 150, 150, 0]}}
        transition={{ ease: "easeOut", duration: 1.3 }}
      >
          Let's get started
      </motion.button>
    </div>
  )
}

export default Home
