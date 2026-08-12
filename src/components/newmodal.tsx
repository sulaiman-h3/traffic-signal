import { useState } from "react";

const NewModal = () => {
  const [modal, setModal] = useState(false);

  function openModal() {
    setModal(true);
  }

  return (
    <>
      <button onClick={openModal}>Open a modal</button>

      {modal && (
        <div className="modal">
          <h2>Done</h2>
          <p>what's the next step??</p>
        </div>
      )}
    </>
  );
};

export default NewModal;
