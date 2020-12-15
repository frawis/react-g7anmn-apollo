import React from "react";
import { motion } from "framer-motion";

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.3,
      yoyo: Infinity
    }
  }
};

const Buttons = ({ children, onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      variants={buttonVariants}
      whileHover="hover"
      className="px-4 py-2 bg-yellow-500 text-white text-sm uppercase tracking-wide rounded-md focus:outline-none"
    >
      {children}
    </motion.button>
  );
};

export default Buttons;
