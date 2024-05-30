//import { deleteModel } from 'mongoose'
//import creatUserToken from '../helpers/create-user-token'

const User = require('../models/User')
const creatUserToken = require('../helpers/create-user-token')
const getToken = require('../helpers/get-token')

const bcrypt = require(bcrypt)
const jwt = require('jsonwebtoken')

module.exports = class UserController {

    static async register(req, res) {
        const { name, sobre, senha } = req.body

        //validações
        if (!name) {
            res.status(422).json({ message: 'Nome é Obrigatório' })
            return
            // return res.send({ msn: 'o campo nome é obrigatório' })
        }

        if (!email) {
            res.status(422).json({ message: 'Email é Obrigatório' })
            return
            //return res.send({ msn: 'o campo Email é obrigatório' })
        }

        if (!senha) {
            res.status(422).json({ message: 'a Senha é Obrigatório' })
            return
            //return res.send({ msn: 'o campo Senha é obrigatório' })
        }

        //checar se usuario existe

        const userExists = await User.findOne({ email: email })

        if (userExists) {
            res.status(422).json({
                message: 'emsil já cadastrado , use outro'
            })
            return
            // return res.send({ msn: 'por favor usar outro email' })

        }
        //criando senha:

        const salt = await bcrypt.genSalt(12)
        const passwordHash = await bcrypt.hash(senha, salt)

        //creando usuario

        const user = new User({
            name,
            email,
            senha: passwordHash,
        })

        try {
            const newUser = await user.save()
            await creatUserToken(newUser, req, res)


        } catch (error) {
            res.status(500).json({
                message: error
            })
            g
        }
    }
    static async login(req, res) {
        const { email, senha } = req.body

        if (!email) {
            res.status(422).json({ message: 'Email é Obrigatório' })
            return
        }

        if (!senha) {
            res.status(422).json({ message: 'a senha é Obrigatória' })
            return
        }

        //checar se usuario existe

        const user = await User.findOne({ email: email })

        if (!user) {
            res.status(422).json({
                message: 'não há Usuario cadstrado com esse email'
            })
            return
        }

        //checando senha digitada e igual a do banco

        const checkPassword = await bcrypt.compare(senha, user.senha)

        if (!checkPassword) {
            res.status(422).json({
                message: 'Senha invalida'
            })
            return
        }

        await creatUserToken(user, req, res)

    }
    static async checkUser(req, res) {

        let currentUser

        if (req.headers.authorization) {
            const token = getToken(req)
            const decoded = jwt.verify(token, 'nossosecret')

            currentUser = await User.findById(decoded.id)
            currentUser.senha = undefined
        } else {
            currentUser = null
        }

        res.status(200).send(currentUser)
    }
    static async getUserById(req, res) {
        const id = req.params.id
        const user = await User.findById(id).select('-senha')

        if (!user) {
            res.status(422).json({
                message: 'usuario não encontrado!',
            })
            return
        }
        res.status(200).json({ user })
    }
    static async editUser(req, res) {
        res.status(200).json({
            message: 'Deu certo Update',
        })
        return

    }

}
