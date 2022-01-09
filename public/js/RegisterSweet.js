      let registrarse = document.getElementById('registrarse')
      let inputs = document.querySelectorAll('input');
      let form = document.getElementById('formRegister')
      let email = document.getElementById('emailRegister')
      let password = document.getElementById('password')
      let passwordConfirmar = document.getElementById('passwordConfirmar')
      let foto = document.getElementById('foto')


      let regexEmail = /\S+@\S+\.\S+/;
      let regexPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/;

      const newToast = Swal.mixin({
          toast: true,
          showConfirmButton: false,
          position: 'top',})


      foto.onchange = function checkFoto(e) {  e.preventDefault()
          if (foto.value.length == 0) {
              newToast.fire({
                  title: "Atención",
                  html: 'Debes completar el campo de <b style="color:#ab191f"> Foto de perfil </b>',
                  icon: "error",
                  position: 'top',
                  timer: 1500 })} 
          else {
              if (!foto.files[0].name.match(/.(jpg|jpeg|png|gif)$/i)) {
                  newToast.fire({
                      title: 'La foto de perfil deberá ser de formato JPG, JPEG, PNG o GIF',
                      timer: 3000,
                      width: '28vw',
                      icon: 'warning', })
                  return false; } 
              else {
                  newToast.fire({
                      title: 'La foto de perfil es válida',
                      timer: 1500,
                      width: '18vw',
                      icon: 'success',  })
                  return true; }  } }


      email.onblur = function onblurEmail() {
          if (email.value.length == 0) {
              newToast.fire({
                  title: "Atención",
                  html: 'Debes completar el campo de <b style="color:#ab191f"> Email </b>',
                  icon: "error",
                  position: 'top',
                  timer: 1500  })

              return false; }
           else {

              return true; } }
      email.onchange = function onchangeEmail(e) {
          e.preventDefault()
          if (regexEmail.test(email.value) == false) {
              newToast.fire({
                  title: 'Debes completar el campo con un email válido',
                  timer: 1500,
                  width: '28vw',
                  icon: 'warning', })
              return false; }
           else {
              newToast.fire({
                  title: 'Email válido',
                  timer: 1500,
                  width: '13vw',
                  icon: 'success',  })
              return true; } }

      inputs[1].onblur = function onblurNombre(e) {
          if (inputs[1].value.length == 0) {
              newToast.fire({
                  title: "Atención",
                  html: 'Debes completar el campo de <b style="color:#ab191f"> Nombre </b>',
                  icon: "error",
                  position: 'top',
                  timer: 1500 })
              return false; }
           else {
              return true; } }

      inputs[1].onchange = function onchangeNombre(e) {
          e.preventDefault()

          if (inputs[1].value.length < 2) {
              newToast.fire({
                  title: 'El campo de nombre debe tener al menos 2 caracteres',
                  timer: 1500,
                  width: '28vw',
                  icon: 'warning', })
              return false; }
           else {
              newToast.fire({
                  title: 'Nombre válido',
                  timer: 1500,
                  width: '15vw',
                  icon: 'success', })
              return true; } }

      inputs[2].onblur = function onblurApellido(e) {
          if (inputs[2].value.length == 0) {
              newToast.fire({
                  title: "Atención",
                  html: 'Debes completar el campo de <b style="color:#ab191f"> Apellido </b>',
                  icon: "error",
                  position: 'top',
                  timer: 1500 })
              return false; }
           else {
              return true; } }


      inputs[2].onchange = function onchangeApellido(e) {
          e.preventDefault()

          if (inputs[2].value.length < 2) {
              newToast.fire({
                  title: 'El campo de apellido debe tener al menos 2 caracteres',
                  timer: 1500,
                  width: '28vw',
                  icon: 'warning',  })
              return false;  } 
          else {
              newToast.fire({
                  title: 'Apellido válido',
                  timer: 1500,
                  width: '15vw',
                  icon: 'success',   })
              return true;   } }


      inputs[3].onblur = function onblurUsuario(e) {
          if (inputs[3].value.length == 0) {
              newToast.fire({
                  title: "Atención",
                  html: 'Debes completar el campo de <b style="color:#ab191f"> Usuario </b>',
                  icon: "error",
                  position: 'top',
                  timer: 1500  })
              return false; } 
          else {
              return true; } }

      inputs[5].onblur = function onblurDomicilio(e) {
          if (inputs[5].value.length == 0) {
              newToast.fire({
                  title: "Atención",
                  html: 'Debes completar el campo de <b style="color:#ab191f"> Domicilio </b>',
                  icon: "error",
                  position: 'top',
                  timer: 1500  })
              return false;}
           else {
              return true;  } }



      password.onblur = function onblurPassword(e) {
          if (password.value.length == 0) {
              newToast.fire({
                  title: "Atención",
                  html: 'Debes completar el campo de <b style="color:#ab191f"> contraseña </b>',
                  icon: "error",
                  position: 'top',
                  timer: 1500  })
              return false; } 
          else {
              return true; }  }
      password.onchange = function onchangePassword(e) {

          if (regexPass.test(password.value) == false || password.value.length < 8) {
              newToast.fire({
                  title: 'La contraseña debe ser o tener más de 8 carácteres y al menos un carácter especial, una letra mayúscula y una letra minúscula',
                  icon: 'warning',
                  timer: 3000,
                  width: '32vw',  })
              return false; }
           else {
              newToast.fire({
                  title: 'Contraseña válida',
                  timer: 1500,
                  width: '15vw',
                  icon: 'success',  })
              return true; } }


      passwordConfirmar.onblur = function onblurConfirmarPassword(e) {
          if (passwordConfirmar.value.length == 0) {
              newToast.fire({
                  title: "Atención",
                  html: 'Debes completar el campo de <b style="color:#ab191f"> Repetir contraseña </b>',
                  icon: "error",
                  position: 'top',
                  timer: 1500
              })
              return false; } 
          else {
              return true;} }

      passwordConfirmar.onchange = function onchangeConfirmarPassword(e) {

          if (passwordConfirmar.value != password.value) {
              newToast.fire({
                  title: 'Las contraseñas no coinciden',
                  icon: 'warning',
                  timer: 3000,
                  width: '20vw',  })
              return false;  } 
          else {
              newToast.fire({
                  title: 'Las contraseñas coinciden',
                  icon: 'success',
                  timer: 3000,
                  width: '20vw',   })
              return true; }  }


      registrarse.onmousedown = function (e) {
          e.preventDefault();

          for (let i = 1; i < inputs.length; i++) {
              if (inputs[i].value.length == 0) {
                  Swal.fire({
                      title: "Error",
                      html: 'Debes completar los campos',
                      icon: "error",
                      confirmButtonColor: '#ab191f' }) } 
              else if (onblurEmail() == true && onchangeEmail() == true && checkFoto() == true && onblurNombre() == true && onchangeNombre() == true && onblurApellido() ==
                  true && onchangeApellido() == true && onblurUsuario() == true && onblurDomicilio() == true && onblurPassword() == true && onchangePassword() == true && onblurConfirmarPassword() == true && onchangeConfirmarPassword() == true) {
                  alert('entra acá')
                    Swal.fire({
                      title: "Confirmar datos",
                      icon: "info",
                      cancelButtonText: 'Cancelar',
                      cancelButtonColor: 'black',
                      confirmButtonColor: '#ab191f',
                      confirmButtonText: 'Continuar',
                      showCancelButton: true,
                  }).then(function (result) {
                      if (result.isConfirmed) {
                          Swal.fire({
                              title: "Felicitaciones!",
                              text: "Tu cuenta a sido creada con éxito!",
                              icon: "success",
                              showConfirmButton: false,
                              timer: 1500,
                              willClose: () => {
                                  form.submit(); }    })   }  })   }  }  }