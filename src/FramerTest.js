import React, { useState } from "react";

import Loader from "./components/Loader";
import Modal from "./components/Modal";
import Buttons from "./components/Buttons";

import UploadForm from "./components/forms/uploadForm";

const FramerTest = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <div className="max-w-screen-xl px-4 md:px-6 lg:px-8">
        <div>
          <h2 className="text-4xl font-bold mb-4">Framer Animations</h2>
        </div>
        <div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Loader</h3>
          </div>
          <Loader />
        </div>
        <div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Modal</h3>
          </div>
          <Buttons onClick={() => setShowModal(!showModal)}>Modal</Buttons>
        </div>
        <div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Formulare</h3>
          </div>
          <UploadForm />
        </div>
      </div>
    </>
  );
};

export default FramerTest;
