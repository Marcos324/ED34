(function () {
  'use strict';

  // Año en el footer
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Menú móvil: toggle
  var navToggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('#nav-main');

  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', isOpen);
    });

    // Cerrar al hacer clic en un enlace (navegación interna)
    nav.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // FAQ: acordeón
  var faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var targetId = btn.getAttribute('data-target');
      var answer = document.getElementById(targetId);
      if (!answer) return;

      var isExpanded = btn.getAttribute('aria-expanded') === 'true';

      // Cerrar los demás
      faqQuestions.forEach(function (other) {
        var otherId = other.getAttribute('data-target');
        var otherAnswer = document.getElementById(otherId);
        if (otherAnswer && other !== btn) {
          other.setAttribute('aria-expanded', 'false');
          otherAnswer.hidden = true;
        }
      });

      if (isExpanded) {
        btn.setAttribute('aria-expanded', 'false');
        answer.hidden = true;
      } else {
        btn.setAttribute('aria-expanded', 'true');
        answer.hidden = false;
      }
    });
  });

  // Formulario: evitar envío real (sin backend), mostrar mensaje
  var form = document.getElementById('form-contacto');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = form.querySelector('button[type="submit"]');
      var originalText = btn.textContent;
      btn.textContent = 'Mensaje enviado (simulado)';
      btn.disabled = true;
      // En producción aquí iría el envío real (fetch a tu backend o servicio).
      setTimeout(function () {
        btn.textContent = originalText;
        btn.disabled = false;
        form.reset();
      }, 2500);
    });
  }
})();
