function enviarFormulario() {
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
  
    if (nombre === '' || email === '') {
      alert('Por favor, complete todos los campos.');
      return;
    }
  
    var datosFormulario = {
      nombre: nombre,
      email: email
    };
  
    console.log('Datos del formulario:', datosFormulario);
  
    document.getElementById('respuestaNombre').value = 'Nombre: ' + nombre;
    document.getElementById('respuestaEmail').value = 'Correo Electrónico: ' + email;
  

  }