import ModalForm from "../ModalForm";
import React, { useState } from "react";

const GetAQuoteButton: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    document.body.style.overflow = "hidden";
    setModalOpen(true);
  };

  const closeModal = () => {
    document.body.style.overflow = "auto";
    setModalOpen(false);
  };
  return (
    <>
      <button
        className=" bg-blue-900 text-white p-3 text-xs rounded font-bold uppercase border-2  border-blue-900 mr-2  hover:bg-white hover:text-blue-900 hover:border-blue-900 duration-200"
        onClick={openModal}
      >
        Get a Quote
      </button>
      {isModalOpen && <ModalForm handleClose={closeModal} />}
    </>
  );
}

export default GetAQuoteButton;
