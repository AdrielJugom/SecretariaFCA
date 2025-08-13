document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('scroll', function() {
      const carousel = document.getElementById('carouselExampleCaptions');
      const stickyIcon = document.querySelector('.sticky-icon');
      
      const carouselRect = carousel.getBoundingClientRect();
      
      // Verifica si el carrusel está fuera de la vista
      if (carouselRect.bottom < 0 || carouselRect.top > window.innerHeight) {
        stickyIcon.classList.add('visible');
      } else {
        stickyIcon.classList.remove('visible');
      }
    });
  
  
  });
  // script.js


  document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper('.swiper', {
        slidesPerView: 5,        // Mostrar 5 elementos a la vez
        spaceBetween: 20,        // Espacio entre elementos
        loop: true,              // Repetir infinitamente
        autoplay: {
            delay: 4500,           // Cambia cada 4.5 segundos
            disableOnInteraction: false // No se detiene al hacer clic
        },
        speed: 1000,             // Velocidad del desplazamiento
        navigation: {            // Flechas de navegación
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {            // Paginación (opcional)
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {           // Responsivo en diferentes tamaños
            0: { slidesPerView: 1 },   // 2 en móviles
            600: { slidesPerView: 3 }, // 3 en tablets
            1000: { slidesPerView: 4 }, // 5 en escritorio
            1300:{ slidesPerView: 5 }
        }
    });
});

