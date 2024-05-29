const mongoose = require('mongoose')

//Credenciais

const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS

async function main() {
    
    await mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@clusterclinicasaude.7i4e5yq.mongodb.net/?retryWrites=true&w=majority&appName=ClusterClinicaSaude`)
    //mongodb+srv://fernandorrdc:Wsd700@clusterclinicasaude.7i4e5yq.mongodb.net/?retryWrites=true&w=majority&appName=ClusterClinicaSaude
    
    console.log('Conectado ao DB!')
    
}
main().catch((err) => console.log(err))
module.exports = mongoose