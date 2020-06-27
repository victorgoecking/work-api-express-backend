const express = require('express')
const api = require('./services/api')


const MessageController = require('./controllers/MessageController')

const routes = express.Router()


routes.get('/mensagem', MessageController.index)
routes.post('/mensagem', MessageController.store)


routes.get('/feed', async function(req, res) {
    const result = await api.get("/feednews")
    
    res.json(result.data)
})


routes.post('/feed', async function(req, res) {
    
    // PARA TESTE
    // const {title,description,postdate,author} = req.body    
    // console.log(title,description,postdate,author)

    const result = req.body
    api.post('/send-feed', result) 
    
    res.status(204).json(result)
})


routes.post('/enviar-mensagem', async function(req, res) {
    
    // PARA TESTE
    // const {from,to,message,apiurl} = req.body    
    // console.log(from,to,message,apiurl)

    const result = req.body
    api.post('/send-message-friend', result) 
    
    res.status(204).json(result)
})


module.exports = routes