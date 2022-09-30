import React, { useEffect, useState } from 'react'
import Courses from '../Admissions/Courses';
import AcademyAPI from '../../API/AcademyAPI';
import { useSelector,useDispatch } from 'react-redux';
import "./Academy.css"
import AcademicsAPI from '../../API/AcademicsAPI';

function Academy() {
  const academic=useSelector((state)=>state.academyList.value.data)
  const grad=useSelector((state)=>state.academyList.leftvalue.data)
  const [value,setValue]=useState(0)
  const dispatch=useDispatch();

   useEffect(() =>{
   dispatch(AcademyAPI())
 dispatch(AcademicsAPI())}
,[])
 
     const handleTopic=(Id)=>{
        setValue(Id)
       }
      const All=()=>{
        setValue(0)
        }
      return (
    <>
 <div className="Academy">
     
        
    </div>
    <h2>ACADEMICS</h2>
    <button onClick={All}>ALL</button>
   <div className='table'>
   
    <div className='colone'>
    {
       grad && grad.map((item)=>
          <h4 key={item.id} onClick={()=>{handleTopic((item.id))}}>{item.topic}</h4>
          )
      }</div>
      <div className='coltwo'>
        {
        <Courses value={value}></Courses>
}
  </div></div>
  <div>
  <h1>HCH ACADEMY</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt <br></br>
          ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris<br></br> 
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse <br></br>
          cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui<br></br>
           officia deserunt mollit anim id est laborum</p>
  {
        academic && academic.map((item)=>
        <img key={item.id} src={item.image} alt="Academy" width="900px"/>
        )
       }
       </div>
       </>
   );
}
export default Academy