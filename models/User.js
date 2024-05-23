
const mongoose = require=('mongoose')

const User = mongoose.model('User',{
    name: String,
    sobre: String,
    senha: string
    
})

module.exports = User