document.getElementById("showPassword").addEventListener("click", function() {
    var contrasenaInput = document.getElementById("contrasena");
    if (contrasenaInput.type === "password") {
        contrasenaInput.type = "text";
    } else {
        contrasenaInput.type = "password";
    }
});

//conexion con html usando el id btn-login y cargando la funcion llamada login
document.getElementById("btn-login").addEventListener("click", login);

//funcion que valida el login 
function validation_alert(ptext) {
    swal.fire({
        /*icon: "error" */
        title: "Verificar la entrada de datos",
        text: ptext,
        confirmButtonText: "Intentar de nuevo",
        confirmButtonColor: "#0063be",
        html: '<iframe src="https://lottie.host/embed/ca5d7eb8-fb3e-405d-9376-4726ed8bb32e/gbaPYIUoIN.json"></iframe><br><p>' + ptext + " </p>"
    });
}

//funcion login
function login() {
    let user_input = document.getElementById("usuario").value;
    let pass_input = document.getElementById("contrasena").value;
    //declaracion de los dato susuario y password respectivamente
    let username = "cenfo";
    let password = "123";
    //identificadores de los campos username y password
    let input = [user_input, pass_input];
    let input_id = ["usuario", "contrasena"];
    let error_count = 0;
    let text = "";
    //ciclo FOR que hace un recorrido conla clase llamada error que permite poner la franja roja del error
    for (let i = 0; i < input.length; i++) {
        document.getElementById(input_id[i]).classList.remove("error");
        if (input[i] == "") {
            //este es el texto que llevar el paramentro de la funcion validacion_alert
            text = "Los campos requeridos NO puedes estar vacíos.";
            validation_alert(text);
            document.getElementById(input_id[i]).classList.add("error");
            error_count++;
        }
    }

    //validacion si los campos username y password son iguales
    if (error_count == 0) {
        if (user_input == username && pass_input == password) {
            swal.fire({
                //icon: "success"
                title: "Credenciales correctas",
                showConfirmButton: false,
                timer: 3500,
                html: ' <iframe width="350" height="350" src="https://lottie.host/embed/645bc63c-e149-4611-bf29-8fd97ad1e30f/Irh67BpeHe.json"></iframe>  <br><br><p>¡Un momento!</p>',

            }).then(() => {
                window.location.href = "inicio.html", "blank";
            });
        } else {
            text = "Usuario o contraseña incorrecta.";
            //carga la función de arriba
            validation_alert(text);
        }
    }
}


