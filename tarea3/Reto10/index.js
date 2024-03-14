'use strict';


//la función searchStores() realiza una búsqueda de tiendas según la entrada del usuario y muestra los resultados utilizando las imágenes asociadas a las tiendas encontradas.

function searchStores() {
    //Obtiene el valor del input de búsqueda del elemento con el id "searchInput" y lo convierte a minúsculas para hacer la búsqueda insensible a mayúsculas y minúsculas.
    let searchInput = document.getElementById("searchInput").value.toLowerCase();

    let countour = ["Barra", "Polvo", "Crema"];

    let sombras = ["Pequeñas", "Oscuras", "Brillantes"];

    let labial = ["Primer", "Lapiz", "Barra"];

    let cejas = ["Pincel Doble", "Pincel Sencillo", "Crayon"];


    let storeImages = {
        "barra": "contour1.jpg",
        "polvo": "contour2.jpg",
        "crema": "contour3.jpg",
        "pequenas": "sombras1.jpg",
        "oscuras": "sombras2.jpg",
        "brillantes": "sombras3.jpg",
        "primer": "labial1.jpg",
        "lapiz": "labial2.jpg",
        "barra": "labial3.jpg",
        "pincel doble": "cejas1.jpg",
        "pincel sencillo": "cejas2.jpg",
        "crayon": "cejas3.jpg"
    };

    let filteredStores = [];

    let allStores = [...countour, ...sombras, ...labial, ...cejas];


    if (searchInput === "") {
        swal.fire({
            icon: "error",
            title: "Verificar la entrada de datos",
            confirmButtonText: "Intentar de nuevo",
            confirmButtonColor: "#0063be",
        });
        return;
    }

    for (let i = 0; i < allStores.length; i++) {
        if (allStores[i].toLowerCase().includes(searchInput)) {
            filteredStores = [allStores[i]];
            break;
        }
    }

    if (filteredStores.length === 0) {
        if (searchInput === "contour") {
            filteredStores = countour;
        } else if (searchInput === "sombras") {
            filteredStores = sombras;
        } else if (searchInput === "labial") {
            filteredStores = labial;
        } else if (searchInput === "cejas") {
            filteredStores = cejas;
        }
    }

    displayResults(filteredStores, storeImages);
}


function displayResults(stores, storeImages) {
    
    let resultsContainer = document.getElementById("pResult");
    resultsContainer.innerHTML = "";

    if (stores.length === 0) {
        resultsContainer.innerHTML = "<p>No se encontró maquillaje para la descripción escrita.</p>";
        
    } else {
        
        for (let i = 0; i < stores.length; i++) {
            
            let imageSrc = storeImages[stores[i].toLowerCase()] || "ruta_por_defecto.jpg";
            
            let card = document.createElement("div");
            card.className = "card mb-3";

            card.style.maxWidth = "100%";
            card.innerHTML = `
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${imageSrc}" class="img-fluid rounded-start" alt="maquillaje ${stores[i]}">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${stores[i]}</h5>
                            <p class="card-text">
                            El maquillaje es un arte que permite realzar la belleza natural de cada individuo, resaltando rasgos y expresiones. Desde tonos suaves que brindan un aspecto natural hasta colores vibrantes que despiertan la creatividad, el maquillaje ofrece infinitas posibilidades de expresión personal. Ya sea para ocasiones especiales o el día a día, dominar técnicas de maquillaje es explorar un universo de colores, texturas y estilos que pueden transformar cualquier rostro en una obra de arte única.
                            </p>
                            <p class="card-text"><small class="text-body-secondary">Última actualización 13 de marzo 2024</small></p>
                        </div>
                    </div>
                </div>
            `;

            
            resultsContainer.appendChild(card);
        }
    }
}