import mongoose, { model } from '../db/conn';
const { Schema } = mongoose; // correçao da importação do Schema com S maiúsculo

const UserSchema = new Schema(
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
    { timestamps: true }  // Aqui está corrigido
);

const User = model('User', UserSchema);

export default User;  // Aqui está corrigido




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