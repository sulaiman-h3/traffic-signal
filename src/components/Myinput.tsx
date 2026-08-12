const MyInput  = () => {
function handleinputchange() {
alert('you changed the name');
}
    return (
        <div>
            <label>Your Name</label>
            <input onChange={handleinputchange} type="text" />
        </div>
    )
}
export default MyInput;