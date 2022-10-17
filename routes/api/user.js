const router = require('express').Router();
const bcrypt = require('bcryptjs');
const {User, Caficultor} = require('../../db');
const {check, validationResult} = require('express-validator');
const moment = require('moment');
const jwt = require('jwt-simple');

router.post('/register',[
    check('userName','El usuario es obligatorio').not().isEmpty(),
    check('password','El usuario es obligatorio').not().isEmpty()
], async (req, res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({errores: errors.array()});
    }
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const user = await User.create(req.body);
    if(!user){
        return res.json({errors: 'El usuario no fue creado...'})
    }else{
        const dataBasicCaficultor = {
            identification: req.body.identification,
            names: req.body.names,
            surnames: req.body.surnames,
            userId: user.id
        }
        const caficultor = await Caficultor.create(dataBasicCaficultor)
        res.json({usuario: user, caficultor: caficultor})
    }
    

})

router.post('/login', async (req, res)=>{
    const user = await User.findOne({where: {userName: req.body.userName}})
    if(user){
        const iguales = bcrypt.compareSync(req.body.password, user.password)
        if(iguales){
            res.json({success: createToken(user)})
        }else{
            res.send({error: 'Username o Contraseña incorrectos'})
        }
    }else{
        res.send({error: 'Username o Contraseña incorrectos'})
    }
})

const createToken = (user) =>{
    const payload = {
        usuarioId: user.id,
        createdAt: moment().unix(),
        expireAt: moment().add(5, 'minutes').unix()
    }
    return jwt.encode(payload, 'yamid')
}

module.exports = router