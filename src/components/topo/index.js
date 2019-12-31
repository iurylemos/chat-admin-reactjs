import React from 'react';
import './topo.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function Topo() {

  //useDispath é utilizado para enviar solicitações
  const dispatch = useDispatch();

  return (
    <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
      <a className="navbar-brand col-sm-3 col-md-2 mr-0 font-weight-bold" href="/#">ChatBot Admin</a>
      {/* <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" /> */}
      <ul className="navbar-nav px-3">
        <li className="nav-item text-nowrap">
          <Link className="nav-link" to="/login" onClick={() => dispatch({ type: 'LOG_OUT' })}
          >Sair</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Topo