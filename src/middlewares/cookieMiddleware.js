function cookieMiddleware (req,res,next){
    if(req.cookies && req.cookies.sessionCookie!=undefined && req.session && req.session.usuario == undefined){
         req.session.usuario = req.cookies.sessionCookie
    }
    next();
   }
 
   

module.exports = cookieMiddleware;