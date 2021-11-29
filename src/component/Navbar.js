import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="container1">
            <h3> Task Manager</h3>
       
       <nav className="one">
          <ul>
              <li>
              <Link  to="/">LoginForm</Link>
            </li>
            
            <li>
              <Link to="/registrationForm">Registration Form</Link>
            </li>
      
            <li>
              <Link to="/addtask">Add Task</Link>
            </li>
          </ul>
        </nav>
        </div>
    )
}

export default Navbar;