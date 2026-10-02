document.addEventListener('DOMContentLoaded', () => {
  const playForm = document.getElementById('play-form');

  if (playForm) {
    playForm.addEventListener('submit', (e) => {
      e.preventDefault(); // Detener el envío tradicional del formulario

      const usernameInput = document.getElementById('username');
      const submitBtn = document.getElementById('btn-start');
      const username = usernameInput ? usernameInput.value.trim() : '';

      if (username !== '') {
        // 1. Guardar el nombre en almacenamiento local
        localStorage.setItem('player_name', username);

        // 2. Animación de cargando en el botón
        if (submitBtn) {
          submitBtn.disabled = true; // Deshabilitar para evitar múltiples clics
          submitBtn.innerHTML = '<i data-lucide="loader-2" class="spin-icon"></i> Cargando...';
          
          // Re-renderizar íconos de Lucide para mostrar el loader
          if (window.lucide) {
            lucide.createIcons();
          }
        }

        // 3. Esperar 1.5 segundos con la animación de carga antes de redirigir
        setTimeout(() => {
          window.location.href = 'https://levelupdigital.gamer.free/';
        }, 1500);

      } else {
        usernameInput.focus();
      }
    });
  }
});