import React, { useState } from 'react'
import "./Form.css"
function Form() {
  const[doc,setDoc]=useState('')
  const changeDoc=event=>{
    setDoc(event.target.value)
  
  }
  const submit=event=>{
    event.preventDefault();
  }
  return (
    <div className="Form">
      <form>
      <label className='doctr'>FIND A DOCTOR : 
        <input type="text" className='box' onChange={changeDoc} value={doc}/>
        </label>
        <button type='button' onClick={submit} className='search'>Search</button>
        </form>
    </div>
  )
}

export default Form

