module.exports  = (req,res,next)=>{
   /*  console.log('LOG MID') */
    if(req.session.usuario){
        /* console.log('RES PERFIL') */
        res.redirect('/perfil')
      
    }else{
/*         console.log('NEXT') */
        next()
    }
}

/* module.exports = loggedMiddleware; */