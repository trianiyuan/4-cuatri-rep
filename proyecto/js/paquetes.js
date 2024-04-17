document.getElementById('menuOpciones').addEventListener('change', galeria);

function galeria() {
    var opciones = document.getElementById('menuOpciones').value;
    switch (opciones) {
        //filtro de categorias
        case "carnes":
            document.querySelector('.galeriaCarnes').style.display = "block"
            document.querySelector('.galeriaPizzas').style.display = "none"
            document.querySelector('.galeriaRapida').style.display = "none"
            document.querySelector('.galeriaBebidas').style.display = "none"
            document.querySelector('.galeriaPostres').style.display = "none"
            document.querySelector('.galeriaEnsalada').style.display = "none"
            break;
        case "pizzas":
            document.querySelector('.galeriaCarnes').style.display = "none"
            document.querySelector('.galeriaPizzas').style.display = "block"
            document.querySelector('.galeriaRapida').style.display = "none"
            document.querySelector('.galeriaBebidas').style.display = "none"
            document.querySelector('.galeriaPostres').style.display = "none"
            document.querySelector('.galeriaEnsalada').style.display = "none"
            break;
        default:
            document.querySelector('.galeriaCarnes').style.display = "none"
            document.querySelector('.galeriaPizzas').style.display = "none"
            document.querySelector('.galeriaRapida').style.display = "none"
            document.querySelector('.galeriaBebidas').style.display = "none"
            document.querySelector('.galeriaPostres').style.display = "none"
            document.querySelector('.galeriaEnsalada').style.display = "none"
    }
}

$(document).ready(function() {
    $('.dropdown-toggle').dropdown();
});
