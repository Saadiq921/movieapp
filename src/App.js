import React, { useState } from "react";
import Card from "./Card";

function App() {
  const [userInput, setUserInput] = useState("");

  function handleSubmit(event){
    setUserInput(event.target.value)
  }

  const searchBox ={
    marginTop: "0px"
  }

  const inputBox = (
    <div>
      <h4 style={{marginTop: "10px" }} >Movie Name</h4>
        <input
          style={searchBox}
          type="text"
          className="form-control"
          onChange={handleSubmit}
          value={userInput}
          autoComplete="on"
          placeholder="Enter a movie name..."
        />
        <br />
      </div>
  )

  return (
    
    <div>
      {inputBox}
      <Card userInput={userInput} />
    </div>
  )

}

export default App;