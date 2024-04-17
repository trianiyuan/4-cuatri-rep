//varibale de arreglo
let micarrusel = {};
let foto = 0;
let total = 0;

//arreglo para cargar las imagenes y titulo de cada foto.
micarrusel = [{ imageurl: "imagenes/patrocinador.png", titulo: "INFINITY" },
    {imageurl: "imagenes/patrocinador1.png", titulo: "Logitech"},
    {imageurl: "imagenes/patrocinador2.png", titulo: "Subway"},
    {imageurl: "imagenes/patrocinador3.png", titulo: "BMW"}
];

//funcion que permite cambiar las imagenes (anterior y siguiente)
let cambiar = function(mas) {
    //almacena la cantidad total de imagenes
    total = micarrusel.length;
    //almacena la proxima foto
    foto = foto + mas;
    //condicionales para determinar la imagen a presentar
    if (foto > total) {
        foto = 1
    }
    if (foto < 1) {
        //tiene la cantidad total de imagenes
        foto = total;
    }

    //instruciones que apuntan a cada imagen y titulo qaue brinda cada logotipo
    document.thumb.src = micarrusel[foto-1].imageurl;
    titulo = document.getElementById('titulo');
    titulo.innerText = micarrusel[foto - 1].titulo;
}