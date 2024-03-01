document.addEventListener('DOMContentLoaded', function() {
    // Obtenemos los datos del localStorage
    var jsonData = localStorage.getItem('formData');

    // Convertimos el JSON a objeto
    var formData = JSON.parse(jsonData);

    // Mostramos los datos en el documento
    var contactDataElement = document.getElementById('contactData');
    contactDataElement.innerHTML = `
        <p><strong>Nombre:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Teléfono:</strong> ${formData.phone}</p>
        <p><strong>Edad:</strong> ${formData.age}</p>
        <p><strong>Ocupación:</strong> ${formData.occupation}</p>
        <p><strong>Mensaje:</strong> ${formData.message}</p>
    `;
});
