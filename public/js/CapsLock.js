var inputPassword = document.getElementById("password");
var body = document.querySelector("body");

let cont = 1

const Toast = Swal.mixin({
  toast: true,
  showConfirmButton: false,
  position: 'bottom',
  title: 'Mayúsculas activadas',
  timer:1000
})

function detect(){
  var keyCode = e.keyCode ? e.keyCode : e.which;
		var shiftKey = e.shiftKey ? e.shiftKey : ((keyCode == 16) ? true : false);
		return (((keyCode >= 65 && keyCode <= 90) && !shiftKey) || ((keyCode >= 97 && keyCode <= 122) && shiftKey))
}

window.onload = function (e){

 /*  e = e || window.event;
  var s = String.fromCharCode( e.keyCode || e.which ); */
  if (detect(e)) { alert('ACTIVADAS')          
  cont = 1} 
  else {alert('DESACTIVADAS')
  cont = 2}
  alert(cont)}
  
body.addEventListener("keydown", function (event) {

  if (event.keyCode === 20 && (cont % 2 == 1)) { Toast.fire() 
     cont++;}
    else if ((event.keyCode === 20 && (cont % 2 == 0))) {
    Toast.fire({ title: 'Mayúsculas desactivadas', })
    cont++;
  }

});