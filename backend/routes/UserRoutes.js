const router = require('express').Router();
const UserController = require('../controllers/UserController');

router.post('/register', UserController.register); // Rota de registro
router.post('/login', UserController.login);       // Rota de login

module.exports = router;


/* const router = require('express').Router()
const UserController = require('../controllers/UserController')

router.post('/register',UserController.register)

module.exports = router */