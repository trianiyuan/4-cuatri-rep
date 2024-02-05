document.addEventListener('DOMContentLoaded', function() {
    var showPasswordButton = document.getElementById('showPassword');
    var passwordInput = document.getElementById('contrasena');

    showPasswordButton.addEventListener('click', function() {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            showPasswordButton.textContent = 'Ocultar';
        } else {
            passwordInput.type = 'password';
            showPasswordButton.textContent = 'Mostrar';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('loginForm');
    var rememberMeCheckbox = document.getElementById('rememberMe');

    form.addEventListener('submit', function(event) {
        // Verificar si el checkbox "Remember me" está marcado
        if (!rememberMeCheckbox.checked) {
            // Si no está marcado, borra los datos ingresados al enviar el formulario
            document.getElementById('usuario').value = '';
            document.getElementById('contrasena').value = '';
        }
    });
});


