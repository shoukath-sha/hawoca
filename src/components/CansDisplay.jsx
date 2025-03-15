import React from "react";
import { motion } from "framer-motion";
import "./CansDisplay.css";
import can1 from "../assets/can1.png"; // Replace with actual paths
import can2 from "../assets/can2.png"; // Replace with actual paths
import can3 from "../assets/can3.png"; // Replace with actual paths

const shakeAnimation = {
  animate: {
    rotate: [-5, 5, -5], // Slight rotation for shake effect
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const CansDisplay = () => {
  return (
    <div className="cans-container">
      <motion.img src={can1} alt="Can 1" className="can" {...shakeAnimation} />
      <motion.img src={can2} alt="Can 2" className="can" {...shakeAnimation} />
      <motion.img src={can3} alt="Can 3" className="can" {...shakeAnimation} />
    </div>
  );
};

export default CansDisplay;
