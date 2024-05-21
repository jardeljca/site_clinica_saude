import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true

    Sobre: {
            type: String,
            required: false

        },
    email: {
            type: String,
            required: true

        },
    senha: {
            type: String,
            required: true
        },

    creeateadAt: {
            type: Date,
            default: Datenow
        }

    })

export default mongoose.model('User', userSchema)