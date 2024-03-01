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

    var jsonData = JSON.stringify(formData);

    localStorage.setItem('formData', jsonData);

    window.location.href = 'mostrarForms.html';
});
