$(function () {

    // ===== 1. TOOLTIPS DE BOOTSTRAP =====
    // Activa todos los tooltips de la página
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // ===== 2. EVENTO CLICK EN BOTÓN ENVIAR =====
    // Muestra alerta al enviar el formulario de contacto
  // ===== 2. EVENTO CLICK EN BOTÓN ENVIAR =====
    $('#enviarMensaje').click(function () {
        alert("El mensaje fue enviado correctamente. ¡Pronto nos contactaremos contigo!");
    });
    // ===== 3. DOBLE CLICK EN TÍTULOS H4 =====
    // Cambia el color del h4 a rojo y viceversa al hacer doble click
    $('body').on('dblclick', 'h4', function () {
        var texto = $(this).text().trim();
        if (texto === 'INGREDIENTES' || texto === 'PREPARACIÓN') {
            if ($(this).css("color") === 'rgb(255, 0, 0)') {
                $(this).css("color", '');
            } else {
                $(this).css("color", 'red');
            }
        }
    });

    // ===== 4. MOSTRAR/OCULTAR TEXTO DE TARJETAS =====
    // Click en .card-title muestra u oculta el .card-text de esa card
    $('.card-title').click(function () {
        $(this).closest('.card').find('.card-text').toggle();
    });

    // ===== 5. EFECTO CLICK EN NAVBAR =====
    // Al hacer clic en un link del menú, ese link se resalta
    $('.navbar-nav .nav-link').on('click', function () {
        $('.navbar-nav .nav-link').removeClass('jquery-active');
        $(this).addClass('jquery-active');
    });

}); // ← cierre correcto del $(function)


// ===== FUERA DEL DOCUMENT READY =====
// Debe estar aquí afuera para que el onclick del HTML pueda llamarla
function toggleCard(card) {
    $(card).toggleClass('abierta');
}
// ===== 3. CONTADORES ANIMADOS EN QUIÉNES SOMOS =====
// Cuando el usuario llega a la sección, los números suben desde 0
// hasta el valor indicado en data-meta
var contadorActivado = false;

$(window).on('scroll', function () {
    var seccion = $('#quienes-somos').offset().top;
    var scroll = $(window).scrollTop() + $(window).height();

    // Solo se activa una vez cuando llegas a la sección
    if (scroll > seccion && !contadorActivado) {
        contadorActivado = true;

        $('.contador').each(function () {
            var $this = $(this);
            var meta = parseInt($this.data('meta'));

            $({ valor: 0 }).animate({ valor: meta }, {
                duration: 1500,
                step: function () {
                    $this.text(Math.floor(this.valor));
                },
                complete: function () {
                    $this.text(meta + '+');
                }
            });
        });
    }
});