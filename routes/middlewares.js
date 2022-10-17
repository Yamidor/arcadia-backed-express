const jwt = require('jwt-simple');
const moment = require('moment');

const checkToken = (req, res, next) => {
    if(!req.headers['user-token'])
        return res.json({error: 'Necesitas incluir el user-token'})
    const userToken = req.headers['user-token']
    let payload = {}

    try {
        payload = jwt.decode(userToken, 'yamid' );
    }catch(err) {
        res.json({ error: 'Token invalid'})
    }

    if(payload.expireAt < moment.unix())
        return res.json({error: 'Token expired'})


    req.usuarioId = payload.usuarioId
    next();

}

module.exports ={
    checkToken: checkToken
}