import { useState } from "react";

const NewModal = () => {
  const [modal, setModal] = useState(false);

  function openModal() {
    setModal(true);
  }

  function closeModal() {
    setModal(false);
  }

  return (
    <>
      <button onClick={openModal}>Open a modal</button>

      {modal && (
        <div className="modal">
          <h2>Done</h2>
          <p>What's the next step?</p>
          <button onClick={closeModal}>Close</button>
        </div>
      )}
    </>
  );
};

export default NewModal;