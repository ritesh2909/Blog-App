import React from 'react'
import Home from './components/Home'
import Topbar from './components/Topbar'
import './app.css';
import Single from './components/Single';
import Write from './components/Write';
import Settings from './components/Settings';
import Login from './components/Login';
import Register from './components/Register';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useContext } from 'react';
import { Context } from './context/Context';

function App() {
  
  const { user } = useContext(Context);
  return (
    <>
      <Router>
        {/* navbar */}
        <Topbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        {/* register page */}
          <Route exact path="/register"> {user ? <Home /> : <Register />} </Route>

        {/* login page */}
          <Route exact path="/login"> {user ? <Home /> : <Login />} </Route>

        {/* creating a new post  page */}
          <Route exact path="/write"> {user ? <Write /> : <Register />} </Route>

        {/* settings page */}
          <Route exact path="/settings"> {user ? <Settings /> : <Login />} </Route>

        {/* single post page */}
          <Route exact path="/post/:postId"> <Single /> </Route>


        </Switch>
      </Router>

    </>
  )
}

export default App