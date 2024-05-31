const UserController = require('../controllers/UserController')

const router = require('express').Router()
//import { register, login, checkUser, getUserById, editUser } from '../controllers/UserController'
//import auth from '../middleware/auth'

router.post('/register',UserController.register)
router.post('/login',UserController.login)
router.get('/checkuser',UserController.login)
router.get('/:id', UserController, getUserById)
router.put('/edit/:id', UserController, editUser)

module.exports = router


/* código antes da correção

const router = require('express').Router()
const UserController = require('../controllers/UserController')

router.post('/register',UserController.register)

module.exports = router */