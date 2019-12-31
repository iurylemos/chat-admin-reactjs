import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

//Páginas
import Login from './view/login';
import Home from './view/home';
import Chat from './view/chat';
import Usuarios from './view/usuarios';

//Reducer
import { store, persistor } from '../src/services/auth';
//Import para autenticação
import { PersistGate } from 'redux-persist/integration/react'

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/chat" component={Chat}></Route>
          <Route exact path="/usuarios" component={Usuarios}></Route>
        </Router>
      </PersistGate>
    </Provider>
  )
}

export default App;
