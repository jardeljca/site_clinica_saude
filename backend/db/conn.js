const mongoose = require('mongoose')

//Credenciais

const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS

async function main() {
    await mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.c6q0kv2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
    console.log('Conectado ao DB!')
    
}
main().catch((err) => console.log(err))
module.exports = mongoose