document.addEventListener("DOMContentLoaded", function () {
    const terminosCheckbox = document.getElementById("terminos");
    const enviarBtn = document.getElementById("enviarBtn");

    // Inicializa EmailJS en el script correcto
    emailjs.init('k9HgXtb_jhJk_kFOn'); // Reemplaza con tu User ID

    function actualizarBoton() {
        if (terminosCheckbox.checked) {
            enviarBtn.style.opacity = "1";
            enviarBtn.style.pointerEvents = "auto";
            enviarBtn.classList.remove("btn-secondary");
            enviarBtn.classList.add("btn-primary");
        } else {
            enviarBtn.style.opacity = "0.5";
            enviarBtn.style.pointerEvents = "none";
            enviarBtn.classList.remove("btn-primary");
            enviarBtn.classList.add("btn-secondary");
        }
    }

    terminosCheckbox.addEventListener("change", actualizarBoton);
    actualizarBoton(); // Llamar al cargar la página

    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault();

        const formData = {
            nombre: document.getElementById("nombre").value,
            correo: document.getElementById("correo").value,
            asunto: document.getElementById("asunto").value || "Sin asunto",
            mensaje: document.getElementById("mensaje").value || "Sin mensaje",
            fecha: new Date().toLocaleString(),
        };

        emailjs.send('service_f44jghi', 'template_k9ee1x4', formData, 'k9HgXtb_jhJk_kFOn')
            .then(() => {
                Swal.fire({
                    title: "Mensaje enviado",
                    icon: "success"
                  });
                document.getElementById("contactForm").reset();
                actualizarBoton();
            })
            .catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Algo ocurrio, intentelo de nuevo"
                  });
                console.error("Error en EmailJS:", error);
            });
    });
});



