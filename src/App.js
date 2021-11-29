import React from "react";
import './App.css';
import LoginForm from "./component/LoginForm";
import RegistrationForm from './component/RegistrationForm';
import AddTask from './component/AddTask';
import { BrowserRouter as Router,
         Switch,
         Route,
         Link } from "react-router-dom";
import Navbar from "./component/Navbar";


function App() {
  return (
    <Router>
      <div >
        <Navbar/>
      {/* <nav>
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
        </nav> */}


        <Switch>
          <Route exact path="/">
            <LoginForm />
          </Route>
          <Route path="/registrationForm">
            <RegistrationForm />
          </Route>
          <Route path="/addtask">
            <AddTask />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
