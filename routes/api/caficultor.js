const router = require('express').Router();
const {Caficultor, User} = require('../../db')

router.get('/', async (req, res)=>{
    const caficultores = await Caficultor.findAll({
        include: User
    });
    res.json(caficultores)
})

router.post('/', async (req, res)=>{
    const caficultor = await Caficultor.create(req.body);
    res.json(caficultor)
})
router.put('/:caficultorId', async (req, res)=>{
    await Caficultor.update(req.body, {
        where: {id: req.params.caficultorId}
    });
    res.json({success: 'Se ha modicado correctamente'})
})
router.delete('/:caficultorId', async (req, res)=>{
    await Caficultor.destroy({
        where: {id: req.params.caficultorId}
    });
    res.json({success: 'Se ha borrado correctamente'})
})
module.exports = router