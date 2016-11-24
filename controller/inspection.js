const { inspections, bundles } = require('../data');

module.exports = (app) => {

    app.get('/api/inspection', (req, res, next) => {
        console.log("/get inspections");
    
        res.send(inspections)
    });

    app.get('/api/inspection/:id', (req, res, next) => {
        const id = req.params.id;

        console.log('/get inspection/' + id);
        let data = inspections.filter(insp => id == insp.id)[0];
        data.bundles = bundles.filter(bdl => bdl.id_inspection == id);
        console.log(data);
        res.send(data);
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