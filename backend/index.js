const express =require('express')
const cors = require('cors')

const app =express()

//configurando resposta JSON

app.use(express.json())

//resolvendo CORS
app.use(cors({credentials: true, origin: 'http://localhost:3000'}))

//pastas publica para img
app.use(express.static('public'))

//Rotas
app.listen(5000)

