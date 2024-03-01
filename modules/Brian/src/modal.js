document.addEventListener("DOMContentLoaded", function() {
    var contactarBtn = document.getElementById("contactarBtn");
    var modal = document.getElementById("modalContacto");
    var modalBackground = document.getElementById("modalBackground");
    
    contactarBtn.addEventListener("click", function(event) {
      event.preventDefault();
      modal.style.display = "block";
      modalBackground.style.display = "block";
      document.querySelector("#modalContacto iframe").src = "../public/forms.html";
    });

    modal.querySelector(".close").addEventListener("click", function() {
      modal.style.display = "none";
      modalBackground.style.display = "none";
    });
  });
