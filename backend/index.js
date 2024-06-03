
//configuração inicial
const express = require('express')
const cors = require('cors')
const UserRoutes = require('./routes/UserRoutes')
const User = require('./models/User')
const mongoose = require('mongoose')

const app = express()

//configurando resposta JSON

app.use(express.json())
app.use(express.urlencoded
    ({
        extended: true,
    }),

)

//resolvendo CORS para frontend
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }))

//pastas publica para img
app.use(express.static('public'))

//Rotas - olhar ../controllers/UserController e ../routees/UserRouter tem mais as rotas sendo chamadas via roter


app.use('/users', UserRoutes)

app.post('/person', async (req, res) => {
    const { name, email, senha } = req.body
  
    const person = {
      name,
      email,
      senha,
    }
  
    try {
      await Person.create(person)
  
      res.status(201).json({ message: 'Pessoa inserida no sistema com sucesso!' })
    } catch (error) {
      res.status(500).json({ erro: error })
    }
  })
  
  app.get('/person', async (req, res) => {
    try {
      const people = await Person.find()
  
      res.status(200).json(people)
    } catch (error) {
      res.status(500).json({ erro: error })
    }
  })
  
  app.get('/person/:id', async (req, res) => {
    const id = req.params.id
  
    try {
      const person = await Person.findOne({ _id: id })
  
      if (!person) {
        res.status(422).json({ message: 'Usuário não encontrado!' })
        return
      }
  
      res.status(200).json(person)
    } catch (error) {
      res.status(500).json({ erro: error })
    }
  })
  
  app.patch('/person/:id', async (req, res) => {
    const id = req.params.id
  
    const { name, email, senha } = req.body
  
    const person = {
      name,
      email,
      senha,
    }
  
    try {
      const updatedPerson = await Person.updateOne({ _id: id }, person)
  
      if (updatedPerson.matchedCount === 0) {
        res.status(422).json({ message: 'Usuário não encontrado!' })
        return
      }
  
      res.status(200).json(person)
    } catch (error) {
      res.status(500).json({ erro: error })
    }
  })
  
  app.delete('/person/:id', async (req, res) => {
    const id = req.params.id
  
    const person = await Person.findOne({ _id: id })
  
    if (!person) {
      res.status(422).json({ message: 'Usuário não encontrado!' })
      return
    }
  
    try {
      await Person.deleteOne({ _id: id })
  
      res.status(200).json({ message: 'Usuário removido com sucesso!' })
    } catch (error) {
      res.status(500).json({ erro: error })
    }
  })
  //teste
  app.get('/', (req, res) => {
    res.json({ message: 'Oi Express!' })
  })
  

// Credenciais
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS


mongoose.connect(
  `mongodb+srv://engerproducao:Wsd700@cluster0.c6q0kv2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
   // `mongodb+srv://${dbUser}:${dbPassword}@clusterclinicasaude.7i4e5yq.mongodb.net/?retryWrites=true&w=majority&appName=ClusterClinicaSaude`
   
)
    .then(() => {
        console.log('Conectado ao DB!')
        app.listen(5000)
    })

    .catch(err => console.error(err))
