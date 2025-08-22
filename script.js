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
    <h4>Tarde <em> <h5>(Paraninfo Universitario)</h5></em></h4>
    <div class="schedule-item">
      <div class="schedule-time">14:00 - 14:40</div>
      <div class="schedule-activity">Recepción de invitados y participantes<br>
      <small><em>(Pequeña entrevista a defensores universitarios)</em></small></div>
    </div>
    
    <div class="schedule-item">
      <div class="schedule-time">14:40 - 15:00</div>
      <div class="schedule-activity">Registro de asistencia, entrega de materiales y acreditación</div>
    </div>
    
    <div class="schedule-item">
      <div class="schedule-time">15:00 - 15:10</div>
      <div class="schedule-activity">Palabras de bienvenida del Presidente de la Comisión Organizadora y Defensor Universitario de la UAC<br>
      <strong>Dr. Antonio Fredy Vengoa Zúñiga</strong></div>
    </div>
    
    <div class="schedule-item">
      <div class="schedule-time">15:10 - 15:20</div>
      <div class="schedule-activity">Presentación de los Objetivos del Encuentro</div>
    </div>
    
    <div class="schedule-item">
      <div class="schedule-time">15:20 - 15:30</div>
      <div class="schedule-activity">Inauguración oficial</div>
    </div>
    
    <div class="schedule-item">
      <div class="schedule-time">15:30 - 15:40</div>
      <div class="schedule-activity">Brindis de apertura del evento</div>
    </div>
    
    <div class="schedule-item">
      <div class="schedule-time">15:40 - 15:50</div>
      <div class="schedule-activity">Momento artístico<br>
      <strong>Cámara de Orquesta UAC</strong></div>
    </div>
    
    <div class="schedule-item">
      <div class="schedule-time">15:50 - 16:20</div>
      <div class="schedule-activity">Conferencia inaugural (virtual)<br>
      <strong>Dr. Cesar Landa Arroyo</strong><br>
      <em>Tema: Hostigamiento sexual dentro de los derechos fundamentales que afecta al derecho fundamental de la libertad</em></div>
    </div>
    
    <div class="schedule-item">
      <div class="schedule-time">16:20 - 17:00</div>
      <div class="schedule-activity">Conferencia magistral<br>
      <strong>Dr. Oscar Luque Cutipa</strong><br>
      <em>Jefe de la Oficina Defensorial de Cusco</em></div>
    </div>
    
    <div class="schedule-item">
      <div class="schedule-time">17:00 - 17:50</div>
      <div class="schedule-activity">Conferencia magistral<br>
      <strong>Dr. Cesar Jesus Rivera Alosilla</strong><br>
      </div>
    </div>


    <h3>JUEVES 25 DE SEPTIEMBRE</h3>
    <h4>Mañana (Paraninfo Universitario)</h4>
    <div class="schedule-item">
      <div class="schedule-time">09:00 - 09:30</div>
      <div class="schedule-activity">Recepción de participantes y registro de asistencia</div>
    </div>
    
    <div class="schedule-item">
      <div class="schedule-time">09:30 - 10:10</div>
      <div class="schedule-activity">Conferencia Magistral</div>
    </div>
    
    <div class="schedule-item">
      <div class="schedule-time">10:10 - 10:50</div>
      <div class="schedule-activity">Conferencia Magistral</div>
    </div>
    
    <div class="schedule-item">
      <div class="schedule-time">10:50 - 11:30</div>
      <div class="schedule-activity">Conferencia Magistral</div>
    </div>
    
    <div class="schedule-item">
      <div class="schedule-time">11:30 - 11:45</div>
      <div class="schedule-activity">Momento artístico y break<br>
    </div>
    
    <div class="schedule-item">
      <div class="schedule-time">11:45 - 12:30</div>
      <div class="schedule-activity">Conferencia Magistral</div>
    </div>

    <h4>Tarde (Paraninfo Universitario)</h4>
    <div class="schedule-item">
    <div class="schedule-time">15:00 - 15:20</div>
      <div class="schedule-activity">Recepción de participantes y registro de asistencia</div>
    </div>
    
    <div class="schedule-item">
      <div class="schedule-time">15:20 - 15:30</div>
      <div class="schedule-activity">Inscripción a las mesas de trabajo</div>
    </div>
    
    <div class="schedule-item">
      <div class="schedule-time">15:30 - 15:50</div>
      <div class="schedule-activity">Presentación de las mesas temáticas y dinámica de trabajo</div>
    </div>
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
      <div class="schedule-time">09:00 - 09:30</div>
      <div class="schedule-activity">Recepción de participantes y registro de asistencia</div>
    </div>
    
    <div class="schedule-item">
      <div class="schedule-time">09:30 - 10:00</div>
      <div class="schedule-activity">Conferencia Magistral</div>
    </div>
    
    <div class="schedule-item">
      <div class="schedule-time">10:00 - 11:00</div>
      <div class="schedule-activity">Plenario<br>
      <small><em>A cargo de cada presidente por mesa de Trabajo</em></small></div>
    </div>
    
    <div class="schedule-item">
      <div class="schedule-time">11:00 - 11:15</div>
      <div class="schedule-activity">Momento artístico<br>
      <strong>Tuna Universitaria</strong></div>
    </div>
    
    <div class="schedule-item">
      <div class="schedule-time">11:15 - 11:30</div>
      <div class="schedule-activity">Palabras de agradecimiento y clausura del evento</div>
    </div>
    
    <div class="schedule-item">
      <div class="schedule-time">11:30 - 12:30</div>
      <div class="schedule-activity">Entrega de recordatorios, elección de la próxima sede y toma oficial de fotos<br>
      <small><em>A cargo del Dr. Antonio Fredy Vengoa</em></small></div>
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
  
  // Obtener el código del invitado actual
  const codigoInvitado = getQueryParam('codigo');
  const invitado = invitados.find(i => i.codigo === codigoInvitado?.toUpperCase());
  
  // Determinar qué enlace mostrar según el cargo
  let formLink = "https://docs.google.com/forms/d/e/1FAIpQLScDavipzGEDqa3BCOtpD2TbVDVtJ63bba7sa3jL7zBCAxz-Yw/viewform?usp=dialog";
  
  if (invitado && invitado.cargo === "Estimado Docente de la Facultad de Derecho") {
    formLink = "https://docs.google.com/forms/d/e/1FAIpQLSfjBjw8_VVpXUdatPEKMp9aAqxwNVbi6ttZLR0be0VLQPFRnQ/viewform?usp=dialog";
  }
  
  window.open(formLink, '_blank');
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