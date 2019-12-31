import axios from 'axios';

function findChatbot(objJSON) {
  return axios.post('http://localhost:5000/chatbot/find', { objJSON }).then((res) => {
    console.log(res)
  })
}

function insertData(objJSON) {
  return axios.post('http://localhost:5000/chatbot/insert', { objJSON }).then((res) => {
    console.log(res)
  })
}

function findDocuments(objJSON) {
  return axios.post('http://localhost:5000/documents/find', { objJSON }).then((res) => {
    console.log(res)
  })
}

function conversarChatbot(codeUser, question) {
  return axios.get(`http://localhost:5000/chatbot/question?code_user${codeUser}&input=${question}`).then((res) => {
    console.log(res)
  })
}

export { findDocuments, findChatbot, insertData, conversarChatbot }