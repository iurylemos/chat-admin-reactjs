//Aqui dentro vou definir dois estado, guardando o e-mail
const INITIAL_STATE = {
  usuarioEmail: '',
  usuarioLogado: 0,
  code_user: 0,
  activate: 0
};

function usuarioReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    //Se o tipo for login, ele vai me retornar o estado atual  
    case 'LOG_IN':
      return { ...state, usuarioLogado: 1, usuarioEmail: action.usuarioEmail, code_user: action.code_user, activate: action.activate }
    case 'LOG_OUT':
      return { ...state, usuarioLogado: 0, usuarioEmail: null, code_user: null, activate: null }
    default:
      return state;
  }
}

export default usuarioReducer