import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
};

const modal = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: {
    y: "200px",
    opacity: 1,
    transition: { delay: 0.5 }
  }
};

const Modal = ({ showModal, setShowModal }) => {
  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-gray-300 opacity-75 z-30"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div
            className="modal w-full max-w-md mx-auto py-12 px-6 bg-white rounded-md text-center"
            variants={modal}
          >
            <p className="text-gray-600 text-lg">Text im Modal</p>

            <button onClick={() => setShowModal(!showModal)}>Schliessen</button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
