import React, { useEffect, useState, useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "../utils/use-dimensions";
import SocialToggle from "./SocialToggle";
import SocialNavigation from "./SocialNavigation";
import "./socialbar.css";

const socialmenu = {
  open: (height = 15) => ({
    clipPath: `circle(${height * 2 + 200}px at 30px 30px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(24px at 32px 32px)",
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
    <div className="relative">
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
        className="social-nav"
      >
        <motion.div
          className="social-nav__background bg-gray-50"
          variants={socialmenu}
        />
        <SocialNavigation />
        <SocialToggle toggle={() => setIsOpen()} />
      </motion.nav>
    </div>
  );
};

export default SocialBar;
