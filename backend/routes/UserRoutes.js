const router = require('express').Router()

const UserController = require('../controllers/UserController').default.default

router.post('/register', UserController.register) // Rota de registro
router.post('/login', UserController.login)// Rota login
router.get('/checkuser', UserController.checkUser)// Rota token
router.get('/:id', UserController.getUserById)//Rota usuario pelo Id
router.patch('/edit/:id',UserController.editUser )//rotas privadas

module.exports = router


/* código antes da correção

const router = require('express').Router()
const UserController = require('../controllers/UserController')

router.post('/register',UserController.register)

module.exports = router */