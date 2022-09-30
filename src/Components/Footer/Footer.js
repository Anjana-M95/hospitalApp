import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <div className="Footer">
        <div className='left'>
        <h2 className='hname'>Human Care Hospital Centre</h2>
        <h4 className='media'>Locate Us:</h4>
        <div className='smedia'>
        <a href ='insta'>Instagram</a><br/>
        <a href='fb'>Facebook</a><br/>
        <a href='tweet'>Twitter</a><br/>
        </div></div>
        <div className='two'>
            <ul className='middle'>
                <li>Contact Us</li>
                <li>Laboratory Reports</li>
                <li>Health Packages</li>
               
            </ul>
            <ul className='right'>
                <li>Emergency</li>
                <li>Covid-19 cases</li>
                <li>News & Events</li>
            </ul>
        </div>
    </div>
    

  )
}

export default Footer