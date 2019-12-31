import React, { useState, useEffect } from 'react';
import './home.css'
import Topo from '../../components/topo';
import NavBar from '../../components/navbar';
import { useSelector } from 'react-redux';
import { findChatbot } from '../../services/chatbot';

function Home({ match }) {

  const [eventos, setEventos] = useState([])
  const [pergunta, setPergunta] = useState();
  const [resposta, setResposta] = useState();
  let listaPerguntasUser = [];
  const usuarioEmail = useSelector(state => state.usuarioEmail);
  const codeUser = useSelector(state => state.code_user);
  const userActivate = useSelector(state => state.activate);
  // console.log(usuarioEmail)
  // console.log(codeUser)
  // console.log(userActivate)

  useEffect(() => {
    if (match.params.parametro) {

    } else {
      findChatbot(codeUser, userActivate).then(async (resultado) => {
        console.log(resultado.data)
        await resultado.data.forEach(doc => {
          listaPerguntasUser.push({
            id: doc._id,
            ...doc
          })
        })

        setEventos(listaPerguntasUser)
      })

    }
  }, [])

  return (
    <>
      <Topo></Topo>
      <div className="container-fluid">
        <div className="row">
          <NavBar></NavBar>
          <div className="col-md-9 ml-sm-auto col-lg-10 px-4 mt-5">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <div className="container">
                <h2 align="center">Home</h2>

                <table width="100%">
                  <tbody>
                    <tr>
                      <td>
                        <form name="chatbotForm">
                          <div align="center" style={{ height: '300px', marginRight: '10px' }}>
                            <input type="hidden" id="code_user" />
                            <input type="hidden" id="code_current" value="0" />
                            <select className="form-control mb-2">
                              <option value="0">Relação com Resposta Anterior</option>

                              {
                                eventos.map(item => <option key={Math.random()}>{item.input}</option>)
                              }

                              {/* <option>Qual sua função?</option> */}
                            </select>

                            <input type="text" className="form-control mb-2" placeholder="Pergunta" />
                            <textarea cols="5" className="form-control mb-2" placeholder="Resposta"></textarea>
                            <button style={{ marginRight: '2px' }} className="btn btn-lg btn-info" >NOVO</button>
                            <button style={{ marginRight: '1px' }} className="btn btn-lg btn-info" type="submit"
                            >SALVAR</button>
                            <button className="btn btn-lg btn-danger" data-toggle="modal" data-target="#dlDeletar">DELETAR</button>
                          </div>
                        </form>
                      </td>
                      <td>
                        <div style={{ overflowY: 'scroll', height: '300px' }}>
                          <option value="0">Relação com Resposta Anterior</option>
                          <table className="table table-striped" style={{ width: '100%' }}>
                            <tbody id="linhas">
                              {/* <option value="0">Relação com Resposta Anterior</option> */}
                              {/* <tr> */}
                              {
                                // eventos.map(item => <td key={Math.random()} style={{ width: '400px' }}>{item.input}</td>)
                                eventos.map(item =>
                                  <tr key={Math.random()}>
                                    <td style={{ width: '400px' }}>{item.input}</td>
                                    <td align="center">
                                      <button className="btn btn-info">
                                        Selecionar
                                  </button>
                                    </td>
                                  </tr>
                                )
                              }

                            </tbody>
                          </table>
                        </div>
                      </td>
                    </tr>
                  </tbody>

                </table>
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

                <div id="dlDocumentos" className="modal" role="dialog">
                  <div className="modal-dialog">

                    <div className="modal-content">
                      <div className="modal-header">
                        <h4 className="modal-title">Informações Capturadas</h4>
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                      </div>
                      <div className="modal-body">
                        {/* style={overflowY: 'scroll'; height: 300px} */}
                        <div style={{ overflowY: 'scroll', height: '300px' }}>
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
                                <td nowrap="true">Nome</td>
                                <td>Idade</td>
                                <td>Email</td>
                                <td>Celular</td>
                                <td>Telefone</td>
                                <td>CEP</td>
                                <td nowrap="true">Endereço</td>
                                <td>Bairro</td>
                                <td>Numero</td>
                                <td>CPF</td>
                                <td>CPNJ</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Fechar</button>
                      </div>
                    </div>


                  </div>
                </div >

                <div id="dlAPI" className="modal" role="dialog">
                  <div className="modal-dialog">

                    <div className="modal-content">
                      <div className="modal-header">
                        <h4 className="modal-title">API</h4>
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                      </div>
                      <div className="modal-body">
                        <b>Link de Integração</b>
                        <input type="text" id="integracao" className="form-control" />

                        <b>Código de Incorporação</b>
                        <div id="incorporacao">Texto</div>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Fechar</button>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div >
        </div >
      </div >
    </>
  )
}

export default Home