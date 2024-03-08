document.getElementById('prevCartelera').addEventListener('click', function() {
    $('#carouselCartelera').carousel('prev');
});

document.getElementById('nextCartelera').addEventListener('click', function() {
    $('#carouselCartelera').carousel('next');
});

document.getElementById('prevEstrenos').addEventListener('click', function() {
    $('#carouselCartelera').carousel('prev');
});

document.getElementById('nextEstrenos').addEventListener('click', function() {
    $('#carouselCartelera').carousel('next');
});


function redirectToCinema() {
    var selectElement = document.getElementById("cinemaSelect");
    var selectedUrl = selectElement.options[selectElement.selectedIndex].value;
    window.location.href = selectedUrl;
}