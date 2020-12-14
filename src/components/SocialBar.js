import React, { useEffect, useState, useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "../utils/use-dimensions";
import SocialToggle from "./SocialToggle";
import SocialNavigation from "./SocialNavigation";

const socialmenu = {
  open: (height = 300) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

const SocialBar = () => {
  const [isOpen, setIsOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <motion.div className="background" variants={socialmenu} />
      <SocialNavigation />
      <SocialToggle toggle={() => setIsOpen()} />
    </motion.nav>
  );
};

export default SocialBar;
