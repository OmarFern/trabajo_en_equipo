let subcategoriaElegida = document.getElementById('subcategoria');

window.onload = function () {
  subcategoriaElegida.toggleAttribute('disabled', true) };

let categoriaElegida = document.getElementById('categoria');

categoriaElegida.onchange = function (e) {
  subcategoriaElegida.toggleAttribute('disabled', false)
  const select = e.target;
  const value = select.value;
  const cat = select.options[select.selectedIndex].text;


  if (cat == 'Guitarras y bajos') {
    for (let i = 1; i < subcategoriaElegida.length; i++) {

      if (subcategoriaElegida[i].value <= 3 || subcategoriaElegida[i].value == 19) {
              subcategoriaElegida[i].style.display = 'block'} 
      else {
            subcategoriaElegida[i].style.display = 'none' } } }
  if (cat == 'Pedales') {
    for (let i = 1; i < subcategoriaElegida.length; i++) {

      if (subcategoriaElegida[i].value >= 4 && subcategoriaElegida[i].value <= 8) {
        subcategoriaElegida[i].style.display = 'block'  } 
      else {
        subcategoriaElegida[i].style.display = 'none' } }}

  if (cat == 'Teclados y pianos') {
    for (let i = 1; i < subcategoriaElegida.length; i++) {
      if (subcategoriaElegida[i].value == 9 || subcategoriaElegida[i].value == 10) {
           subcategoriaElegida[i].style.display = 'block'}
      else {
        subcategoriaElegida[i].style.display = 'none'} }}


  if (cat == 'Sonido y audio') {
    for (let i = 1; i < subcategoriaElegida.length; i++) {
      if (subcategoriaElegida[i].value == 11 || subcategoriaElegida[i].value == 12){
        subcategoriaElegida[i].style.display = 'block' } 
      else {
        subcategoriaElegida[i].style.display = 'none' } } }
 
 
  if (cat == 'Accesorios y extras') {


         for (let i = 1; i < subcategoriaElegida.length; i++) {
           
           if ( (subcategoriaElegida[i].value >= 13 && subcategoriaElegida[i].value <= 14) || subcategoriaElegida[i].value >= 22 ) {
             subcategoriaElegida[i].style.display = 'block'  }
           else {
            subcategoriaElegida[i].style.display = 'none' }  } }
        
       if (cat == 'Baterías y percusión') {
         for (let i = 1; i < subcategoriaElegida.length; i++) {
           if (subcategoriaElegida[i].value == 18)  {
              subcategoriaElegida[i].style.display = 'block' }
           else{
              subcategoriaElegida[i].style.display = 'none' }   } }


}