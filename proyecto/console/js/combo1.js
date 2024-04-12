window.onload = function() {
    document.getElementById("output-img").innerHTML = "<img src='img/logo.png' class='img-fluid rounded' alt='logo' />";

    //evento que permite cambiar el objeto onchange
    document.getElementById("stadium").onchange = function(e) {

        //destino del valor seleccionado por el usuario
        let n = e.target.value;

        //expresiones que guardan las imagene de los estadios y la informacion de cada uno...
        let imagen = "<img src='img/combo/" + n + ".jpg' class='img-fluid img-thumbnail rounded' alt='consola' />";
        let text = ["<span style='color: white;'>Consola: Nintendo Switch - Lanzamiento: 2017</span>",
                    "<span style='color: white;'>Consola: PS5 - Lanzamiento: 2020</span>",
                    "<span style='color: white;'>Consola: XBOX - Lanzamiento: 2020</span>",
                    "<span style='color: white;'>Consola: PC - Con componentes de última generación</span>",
                    "<span style='color: white;'>Consola: Sim Racing - Lanzamiento: 2015</span>"];


        // opciones de comida para cada estadio
        let gameOptions = [
            ["The Legend of Zelda", "Mario Kart", "Super Smash Bros", "Just Dance"], // Nintendo
            ["Spider-Man: Miles Morales", "Demon's Souls", "Call of Duty: Black Ops Cold War"], // PS5
            ["Halo Infinite", "Call of Duty: Vanguard", "FIFA 22"], // XBOX
            ["Valorant", "League Of Legends", "Genshin Impact"], // PC
            ["iRacing", "Assetto Corsa", "Gran Turismo Sport"], // Sim Racing
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
    document.getElementById("game-options").innerHTML = "";
    //dejar el select con el texto por defecto...
    document.getElementById("stadium").value = "";
};
