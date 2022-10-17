const router = require('express').Router();
const {Caficultor, User, Finca} = require('../../db')

router.get('/', async (req, res)=>{
    const fincas = await Finca.findAll({
        where: {
            caficultorId: req.usuarioId
        }
    });
    if(fincas)
        res.json(fincas)
    if(!fincas)
        res.json({message: 'No se hay fincas regitradas'}) 
})


module.exports = router