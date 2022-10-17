const express  = require('express');
const cors = require('cors')
const bodyParser    = require('body-parser');
const apiRouter = require('./routes/api')


const app = express();

require('./db')

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/api', apiRouter);

app.listen(3000, (req, res) => {
     console.log('Servidor corriendo...')
})