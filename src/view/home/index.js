import React from 'react';
import './home.css'
import Topo from '../../components/topo';
import NavBar from '../../components/navbar'

function Home() {
  return (
    <>
      <Topo></Topo>
      <div className="container-fluid">
        <div className="row">
          <NavBar></NavBar>
          <div className="col-md-9 ml-sm-auto col-lg-10 px-4 mt-5">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Dashboard</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home