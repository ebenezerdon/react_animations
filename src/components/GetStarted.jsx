import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const GetStarted = () => {
  return (
    <div className="second-page">
      <motion.h1
        className="title"
        initial={{ x: 100, y: -100 }}
        animate={{ x: 0, y: 0 }}
        transition={{ ease: 'easeOut', duration: 1.3 }}
        drag={true}
        dragConstraints={{ top: 1, bottom: 1, right: 1, left: 1 }}
        dragElastic={1}
        whileHover={{cursor: "pointer"}}
      >
        Your Plan, &nbsp; &nbsp; <br/> &nbsp; &nbsp; &nbsp; Your Planet
      </motion.h1>

      <Link to='/'>Home</Link>

      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
      >
        <div className="outer circle1" />
        <div className="outer circle2" />
        <div className="outer circle3" />
        <div className="outer circle4"/>
        <div className="inner circle1" />
        <div className="inner circle2" />
        <div className="inner circle3" />
        <div className="inner circle4" />
      </motion.div>
    </div>
  )
}

export default GetStarted
