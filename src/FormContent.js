import React, { useState } from 'react'
import './style.css'
import FormText from './FormText'
import SentimentResult from './SentimentResult'

const FormContent = () => {
  const [resp, setResp] = useState();

  return (
    <div className = "formContent">
      <FormText resp={resp} setResp={setResp} />
      <SentimentResult resp={resp}/>
    </div>
  )
}

export default FormContent
