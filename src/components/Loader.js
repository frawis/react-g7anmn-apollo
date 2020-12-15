import React from "react";
import { motion, useCycle } from "framer-motion";

const loaderVariants = {
  animationOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.5
      },
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: "easeOut"
      }
    }
  },
  animationTwo: {
    y: [0, -40],
    x: 0,
    transition: {
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: "easeOut"
      }
    }
  }
};

const Loader = () => {
  const [animation, cycleAnimation] = useCycle("animationOne", "animationTwo");

  return (
    <>
      <motion.div
        className="w-8 h-8 my-8 mx-auto rounded-full bg-yellow-500"
        variants={loaderVariants}
        animate={animation}
      />
      <button onClick={() => cycleAnimation()}>Change Loader</button>
    </>
  );
};

export default Loader;
