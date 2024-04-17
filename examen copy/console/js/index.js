window.onload = function() {
    var a; // Define the variable 'a' outside of the event handlers
    var n; // Define the variable 'n' outside of the event handlers

    // Combo llamado periferico ID
    document.getElementById("periferico").onchange = function(e) {
        var imagen;
        a = e.target.value;
        n = document.getElementById("version").value; // Update the value of 'n'
        if (a == "Teclado") {
            imagen = "imagenes/tecladorazer.png";
        } else if (a == "Mouse") {
            imagen = "imagenes/mouserazer.png";
        } else if (a == "Audífonos") {
            imagen = "imagenes/audifonosrazer.png";
        } else if (a == "Micrófono") {
            imagen = "imagenes/microfonorazer.png";
        }
        // Cambiar el tamaño de la imagen
        document.getElementById("imagen").src = imagen;
        document.getElementById("imagen").style.width = "500px"; // Cambia este valor al tamaño deseado
        document.getElementById("imagen").style.height = "auto"; // Esto mantiene la proporción de la imagen
    }

    document.getElementById("version").onchange = function(es) {
        n = es.target.value; // Update the value of 'n'
        // Call the 'calcular' function when both 'a' and 'n' are defined
        if (a && n) {
            actualizarImagen(); // Update the image whenever the version changes
        }
    }

    // Function to update the image source based on the selected peripheral and its version
    function actualizarImagen() {
        var imagen;
        if (a == "Teclado") {
            imagen = "imagenes/teclado" + n.toLowerCase() + ".png";
        } else if (a == "Mouse") {
            imagen = "imagenes/mouse" + n.toLowerCase() + ".png";
        } else if (a == "Audífonos") {
            imagen = "imagenes/audifonos" + n.toLowerCase() + ".png";
        } else if (a == "Micrófono") {
            imagen = "imagenes/microfono" + n.toLowerCase() + ".png";
        }
        // Update the image source
        document.getElementById("imagen").src = imagen;
    }

    // Add event listener to the "Calcular Precio" button
    document.getElementById("calcularPrecioBtn").addEventListener("click", function() {
        calcular();
    });
}

document.getElementById("calcularBtn").addEventListener("click", function() {
    var periferico = document.getElementById("periferico").value;
    var version = document.getElementById("version").value;
    calcular(periferico, version);
});

function calcular() {
    var periferico = document.getElementById("periferico").value;
    var version = document.getElementById("version").value;
    console.log("Periferico seleccionado:", periferico);
    console.log("Version seleccionada:", version);
    // Your calculation logic here

    switch (periferico) {
        case "Teclado":
            if (version === "Razer") {
                montoCuota = 39.99;
                imagenDireccion = "imagenes/tecladorazer.png";
            } else {
                montoCuota = 189.00;
                imagenDireccion = "imagenes/tecladologitech.png";
            }
            break;
        case "Mouse":
            if (version === "Razer") {
                montoCuota = 24.10;
                imagenDireccion = "imagenes/mouserazer.png";
            } else {
                montoCuota = 95.80;
                imagenDireccion = "imagenes/mouselogitech.png";
            }
            break;
        case "Audífonos":
            if (version === "Razer") {
                montoCuota = 49.99;
                imagenDireccion = "imagenes/audifonosrazer.png";
            } else {
                montoCuota = 131.00;
                imagenDireccion = "imagenes/audifonoslogitech.png";
            }
            break;
        case "Micrófono":
            if (version === "Razer") {
                montoCuota = 129.99;
                imagenDireccion = "imagenes/micrófonorazer.png";
            } else {
                montoCuota = 40.99;
                imagenDireccion = "imagenes/micrófonologitech.png";
            }
            break;
        default:
            break;
    }

    // Show the SweetAlert modal with the calculated result
    swal.fire({
        imageUrl: imagenDireccion,
        html: periferico +
            " " +
            version +
            "<br><br> <strong>Precio acutal de:</strong></p> " +
            "$" +
            montoCuota,
        imageWidth: 600,
        imageHeight: 250,
        imageAlt: "Periférico " + periferico,
    });
}


