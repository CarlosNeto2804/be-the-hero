
const Express = require('express');
const Cors = require('cors')
const app = Express();
const routes = require('./routes');
app.use(Express.json())
app.use(routes)
app.use(Cors())
app.listen(3333, () => console.log('Server Running'));