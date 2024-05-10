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

app.listen(3000)