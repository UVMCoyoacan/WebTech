document.addEventListener("DOMContentLoaded", function() {
    const datosDiv = document.getElementById("datos");
    
    // Obtener los datos guardados en localStorage
    // TODO: obtener los datos en xml
    const data = JSON.parse(localStorage.getItem('contactFormData'));

    console.log("Datos:", data);

    // Mostrar los datos en la página
    if (data) {
        Object.keys(data).forEach(function(key) {
            const p = document.createElement('p');
            p.textContent = `${key}: ${data[key]}`;
            datosDiv.appendChild(p);
        });
    } else {
        datosDiv.textContent = "No hay datos para mostrar.";
    }

    // Limpiar localStorage después de mostrar los datos
    localStorage.removeItem('contactFormData');
});
