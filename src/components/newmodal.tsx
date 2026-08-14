import { useState, useRef } from "react";

const NewModal = () => {
  const [modal, setModal] = useState(false);
  const [firstNameValue, setfirstNameValu] = useState("");
  const [lastname, setLastNameValue] = useState("");
  const [greating, setGreating] = useState("");
  const emailRef = useRef();

  function openModal() {
    setModal(true);
  }
  function closeModal() {
    setModal(false);
  }
  function handlefirstname(event) {
    setfirstNameValu(event.target.value);
  }
  function handleLastName(event) {
    setLastNameValue(event.target.value);
  }
  function handleGreating() {
    setGreating(
      `Hello ${firstNameValue} ${lastname}, your email is ${emailRef.current.value}`,
    );
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
              <h2 className="paragraph">WELCOME!</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio aut et minus fuga aspernatur soluta asperiores odit
                illo eaque excepturi. Dolor officia a excepturi dolorem et
                eveniet, harum qui inventore!
              </p>
              <div className="form-container">
                <div className="input-con">
                  <label className="name">Your First Name</label>
                  <input className="input"
                    value={firstNameValue}
                    onChange={handlefirstname}
                    type="text"
                  />
                </div>
                <div className="input-con">
                  <label className="name">Your Last Name</label>
                  <input className="input"
                    value={lastname}
                    onChange={handleLastName}
                    type="text"
                  />
                  <div className="input-con">
                    <label className="name">Your Email</label>
                    <input className="input" ref={emailRef} type="email" />
                  </div>
                  <button
                    className="submit"
                    onClick={handleGreating}
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
              <div>
                <p>{greating}</p>
              </div>
              <button onClick={closeModal} className="close-modal">
                X
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NewModal;
