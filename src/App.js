import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from 'react-router-dom';
import { Row, Col, Navbar, CardTitle, CardBody, CardText, Button, Container, Card, CardSubtitle, Badge, CardHeader } from 'reactstrap';
import './App.css';
import Landing from './components/landing.js';
import Menu from './components/menu.js';
import TopNav from './components/navbar.js';
import Visit from './components/visit.js';
// import Footer from './components/footer.js';


function App() {

  return(
    <div>
      <TopNav />
      {/* <Header /> */}
    <Router>
      <Switch>
        <Route exact path = "/">
          <Landing/>
        </Route>
        <Route path="/menu">
          <Menu/>
        </Route>        
        <Route path="/visit">
          <Visit/>
        </Route>
      </Switch>
    </Router>
    {/* <Footer/> */}

    </div>
  )

}

export default App;
