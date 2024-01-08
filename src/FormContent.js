import React from 'react'
import './style.css'
import FormText from './FormText'
import SentimentResult from './SentimentResult'

const FormContent = () => {
  return (
    <div className = "formContent">
      <FormText/>
      <SentimentResult/>
    </div>
  )
}

export default FormContent
