//Declaracion del arreglo vacio para anadir estudiantes conforme se llenan los inputs
const estudiantes = [];
function agregarEstudiante() {
    const nombre = document.getElementById('nombre').value,
        apellidoEstudiante = document.getElementById('apellidos').value,
        //Obtener el valor del campo de entrada 'nota 1, 2, 3' y convertirlo a un numero de punto flotante
        nota1 = parseFloat(document.getElementById('nota1').value);
        nota2 = parseFloat(document.getElementById('nota2').value);
        nota3 = parseFloat(document.getElementById('nota3').value);

        /*La validacion isNan dice que si nota 1,2,3 nose un numero valido 
        (por ejemplo, si es una cadena no numerica o si esta vacia),
        entonces isNaN devuelve true */

if (nombre === '' || apellidoEstudiante === '' || isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {

    Swal.fire({
        icon: "error",
        title: "Debe llenar todos los campos.",
        showClass: {
            popup: `
            animate__animated
            animate__fadeIn
            `
        },
        hideClass: {
            popup: `
            animate__animated
            animate__fadeOut
            `
        }
    });
    } else {
        const promedio = (nota1 + nota2 + nota3) / 3;

        //agregar estudiante al arreglo
        estudiantes.push({ nombre, apellidoEstudiante, promedio});

        //actualizar el select de estudiantes
        const selectEstudiantes = document.getElementById('seleccionarEstudiante');

        //se crea una etiqueta, en este caso el option
        const option = document.createElement('option');

        //se accede a la variable que almacena la etiqueta creada y se le agrega, nombre y apellido
        option.value = nombre + ' ' + apellidoEstudiante;

        //se establece el texto visible en la etiqueta <option> con la concatenacion de nombre ya apellido
        option.text = nombre +  ' ' + apellidoEstudiante;

        //se agrega la etiqueta option al elemento select en el documento mediante el appendChild
        selectEstudiantes.appendChild(option);

        //se llama a la funcion para limpiar los cmapos una vez registrados
        limpiarDatos();

        Swal.fire({
            icon: "success",
            title: "Estudiante agregado",
            showClass: {
                popup: `
                animate__animated
                animate__fadeIn
                `
            },
            hideClass: {
                popup: `
                animate__animated
                animate__fadeOut
                `
            }
        });
    }
}

//funcion que almacena el codigo para calcular el promedio
function calcularPromedioSeleccionado() {
    //se obtiene el valor seleccionado en el elemento select con el id 'seleccionarEstudiantes'
    const nombreSeleccionado = document.getElementById('seleccionarEstudiante').value;

    //se obtiene el id del elemento 'resultado'
    const resultado = document.getElementById('resultado');

    //busca el estudiante seleccionado en el arreglo 'estudiantes'
    //inicializa la variable 'estudianteSeleccionado' con el valor null
    let estudianteSeleccionado = null;

    //inicia un bulce for que recorre cada elemento en el arreglo 'estudiantes'
    for (let i = 0; i < estudiantes.length; i++) {
        //obtiene el estudiante en la posicion 'i' del arreglo
        const estudiante = estudiantes[i];

        //concatena el nombre y el apellido del estudiante para obrtener el nombre completo
        const nombreCompleto = estudiante.nombre + ' ' + estudiante.apellidoEstudiante;

        //compara si el 'nombreCompleto' es igual al 'nombreSeleccionado'
        if(nombreCompleto === nombreSeleccionado) {
            //si hay una coincidencia, asigna el objeto del estudiante a 'estudianteSeleccionado'
            estudianteSeleccionado = estudiante;

            //sale del bucle 'for' porque ya se encontro la coincidencia
            break;
        }
    }

    //verifica si se ha encontrado un estudiante seleccionado (si 'estudianteSeleccionado' no es null o undefined)
    if (estudianteSeleccionado) {
        //obtiene el promedio del estudiante eseleccionado
        const promedioEstudiante = estudianteSeleccionado.promedio;
        /* actualiza el contenido delelemento con id 'resultado' concatenando el mensaje sobre
        el promedio del estudiante seleccionado*/
        resultado.textContent = 'El promedio de: ' + nombreSeleccionado + ' es de: '+ promedioEstudiante;
    } else {
        //si no se ha econtrado un estudiante seleccionado, borra el contenido del elemento con id 'resultado'
        resultado.textContent + '';
    }
}

//funcion que almacena codigo para limpiar los campos
function limpiarDatos() {
    document.getElementById('nombre').value = '';
    document.getElementById('apellidos').value = '';
    document.getElementById('nota1').value = '';
    document.getElementById('nota2').value = '';
    document.getElementById('nota3').value = '';

}