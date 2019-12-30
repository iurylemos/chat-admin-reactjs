import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Páginas
import Login from './view/login';
import Home from './view/home';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/login" component={Login}></Route>
    </Router>
  )
}

export default App;
