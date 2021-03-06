import React, {useState} from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat.js';
import Login from './Login.js';
import { BrowserRouter as Router,Switch, Route} from 'react-router-dom';
//import SidebarChat from './SidebarChat';
import {useStateValue} from './StateProvider';

function App() {
  const [{user}, dispatch] = useStateValue();
  return (
    <div className="app">
        {!user ? (
          <Login/>
        ):(
        <div className="app__body">
            <Router>
              <Sidebar/>
              <Switch>
                <Route path="/rooms/:roomId">
                  <Chat/>
                </Route>
                <Route path="/">
                  <Chat/>
                </Route>              
              </Switch>            
            </Router>
          </div>
        )}
    </div>
  );
}

export default App;
