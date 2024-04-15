let name_input = document.getElementById("name");
let email_input = document.getElementById("email");
let message_input = document.getElementById("message");

name_input.addEventListener('input', removeInputError);
email_input.addEventListener('input', removeInputError);
message_input.addEventListener('input', removeInputError);

function removeInputError(event) {
    if (event.target.value !== "") {
        event.target.classList.remove("input-error");
    }
}

function sent() {
    let name_input = document.getElementById("name");
    let email_input = document.getElementById("email");
    let message_input = document.getElementById("message");

    let error_count = 0;
    let text = "";

    if (name_input === "" || email_input === "" || message_input === "") {
        text = "Los campos requeridos no pueden estar vacíos.";
        validation_alert(text);
        error_count++;
    }

    if (error_count === 0) {
        emailjs.sendForm('service_838qrmt', 'template_kgchf1g', '#contactForm', '5w69c63XrD3hITOfu')
            .then(function(response) {
                console.log('Éxito!', response.status, response.text);
                // Si el envío es exitoso, muestra el mensaje de éxito y limpia el formulario
                swal.fire({
                    title: "Enviado Correctamente",
                    showConfirmButton: false,
                    timer: 1450,
                    html: '<iframe width="350" height="350" src="https://lottie.host/embed/645bc63c-e149-4611-bf29-8fd97ad1e30f/Irh67BpeHe.json"></iframe>  <br><br><p>¡Un momento!</p>',
                }).then(() => {
                    limpiar();
                });
            })
            .catch(function(error) {
                console.log('Error!', error);
                // Si hay un error en el envío, muestra un mensaje de error
                swal.fire({
                    title: "Error al enviar el formulario",
                    text: "Hubo un problema al enviar el formulario. Por favor, inténtelo de nuevo más tarde.",
                    icon: "error",
                    confirmButtonText: "Cerrar"
                });
            });
    }
}

function limpiar() {
    document.getElementById("contactForm").reset(); // Esto reinicia el formulario
}

function validation_alert(ptext) {
    swal.fire({
        title: "Verificar la entrada de datos",
        text: ptext,
        confirmButtonText: "Intentar de nuevo",
        confirmButtonColor: "#0063be",
        html: '<iframe src="https://lottie.host/embed/ca5d7eb8-fb3e-405d-9376-4726ed8bb32e/gbaPYIUoIN.json"></iframe><br><p>' + ptext + " </p>"
    });
}
