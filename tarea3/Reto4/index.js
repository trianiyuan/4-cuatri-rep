window.onload = function() {
    document.getElementById("output-img").innerHTML = "<img src='img/logo.png' class='img-fluid rounded imglogo' alt='logo' />";

    //evento que permite cambiar el objeto onchange
    document.getElementById("consolas").onchange = function(e) {

        //destino del valor seleccionado por el usuario
        let n = e.target.value;

        //expresiones que guardan las imagenes de las consolas y la informacion de cada uno...
        let imagen = "<img src='img/combo/" + n + ".jpg' class='img-fluid img-thumbnail rounded' alt='consolas' />";
        let text = ["PlayStation 5: Ofrece potentes gráficos y una experiencia inmersiva con su tecnología de audio 3D y su innovador control DualSense.",
            "PC: Proporciona flexibilidad y personalización, permitiendo a los usuarios ajustar el rendimiento y acceder a una amplia gama de juegos y aplicaciones.",
            "Nintendo Switch: Combina la portabilidad de una consola portátil con la capacidad de jugar en el televisor, brindando una experiencia versátil y exclusiva con juegos icónicos de Nintendo.",
            "Xbox: Destaca por su extenso catálogo de juegos, servicios de suscripción como Xbox Game Pass y capacidades multimedia, ofreciendo una experiencia integral para los jugadores."];

        // opciones de comida para cada consola
        let gameOptions = [
            ["FC24", "Marvel's Spider-Man: Miles Morales", "Demon's Souls", "Rachet & Clank: Rift Apart", "Resident Evil"], // PS5
            ["Genshin Impact", "Poppy Playtime", "League of Legends", "Valorant", "Fortnite"], // PC
            ["The Legend of Zelda: Breath of the Wild", "Animal Crossing: New Horizons", "Mario Kart 8 Deluxe", "Super Smash Bros. Ultimate", "Just Dance"], // Nintendo Switch
            ["Halo Infinite", "Forza Horizon 5", "Gears 5", "Sea of Thieves", "Microsoft Flight Simulator"] // XBOX
        ];

        //salida de la imagenes y los texto informativos
        document.getElementById("output-img").innerHTML = imagen;
        document.getElementById("output-txt").innerHTML = text[n - 1];

        // limpia el menú de comida
        document.getElementById("game-options").innerHTML = "";

        // si se selecciona una consola válido, muestra las opciones de juegos
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
    document.getElementById("output-img").innerHTML = "<img src='img/logo.png' class='img-fluid rounded imglogo' alt='logo' />";
    //limpia los textos informativos de las consolas...
    document.getElementById("output-txt").innerHTML = "";
    //limpia el menú de videojuegos
    document.getElementById("game-options").innerHTML = "";
    //dejar el select con el texto por defecto...
    document.getElementById("consolas").value = "";
};
