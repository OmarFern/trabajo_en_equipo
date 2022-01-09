module.exports = (req,res,next)=>{
    if(req.session.usuario == undefined){
        res.redirect('/noSession')
    }else{
     
        next();
    }
}

/* module.exports = notLoggedMiddleware; */