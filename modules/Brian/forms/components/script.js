document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const formData = new FormData(form);

        // Convertir los datos a objeto y guardarlos en localStorage
        const data = {};
        for (const pair of formData.entries()) {
            data[pair[0]] = pair[1];
        }
        localStorage.setItem('contactFormData', JSON.stringify(data));

        console.log("Datos", data);

        // Redireccionar a la página de recibir datos
        window.location.href = "../public/receiveForms.html";
    });
});
