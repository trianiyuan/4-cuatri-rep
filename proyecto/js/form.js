function sent() {
    let name_input = document.getElementById("name").value;
    let email_input = document.getElementById("email").value;
    let message_input = document.getElementById("message").value;

    let error_count = 0;
    let text = "";

    let inputs = [name_input, email_input, message_input];
    let input_ids = ["name", "email", "message"];

    for (let i = 0; i < inputs.length; i++) {
        document.getElementById(input_ids[i]).classList.remove("error");
        if (inputs[i] === "") {
            text = "Los campos requeridos no pueden estar vacíos.";
            validation_alert(text);
            document.getElementById(input_ids[i]).classList.add("error");
            error_count++;
        }
    }

    if (error_count === 0) {
        swal.fire({
            title: "Enviado Correctamente",
            showConfirmButton: false,
            timer: 1450,
            html: '<iframe width="350" height="350" src="https://lottie.host/embed/645bc63c-e149-4611-bf29-8fd97ad1e30f/Irh67BpeHe.json"></iframe>  <br><br><p>¡Un momento!</p>',
        }).then(() => {
            window.location.href = "inicio.html";
        });
    }
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



