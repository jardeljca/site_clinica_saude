import { verify } from 'jsonwebtoken';

function auth(req, res, next) {
    const token = req.header('Authorization') && req.header('Authorization').split(' ')[1];

    if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });

    try {
        const decoded = verify(token, 'secreta'); // Substitua 'secreta' pelo seu segredo real
        req.user = decoded;
        next();
    } catch (e) {
        res.status(400).json({ msg: 'Token is not valid' });
    }
}

export default auth;