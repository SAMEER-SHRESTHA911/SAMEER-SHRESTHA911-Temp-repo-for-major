import React, {useEffect, useState} from 'react'
import './style.css'
const FormText = ({resp, setResp}) => {
  const [text,setText] = useState("");


  useEffect(()=>{
    if(text===""){
      //code to send the text to backend
      //setResp(response from backend)
    }
  },[text]);

  // const handleFormSubmit = (e) => {
  //   e.preventDefault();
  //   //Backend ko aesi milamla
  //   console.log('Text submitted:',text);
  // }

  const handleEnter = (e) => {
    setText(e.target.value);
  }

  const handleFormSubmit = (e) => {
    if(e.key === 'Enter'){ 
      console.log('Text submitted:',text);
      //send the text to backend
      //accept response from backend
      //setResp(response from backend)
    } 
  }

  return (
    <>
        <div className="formtext">
          <h2>Enter The Text</h2>
          <form onSubmit={handleFormSubmit}>
            <textarea 
              value = {text} 
              onChange={(e)=>handleEnter(e)}
              onKeyDown={(e)=>handleFormSubmit(e)}
              placeholder="एशियन लाईफको बोनस शेयर शेयरधनीको हितग्राही खातामा जम्मा"
            />
            <button type="classify">Classify Text</button>
          </form>
        </div>
    </>
  );
}

export default FormText
