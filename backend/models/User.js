import mongoose, { model } from '../db/conn';
const { Schema } = mongoose;

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