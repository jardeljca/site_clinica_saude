
const mongoose = require=('mongoose')

const User= mongoose.model('User',{

    name: String,
    Sobre: String,
    email:String,
    senha:String,
    
    })

const exports = User