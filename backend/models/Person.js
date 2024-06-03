const mongoose = require('mongoose')
const Person = mongoose.model('User',{
    
            name: String,
            email: String,
            senha: String,
})

module.exports = mongoose.model('Person')