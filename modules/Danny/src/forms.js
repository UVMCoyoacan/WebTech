document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const formData = new FormData(form);
        
        const xmlData = document.implementation.createDocument(null, 'formData');
        for (const pair of formData.entries()) {
            const [key, value] = pair;
            const element = xmlData.createElement(key);
            element.textContent = value;
            xmlData.documentElement.appendChild(element);
        }
        const xmlString = new XMLSerializer().serializeToString(xmlData);
        localStorage.setItem('form', xmlString);
        window.location.href = "../public/printData.html";
    });
});
