// va dentro de <script></script>
    let agregar = document.getElementById('agregar')
    let form = document.getElementById('agregarForm')
    let inputs = document.querySelectorAll('input')
    let selects = document.querySelectorAll('select')
    let textarea = document.querySelector('textarea')

   

    agregar.onmousedown = function (e) {

      if ((inputs[0].value.length == 0 || inputs[1].value.length == 0 || inputs[2].value.length == 0) || (selects[0].value == 'Selecciona una opción' || selects[1].value == 'Selecciona una opción' || selects[2].value == 'Selecciona una opción')) {
        Swal.fire({
          title: 'Error',
          text: 'Debes completar los campos requeridos',
          icon: 'error',
          confirmButtonColor: '#ab191f',
        })

      }else if(textarea.value.length < 20){
        Swal.fire({
          toast: true,
          position: top,
          title: 'Error',
          text: 'La descripción debe ser de mínimo 20 caracteres',
          icon: 'error',
          showConfirmButton: false,
        })
      }else{
        Swal.fire({
        title: 'Confirmar datos',
        icon: 'info',
        cancelButtonText: 'Cancelar',
        cancelButtonColor: 'black',
        confirmButtonColor: '#ab191f',
        confirmButtonText: 'Continuar',
        showCancelButton: true,
      }).then(function (result) {

        if (result.isConfirmed) {
          Swal.fire({
            title: '',
            text: 'Producto agregado con éxito',
            icon: 'success',
            showConfirmButton: false,
            timer: 1000,
            willClose: () => {
              form.submit();
            }

          })

        }

      });
      }

     

    }
  