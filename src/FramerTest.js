import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Accordion = ({ i, expanded, setExpanded }) => {
  const isOpen = i === expanded;
  return (
    <>
      1
      <motion.header
        initial={false}
        animate={{
          backgroundColor: isOpen
            ? "bg-gray-500 text-white"
            : "bg-yellow-500 text-yellow-50"
        }}
        onClick={() => setExpanded(isOpen ? false : data)}
      />
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div>1</div>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

const FramerTest = () => {
  const [expanded, setExpanded] = useState(false, 0);
  const accordionIds = [0, 1, 2, 3];
  console.log(expanded);
  return (
    <>
      <div className="max-w-screen-xl px-4 md:px-6 lg:px-8">
        <div>
          <h2>Framer Animations</h2>
        </div>
        <div>
          <div>
            <motion.h2 animate={{ scale: 1.2 }}>Akkordion</motion.h2>
          </div>
          <div>
            {accordionIds.map(i => {
              <Accordion i={i} expanded={expanded} setExpanded={setExpanded} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default FramerTest;
