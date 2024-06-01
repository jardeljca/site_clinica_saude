const User = require('../models/User')
const bcrypt = require('bcrypt')

//hepers
const createUserToken = require('../helpers/create-user-token')
const getToken = require('../helpers/get-token')

//import { genSalt, hash, compare } from 'bcryptjs'

const jwt = require('jsonwebtoken')
module.exports = class UserController {

    static async register(req, res) {
        const { name, email, senha } = req.body

        // Validações
        if (!name) {
            res.status(422).json({ message: 'Nome é Obrigatório' })
            return
        }

        if (!email) {
            res.status(422).json({ message: 'Email é Obrigatório' })
            return
        }

        if (!senha) {
            res.status(422).json({ message: 'Senha é Obrigatória' });
            return
        }

        // Checar se usuário existe
        const userExists = await findOne({ email: email });

        if (userExists) {
            res.status(422).json({ message: 'Email já cadastrado, use outro' });
            return
        }

        // Criando senha
        const salt = await bcrypt.genSalt(12)
        const passwordHash = await bcrypt.hash(senha, salt)

        // Criando usuário
        const user = new User({
            name,
            email,
            senha: passwordHash,
        })

        try {
            const newUser = await user.save()
            res.status(201).json({ message: 'usuario criado',newUser ,})
            //await createUserToken(newUser, req, res)
        } catch (error) {
            res.status(500).json({ message: error })
        }
    }

    static async login(req, res) {
        const { email, senha } = req.body;

        if (!email) {
            res.status(422).json({ message: 'Email é Obrigatório' });
            return
        }

        if (!senha) {
            res.status(422).json({ message: 'Senha é Obrigatória' });
            return
        }

        // Checar se usuário existe
        const user = await findOne({ email: email });

        if (!user) {
            res.status(422).json({ message: 'Não há usuário cadastrado com esse email' })
            return
        }

        // Checando senha digitada é igual a do banco
        const checkPassword = await bcrypt.compare(senha, user.senha)

        if (!checkPassword) {
            res.status(422).json({ message: 'Senha inválida' })
            return
        }

        await createUserToken(user, req, res)
    }

    static async checkUser(req, res) {
        let currentUser

        if (req.headers.authorization) {
            const token = getToken(req)
            const decoded = jwt.verify(token, 'nossosecret')

            currentUser = await findById(decoded.id)
            currentUser.senha = undefined
        } else {
            currentUser = null
        }

        res.status(200).send(currentUser)
    }

    static async getUserById(req, res) {
        const id = req.params.id
        const user = await findById(id).select('-senha');

        if (!user) {
            res.status(422).json({ message: 'Usuário não encontrado!' })
            return
        }
        res.status(200).json({ user })
    }

    static async editUser(req, res) {
        res.status(200).json({ message: 'Deu certo Update', })
        return
    }

}