const _ = require('lodash');
const app = require('express')();
const cors = require('cors');
const bodyParser = require('body-parser');
const { inspection_controller } = require('./controller');

// middlewares
app.use(bodyParser.json());
app.use(cors());

// aliasing
app.del = app.delete;

app.get('/', ( req, res, next ) => res.send('api is at <code>/api'))

app.post('/auth/', ( req, res, next ) => {
    console.log(req.params);
    console.log(req.query);
    console.log(req.body);
    const { email, password } = req.body;
    console.log(`sign in attempt --> ${email} + ${password}`);
    res.send({success: true, token: '567567897yy'});
})


inspection_controller(app);

// starts server
app.listen(process.env.PORT || 9190, (err) => {
    if (err) throw err;
    console.log(`listening on port 9190`);
})

