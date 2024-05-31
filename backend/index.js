
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
    extended:true,
}),

)

//resolvendo CORS
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }))

//pastas publica para img
app.use(express.static('public'))

//Rotas

app.use('/users', UserRoutes)

// Credenciais
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS

mongoose.connect(
    `mongodb+srv://${dbUser}:${dbPassword}@clusterclinicasaude.7i4e5yq.mongodb.net/?retryWrites=true&w=majority&appName=ClusterClinicaSaude`
    //mongodb+srv://fernandorrdc:<password>@clusterclinicasaude.7i4e5yq.mongodb.net/?retryWrites=true&w=majority&appName=ClusterClinicaSaude
)
    .then(() => {

        console.log('Conectado ao DB!')
        app.listen(5000)
    })

    .catch(err => console.error(err))
