/* importações */
require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const app = express()

//configurando jsom para respostas

app.use(express.json())

//Models

const User = require('./models/User')

// Rotas publicas
app.get('/', (req, res) => {
    res.status(200).json({ msg:  'BEM VINDO A API'})

})

//Registro de usuarios

app.post('/autentic/registro', async(req, res) =>
    {
        const{nome, email, senha, confirmsenha} = req.body

        //validação

        if (!nome) {
            return res.status(422).json({msn : 'o campo nome é obrigatório'})
        }

        if (!email) {
            return res.status(422).json({msn : 'o campo Email é obrigatório'})
        }

        if (!senha) {
            return res.status(422).json({msn : 'o campo Senha é obrigatório'})
        }

        if (senha !== confirmsenha) {
            return res.status(422).json({msn : 'o campo Senha e Confirme seua senha estam diferentes!'})
        }

        //checar se usuario existe

        const userExists = await User.findOne({email: email})

        if (userExists) {
            return res.status(422).json({msn : 'Este email já existe, por favor usar outro'})
        }

        //Creando Senha

        const salt =await bcrypt.genSalt(12)
        const passwordHash = await 
    })

//Credenciais
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS

mongoose
    .connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.i8mtmfn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
    //mongodb+srv://engerproducao:<password>@cluster0.i8mtmfn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
    .then(() => {
    app.listen(3000)
    console.log('Conecção com sucesso ao BD')
})
.catch((err) => console.log(err)) 

