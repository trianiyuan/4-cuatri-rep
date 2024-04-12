'use strict';

window.addEventListener('load', init, false);

function init() {
    let btnEnviar = document.getElementById('btnSend');
    let alerta = document.getElementById('mensajeAlert');

    btnEnviar.addEventListener('click', function() {
        let consola = document.getElementById('consolaTxt').value;
        let juego = document.getElementById('juegoTxt').value;
        let tiempo = document.getElementById('tiempoTxt').value;
        let fecha = document.getElementById('fechaTxt').value;

        if (consola === '' || juego === '' || tiempo === '' || fecha === '') {
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
        document.getElementById('nombreTxt').value = '';
        document.getElementById('consolaTxt').value = '';
        document.getElementById('juegoTxt').value = '';
        document.getElementById('tiempoTxt').value = '';
        document.getElementById('fechaTxt').value = '';
    }
}

let hoy = new Date();
        let dd = String(hoy.getDate()).padStart(2, '0');
        let mm = String(hoy.getMonth() + 1).padStart(2, '0'); // Enero es 0
        let yyyy = hoy.getFullYear();
        let fechaHoy = yyyy + '-' + mm + '-' + dd;

        // Configurar el atributo 'min' de los campos de fecha para que no puedan seleccionar una fecha anterior a hoy
        let camposFecha = document.querySelectorAll('input[type="date"]');
        camposFecha.forEach(function(input) {
            input.setAttribute('min', fechaHoy);
        });