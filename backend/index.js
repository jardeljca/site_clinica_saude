const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const UserRoutes = require('./routes/UserRoutes');

const app = express();

// Configurando resposta JSON
app.use(express.json());

// Resolvendo CORS
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));

// Pastas públicas para img
app.use(express.static('public'));

// Conexão com o MongoDB
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

async function main() {
    try {
        await mongoose.connect(
            `mongodb+srv://${dbUser}:${dbPassword}@clusterclinicasaude.7i4e5yq.mongodb.net/?retryWrites=true&w=majority&appName=ClusterClinicaSaude`
        );
        console.log('Conectado ao DB!');

        // Iniciar o servidor após a conexão com o DB ser estabelecida
        app.listen(5000, () => {
            console.log('Servidor rodando na porta 5000');
        });
    } catch (err) {
        console.error('Falha ao conectar ao banco de dados', err);
    }
}

main();

// Rotas
app.use('/users', UserRoutes);







/* código anterior a correção 

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

app.listen(5000) */