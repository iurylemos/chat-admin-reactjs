import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Páginas
import Login from './view/login';
import Home from './view/home';
import Chat from './view/chat';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/login" component={Login}></Route>
      <Route exact path="/chat" component={Chat}></Route>
    </Router>
  )
}

export default App;
