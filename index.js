const _ = require('lodash');
const app = require('express')();
const bodyParser = require('body-parser');
let { inspection_controller } = require('./controller');

// aliasing
app.del = app.delete;

app.get('/', ( req, res, next ) => res.send('api is at <code>/api'))

// middlewares
app.use(bodyParser.json());

inspection_controller(app);

// starts server
app.listen(9190, (err) => {
    if (err) throw err;
    console.log(`listening on port 9190`);
})

