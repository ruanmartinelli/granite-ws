const _ = require('lodash');
const app = require('express')();
const bodyParser = require('body-parser');
const data = require('./data')

let { inspections, bundles, suppliers } = data;

app.del = app.delete;

// middlewares
app.use(bodyParser.json());

// routes
app.get('/api/inspection', (req, res, next) => res.send(inspections));

app.get('/api/inspection/:id', (req, res, next) => {
    const id = req.params.id;
    
    res.send(inspections.filter(insp => id == insp.id));
});

app.post('/api/inspection/', (req, res, next) => {
    const inspection = req.body;
    
    inspections.push(inspection);

    res.send(inspections);
});

app.del('/api/inspection/:id', (req, res, next) => {
    const id = req.params.id;

    inspections = inspections.find((insp) => insp.id != id);
    
    res.send(inspections);
})

// starts server
app.listen(9190, (err) => {
    if (err) throw err;
    console.log(`listening on port 9190`);
})

