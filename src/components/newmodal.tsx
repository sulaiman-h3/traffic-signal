// import { useState, useRef, forwardRef } from "react";

// const LastName = forwardRef((_, ref) => {
//   return (
//     <div className="input-con">
//       <label className="name">Your Last Name</label>

//       <input className="input" ref={ref} type="text" />
//     </div>
//   );
// });
// const NewModal = () => {
//   const [modal, setModal] = useState(false);
//   const [firstNameValue, setFirstNameValu] = useState("");
//   const lastNameRef = useRef(null);
//   const [greating, setGreating] = useState("");
//   const emailRef = useRef(null);

//   const openModal = () => {
//     setModal(true);
//   };
//   const closeModal = () => {
//     setModal(false);
//   };
//   const handleFirstName = (event) => {
//     setFirstNameValu(event.target.value);
//   };
//   const handleGreating = () => {
//     const lastName = lastNameRef.current.value;
//     const email = emailRef.current?.value ?? "";
//     setGreating(`Hello ${firstNameValue} ${lastName}, your email is ${email}`);
//   };

//   return (
//     <>
//       <button onClick={openModal} className="btn-modal">
//         Open a modal
//       </button>
//       {modal && (
//         <div className="modal">
//           <div>
//             <div className="modal-content">
//               <h2 className="paragraph">WELCOME!</h2>
//               <p>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                 Distinctio aut et minus fuga aspernatur soluta asperiores odit
//                 illo eaque excepturi. Dolor officia a excepturi dolorem et
//                 eveniet, harum qui inventore!
//               </p>
//               <div className="form-container">
//                 <div className="input-con">
//                   <label className="name">Your First Name</label>
//                   <input
//                     className="input"
//                     onChange={handleFirstName}
//                     value={firstNameValue}
//                     type="text"
//                   />
//                 </div>
//                 <div className="input-con">
//                   <LastName ref={lastNameRef} />
//                   <div className="input-con">
//                     <label className="name">Your Email</label>
//                     <input className="input" ref={emailRef} type="email" />
//                   </div>
//                   <button
//                     className="submit"
//                     onClick={handleGreating}
//                     type="submit"
//                     disabled={firstNameValue === ""}
//                   >
//                     Submit
//                   </button>
//                 </div>
//               </div>
//               <div>
//                 <p>{greating}</p>
//               </div>
//               <button onClick={closeModal} className="close-modal">
//                 X
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default NewModal;

import { useState, useRef } from "react";

const NewModal = () => {
  const [modal, setModal] = useState(false);
  const [formInputs, setFormInputs] = useState({ firstName: "", lastName: "" });
  const [greating, setGreating] = useState("");
  const emailRef = useRef(null);

  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };
  const handlefirstname = (event) => {
    setFormInputs({ ...formInputs, firstName: event.target.value });
  };
  const handleLastName = (event) => {
    setFormInputs({...formInputs, lastName: event.target.value})
  };
  const handleGreating = () => {
    const email = emailRef.current?.value ?? "";
    setGreating(
      `Hello ${formInputs.firstName} ${formInputs.lastName}, your email is ${email}`,
    );
  };

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
                  <input
                    className="input"
                    value={formInputs.firstName}
                    onChange={handlefirstname}
                    type="text"
                  />
                </div>
                <div className="input-con">
                  <label className="name">Your Last Name</label>
                  <input
                    className="input"
                    value={formInputs.lastName}
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
                    disabled={formInputs.firstName === ""}
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
