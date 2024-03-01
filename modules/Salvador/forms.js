document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var age = document.getElementById('age').value;
    var occupation = document.getElementById('occupation').value;
    var message = document.getElementById('message').value;

    var formData = {
        name: name,
        email: email,
        phone: phone,
        age: age,
        occupation: occupation,
        message: message
    };

    // Convertimos el objeto a JSON para enviarlo al otro documento
    var jsonData = JSON.stringify(formData);

    // Enviamos los datos al otro documento utilizando el localStorage
    localStorage.setItem('formData', jsonData);

    // Redireccionamos a la página que muestra los datos
    window.location.href = 'mostrarForms.html';
});
