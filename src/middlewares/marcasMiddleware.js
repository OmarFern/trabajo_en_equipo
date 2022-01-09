const db = require('../database/models');

module.exports = (req, res,next) => {
    db.Marca.findAll(
    ).then(marcas => {
        res.locals.marcas = marcas;
        //console.log(marcas)
        next();
    }).catch(error => console.log(error))

    
}