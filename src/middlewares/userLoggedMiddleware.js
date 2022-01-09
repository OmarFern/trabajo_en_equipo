const db = require ("../database/models");
const Op = require("sequelize").Op;

function userLoggedMiddleware (req,res,next){
    
    res.locals.isLogged = false;

  
    let emailInCookie = "";
    if (req.cookies.cookieEmail) emailInCookie = req.cookies.email;
   
    db.Usuario.findOne( {where:{email: emailInCookie}, [Op.and]: {deleted:0} })
    .then((userFromCookie) => {
        
        if (userFromCookie) {
            req.session.userLogged = userFromCookie;
        }
        
        if(req.session && req.session.userLogged){
            res.locals.isLogged = true;
            res.locals.userLogged = req.session.userLogged;
        }
        next();
    }).catch((error) => {
        //console.log(error)
    })
}
module.exports = userLoggedMiddleware;