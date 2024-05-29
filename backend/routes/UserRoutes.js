const router = require('express').Router();
import UserController from '../controllers/UserController';
const auth = require('../middleware/auth');

router.post('/register', UserController.register); // Rota de registro
router.post('/login', UserController.login);       // Rota de login

router.get('/protected-route', auth, (req, res) => {
    res.send('This is a protected route');
});

export default router;


/* código antes da correção

const router = require('express').Router()
const UserController = require('../controllers/UserController')

router.post('/register',UserController.register)

module.exports = router */