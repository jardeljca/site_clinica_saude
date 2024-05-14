const mongoose = require('mongoose')

const user = mongoose.model('User', {
    nome: String,
    email: String,
    senha: String,

    }
)
module.exports = User