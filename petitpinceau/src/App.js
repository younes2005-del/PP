import React, { useEffect, useState } from "react";
import shop from './shop'
import About from './about'
import Admin from './admin'
import Nav from './Nav'



import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Home';






function App() {
  
  return (
    <Router>
      <div className="App">
    
        <Nav/>

        <Switch>
        <Route path="/admin" exact component={Admin}/>

          <Route path="/about" exact component={About}/>
          <Route path="/shop" component={shop}/>
          <Route path="/" component={Home}/>
        </Switch>
      </div>
    </Router>
  );
}



export default App;
