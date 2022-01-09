module.exports  = (req,res,next)=>{
 
     if(req.session.usuario && req.session.usuario.fkRol != 1){
       
         res.redirect('/noAdmin')
       
     }else{

         next()
     }
 }
 
