document.addEventListener('DOMContentLoaded', () => {
  // Select form by the name
  const form = document.querySelector('form[name="contact"]');
  if (!form) return;

  // Define fields and rules
  const fields = [
    { name: 'name',    required: true },
    { name: 'email',   required: true, pattern: /^\S+@\S+\.\S+$/ },
    { name: 'phone',   required: false, pattern: /^[0-9+\s\-()]{7,20}$/ },
    { name: 'message', required: true }
  ];

  // 3. Handler of submit
  form.addEventListener('submit', e => {
    let isValid = true;

    fields.forEach(field => {
      const input = form.querySelector(`[name="${field.name}"]`);
      let errorEl = input.parentNode.querySelector('.error-message');

      // If doesnt exist the small.error-message, we create it
      if (!errorEl) {
        errorEl = document.createElement('small');
        errorEl.className = 'error-message';
        input.after(errorEl);
      }

      // Previous reset 
      input.classList.remove('error');
      errorEl.textContent = '';
      errorEl.style.visibility = 'hidden';

      const value = input.value.trim();
      let msg = '';

      if (field.required && !value) {
        msg = 'Este campo es obligatorio';
      } else if (field.pattern && value && !field.pattern.test(value)) {
        msg = 'Formato inválido';
      }

      if (msg) {
        isValid = false;
        input.classList.add('error');
        errorEl.textContent = msg;
        errorEl.style.visibility = 'visible';
      }
    });

    if (!isValid) {
      e.preventDefault();
    }
  });

  // Cleaning errors while writing
  form.addEventListener('input', e => {
    const input = e.target;
    if (['input','textarea'].includes(input.tagName.toLowerCase())) {
      input.classList.remove('error');
      const errorEl = input.parentNode.querySelector('.error-message');
      if (errorEl) {
        errorEl.textContent = '';
        errorEl.style.visibility = 'hidden';
      }
    }
  });
});
