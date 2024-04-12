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
            let name_input_value = name_input.value;
            let email_input_value = email_input.value;
            let message_input_value = message_input.value;

            let error_count = 0;
            let text = "";

            if (name_input_value === "" || email_input_value === "" || message_input_value === "") {
                text = "Los campos requeridos no pueden estar vacíos.";
                validation_alert(text);
                error_count++;
            }

            if (error_count === 0) {
                swal.fire({
                    title: "Enviado Correctamente",
                    showConfirmButton: false,
                    timer: 1450,
                    html: '<iframe width="350" height="350" src="https://lottie.host/embed/645bc63c-e149-4611-bf29-8fd97ad1e30f/Irh67BpeHe.json"></iframe>  <br><br><p>¡Un momento!</p>',
                }).then(() => {
                    limpiar();
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


        'use strict';

window.addEventListener('load', init, false);

function init() {
    let btnEnviar = document.getElementById('btnSend');
    let alerta = document.getElementById('mensajeAlert');

    btnEnviar.addEventListener('click', function() {
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let message = document.getElementById('message').value;

        if (name === '' || email === '' || message === '') {
            alerta.textContent = 'Debe llenar todos los campos';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');
        } else {
            // Si no hay errores, envía el formulario por correo electrónico
            alerta.textContent = 'Reserva confirmada';
            alerta.classList.add('alertaVerde');
            alerta.classList.remove('alertaRoja');
            // Envía los datos del formulario a través de emailjs
            emailjs.sendForm('service_fk6kt3d', 'template_t4vh2tj', '#form', 'LOdSsM6IiEFZYpMlA')
            .then(function(response) {
                console.log('Éxito!', response.status, response.text);
                limpiar(); // Limpia los campos del formulario después de enviarlo
                // Muestra la confirmación usando SweetAlert2
                Swal.fire({
                    title: 'Reserva Confirmada',
                    text: '¡Su reserva ha sido enviada correctamente!',
                    icon: 'success',
                    confirmButtonText: 'Aceptar'
                }).then(() => {
                    // Redirige a la página "landing.html"
                    window.location.href = "inicio.html";
                });
            }, function(error) {
                console.log('Error!', error);
            });
        }
    });

    // Limpia los campos del formulario
    function limpiar() {
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    }
}
