const router = require('express').Router()
//import { register, login, checkUser, getUserById, editUser } from '../controllers/UserController'
//import auth from '../middleware/auth'

router.post('/register', register)
router.post('/login', login)
router.get('/check', auth, checkUser)
router.get('/:id', auth, getUserById)
router.put('/edit', auth, editUser)

module.exports = router


/* código antes da correção

const router = require('express').Router()
const UserController = require('../controllers/UserController')

router.post('/register',UserController.register)

module.exports = router */