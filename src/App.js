import React, { useState } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {

  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
       <h1>hello world</h1>
       

       {/* the below app__body code is use to create an app body like where you chat and where your contacts list will show */}

       { !user ? (
         <Login />
     ) : ( 
        <div className="app__body">
        <Router>
           <Sidebar />
           <Switch>  
              <Route path="/rooms/:roomId">
                  <Chat />
              </Route>
              <Route path="/">
                   <Chat />
              </Route>
           </Switch>
        </Router>
     </div>
    )}

       
    </div>
  );
}

export default App;
