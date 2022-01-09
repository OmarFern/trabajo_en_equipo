
const db = require('../database/models');
const Sequelize = require('sequelize');


module.exports = (req, res,next) => {
    db.SubCategoria.findOne( { order: Sequelize.literal('rand()'), limit: 1 }
    ).then(categoriaRandom => {
        res.locals.categoriaRandom = categoriaRandom;
       /*  console.log('CATEGORIA RANDOM')
        console.log(categoriaRandom)  */
        next();
    }).catch(error => console.log(error))

    
}