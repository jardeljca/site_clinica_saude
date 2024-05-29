const jwd = require('jsonwebtoken')
const creatUserToken = async (user, req, res) => {
   
    //creando token
    const token = jwt.sign({

        name: user.name,
        id: user._id
    }, "nossosecret")

    //retorno token
    res.status(200).json({
        message: 'você está autenticado',
        token: token,
        userId: user._id,

    })

}
module.exports = creatUserToken