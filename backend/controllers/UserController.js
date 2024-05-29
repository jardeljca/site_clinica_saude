import User, { findOne } from '../models/User';
import { genSalt, hash as _hash, compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

const UserController = {
    register: async (req, res) => {
        const { name, sobre, senha } = req.body;

        // Verificar se o usuário já existe
        const existingUser = await findOne({ name });
        if (existingUser) {
            return res.status(400).json({ msg: 'Usuário já existe' });
        }

        // Criar novo usuário
        const newUser = new User({ name, sobre, senha });

        // Criptografar senha
        genSalt(10, (err, salt) => {
            _hash(newUser.senha, salt, (err, hash) => {
                if (err) throw err;
                newUser.senha = hash;
                newUser.save()
                    .then(user => res.json(user))
                    .catch(err => console.log(err));
            });
        });
    },

    login: async (req, res) => {
        const { name, senha } = req.body;

        // Verificar o usuário
        const user = await findOne({ name });
        if (!user) {
            return res.status(404).json({ msg: 'Usuário não encontrado' });
        }

        // Verificar a senha
        compare(senha, user.senha).then(isMatch => {
            if (isMatch) {
                // Gerar token
                const payload = { id: user.id, name: user.name };
                sign(payload, 'secreta', { expiresIn: 3600 }, (err, token) => {
                    res.json({ success: true, token: 'Bearer ' + token });
                });
            } else {
                return res.status(400).json({ msg: 'Senha incorreta' });
            }
        });
    }
};

export default UserController;

















/* const User = require('..models/User')

module.exports = class UserController {
    static async register(req, res) {
        res.json('óla get')
    }



} */