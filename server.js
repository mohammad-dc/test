const app = require('express')();
const dotenv = require('dotenv').config();

app.get('/hello', function(req, res, next){res.send('<h1>Hi</h1>')})
app.listen(process.env.PORT, () => console.log('object'))
