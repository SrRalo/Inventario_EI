const formulario = document.getElementById('register-form');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const nombres = document.getElementById('nombres').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const contraseña = document.getElementById('contraseña').value.trim();

    // Validaciones
    if (nombres === '') {
        alert('El campo "Nombres" es obligatorio.');
        return;
    }

    if (!/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(correo)) {
        alert('El correo electrónico no es válido.');
        return;
    }

    if (contraseña.length < 8) {
        alert('La contraseña debe tener al menos 8 caracteres.');
        return;
    }

    // Almacenar datos en local storage
    const datosUsuario = {
        nombres,
        correo,
        contraseña
    };

    localStorage.setItem('datosUsuario', JSON.stringify(datosUsuario));

    // Enviar formulario (opcional)
    // Puedes comentar esta línea si no deseas enviar el formulario
    //formulario.submit();

    alert('¡Formulario enviado correctamente!');
});