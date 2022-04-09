function Keypad(password) {
  function handleChange() {
    console.log("Entering password...");
  }
  return <input onChange={handleChange} type="password"></input>;
}

export default Keypad;
