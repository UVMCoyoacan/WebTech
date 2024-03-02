document.addEventListener("DOMContentLoaded", function() {
    const datosDiv = document.getElementById("datos");
    
    // Obtener los datos en XML
    const xmlString = localStorage.getItem('form');
    console.log("Datos recibidos: ",xmlString);

    
    if (xmlString) {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlString, "text/xml");
        const formDataElement = xmlDoc.documentElement;
        
        if (formDataElement.tagName === "formData") {
            const data = {};
            // Iterar
            for (let i = 0; i < formDataElement.children.length; i++) {
                const child = formDataElement.children[i];
                data[child.tagName] = child.textContent;
            }
            
            Object.keys(data).forEach(function(key) {
                const p = document.createElement('p');
                p.textContent = `${key}: ${data[key]}`;
                datosDiv.appendChild(p);
            });
            console.log("Datos en Objetect:",data);
        } else {
            datosDiv.textContent = "No se pudo almacenar los datos.";
        }
        localStorage.removeItem('contactFormData');
    } else {
        datosDiv.textContent = "No hay datos para mostrar.";
    }
});
