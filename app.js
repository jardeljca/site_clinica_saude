/* importações */
require('dotenv').config()

const express = require('express')
const session = require('express-session')
const app = express()

const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


//configurando jsom para respostas

app.use(express.json())

//uso sessão back  -chamado 

app.use(session({secret:'fe123456'}))
app.use(bodyParser.urlencoded({extended:true}))

app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')
app.use('/src', express.static(path.join(__dirname, 'src')))
app.set('views', path.join(__dirname, '/'))

//Models

const User = require('./models/User')

// Rotas publicas
app.get('/', (req, res) => {
    if (req.session.name) {
        res.render('gestaoAdm', {name: name})
        console.log('Usuário Logado: '+ req.session.name)
    } else {
        console.log('index')  
    }
    
})

app.get('/telaCadastro', (req, res) => {
    res.render("telaCadastro")
    res.render(index)

})

app.post('/',(req, res) =>{
    if (req.body.senha == senha && req.body.name == name) {
        //logado ok.
        req.session.name = name
    }
})

app.listen(port,() => {
    console.log('servidor rodando')
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

            const check = await collection.findOne({name: req.body.name})
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

