  
const db = require('../sequalize');

const Recenzii = db.import('./recenzii');
const Comenzi = db.import('./comenzi');
const Produse = db.import('./produse');
module.exports = {
    Recenzii,
    Comenzi,
    Produse,
    connection: db
};