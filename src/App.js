import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Profile from './components/profile'
import Experience from './components/experience'
import './scss/standard/App.scss';
import Japan from './components/japan';
import Loader from './components/loader';
import Navbar from './components/navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> 
        {/* <Route path="/" exact component={Loader}/> */}
        <Route path="/profile" exact component={Profile}/>
        <Route path="/experience" exact component={Experience}/>
        <Route path="/japan" exact component={Japan}/>
      </div>
    </Router> 
  );
}

export default App;
