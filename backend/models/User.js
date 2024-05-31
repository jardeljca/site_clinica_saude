
const User = mongoose.model('User',{
    
            name: String,
            sobre:String,
            senha:String,
})

modele.exports = User

/* Como estava o código antes da correção:

const { Timestamp } = require("mongodb");
const mongoose = require('../db/conn');
const { schema } = mongoose;

const User = mongoose.model(
    'User',
    new schema(
        {
            name: {
                type: String,
                required: true,
            },
            sobre: {
                type: String,
                required: false,
            },
            senha: {
                type: String,
                required: true,
            },
        },
        { Timestamps: true },
    ),
);

const exports = User;
*/