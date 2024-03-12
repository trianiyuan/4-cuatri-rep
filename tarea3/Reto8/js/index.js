// Array para almacenar los registros de los jugadores
let jugadores = [];

function agregarJugador() {
    const nombre = document.getElementById('nombre').value;
    const mes1 = document.getElementById('mes1').value;
    const horas1 = parseInt(document.getElementById('horas1').value);
    const mes2 = document.getElementById('mes2').value;
    const horas2 = parseInt(document.getElementById('horas2').value);

    // Verificar si algún campo está vacío
    if (nombre === '' || mes1 === '' || isNaN(horas1) || mes2 === '' || isNaN(horas2)) {
        alert('Por favor complete todos los campos antes de agregar el jugador.');
        return; // Detener la ejecución de la función si falta información
    }

    const promedio = (horas1 + horas2) / 2;

    const jugador = {
        nombre: nombre,
        promedioHoras: promedio
    };

    jugadores.push(jugador);

    actualizarListaJugadores();
}


// Función para actualizar la lista de jugadores en el select
function actualizarListaJugadores() {
    const selectJugador = document.getElementById('seleccionarJugador');
    selectJugador.innerHTML = '<option>Seleccione un jugador</option>';

    jugadores.forEach(jugador => {
        const option = document.createElement('option');
        option.text = jugador.nombre;
        selectJugador.add(option);
        limpiarDatos();

    });
}

// Función para calcular el promedio de horas jugadas por un jugador seleccionado
function calcularPromedioHoras() {
    const selectJugador = document.getElementById('seleccionarJugador');
    const jugadorSeleccionado = selectJugador.value;

    const jugador = jugadores.find(jugador => jugador.nombre === jugadorSeleccionado);

    if (jugador) {
        document.getElementById('resultado').innerText = `El promedio de horas jugadas por ${jugador.nombre} es: ${jugador.promedioHoras}`;
    } else {
        document.getElementById('resultado').innerText = 'Seleccione un jugador válido';
    }
}

function limpiarDatos() {
    document.getElementById('nombre').value = '';
    document.getElementById('mes1').value = '';
    document.getElementById('horas1').value = '';
    document.getElementById('mes2').value = '';
    document.getElementById('horas2').value = '';
}