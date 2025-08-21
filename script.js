// Configuración de música
let currentSong = 0;
const audio = document.getElementById("backgroundMusic");
let musicStarted = false;
let isMusicPlaying = false;

function iniciarMusica() {
  if (musicStarted && !audio.paused) return;
  
  audio.src = songs[currentSong];
  audio.play().then(() => {
    musicStarted = true;
    isMusicPlaying = true;
    document.getElementById("musicToggle").textContent = "🔊 Pausar";
  }).catch(e => console.log("Autoplay bloqueado:", e));

  // Configurar el evento ended correctamente
  audio.onended = function() {
    currentSong = (currentSong + 1) % songs.length;
    audio.src = songs[currentSong];
    audio.play().catch(e => console.log("Error al reproducir siguiente canción:", e));
  };
}

// Control de música
document.getElementById("musicToggle").addEventListener("click", function() {
  if (isMusicPlaying) {
    audio.pause();
    this.textContent = "🔊 Reproducir";
    isMusicPlaying = false;
  } else {
    iniciarMusica();
    this.textContent = "🔊 Pausar";
    isMusicPlaying = true;
  }
});

// Función para obtener parámetros de la URL
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// Función para cargar invitado por código
function cargarInvitado(codigo) {
  const invitado = invitados.find(i => i.codigo === codigo.toUpperCase());
  if (invitado) {
    const strongs = document.querySelectorAll('.address-content strong');
    const detalle = document.querySelector('.address-content .detalle');

    // Nombre
    strongs[0].textContent = invitado.destinatario;

    // Si es defensor
    if (invitado.cargo.toLowerCase().includes("defensor")) {
      detalle.textContent = "Defensor/a Universitario/a de la prestigiosa";
      strongs[1].textContent = invitado.universidad;
    } 
    // Si NO es defensor
    else {
      detalle.textContent = invitado.cargo;
      strongs[1].textContent = ""; // No mostramos universidad
    }

    return true;
  }
  return false;
}

// Crear el modal del cronograma
const scheduleModal = document.createElement('div');
scheduleModal.className = 'schedule-modal';
document.body.appendChild(scheduleModal);

// Función para mostrar el cronograma
// Función para mostrar el cronograma
function showSchedule() {
  // Verificar si el invitado actual es defensor universitario
  const codigoInvitado = getQueryParam('codigo');
  const invitado = invitados.find(i => i.codigo === codigoInvitado?.toUpperCase());
  const esDefensor = invitado && invitado.cargo.toLowerCase().includes("defensor");
  
  scheduleModal.innerHTML = `
  <div class="schedule-content">
    <button class="close-schedule">&times;</button>
    <h2>CRONOGRAMA DEL EVENTO</h2>

    <h3>MIÉRCOLES 24 DE SEPTIEMBRE</h3>
    <div class="schedule-item">
      <div class="schedule-time">14:00 - 19:00 | <small><em>Inauguración del evento</em></small></div>
    </div>

    <h3>JUEVES 25 DE SEPTIEMBRE</h3>
    <h4>Mañana</h4>
    <div class="schedule-item">
      <div class="schedule-time">09:00 - 13:00 | <small><em>Desarrollo de Conferencias</em></small></div>
    </div>

    <h4>Tarde</h4>
    <div class="schedule-item">
      <div class="schedule-time">15:00 - 18:00 | <small><em>Mesas de Trabajo y Debate</em></small></div>
      <div class="schedule-activity">
        • Rol de las defensorías universitarias, autonomía y fortalecimiento institucional.<br>
        • Derechos fundamentales de la persona y derechos constitucionales.<br>
        • Violencia contra la mujer y los integrantes del grupo familiar.<br>
        • Hostigamiento sexual en el ámbito universitario.<br>
        • La salud mental en la comunidad universitaria, alcoholismo y drogadicción.
      </div>
    </div>

    ${esDefensor ? `
    <div class="schedule-item">
      <div class="schedule-time">19:00 | <small><em>Cena de Confraternidad</em></small></div>
    </div>
    ` : ''}

    <h3>VIERNES 26 DE SEPTIEMBRE</h3>
    <h4>Mañana</h4>
    <div class="schedule-item">
      <div class="schedule-time">09:00 - 13:00 | <small><em>Cierre del evento</em></small></div>
    </div>

  </div>
  `;
  
  scheduleModal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

// Variable para controlar si la carta se ha abierto
let cartaAbiertaAlMenosUnaVez = false;

// Al cargar la página
document.addEventListener('DOMContentLoaded', function() {
  const envelope = document.querySelector('.envelope');
  const externalScheduleButton = document.querySelector('.external-buttons');
  
  // Verificar código en la URL (para acceso por QR o redirección desde index.html)
  const codigoInvitado = getQueryParam('codigo');
  
  if (codigoInvitado) {
    if (!cargarInvitado(codigoInvitado)) {
      alert('Código de invitación no válido. Redirigiendo...');
      window.location.href = 'index.html';
    }
  } else {
    // Si no hay código, redirigir al index
    window.location.href = 'index.html';
  }
  
// // Animación inicial
//   setTimeout(() => {
//     envelope.classList.add('loaded');
//     envelope.style.animation = 'fadeInScale 0.8s ease forwards';
//   }, 300);
  
  // Evento de click para abrir/cerrar la carta
  envelope.addEventListener('click', function(e) {
    this.classList.toggle('active');
    iniciarMusica();
    
    // Mostrar botón externo de cronograma solo la primera vez
    if (this.classList.contains('active') && !cartaAbiertaAlMenosUnaVez) {
      cartaAbiertaAlMenosUnaVez = true;
      externalScheduleButton.classList.add('visible');
    }
    
    // Desactivar interacción durante la animación
    this.style.pointerEvents = 'none';
    setTimeout(() => {
      this.style.pointerEvents = 'auto';
    }, 1000);
  });
  
  // Evento para el botón de cronograma
  document.querySelector('.external-buttons .schedule-button').addEventListener('click', function(e) {
    e.stopPropagation();
    showSchedule();
  });

  // Evento para el botón de confirmación
  document.querySelector('.external-buttons .confirm-button').addEventListener('click', function(e) {
    e.stopPropagation();
    window.open('https://docs.google.com/forms/d/e/1FAIpQLScDavipzGEDqa3BCOtpD2TbVDVtJ63bba7sa3jL7zBCAxz-Yw/viewform?usp=dialog', '_blank');
  });
  
  // Cerrar el modal al hacer clic en la X o fuera
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('close-schedule') || e.target === scheduleModal) {
      scheduleModal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
  
  // Prevenir acciones no deseadas
  document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
  });
  
  document.addEventListener('keydown', function (e) {
    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I') || (e.ctrlKey && e.key === 'u')) {
      e.preventDefault();
    }
  });
});