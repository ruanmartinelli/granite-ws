const { inspections } = require('../data');

module.exports = (app) => {

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
}