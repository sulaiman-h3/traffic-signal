import { useState } from "react";
import MyInput from "./Myinput";

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
      <button onClick={openModal} className="btn-modal">
        Open a modal
      </button>
      {modal && (
        <div className="modal">
          <div>
            <div className="modal-content">
              <h2 className="paragraph">Hello Modal</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio aut et minus fuga aspernatur soluta asperiores odit
                illo eaque excepturi. Dolor officia a excepturi dolorem et
                eveniet, harum qui inventore!
              </p>
              <MyInput/>
              <button onClick={closeModal} className="close-modal">
                close modal
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NewModal;
