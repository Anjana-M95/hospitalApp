import React, { useState } from 'react'
import './Resume.css'

function Resume() {
    const[fullName,setFullName]=useState()
    const[email,setEmail]=useState()
    const[phone,setPhone]=useState()
    const[Address,setAddress]=useState()
   
    const changeFullName=(event)=>{
        setFullName(event.target.value)
    }
    const changeEmail=(event)=>{
        setEmail(event.target.value)
    }
    const changePhone=(event)=>{
        setPhone(event.target.value)
    }
    const changeAddress=(event)=>{
        setAddress(event.target.value)
    }

    const handleSubmit=(event)=>{
        event.PreventDefault();
    }

  return (
    <div className='Resume'>
        <h2>Apply for a Position</h2>
        <p>Please complete the form below to apply for a position with us.</p>
        <form className='apply'>
            <label>Full Name</label><br></br>
            <input type='text' name='fullname' value={fullName} onChange={changeFullName}/><br></br>
            <label>Email</label><br></br>
            <input type='text' value={email} onChange={changeEmail}/><br></br>
            <label>Phone</label><br></br>
            <input type='text' value={phone} onChange={changePhone}/><br></br>
            <label>Address</label><br></br>
            <textarea type='text' value={Address} onChange={changeAddress}/><br></br>
            
            <label>Upload your resume here</label><br></br>
            <button className='choose' type='button'>choose file</button><br></br>
            <input type='text' placeholder='select pdf'/><br></br>
            <button  className='button' type='submit' onClick={handleSubmit}>SUBMIT</button>

        </form>
        
    </div>
  )
}

export default Resume