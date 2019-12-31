import axios from 'axios';
import { createStore } from 'redux';
import usuarioReducer from './usuarioReducer'
import { persistReducer, persistStore } from 'redux-persist';

//Importação que nós vamos amazenar o estado do usuário no navegador
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'siteeventos',
  storage,
}

function login(email, password) {

  let objJSON = {
    "email": email,
    "password": password
  }

  return axios.post(`http://localhost:5000/user/search`, objJSON)
    .then(res => {
      console.log(res);
      console.log(res.data);
      return res
    })

}

const persistedReducer = persistReducer(persistConfig, usuarioReducer)

const store = createStore(persistedReducer);
const persistor = persistStore(store)

export { login, store, persistor }