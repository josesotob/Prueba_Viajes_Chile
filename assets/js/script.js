$(function () {

    // ===== 1. CAROUSEL DE BOOTSTRAP =====
    // Inicia el carrusel automáticamente cada 4 segundos
    $('.carousel').carousel({
        interval: 4000
    });

    // ===== 2. TOOLTIPS DE BOOTSTRAP =====
    // Activa todos los tooltips de la página
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // ===== 3. EFECTO CLICK EN NAVBAR =====
    // Al hacer clic en un link del menú, ese link se pone negro
    $('.navbar-nav .nav-link').on('click', function () {
        // Quitamos la clase activa de todos los links
        $('.navbar-nav .nav-link').removeClass('jquery-active');
        // Se la ponemos al link clickeado
        $(this).addClass('jquery-active');
    });

    // ===== 4. BOTÓN ENVIAR FORMULARIO =====
    // Muestra alerta al enviar el formulario de contacto
    $('#enviarMensaje').on('click', function (evento) {
        evento.preventDefault();
        alert("El mensaje fue enviado correctamente. ¡Pronto nos contactaremos contigo!");
    });

});
