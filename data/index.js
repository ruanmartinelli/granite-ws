const inspections = [
    { id: 2, code: '#88718', date: new Date() , id_supplier: 1},
    { id: 3, code: '#33221', date: new Date() , id_supplier: 2},
    { id: 9, code: '#91012', date: new Date() , id_supplier: 6}
];

const bundles = [
    { id_inspection: 2, number: 1, block: '2231', weight: 3260, id_material: 2, bookmatch: true, backmesh: true },
    { id_inspection: 2, number: 2, block: '2231', weight: 3123, id_material: 2, bookmatch: true, backmesh: true },
    { id_inspection: 2, number: 3, block: '2231', weight: 3551, id_material: 2, bookmatch: true, backmesh: true },
    { id_inspection: 2, number: 4, block: '2231', weight: 3881, id_material: 2, bookmatch: true, backmesh: true },
    { id_inspection: 2, number: 5, block: '2231', weight: 3512, id_material: 2, bookmatch: false, backmesh: true },
    { id_inspection: 2, number: 6, block: '2231', weight: 3244, id_material: 2, bookmatch: true, backmesh: true },
    { id_inspection: 2, number: 7, block: '2231', weight: 3291, id_material: 2, bookmatch: true, backmesh: false },
    { id_inspection: 3, number: 1, block: '19928', weight: 3260, id_material: 5, bookmatch: true, backmesh: true },
    { id_inspection: 3, number: 2, block: '19928', weight: 3260, id_material: 5, bookmatch: true, backmesh: true },
    { id_inspection: 3, number: 3, block: '19928', weight: 3123, id_material: 5, bookmatch: true, backmesh: true },
    { id_inspection: 3, number: 4, block: '19928', weight: 3123, id_material: 5, bookmatch: true, backmesh: true },
    { id_inspection: 3, number: 5, block: '19928', weight: 3551, id_material: 5, bookmatch: true, backmesh: true },
    { id_inspection: 3, number: 6, block: '19928', weight: 3551, id_material: 5, bookmatch: true, backmesh: true },
    { id_inspection: 3, number: 7, block: '19928', weight: 3881, id_material: 5, bookmatch: true, backmesh: true },
    { id_inspection: 3, number: 1, block: '992', weight: 3881, id_material: 7, bookmatch: true, backmesh: true },
    { id_inspection: 3, number: 2, block: '992', weight: 3512, id_material: 7, bookmatch: false, backmesh: true },
    { id_inspection: 3, number: 3, block: '992', weight: 3512, id_material: 7, bookmatch: false, backmesh: true },
    { id_inspection: 3, number: 4, block: '992', weight: 3244, id_material: 6, bookmatch: true, backmesh: true },
    { id_inspection: 3, number: 5, block: '992', weight: 3244, id_material: 6, bookmatch: true, backmesh: true },
    { id_inspection: 3, number: 6, block: '992', weight: 3291, id_material: 6, bookmatch: true, backmesh: false },
    { id_inspection: 3, number: 7, block: '992', weight: 3291, id_material: 6, bookmatch: true, backmesh: false },
];

const suppliers = [
    {id: 1, name: 'Foo Inc.'},
    {id: 2, name: 'Bar Ltda.'},
    {id: 6, name: 'Demo Corporation'}
];

const materials = [
    {id: 2, name: 'White Ice 2cm'},
    {id: 5, name: 'Taj Mahal 2cm'},
    {id: 7, name: 'Typhoon Bordeaux 2cm'},
    {id: 6, name: 'Typhoon Bordeaux Classic 2cm'}
]

module.exports = { inspections, bundles, suppliers, materials };