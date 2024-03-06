window.onload = function() {
    var urlParams = new URLSearchParams(window.location.search);
    var nombreCliente = urlParams.get('nombreCliente');
    var articulo = urlParams.get('articulo');
    var cantidad = parseInt(urlParams.get('cantidad'));
    var precio = parseFloat(urlParams.get('precio'));

    document.getElementById("cliente").innerText = nombreCliente;
    document.getElementById("articulo").innerText = articulo;
    document.getElementById("cantidad").innerText = cantidad;
    document.getElementById("precio").innerText = "₡" + precio.toFixed(2);

    var subtotal = cantidad * precio;
    var iva = subtotal * 0.13;
    var servicio = subtotal * 0.05;
    var totalPagar = subtotal + iva + servicio;

    document.getElementById("subtotal").innerText = "₡" + subtotal.toFixed(2);
    document.getElementById("iva").innerText = "₡" + iva.toFixed(2);
    document.getElementById("servicio").innerText = "₡" + servicio.toFixed(2);
    document.getElementById("total").innerText = "₡" + totalPagar.toFixed(2);

    var fechaHoy = new Date();
    var fechaFormateada = fechaHoy.getDate() + '/' + (fechaHoy.getMonth() + 1) + '/' + fechaHoy.getFullYear();
    document.getElementById("fecha").innerText = fechaFormateada;

    document.getElementById("enviarCorreo").addEventListener("click", function() {
        // Agregar la lógica para enviar la factura por correo
        alert("Factura enviada por correo.");
    });

    document.getElementById("imprimir").addEventListener("click", function() {
        // Agregar la lógica para imprimir la factura
        alert("Factura impresa.");
    });
};
