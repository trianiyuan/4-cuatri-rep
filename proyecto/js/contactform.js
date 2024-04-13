function evaluarEncuesta() {
    // Preguntas 1 y 2.
    var pregunta1 = document.getElementById("r1").value;
    var pregunta2 = document.getElementById("r2").value;

    // Código para saber la opción escogida en el input radio de la pregunta 4.
    var respuesta4 = "";
    document.getElementsByName("opinion").forEach(radio => {
        if (radio.checked) {
            respuesta4 = radio.value;
        }
    });

    // Código para saber la opción escogida en el input radio de la pregunta 5.
    var respuesta5 = "";
    document.getElementsByName("opinion2").forEach(radio => {
        if (radio.checked) {
            respuesta5 = radio.value;
        }
    });

    // Validación de los datos ingresados
    if (pregunta1 === "" || pregunta2 === "" || respuesta4 === "" || respuesta5 === "") {
        swal.fire({
            title: "Querido Cliente",
            text: "Complete cada pregunta, por favor.",
            icon: "warning",
        });
    } else {
        // Condicionales que determinan las opciones seleccionadas por el cliente.
        var mensaje1 = "";
        if (document.getElementById("pc").checked && document.getElementById("nintendo").checked && document.getElementById("ps4").checked) {
            mensaje1 = "¡Gracias por confiar en nosotros y calificarnos bien en nuestros servicios!";
        } else if (!document.getElementById("pc").checked || !document.getElementById("nintendo").checked || !document.getElementById("ps4").checked) {
            mensaje1 = "Gracias por tus respuestas, tomaremos en cuenta tus comentarios para mejorar.";
        } else {
            mensaje1 = "Gracias por tus respuestas, lamentamos que tu experiencia no haya sido la mejor, trabajaremos para mejorar.";
        }

        var mensaje3 = "";
        if (respuesta5 === "Excelente") {
            mensaje3 = "Apreciamos que califiques nuestra calidad de equipos e infraestructura como excelente. Seguiremos manteniendo nuestro estándar.";
        } else if (respuesta5 === "Bueno") {
            mensaje3 = "Gracias por tu opinión, seguiremos mejorando para alcanzar un nivel excelente.";
        } else if (respuesta5 === "Regular") {
            mensaje3 = "Agradecemos tu sinceridad acerca de la calidad, vamos a trabajar para mejorarla.";
        } else {
            mensaje3 = "Lamentamos que nuestra calidad no haya cumplido tus expectativas, nos esforzaremos por mejorarla.";
        }

        var mensaje2 = "";
        if (respuesta4 === "Sí") {
            mensaje2 = "Gracias por recomendar nuestro centro de videojuegos a tus amigos. ¡Esperamos verte pronto!";
        } else {
            mensaje2 = mensaje3;
        }

        // Desplegable que aparecerá cuando el cliente de clic al botón Enviar
        swal.fire({
            title: "Respuestas enviadas",
            text: "Gracias por realizar nuestra encuesta",
            html: "<iframe src='https://lottie.host/embed/b152c3a4-0809-4781-bb94-c3b4ab288ed2/aVAczlrWYj.json' width='440' height='380' ></iframe>"
        });

        limpiarFormulario();

        // Resultado de la encuesta
        document.getElementById("res0").innerHTML = "¡Gracias por tus respuestas!";
        document.getElementById("res1").innerHTML = mensaje2;
        document.getElementById("res2").innerHTML = mensaje3;
        document.getElementById("res3").innerHTML = mensaje1;
    }
}

function limpiarFormulario() {
    document.getElementById("r1").value = "";
    document.getElementById("r2").value = "";

    var opcionesRadio3 = document.getElementsByName("opinion");
    opcionesRadio3.forEach(radio => (radio.checked = false));

    var opcionesRadio4 = document.getElementsByName("opinion2");
    opcionesRadio4.forEach(radio => (radio.checked = false));

    document.getElementById("pc").checked = false;
    document.getElementById("nintendo").checked = false;
    document.getElementById("ps4").checked = false;

    document.querySelectorAll('.checkbox').forEach(checkbox => checkbox.checked = false);

    document.getElementById("res0").innerHTML = "";
    document.getElementById("res1").innerHTML = "";
    document.getElementById("res2").innerHTML = "";
    document.getElementById("res3").innerHTML = "";
}

