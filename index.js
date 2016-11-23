const _ = require('lodash');
const app = require('express')();
const cors = require('cors');
const bodyParser = require('body-parser');
let { inspection_controller } = require('./controller');

// aliasing
app.del = app.delete;

app.get('/', ( req, res, next ) => res.send('api is at <code>/api'))

// middlewares
app.use(bodyParser.json());
app.use(cors());

inspection_controller(app);

// starts server
app.listen(process.env.PORT || 9190, (err) => {
    if (err) throw err;
    console.log(`listening on port 9190`);
})

