window.onload = function() {
    document.getElementById("output-img").innerHTML = "<img src='img/logo.png' class='img-fluid rounded' alt='logo' />";

    //evento que permite cambiar el objeto onchange
    document.getElementById("stadium").onchange = function(e) {

        //destino del valor seleccionado por el usuario
        let n = e.target.value;

        //expresiones que guardan las imagene de los estadios y la informacion de cada uno...
        let imagen = "<img src='img/combo/" + n + ".jpg' class='img-fluid img-thumbnail rounded' alt='estadio' />";
        let text = ["Ciudad: Al Rayyan - Capacidad: 60.000 espectadores",
            "Ciudad: Al Khor City - Capacidad: 60.000 espectadores",
            "Ciudad: Al Wakrah - Capacidad: 40.000 espectadores",
            "Ciudad: Al Doha - Capacidad: 40.000 espectadores",
            "Ciudad: Al Rayyan - Capacidad: 40.000 espectadores",
            "Ciudad: Al Doha - Capacidad: 45.416 espectadores",
            "Ciudad: Al Doha - Capacidad: 80.000 espectadores",
            "Ciudad: Al Doha - Capacidad: 40.000 espectadores"];

        // opciones de comida para cada estadio
        let gameOptions = [
            ["Comida 1", "Comida 2", "Comida 3", "Comida 4"], // Estadio Ahmad Bin Ali
            ["Comida 1", "Comida 2", "Comida 3"], // Estadio Al Bayt Stadium
            ["Comida 4", "Comida 5", "Comida 6"], // Estadio Al Janoub
            ["Comida 7", "Comida 8", "Comida 9"], // Estadio Al Thumama
            ["Comida 10", "Comida 11", "Comida 12"], // Estadio de la Ciudad de la Educación
            ["Comida 13", "Comida 14", "Comida 15"], // Estadio Internacional Khalifa
            ["Comida 16", "Comida 17", "Comida 18"], // Estadio Lusail
            ["Comida 19", "Comida 20", "Comida 21"] // Estadio Ras Abu Abboud
        ];

        //salida de la imagenes y los texto informativos
        document.getElementById("output-img").innerHTML = imagen;
        document.getElementById("output-txt").innerHTML = text[n - 1];

        // limpia el menú de comida
        document.getElementById("game-options").innerHTML = "";

        // si se selecciona un estadio válido, muestra las opciones de comida
        if (n > 0) {
            let gameSelect = document.createElement("select");
            gameSelect.className = "form-select mt-3";
            gameSelect.id = "game-select";
            gameSelect.innerHTML = "<option value='' selected disabled>Ver videojuegos disponibles.</option>";
            gameOptions[n - 1].forEach(function(option) {
                gameSelect.innerHTML += "<option value='" + option + "'>" + option + "</option>";
            });
            document.getElementById("game-options").appendChild(gameSelect);
        }
    };
};

//funcion del boton reiniciar
document.getElementById("btn-clean").onclick = function() {
    document.getElementById("output-img").innerHTML = "<img src='img/logo.png' class='img-fluid rounded' alt='logo' />";
    //limpia los textos informativos de los estadios...
    document.getElementById("output-txt").innerHTML = "";
    //limpia el menú de comida
    document.getElementById("food-options").innerHTML = "";
    //dejar el select con el texto por defecto...
    document.getElementById("stadium").value = "";
};
