import React, { useState } from 'react';
import './login.css';
import { Link, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../services/auth'

function Login() {

  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [msgTipo, setMsgTipo] = useState();

  //useDispath é utilizado para enviar solicitações
  const dispatch = useDispatch();

  function logar() {

    login(email, senha).then((res) => {
      setMsgTipo('sucesso')
      if (res.data !== '') {
        setTimeout(() => {
          dispatch({ type: 'LOG_IN', usuarioEmail: email })
        }, 2000);
      }
      console.log(res)
    }).catch(error => {
      setMsgTipo('error')
      console.log(error)
    })

  }

  return (
    <div className="login-content d-flex align-items-center">

      {/* Vou utilizar aqui o redirect, se o usuário estiver logado */}
      {
        useSelector(state => state.usuarioLogado) > 0 ? <Redirect to=""></Redirect> : null
      }


      <form className="form-signin mx-auto">
        <img className="mb-4" src="/docs/4.4/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
        <h1 className="h3 mb-3 font-weight-normal text-white font-weight-bold text-center">LOGIN</h1>
        <label className="sr-only">Email address</label>
        <input onChange={(e) => setEmail(e.target.value)} type="email" id="inputEmail" className="form-control my-2" placeholder="Email" />
        <label className="sr-only">Password</label>
        <input onChange={(e) => setSenha(e.target.value)} type="password" id="inputPassword" className="form-control my-2" placeholder="Senha" />
        <button onClick={logar} className="btn btn-lg btn-block btn-login" type="button">Logar</button>

        <div className="msg-login text-white text-center mt-2">
          {/* UTILIZANDO O IF TERNÁRIO, SE A MSG FOR SUCESSO && QUE SIGNIFICA ENTÃO */}
          {msgTipo === 'sucesso' && <span role="img" aria-label="sheep"><strong>WOW!</strong> Você está conectado! &#128526;</span>}
          {msgTipo === 'error' && <span role="img" aria-label="sheep"><strong>OPS!</strong> Verifique se a senha ou usuário estão corretos! &#128527;</span>}
        </div>

        <div className="opcoes-login mt-5 text-center">
          <a href="/#" className="mx-2">Recuperar senha</a>
          <span className="text-white">&#9733;</span>
          <a href="/#" className="mx-2">Quero me Cadastrar</a>
        </div>
      </form>
    </div>
  )
}

export default Login
