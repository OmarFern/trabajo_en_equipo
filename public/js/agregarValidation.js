
window.addEventListener("load",function(){
 
    //-----------------formulario submit----------------------
let formulario=document.getElementById("agregarForm");
formulario.addEventListener("submit", function(e){
e.preventDefault()
 
let errores=[] 
//--------nombre-----------------
let campoNombre=document.getElementById("nombre")
if(campoNombre.value==""){
    errores.push("El Nombre Tiene Que Estar Completo")}
else if(campoNombre.value.length<5){ errores.push("Deberá tener al menos 2 caracteres")}  
//--------precio---------------

let campoPrecio=document.getElementById("precio")
if(campoPrecio.value==""){
    errores.push("Ingrese Un Precio")}   
//--------DESCRIPCION---------------          

let campoDescripcion=document.querySelector("textarea")
if(campoDescripcion.value==""){ errores.push("La descripcion debe tener 20 caracteres")}

else if(campoDescripcion.value.length<20){
    errores.push("Deberá tener al menos 20 caracteres")} 
               
//--------imagen---------------          

let campoFoto=document.getElementById("imagen")
if(campoFoto.value==""){errores.push("Cargar una Imagen")}
else if (!(/\.(jpg|jpeg|png|gif)$/i).test(campoFoto.value)) {
    errores.push('El archivo a adjuntar jpg jpeg png gif ');}
             
//-------- confirmacion- errores-------------   

if(errores.length>0){
    e.preventDefault();
    let ulErrores=document.querySelector("div.errores ul")
    for (let i = 0; i < errores.length; i++) {
        ulErrores.innerHTML += "<li>"+ errores[i];+"</li>"   }}  
else{formulario.submit()}        
    }) 
   })