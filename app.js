/* importações */
require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt =require('jsonwebtoken')

const app = express()

// Rotas publicas
app.get('/', (req, res) => {
    res.status(200).json({ msg:  'BEM VINDO A API'})

})

//Credenciais
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS

mongoose
    .connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.c6q0kv2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
    .then(() => {
    app.listen(3000)
    console.log('Conecção com sucesso ao BD')
})
.catch((err) => console.log(err)) 

