import { connect } from 'mongoose';

// Credenciais
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

async function main() {
    try {
        await connect(
            `mongodb+srv://${dbUser}:${dbPassword}@clusterclinicasaude.7i4e5yq.mongodb.net/?retryWrites=true&w=majority&appName=ClusterClinicaSaude`
        );
        console.log('Conectado ao DB!');
    } catch (err) {
        console.error(err);
    }
}

main();

export default main;


/* Código antigo, antes da correção 


const mongoose = require('mongoose')

//Credenciais

const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS

 function main() {

    mongoose
        .connect(
            `mongodb+srv://${dbUser}:${dbPassword}@clusterclinicasaude.7i4e5yq.mongodb.net/?retryWrites=true&w=majority&appName=ClusterClinicaSaude`
        )
        //mongodb+srv://fernandorrdc:Wsd700@clusterclinicasaude.7i4e5yq.mongodb.net/?retryWrites=true&w=majority&appName=ClusterClinicaSaude
        .then(() => {
            app.listen(5000)
            console.log('Conectado ao DB!')
        })
    main().catch((err) => console.log(err))

}

export {main} */