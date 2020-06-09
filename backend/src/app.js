const express = require('express')
const cors = require('cors')
const { errors } = require('celebrate')
const routes = require('./routes')
const app = express()

/**
 * tipos de parametros
 * 
 * query
 * params
 * body
 */

 /**
  * npx knex init - para iniciar uma conexao com o banco de dados
  * cria um arquivo na raiz knexfile.js de acesso as configuracoes do db
  */

app.use(cors())
app.use(express.json())
app.use(routes)
app.use(errors())

module.exports = app