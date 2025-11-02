document.getElementById('contactForm').addEventListener('submit', function(e) {
    let valid = true;
    // Validación básica
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();
    const errorNombre = document.getElementById('errorNombre');
    const errorEmail = document.getElementById('errorEmail');
    const errorMensaje = document.getElementById('errorMensaje');
    errorNombre.textContent = '';
    errorEmail.textContent = '';
    errorMensaje.textContent = '';
    if (nombre.length < 3) {
        errorNombre.textContent = 'El nombre debe tener al menos 3 caracteres.';
        valid = false;
    }
    if (!email.match(/^\S+@\S+\.\S+$/)) {
        errorEmail.textContent = 'Ingrese un email válido.';
        valid = false;
    }
    if (mensaje.length < 10) {
        errorMensaje.textContent = 'El mensaje debe tener al menos 10 caracteres.';
        valid = false;
    }
    if (!valid) {
        e.preventDefault();
    }
});

// Mostrar mensaje de confirmación si el formulario fue enviado correctamente
window.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const formMsg = document.getElementById('formMsg');
    if (params.get('enviado') === '1' && formMsg) {
        formMsg.textContent = '¡Tu mensaje se envió correctamente! Nos pondremos en contacto contigo pronto.';
        formMsg.style.color = '#1976d2';
        formMsg.style.fontWeight = 'bold';
        formMsg.style.marginTop = '1em';
    }
    if (params.get('enviado') === '0' && formMsg) {
        formMsg.textContent = 'Hubo un error al enviar tu mensaje. Por favor, intenta nuevamente más tarde.';
        formMsg.style.color = 'red';
        formMsg.style.fontWeight = 'bold';
        formMsg.style.marginTop = '1em';
    }
});
