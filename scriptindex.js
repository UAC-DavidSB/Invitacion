document.addEventListener('DOMContentLoaded', function() {
  const submitBtn = document.getElementById('submitCode');
  const accessCodeInput = document.getElementById('accessCode');
  
  // Autoformato del código (ej: "uacs001" -> "UACS-001")
  accessCodeInput.addEventListener('input', function(e) {
    let value = e.target.value.trim().toUpperCase();
    if (value.length > 4 && !value.includes('-')) {
      value = value.slice(0, 4) + '-' + value.slice(4);
    }
    e.target.value = value;
  });
  
  // Función para validar el código (reutilizable)
  function validateCode() {
    const code = accessCodeInput.value.trim().toUpperCase();
    const container = document.querySelector('.access-container');
    
    if (!code) {
      showError('Por favor ingrese su código de acceso');
      return false;
    }

    // Verificar si el código existe
    const invitadoValido = invitados.some(invitado => invitado.codigo === code);
    
    if (!invitadoValido) {
      showError('Código no válido. Revise el correo electrónico.');
      return false;
    }

    // Animación de validación
    startValidationAnimation(submitBtn, container, code);
    return true;
  }

  // Validar código al hacer clic
  submitBtn.addEventListener('click', validateCode);

  // Validar código al presionar Enter
  accessCodeInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      validateCode();
    }
  });
});

// Función para mostrar errores
function showError(message) {
  const errorElement = document.createElement('div');
  errorElement.className = 'error-message';
  errorElement.textContent = message;
  errorElement.style.color = '#ff6b6b';
  errorElement.style.marginTop = '10px';
  errorElement.style.animation = 'fadeIn 0.3s ease';
  
  const existingError = document.querySelector('.error-message');
  if (existingError) existingError.remove();
  
  document.querySelector('.code-input').appendChild(errorElement);
}

  // Animación de validación exitosa
  function startValidationAnimation(button, container, code) {
    button.textContent = 'Validando...';
    button.disabled = true;
    button.classList.add('loading');

    // Simular validación (2 segundos)
    setTimeout(() => {
      // Éxito
      button.innerHTML = '✓ Código válido';
      button.style.backgroundColor = '#2a5f1a';
      button.style.borderColor = '#4CAF50';
      button.classList.remove('loading');

      // Animación de desvanecimiento
      container.style.opacity = '0';
      container.style.transform = 'translateY(-20px)';

      // Efecto de confeti
      createConfetti();

      // Redirigir después de 1.5 segundos
      setTimeout(() => {
        window.location.href = `prueba3.html?codigo=${encodeURIComponent(code)}`;
      }, 1500);
    }, 2000);
  }


// Efecto de confeti (simplificado)
function createConfetti() {
  const colors = ['#d4af37', '#1a2a5f', '#ffffff'];
  const confettiContainer = document.createElement('div');
  confettiContainer.style.position = 'fixed';
  confettiContainer.style.top = '0';
  confettiContainer.style.left = '0';
  confettiContainer.style.width = '100%';
  confettiContainer.style.height = '100%';
  confettiContainer.style.pointerEvents = 'none';
  confettiContainer.style.zIndex = '1000';
  document.body.appendChild(confettiContainer);

  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div');
    confetti.style.position = 'absolute';
    confetti.style.width = '10px';
    confetti.style.height = '10px';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = `${Math.random() * 100}%`;
    confetti.style.top = `${Math.random() * 100}%`;
    confetti.style.opacity = '0';
    confetti.style.borderRadius = '50%';

    confetti.animate([
      { opacity: 0, transform: 'translateY(0) rotate(0deg)' },
      { opacity: 1, transform: 'translateY(-100px) rotate(180deg)' },
      { opacity: 0, transform: 'translateY(-200px) rotate(360deg)' }
    ], {
      duration: 1500 + Math.random() * 1000,
      easing: 'cubic-bezier(0.1, 0.8, 0.3, 1)'
    });

    confettiContainer.appendChild(confetti);
  }

  // Eliminar después de 3 segundos
  setTimeout(() => {
    confettiContainer.remove();
  }, 3000);
}

// Bloquear inspección del código
document.addEventListener('contextmenu', (e) => e.preventDefault());
document.addEventListener('keydown', (e) => {
  if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) e.preventDefault();
});