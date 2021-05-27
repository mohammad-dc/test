const app = require('express')();

app.get('/hello', function(req, res, next){res.send('<h1>Hi</h1>')})
app.listen(3000, () => console.log('object'))
