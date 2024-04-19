'use strict';

window.addEventListener('load', init, false);

function init() {
    let btnEnviar = document.getElementById('btnSend');
    let alerta = document.getElementById('mensajeAlert');
    let tiempoInput = document.getElementById('tiempoTxt');
    let precioTxt = document.getElementById('precioTxt');

    btnEnviar.addEventListener('click', function() {
        let consola = document.getElementById('consolaTxt').value;
        let juego = document.getElementById('juegoTxt').value;
        let tiempo = tiempoInput.value;
        let fecha = document.getElementById('fechaTxt').value;
        

        if (consola === '' || juego === '' || tiempo === '' || fecha === '') {
            alerta.textContent = 'Debe llenar todos los campos.';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');
        } else {
            // Calcula el precio con impuesto
            let tiempoFloat = parseFloat(tiempo);
            let precioBase = tiempoFloat * 2500; // Precio base ₡2500 por hora
            let impuesto = precioBase * 0.13; // Impuesto del 13%
            let precioTotal = precioBase + impuesto; // Precio total con impuesto

            // Muestra el precio calculado
            precioTxt.textContent = `Precio a pagar: ₡${precioTotal.toFixed(2)}`; // Asigna el precio al campo oculto

            let precioInput = document.createElement('input');
            precioInput.type = 'hidden';
            precioInput.name = 'price';
            precioInput.value = precioTotal.toFixed(2); // Valor del precio calculado
            document.getElementById('form').appendChild(precioInput);

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
                    // Redirige a la página "inicio.html"
                    window.location.href = "inicio.html";
                });
            }, function(error) {
                console.log('Error!', error);
                swal.fire({
                    title: "Error al enviar el formulario",
                    text: "Hubo un problema al enviar el formulario. Por favor, inténtelo de nuevo más tarde.",
                    icon: "error",
                    confirmButtonText: "Cerrar"
                });
            });
        }
    });

    // Evento input para actualizar el precio estimado mientras el usuario ingresa las horas de juego
    tiempoInput.addEventListener('input', function() {
        let tiempo = tiempoInput.value;
        if (tiempo !== '') {
            let tiempoFloat = parseFloat(tiempo);
            let precioBase = tiempoFloat * 2500; // Precio base ₡2500 por hora
            let impuesto = precioBase * 0.13; // Impuesto del 13%
            let precioTotal = precioBase + impuesto; // Precio total con impuesto
            precioTxt.textContent = `Precio a pagar: ₡${precioTotal.toFixed(2)}`;
        } else {
            precioTxt.textContent = ''; // Limpiar precio si no hay tiempo ingresado
        }
    });

    // Limpia los campos del formulario
    function limpiar() {
        document.getElementById('nombreTxt').value = '';
        document.getElementById('consolaTxt').value = '';
        document.getElementById('juegoTxt').value = '';
        document.getElementById('tiempoTxt').value = '';
        document.getElementById('fechaTxt').value = '';
        precioTxt.textContent = ''; // Limpiar precio al limpiar campos
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

function updateGames() {
    var consoleSelect = document.getElementById("consolaTxt");
    var gameSelect = document.getElementById("juegoTxt");
    var selectedConsole = consoleSelect.value;
    
    
    gameSelect.innerHTML = "";
    
    
    switch (selectedConsole) {
        case "Nintendo Switch":
            addOption(gameSelect, "Seleccionar un juego:", "Seleccionar un juego:");
            addOption(gameSelect, "The Legend of Zelda", "The Legend of Zelda");
            addOption(gameSelect, "Mario Kart", "Mario Kart");
            addOption(gameSelect, "Super Smash Bros", "Super Smash Bros");
            addOption(gameSelect, "Just Dance", "Just Dance");
            break;
        case "PS5":
            addOption(gameSelect, "Seleccionar un juego:", "Seleccionar un juego:");
            addOption(gameSelect, "Spider-Man: Miles Morales", "Spider-Man: Miles Morales");
            addOption(gameSelect, "Demon's Souls", "Demon's Souls");
            addOption(gameSelect, "Call of Duty: Black Ops Cold War", "Call of Duty: Black Ops Cold War");
            break;
        case "XBOX":
            addOption(gameSelect, "Seleccionar un juego:", "Seleccionar un juego:");
            addOption(gameSelect, "Halo Infinite", "Halo Infinite");
            addOption(gameSelect, "Call of Duty: Vanguard", "Call of Duty: Vanguard");
            addOption(gameSelect, "FIFA 22", "FIFA 22");
            break;
        case "PC":
            addOption(gameSelect, "Seleccionar un juego:", "Seleccionar un juego:");
            addOption(gameSelect, "Valorant", "Valorant");
            addOption(gameSelect, "League Of Legends", "League Of Legends");
            addOption(gameSelect, "Genshin Impact", "Genshin Impact");
            break;
        case "Sim Racing":
            addOption(gameSelect, "Seleccionar un juego:", "Seleccionar un juego:");
            addOption(gameSelect, "iRacing", "iRacing");
            addOption(gameSelect, "Assetto Corsa", "Assetto Corsa");
            addOption(gameSelect, "Gran Turismo Sport", "Gran Turismo Sport");
            break;
        default:
            addOption(gameSelect, "Seleccionar un juego", "");
            break;
    }
}

function addOption(selectElement, text, value) {
    var option = document.createElement("option");
    option.textContent = text;
    option.value = value;
    selectElement.appendChild(option);
}


function c1() {
    document.getElementById("vehiculo").src = "imagenes/control1.png";
    document.getElementById("color").innerHTML = "BLURRY PURPLE";
}

function c2() {
    document.getElementById("vehiculo").src = "imagenes/control2.png";
    document.getElementById("color").innerHTML = "SMOKEY ASH";
}

function c3() {
    document.getElementById("vehiculo").src = "imagenes/control3.png";
    document.getElementById("color").innerHTML = "ARMY STYLE";
}

function c4() {
    document.getElementById("vehiculo").src = "imagenes/control4.png";
    document.getElementById("color").innerHTML = "INTENSE RED";
}

function c5() {
    document.getElementById("vehiculo").src = "imagenes/control5.png";
    document.getElementById("color").innerHTML = "PERL WHITE";
}

function c6() {
    document.getElementById("vehiculo").src = "imagenes/control6.png";
    document.getElementById("color").innerHTML = "BLACK METALLIC";
}


