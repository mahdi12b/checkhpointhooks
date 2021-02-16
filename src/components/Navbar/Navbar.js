import  'react-bootstrap'
import './style.css'
import React from 'react'

 const Navbar= () => {
 
    return (
      <nav className="nav-container">
       <div className='flex'>
        <div className="main-bullet">
       
        <a to="/" className="nav-element">
          Home
        </a>
        <a to="#" className="nav-element">
          Projects
        </a>
        <a to="#" className="nav-element">
          Blog
        </a>
        <a to="#" className="nav-element">
          About
        </a>
      </div>
      <div>
      
      </div>
     </div>
    </nav>
    )
}

export default Navbar
