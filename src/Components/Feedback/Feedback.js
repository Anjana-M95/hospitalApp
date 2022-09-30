            import React, { useEffect, useState } from 'react'
            import './Feedback.css'
            function Feedback() {
              const [name,setName]=useState([]);
              const [feedback,setFeedback]=useState([]);
              const [value,setValue]=useState([]);
              
            const changeName=(event)=>{
                setName(event.target.value) 
            
                }
              const changeFeedback=(event)=>{
                setFeedback(event.target.value)
            
                
            }
                const submit=(event)=>{
                const item={name,feedback}
                value.push(item);
                console.log(value)
                localStorage.setItem('value',JSON.stringify(value))
                event.preventDefault();
                setName('')
                setFeedback('')
              }
           
  
          useEffect(()=>{
            const value=JSON.parse(localStorage.getItem('value'))
            if(value){
              setValue(value)
            }
          },[])
            return (
                <div className='Feedback'>
                  {
                      value.map((item)=>{
                      return(
                      <h4>{item.name}:{item.feedback}</h4>
                      )}
                        
                      )
            }
                  <div className='forum'>
                  <form>
                    <label>Name</label><br></br>
                    <input  type="text"  name="name" value={name} onChange={changeName}/><br></br>
                    <label>Feedback</label><br></br>
                    <textarea type="text" name='feedback' value={feedback} onChange={changeFeedback}/><br></br>
                    <button className='button' type='submit' onClick={submit}>Submit</button>
                    </form>
                    </div>
                </div>
              );
            }

            export default Feedback