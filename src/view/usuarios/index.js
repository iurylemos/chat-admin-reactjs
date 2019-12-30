import React from 'react';
import './usuarios.css';
import Topo from '../../components/topo';
import NavBar from '../../components/navbar';

function Usuarios() {

    const style = {
        overflowY: 'scroll',
        height: '300px',
    }

    return (
        <>
            <Topo></Topo>
            <div className="container-fluid">
                <div className="row">
                    <NavBar></NavBar>
                    <div className="col-md-9 ml-sm-auto col-lg-10 px-4 mt-5">
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <div style={style}>
                            <h2 className="row mx-auto">Usuários</h2>
                                <table className="table table-striped" width="100%">
                                    <thead>
                                        <tr>
                                            <th>Nome</th>
                                            <th>Idade</th>
                                            <th>Email</th>
                                            <th>Celular</th>
                                            <th>Telefone</th>
                                            <th>CEP</th>
                                            <th>Endereço</th>
                                            <th>Bairro</th>
                                            <th>Nº</th>
                                            <th>CPF</th>
                                            <th>CNPJ</th>
                                        </tr>
                                    </thead>
                                    <tbody id="documentos">
                                        <tr>
                                            <td nowrap="true">Claudio</td>
                                            <td>13</td>
                                            <td>iury@gmail.com</td>
                                            <td>989034949</td>
                                            <td>3487284874</td>
                                            <td>6074-260</td>
                                            <td nowrap="true">Rua avenida</td>
                                            <td>Mondubim</td>
                                            <td>43</td>
                                            <td>072.851.939-10</td>
                                            <td>99393939-93939</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Usuarios