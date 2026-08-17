import { useState } from "react";

const MyForm = () => {
    const [firstInput, setfirstInput]=useState("");
    const [lastInput, setlastInput]= useState("");
    function handleFirstInput(event){
        setfirstInput(event.target.value)
    }
      function handleLastInput(event){
        setlastInput(event.target.value)
    }
    return (
      <>
        <form onSubmit={(event)=> {
            event.preventDefault();
        }}>
            <div style={{padding:'10px'}}>
            <label>Your First Name</label>
            <input value={firstInput} onChange={handleFirstInput} type="text" />
        </div>
         <div>
            <label>Your Last Name</label>
            <input value={lastInput} onChange={handleLastInput} type="text" />
            <button type="submit">submit</button>
        </div>
        </form>
        </>
    );
} 
export default MyForm;













// import { useState } from "react";
// const MyInput  = () => {
//     const [myInputValue, setMyInputValue]= useState("");
// function handleinputchange(event) {
//     setMyInputValue(event.target.value);
// }
//     return (
//         <div>
//             <label>Your Name</label>
//             <input value={myInputValue} onChange={handleinputchange} type="text" />
//         </div>
//     )
// }
// export default MyInput;