
const express = require('express')
const cors = require('cors')
const UserRoutes = require('./routes/UserRoutes')

const app = express()

//configurando resposta JSON

app.use(express.json())

//resolvendo CORS
app.use(cors({credentials: true, origin: 'http://localhost:3000'}))

//pastas publica para img
app.use(express.static('public'))

//Rotas

app.use('/users', UserRoutes)

app.listen(5000)