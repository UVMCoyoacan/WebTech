document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const formData = new FormData(form);
        
        const xmlData = document.implementation.createDocument(null, 'formData');
        
        // iterar
        for (const pair of formData.entries()) {
            const [key, value] = pair;
            const element = xmlData.createElement(key);
            element.textContent = value;
            xmlData.documentElement.appendChild(element);
        }


        const xmlString = new XMLSerializer().serializeToString(xmlData);
        localStorage.setItem('contactFormData', xmlString);

        console.log("Datos:", xmlString);


        window.location.href = "../public/receiveForms.html";
    });
});
