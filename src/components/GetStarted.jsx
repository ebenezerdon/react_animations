import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const GetStarted = () => {
  return (
    <div className="getStarted">
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

      <Link to='/' className="button">Home</Link>

      <motion.div animate={{opacity: [0, 1]}}>
        <div className="circle c1" />
        <div className="circle c1 ripple" />
        <div className="circle c2" />
        <div className="circle c2 ripple" />
        <div className="circle c3" />
        <div className="circle c3 ripple" />
        <div className="circle c4" />
        <div className="circle c4 ripple"/>
      </motion.div>
    </div>
  )
}

export default GetStarted
