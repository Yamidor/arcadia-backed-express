const router = require('express').Router();

const middlewares = require('./middlewares')
const apiCaficultorRouter = require('./api/caficultor');
const apiUserRouter = require('./api/user');
const apiFincaRouter = require('./api/finca');

router.use('/caficultores',middlewares.checkToken, apiCaficultorRouter)
router.use('/fincas',middlewares.checkToken, apiFincaRouter)
router.use('/users', apiUserRouter)

module.exports = router
