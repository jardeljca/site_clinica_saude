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
    res.render("telaLogin")

})

app.get('/telaCadastro', (req, res) => {
    res.render("telaCadastro")

})


//Registro de usuarios

app.post('/telaCadastro', async(req, res) =>
    {
        const data = {
            name: req.body.name, 
            sobrenome: req.body.sobre,
            email: req.body.email, 
            senha: req.body.senha 
        } 

        
        //validação

        if (!name) {
            return res.send({msn : 'o campo nome é obrigatório'})
        }

        if (!email) {
            return res.send({msn : 'o campo Email é obrigatório'})
        }

        if (!senha) {
            return res.send({msn : 'o campo Senha é obrigatório'})
        }

        //checar se usuario existe

        const userExists = await User.findOne({name: data.name})

        if (userExists) {
            return res.send({msn : 'Este usuario já existe, por favor usar outro nome'})
        }else {

        //criptogafia 
            const saltRounds =10 //numero de saltos para bcrypt
            const hashedPassword = await bcrypt.hash(data.senha, saltRounds) 

            data.senha =hashedPassword //

            const userdata = await collection.insertMany(data)
            console.log(userdata)
        }

        //Creando Senha

        const salt =await bcrypt.genSalt(12)
        const passwordHash = await 
    })

    //login do Usuario

    app.post('/telaLogin', async(req, res) => {
        try{

            const check = await collection.findOne({nome: req.body.name})
            if(!check) {
                res.send("Esse nome não é valido!")

            }
            //comparando a hash senha com a do bd

            const isPasswordMatch = await bcrypt.compare(req.body.senha, check.senha)
            if(isPasswordMatch){
                res.render('gestaoAdm')
            }else {
                req.send('Senha incorreta!')
            }
        }catch{
            req.send('checagem incorreta, tente novamente')
        }

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

