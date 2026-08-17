import { useState, useRef, type ChangeEvent } from "react";

const NewModal = () => {
  const [modal, setModal] = useState(false);
  const [firstNameValue, setfirstNameValu] = useState("");
  const [lastname, setLastNameValue] = useState("");
  const [greating, setGreating] = useState("");
  const emailRef = useRef<HTMLInputElement>(null);

  function openModal() {
    setModal(true);
  }
  function closeModal() {
    setModal(false);
  }
  function handlefirstname(event: ChangeEvent<HTMLInputElement>) {
    setfirstNameValu(event.target.value);
  }
  function handleLastName(event: ChangeEvent<HTMLInputElement>) {
    setLastNameValue(event.target.value);
  }
  function handleGreating() {
    const email = emailRef.current?.value ?? "";

    setGreating(
      `Hello ${firstNameValue} ${lastname}, your email is ${email}`,
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
                    disabled={firstNameValue===" "}
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




// import { useState, useRef } from "react";

// const NewModal = () => {
//   const [modal, setModal] = useState(false);
//   const [firstNameValue, setfirstNameValu] = useState("");
//   const [lastname, setLastNameValue] = useState("");
//   const [greating, setGreating] = useState("");

//   const emailRef = useRef(null);

//   function openModal() {
//     setModal(true);
//   }

//   function closeModal() {
//     setModal(false);
//   }

//   function handlefirstname(event) {
//     setfirstNameValu(event.target.value);
//   }

//   function handleLastName(event) {
//     setLastNameValue(event.target.value);
//   }

//   function handleGreating() {
//     const email = emailRef.current.value;

//     const userData = {
//       firstName: firstNameValue,
//       lastName: lastname,
//       email: email,
//     };

//     sessionStorage.setItem("userData", JSON.stringify(userData));

//     setGreating(
//       `Hello ${firstNameValue} ${lastname}, your email is ${email}`,
//     );
//   }

//   function clearStorage() {
//     sessionStorage.removeItem("userData");

//     setfirstNameValu("");
//     setLastNameValue("");
//     setGreating("");

//     if (emailRef.current) {
//       emailRef.current.value = "";
//     }
//   }

//   return (
//     <>
//       <button onClick={openModal} className="btn-modal">
//         Open a modal
//       </button>

//       <button onClick={clearStorage} style={{margin:'10px'}}>
//         Clear Saved Data
//       </button>

//       {modal && (
//         <div className="modal">
//           <div>
//             <div className="modal-content">

//               <h2 className="paragraph">WELCOME!</h2>

//               <p>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                 Distinctio aut et minus fuga aspernatur soluta asperiores odit
//                 illo eaque excepturi.
//               </p>

//               <div className="form-container">

//                 <div className="input-con">
//                   <label className="name">
//                     Your First Name
//                   </label>

//                   <input
//                     className="input"
//                     value={firstNameValue}
//                     onChange={handlefirstname}
//                     type="text"
//                   />
//                 </div>

//                 <div className="input-con">
//                   <label className="name">
//                     Your Last Name
//                   </label>

//                   <input
//                     className="input"
//                     value={lastname}
//                     onChange={handleLastName}
//                     type="text"
//                   />
//                 </div>

//                 <div className="input-con">
//                   <label className="name">
//                     Your Email
//                   </label>

//                   <input
//                     className="input"
//                     ref={emailRef}
//                     type="email"
//                   />
//                 </div>

//                 <button
//                   className="submit"
//                   onClick={handleGreating}
//                   type="button"
//                 >
//                   Submit
//                 </button>

//               </div>

//               <div>
//                 <p>{greating}</p>
//               </div>

//               <button
//                 onClick={closeModal}
//                 className="close-modal"
//               >
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