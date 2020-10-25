//importando pacotes
const express = require('express');
const path = require('path');

//iniciando o express
const server = express()

server
//utilizando arquivos estaticos
.use(express.static('public'))
//criando uma rota
.get('/', function(req, res){
    return res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

.get('/page-route', function(req, res){
    return res.sendFile(path.join(__dirname, 'views', 'page-route.html'))
})

//ligar o servidor 
server.listen(5500)