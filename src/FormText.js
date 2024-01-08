import React, {useState} from 'react'
import './style.css'
const FormText = () => {
  const [text,setText] = useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
  }
  const handleFormSubmit = (e) => {
    e.preventDefault();
    //Backend ko aesi milamla
    console.log('Text submitted:',text);
  }
  return (
    <>
        <div className="formtext">
          <h2>Enter The Text</h2>
          <form onSubmit={handleFormSubmit}>
            <textarea value = {text} onChange={handleTextChange} placeholder="एशियन लाईफको बोनस शेयर शेयरधनीको हितग्राही खातामा जम्मा

"/>
            <button type="classify">Classify Text</button>
          </form>
        </div>
    </>
  );
}

export default FormText
