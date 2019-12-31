import React from 'react';
import './chat.css'
import Topo from '../../components/topo';
import NavBar from '../../components/navbar'

function Chat() {

    const style = {
        overflowY: 'scroll',
        height: '500px',
        width: '870px',
        maxWidth: '100%',
        minWidth: '100%',
    }

    const styles1 = {
        width: '90%',
        backgroundColor: '#00aabb',
    }

    const styles2 = {
        width: '90%',
        backgroundColor: '#8000ff',
    }

    const styles3 = {
        width: '90%',
        backgroundColor: '#00aabb',
    }


    return (
        <>
            <Topo></Topo>
            <div className="container-fluid">
                <div className="row">
                    <NavBar></NavBar>
                    <div className="col-md-9 ml-sm-auto col-lg-10 px-4 mt-5">
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <form name="conversaForm">
                                <div className="mx-auto pb-0">
                                    <div style={style} align="center" id="msg">
                                        <div className="talk-bubble tri-right left-top" style={styles1}>
                                            <div className="talktext">
                                                <p>Olá! Em que posso ajudar?</p>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="talk-bubble tri-right right-top" style={styles2}>
                                                <div className="talktext">
                                                    <p>Olá</p>
                                                </div>
                                            </div>
                                            <div className="talk-bubble tri-right left-top" style={styles3}>
                                                <div className="talktext">
                                                    <p>Olá</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <input type="text" id="input" className="form-control"
                                        placeholder="Digite a sua mensagem e tecle Enter..." />
                                </div>
                                <input type="hidden" id="code_user" />
                                <input type="hidden" id="code_before" value="0" />

                            </form>

                            <span id="feed_item"></span>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Chat