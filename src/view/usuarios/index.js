import React from 'react';
import './usuarios.css';
import Topo from '../../components/topo';
import NavBar from '../../components/navbar';

function Usuarios() {

    return (
        <>
            <Topo></Topo>
            <div className="container-fluid">
                <div className="row">
                    <NavBar></NavBar>
                    <div className="col-md-9 ml-sm-auto col-lg-10 px-4 mt-5">
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <div className="container">
                                <h2 align="center">Chatbot com JavaScript</h2>
                                <table width="100%">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div align="center" style={{ height: '300px' }}>
                                                    <form name="adminForm">
                                                        <select className="form-control">
                                                            <option value="status" disabled hidden>Status do Usuário</option>
                                                            <option value="1">Ativado</option>
                                                            <option value="0">Desativado</option>
                                                        </select>
                                                        <input type="hidden" id="code_user"></input>
                                                        <input type="text" className="form-control" placeholder="Nome completo"></input>
                                                        <input type="text" className="form-control" placeholder="Nome de usuário"></input>
                                                        <input type="text" className="form-control" placeholder="Email"></input>
                                                        <input type="text" className="form-control" placeholder="Senha"></input>
                                                        <button className="btn btn-lg btn-info">NOVO</button>
                                                        <button className="btn btn-lg btn-info">SALVAR</button>
                                                        <button className="btn btn-lg btn-danger" data-toggle="modal" data-target="#dlDeletar">DELETAR</button>
                                                    </form>
                                                </div>
                                            </td>
                                            <td>
                                                <div style={{ overflowY: 'scroll', height: '300px' }}>
                                                    <table className="table table-striped" width="100%">
                                                        <tbody id="linhas">
                                                            <tr>
                                                                <td width="400px">FULL NAME</td>
                                                                <td align="center">
                                                                    <button className="btn btn-info">
                                                                        Selecionar
                  </button>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div id="dlDeletar" className="modal" role="dialog">
                                <div className="modal-dialog">

                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h4 className="modal-title">DELEÇÃO</h4>
                                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                                        </div>
                                        <div className="modal-body">
                                            <p>Confirma Deleção?</p>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-default" data-dismiss="modal">Cancelar</button>
                                            <button type="button" className="btn btn-danger" data-dismiss="modal">DELETAR</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Usuarios