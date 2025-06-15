document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const fields = [
    { id: 'name',    required: true },
    { id: 'email',   required: true, pattern: /^\S+@\S+\.\S+$/ },
    { id: 'phone',   required: false, pattern: /^[0-9+\s\-()]{7,20}$/ },
    { id: 'message', required: true }
  ];

  form.addEventListener('submit', e => {
    let isValid = true;

    fields.forEach(({ id, required, pattern }) => {
      const input  = document.getElementById(id);
      const error  = input.nextElementSibling; // small.error-message
      let msg = '';

      if (required && !input.value.trim()) {
        msg = 'Este campo es obligatorio';
      } else if (pattern && input.value.trim() && !pattern.test(input.value.trim())) {
        msg = 'Formato inválido';
      }

      if (msg) {
        isValid = false;
        input.classList.add('error');
        error.textContent = msg;
        error.style.visibility = 'visible';
      } else {
        input.classList.remove('error');
        error.textContent = '';
        error.style.visibility = 'hidden';
      }
    });

    if (!isValid) {
      e.preventDefault();  // evita el envío
    }
    // si es válido, Netlify lo procesará normalmente
  });

  // Limpia error al modificar
  form.querySelectorAll('input, textarea').forEach(input => {
    input.addEventListener('input', () => {
      input.classList.remove('error');
      const error = input.nextElementSibling;
      if (error) {
        error.textContent = '';
        error.style.visibility = 'hidden';
      }
    });
  });
});
