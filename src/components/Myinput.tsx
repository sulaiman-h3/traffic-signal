import { useState } from "react";
const MyInput  = () => {
    const [myInputValue, setMyInputValue]= useState("");
function handleinputchange(event) {
    setMyInputValue(event.target.value);
}
    return (
        <div>
            <label>Your Name</label>
            <input value={myInputValue} onChange={handleinputchange} type="text" />
        </div>
    )
}
export default MyInput;