// ============================================================
// app.js — Lógica interactiva RutaRD
// RutaRD © 2026
// ============================================================

/* ── Utilidades ─────────────────────────────────────────── */

/** Devuelve el ícono Bootstrap según tipo de transporte */
function getTransportIcon(tipo) {
  const icons = {
    guagua:        'bi-bus-front-fill',
    metro:         'bi-train-front-fill',
    carro_publico: 'bi-car-front-fill'
  };
  return icons[tipo] || 'bi-truck';
}

/** Devuelve etiqueta legible */
function getTipoLabel(tipo) {
  const labels = {
    guagua:        'Guagua',
    metro:         'Metro',
    carro_publico: 'Carro Público'
  };
  return labels[tipo] || tipo;
}

/** Genera HTML de estrellas a partir de una valoración numérica */
function renderStars(val) {
  let html = '';
  for (let i = 1; i <= 5; i++) {
    if (val >= i)        html += '<i class="bi bi-star-fill"></i>';
    else if (val >= i - 0.5) html += '<i class="bi bi-star-half"></i>';
    else                 html += '<i class="bi bi-star"></i>';
  }
  return html;
}

/** Genera HTML de una card de ruta */
function buildRutaCard(ruta, delay = 0) {
  return `
    <div class="col-lg-4 col-md-6 animate-fadeInUp animate-delay-${delay}" data-tipo="${ruta.tipo}" data-nombre="${ruta.nombre.toLowerCase()}">
      <div class="ruta-card" onclick="window.location.href='detalle.html?id=${ruta.id}'">
        <div class="ruta-card-header">
          <div class="transport-icon ${ruta.tipo}">
            <i class="bi ${getTransportIcon(ruta.tipo)}"></i>
          </div>
          <div>
            <span class="badge-tipo badge-${ruta.tipo}">${getTipoLabel(ruta.tipo)}</span>
            <div class="stars-inline mt-1">
              ${renderStars(ruta.valoracion)}
              <span class="val">${ruta.valoracion.toFixed(1)}</span>
            </div>
          </div>
        </div>
        <div class="ruta-card-body">
          <div class="ruta-route">
            <span class="origin">${ruta.origen}</span>
            <span class="arrow"><i class="bi bi-arrow-right"></i></span>
            <span class="dest">${ruta.destino}</span>
          </div>
          <div class="ruta-meta">
            <span class="ruta-meta-item">
              <i class="bi bi-clock"></i>${ruta.duracion}
            </span>
            <span class="ruta-meta-item">
              <i class="bi bi-calendar3"></i>${ruta.horario.split(',')[0]}
            </span>
          </div>
        </div>
        <div class="ruta-card-footer">
          <span class="price-tag">${ruta.precio}</span>
          <a href="detalle.html?id=${ruta.id}" class="btn-ver" onclick="event.stopPropagation()">
            Ver ruta <i class="bi bi-arrow-right-short"></i>
          </a>
        </div>
      </div>
    </div>`;
}

/* ── Loader ─────────────────────────────────────────────── */
function initLoader() {
  const loader = document.getElementById('page-loader');
  if (!loader) return;
  window.addEventListener('load', () => {
    setTimeout(() => loader.classList.add('hidden'), 400);
  });
}

/* ── Back to top ────────────────────────────────────────── */
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ── Navbar active link ──────────────────────────────────── */
function initNavActive() {
  const links = document.querySelectorAll('.nav-link');
  const page  = location.pathname.split('/').pop() || 'index.html';
  links.forEach(a => {
    const href = a.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
}

/* ── INDEX: Rutas populares ─────────────────────────────── */
function initIndex() {
  const container = document.getElementById('popular-container');
  if (!container) return;

  // Renderizar rutas populares
  const populares = rutasData.filter(r => r.popular);
  container.innerHTML = populares.map((r, i) => buildRutaCard(r, (i % 6) + 1)).join('');

  // Búsqueda en hero
  const formBusqueda = document.getElementById('form-busqueda');
  if (formBusqueda) {
    formBusqueda.addEventListener('submit', function (e) {
      e.preventDefault();
      const origen  = document.getElementById('input-origen').value.trim().toLowerCase();
      const destino = document.getElementById('input-destino').value.trim().toLowerCase();
      // Redirigir a rutas con query
      const params = new URLSearchParams();
      if (origen)  params.set('origen', origen);
      if (destino) params.set('destino', destino);
      window.location.href = 'rutas.html?' + params.toString();
    });
  }

  // Animación de contador de stats
  animateCounters();
}

function animateCounters() {
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count);
    let current = 0;
    const step = Math.ceil(target / 40);
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = current + (el.dataset.suffix || '');
      if (current >= target) clearInterval(timer);
    }, 30);
  });
}

/* ── RUTAS: Listado y filtros ───────────────────────────── */
function initRutas() {
  const container = document.getElementById('rutas-container');
  const noResults = document.getElementById('no-results');
  if (!container) return;

  // Leer parámetros de URL (venimos desde búsqueda del hero)
  const params  = new URLSearchParams(location.search);
  const qOrigen  = params.get('origen')  || '';
  const qDestino = params.get('destino') || '';

  // Autocompletar barra de búsqueda si venimos del hero
  const searchInput = document.getElementById('search-input');
  if (searchInput && (qOrigen || qDestino)) {
    searchInput.value = [qOrigen, qDestino].filter(Boolean).join(' ');
  }

  let filtroActivo = 'todos';
  let textoBusqueda = searchInput ? searchInput.value.toLowerCase() : '';

  function renderRutas() {
    let resultado = rutasData;

    // Filtro por tipo
    if (filtroActivo !== 'todos') {
      resultado = resultado.filter(r => r.tipo === filtroActivo);
    }

    // Filtro por texto
    if (textoBusqueda.trim()) {
      resultado = resultado.filter(r =>
        r.nombre.toLowerCase().includes(textoBusqueda) ||
        r.origen.toLowerCase().includes(textoBusqueda) ||
        r.destino.toLowerCase().includes(textoBusqueda)
      );
    }

    if (resultado.length === 0) {
      container.innerHTML = '';
      noResults.style.display = 'block';
    } else {
      noResults.style.display = 'none';
      container.innerHTML = resultado.map((r, i) => buildRutaCard(r, (i % 6) + 1)).join('');
    }

    // Actualizar conteo
    const count = document.getElementById('rutas-count');
    if (count) count.textContent = resultado.length;
  }

  // Filtros por tipo
  document.querySelectorAll('.btn-filter').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.btn-filter').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filtroActivo = btn.dataset.tipo;
      renderRutas();
    });
  });

  // Búsqueda en tiempo real
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      textoBusqueda = searchInput.value.toLowerCase();
      renderRutas();
    });
  }

  renderRutas();
}

/* ── DETALLE: Cargar ruta ───────────────────────────────── */
function initDetalle() {
  const params = new URLSearchParams(location.search);
  const id     = parseInt(params.get('id'));
  const ruta   = rutasData.find(r => r.id === id);

  if (!ruta) {
    document.body.innerHTML = `
      <div class="d-flex flex-column align-items-center justify-content-center" style="min-height:60vh;gap:1rem;">
        <i class="bi bi-exclamation-triangle-fill" style="font-size:4rem;color:#FFB800;"></i>
        <h3 style="color:#1A1A2E">Ruta no encontrada</h3>
        <p style="color:#6C757D">El ID de la ruta no existe o fue eliminado.</p>
        <a href="rutas.html" class="btn-ver">Ver todas las rutas</a>
      </div>`;
    return;
  }

  // ── Hero info
  document.title = `${ruta.nombre} — RutaRD`;
  setEl('detalle-breadcrumb', ruta.nombre);
  setEl('detalle-tipo-label', getTipoLabel(ruta.tipo));
  setEl('detalle-tipo-icon', '', `bi ${getTransportIcon(ruta.tipo)}`);
  setEl('detalle-titulo', ruta.nombre);
  setEl('detalle-badge-tipo', getTipoLabel(ruta.tipo));
  const badge = document.getElementById('detalle-badge-tipo');
  if (badge) badge.classList.add(ruta.tipo);
  const icoBadge = document.getElementById('detalle-tipo-icon');
  if (icoBadge) icoBadge.className = `bi ${getTransportIcon(ruta.tipo)}`;

  // ── Valoración promedio hero
  const heroStars = document.getElementById('detalle-hero-stars');
  if (heroStars) heroStars.innerHTML = renderStars(ruta.valoracion) + ` <strong>${ruta.valoracion.toFixed(1)}</strong>`;

  // ── Info cards
  setInfoItem('info-precio',   ruta.precio);
  setInfoItem('info-tipo',     getTipoLabel(ruta.tipo));
  setInfoItem('info-duracion', ruta.duracion);
  setInfoItem('info-horario',  ruta.horario);

  // ── Recorrido
  const recEl = document.getElementById('recorrido-list');
  if (recEl) {
    recEl.innerHTML = ruta.recorrido.map((paso, i) => {
      const isFirst = i === 0;
      const isLast  = i === ruta.recorrido.length - 1;
      const dotIcon = isFirst ? 'bi-geo-alt-fill' : isLast ? 'bi-flag-fill' : 'bi-dot';
      return `
        <div class="recorrido-step">
          <div class="step-dot"><i class="bi ${dotIcon}"></i></div>
          <p class="step-text">${paso}</p>
        </div>`;
    }).join('');
  }

  // ── Comentarios
  const comEl = document.getElementById('comentarios-list');
  if (comEl) {
    comEl.innerHTML = ruta.comentarios.map(c => `
      <div class="comentario-card">
        <div class="comentario-header">
          <div class="avatar"><i class="bi bi-person-fill"></i></div>
          <div>
            <div class="comentario-nombre">${c.usuario}</div>
            <div class="stars-inline">${renderStars(c.estrellas)}</div>
          </div>
        </div>
        <p class="comentario-texto">"${c.texto}"</p>
      </div>`).join('');
  }

  // ── Sistema de valoración
  initRatingStars();
}

function setEl(id, text, iconClass) {
  const el = document.getElementById(id);
  if (!el) return;
  if (iconClass !== undefined) el.className = iconClass;
  else el.textContent = text;
}

function setInfoItem(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

/* ── Sistema de estrellas interactivo ───────────────────── */
function initRatingStars() {
  const stars = document.querySelectorAll('.rating-stars .star');
  const msg   = document.getElementById('rating-message');
  const labels = ['', 'Muy mala', 'Regular', 'Buena', 'Muy buena', '¡Excelente!'];
  let selected = 0;

  stars.forEach((star, i) => {
    star.addEventListener('mouseenter', () => {
      stars.forEach((s, j) => s.classList.toggle('hover', j <= i));
      if (msg) msg.textContent = labels[i + 1];
    });
    star.addEventListener('mouseleave', () => {
      stars.forEach(s => s.classList.remove('hover'));
      if (msg) msg.textContent = selected ? labels[selected] : '';
    });
    star.addEventListener('click', () => {
      selected = i + 1;
      stars.forEach((s, j) => s.classList.toggle('active', j < selected));
      if (msg) {
        msg.textContent = `¡Gracias por calificar con ${selected} estrella${selected > 1 ? 's' : ''}!`;
        msg.style.color = '#28A745';
        msg.style.fontWeight = '600';
      }
    });
  });
}

/* ── Reportes quick ─────────────────────────────────────── */
function initReportes() {
  const btns = document.querySelectorAll('.btn-reporte');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tipo = btn.dataset.tipo;
      const toastEl = document.getElementById('reporte-toast');
      const toastMsg = document.getElementById('reporte-toast-msg');
      const msgs = {
        'tapon':   '🚨 Reporte de tapón enviado a la comunidad.',
        'desvio':  '↩️ Reporte de desvío de ruta enviado.',
        'llena':   '🚌 Reporte de unidad llena enviado.',
        'retraso': '⏰ Reporte de retraso enviado.'
      };
      if (toastMsg) toastMsg.textContent = msgs[tipo] || 'Reporte enviado.';
      if (toastEl)  {
        toastEl.classList.add('show');
        setTimeout(() => toastEl.classList.remove('show'), 3500);
      }
      btn.disabled = true;
      btn.innerHTML = '<i class="bi bi-check-circle-fill"></i> Enviado';
      setTimeout(() => {
        btn.disabled = false;
        btn.innerHTML = btn.dataset.originalHtml;
      }, 5000);
    });
    btn.dataset.originalHtml = btn.innerHTML;
  });
}

/* ── Inicialización principal ───────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initBackToTop();
  initNavActive();

  const page = location.pathname.split('/').pop() || 'index.html';
  if (page === 'index.html' || page === '')  initIndex();
  if (page === 'rutas.html')                 initRutas();
  if (page === 'detalle.html')               { initDetalle(); initReportes(); }
});
