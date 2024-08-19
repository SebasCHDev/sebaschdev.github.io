 // Espera a que el DOM esté completamente cargado
 document.addEventListener("DOMContentLoaded", function() {
    // Selecciona el formulario y el contenedor del mensaje
    const form = document.getElementById("contactForm");
    const confirmationMessage = document.getElementById("formConfirmation");

    // Añade un evento de escucha para el envío del formulario
    form.addEventListener("submit", function(event) {
        // Previene el comportamiento por defecto del formulario (recargar la página)
        event.preventDefault();

        // Realiza el envío del formulario usando Fetch API
        fetch(form.action, {
            method: form.method,
            body: new FormData(form),
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                // Oculta el formulario
                form.style.display = 'none';

                // Muestra el mensaje de confirmación
                confirmationMessage.style.display = 'block';
            } else {
                alert("Hubo un problema con el envío del formulario.");
            }
        }).catch(error => {
            alert("Ocurrió un error: " + error.message);
        });
    });
});