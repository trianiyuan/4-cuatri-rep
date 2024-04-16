function evaluarEncuesta() {
    var pregunta1 = document.getElementById("pregunta1").value;
    var pregunta2 = document.getElementById("pregunta2").value;

    var respuesta4 = "";
    var opiniones4 = document.getElementsByName("pregunta4");
    opiniones4.forEach(radio => {
        if (radio.checked) {
            respuesta4 = radio.value;
        }
    });

    var respuesta5 = "";
    var opiniones5 = document.getElementsByName("pregunta5");
    opiniones5.forEach(radio => {
        if (radio.checked) {
            respuesta5 = radio.value;
        }
    });

    var serviciosMarcados = false;
    if (document.getElementById("pc").checked || document.getElementById("nintendo").checked || document.getElementById("ps4").checked) {
        serviciosMarcados = true;
    }

    if (pregunta1 === "" || pregunta2 === "" || respuesta4 === "" || respuesta5 === "" || !serviciosMarcados) {
        swal.fire({
            title: "Querido Cliente",
            text: "Complete cada pregunta, por favor.",
            icon: "warning",
        });
    } else {
        emailjs.sendForm('service_838qrmt', 'template_v3z5tzs', '#formulario', '5w69c63XrD3hITOfu')
            .then(function(response) {
                console.log('Éxito!', response.status, response.text);
                // Aquí se define el contenido de los mensajes
                var mensaje1 = "";
                var mensaje2 = "";
                var mensaje3 = "";
                if (document.getElementById("pc").checked && document.getElementById("nintendo").checked && document.getElementById("ps4").checked) {
                    mensaje1 = "¡Gracias por confiar en nosotros y calificarnos bien en nuestros servicios!";
                } else if (!document.getElementById("pc").checked || !document.getElementById("nintendo").checked || !document.getElementById("ps4").checked) {
                    mensaje1 = "Gracias por tus respuestas, tomaremos en cuenta tus comentarios para mejorar.";
                } else {
                    mensaje1 = "Gracias por tus respuestas, lamentamos que tu experiencia no haya sido la mejor, trabajaremos para mejorar.";
                }

                if (respuesta4 === "Sí") {
                    mensaje2 = "Gracias por recomendar nuestro centro de videojuegos a tus amigos. ¡Esperamos verte pronto!";
                } else {
                    mensaje2 = mensaje3;
                }

                if (respuesta5 === "Excelente") {
                    mensaje3 = "Apreciamos que califiques nuestra calidad de equipos e infraestructura como excelente. Seguiremos manteniendo nuestro estándar.";
                } else if (respuesta5 === "Bueno") {
                    mensaje3 = "Gracias por tu opinión, seguiremos mejorando para alcanzar un nivel excelente.";
                } else if (respuesta5 === "Regular") {
                    mensaje3 = "Agradecemos tu sinceridad acerca de la calidad, vamos a trabajar para mejorarla.";
                } else {
                    mensaje3 = "Lamentamos que nuestra calidad no haya cumplido tus expectativas, nos esforzaremos por mejorarla.";
                }

                // Mensaje de éxito
                swal.fire({
                    title: "Respuestas enviadas",
                    text: "Gracias por realizar nuestra encuesta",
                    html: "<iframe src='https://lottie.host/embed/b152c3a4-0809-4781-bb94-c3b4ab288ed2/aVAczlrWYj.json' width='440' height='380' ></iframe>"
                });
                // Limpieza del formulario
                limpiarFormulario();
                // Resultado de la encuesta
                document.getElementById("res0").innerHTML = "¡Gracias por tus respuestas!";
                document.getElementById("res1").innerHTML = mensaje2;
                document.getElementById("res2").innerHTML = mensaje3;
                document.getElementById("res3").innerHTML = mensaje1;
            })
            .catch(function(error) {
                console.log('Error!', error);
                swal.fire({
                    title: "Error al enviar el formulario",
                    text: "Hubo un problema al enviar el formulario. Por favor, inténtelo de nuevo más tarde.",
                    icon: "error",
                    confirmButtonText: "Cerrar"
                });
            });
    }
}

function limpiarFormulario() {
    // Limpiar los campos de texto
    document.getElementById("pregunta1").value = "";
    document.getElementById("pregunta2").value = "";
    document.getElementById("pregunta3").value = "";

    // Desmarcar los radio buttons
    var opiniones4 = document.getElementsByName("pregunta4");
    opiniones4.forEach(radio => {
        radio.checked = false;
    });

    var opiniones5 = document.getElementsByName("pregunta5");
    opiniones5.forEach(radio => {
        radio.checked = false;
    });

    // Desmarcar los checkboxes
    document.getElementById("pc").checked = false;
    document.getElementById("nintendo").checked = false;
    document.getElementById("ps4").checked = false;

    document.getElementById("redes_sociales").checked = false;
    document.getElementById("amigos").checked = false;
    document.getElementById("internet").checked = false;
    document.getElementById("otros").checked = false;
}

