const express = require('express')
const servidor = express()

servidor.get('/', (req, res, next) => {
    return res.send({
        "mensagem":"Bem Vindo ao servidor Nodejs"
    })
})

servidor.listen(3000, () => {
    console.log('Servidor Funcionando')
})