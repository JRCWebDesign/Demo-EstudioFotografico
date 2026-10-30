/* Configuración de contacto. No usamos el número del negocio de referencia.
   Para activar WhatsApp, agregá el tuyo con país, sin +, espacios ni guiones. */
const CONTACT = { whatsapp: '' };

// Datos separados de la presentación: agregá fotos sin repetir el marcado HTML.
const photographs = [
  { file: 'eventos', category: 'Eventos', title: 'La alegría de encontrarse', alt: 'Pareja celebrando su boda' },
  { file: 'drones', category: 'Drones', title: 'Otra perspectiva', alt: 'Vista aérea del océano y la costa' },
  { file: 'retrato', category: 'Retratos', title: 'Simplemente vos', alt: 'Retrato con luz natural' },
  { file: 'infantiles', category: 'Infantiles', title: 'Un deseo enorme', alt: 'Torta de cumpleaños con velas' },
  { file: 'espacios', category: 'Espacios', title: 'Lugares para imaginar', alt: 'Interior contemporáneo y luminoso' },
  { file: 'hero', category: 'Eventos', title: 'Una noche para recordar', alt: 'Celebración con luces al aire libre' },
];
const gallery = document.querySelector('#gallery');
const lightbox = document.querySelector('#lightbox');

function renderGallery(category = 'Todos') {
  const selection = photographs.filter(photo => category === 'Todos' || photo.category === category);
  gallery.replaceChildren(...selection.map(photo => {
    const button = document.createElement('button');
    button.className = 'gallery-item';
    button.type = 'button';
    button.setAttribute('aria-label', `Ampliar: ${photo.title}`);
    const image = document.createElement('img');
    image.src = `assets/${photo.file}.jpg`;
    image.alt = photo.alt;
    image.loading = 'lazy';
    const caption = document.createElement('span');
    caption.className = 'gallery-caption';
    caption.textContent = `${photo.category} / ${photo.title}`;
    button.append(image, caption);
    button.addEventListener('click', () => {
      lightbox.querySelector('img').src = image.src;
      lightbox.querySelector('img').alt = photo.alt;
      lightbox.querySelector('p').textContent = `${photo.title} · Imagen ilustrativa`;
      lightbox.showModal();
    });
    return button;
  }));
  document.querySelector('#gallery-status').textContent = `${selection.length} ${selection.length === 1 ? 'imagen' : 'imágenes'} en ${category}`;
}
renderGallery();
document.querySelectorAll('[data-filter]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach(filter => {
      const active = filter === button;
      filter.classList.toggle('active', active);
      filter.setAttribute('aria-pressed', String(active));
    });
    renderGallery(button.dataset.filter);
  });
});
lightbox.querySelector('.close-dialog').addEventListener('click', () => lightbox.close());
lightbox.addEventListener('click', event => { if (event.target === lightbox) lightbox.close(); });

// Menú móvil: estado accesible y cierre automático al elegir un destino.
const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() { navigation.classList.remove('open'); menuToggle.setAttribute('aria-expanded', 'false'); }
menuToggle.addEventListener('click', () => {
  const open = navigation.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
document.querySelectorAll('[data-service]').forEach(link => link.addEventListener('click', () => {
  document.querySelector('#service').value = link.dataset.service;
}));

// Demo sin servidor: los datos permanecen en la página. El mensaje se arma como
// texto (nunca HTML), y WhatsApp aparece únicamente si se configura un teléfono.
const form = document.querySelector('#inquiry');
form.addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(form);
  const message = `¡Hola! Soy ${data.get('name').trim()}. Quería consultar por ${data.get('service')}.\n\n${data.get('message').trim()}`;
  document.querySelector('#prepared-message').value = message;
  document.querySelector('#inquiry-result').hidden = false;
  document.querySelector('#copy-status').textContent = 'Mensaje preparado. Podés copiarlo y compartirlo.';
  if (/^\d{8,15}$/.test(CONTACT.whatsapp)) {
    const link = document.querySelector('#whatsapp-link');
    link.href = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;
    link.hidden = false;
  }
  document.querySelector('#prepared-message').focus();
});
document.querySelector('#copy-message').addEventListener('click', async () => {
  const field = document.querySelector('#prepared-message');
  try {
    await navigator.clipboard.writeText(field.value);
    document.querySelector('#copy-status').textContent = '¡Listo! Mensaje copiado.';
  } catch {
    field.focus(); field.select();
    document.querySelector('#copy-status').textContent = 'Seleccionamos tu mensaje. Usá Copiar en tu dispositivo.';
  }
});
document.querySelector('#year').textContent = new Date().getFullYear();

// Índice de servicios: una sola producción abierta, con imagen y descripción
// sincronizadas. Los botones nativos conservan interacción por teclado y lector.
document.querySelectorAll('.service-trigger').forEach(trigger => {
  trigger.addEventListener('click', () => {
    document.querySelectorAll('.service-trigger').forEach(button => {
      const active = button === trigger;
      button.setAttribute('aria-expanded', String(active));
      button.closest('.service-entry').classList.toggle('active', active);
      document.getElementById(button.getAttribute('aria-controls')).hidden = !active;
      button.querySelector('.indicator').textContent = active ? '−' : '+';
    });
    const image = document.querySelector('#service-image');
    image.src = `assets/${trigger.dataset.preview}.jpg`;
    image.alt = trigger.dataset.alt;
    document.querySelector('#service-caption').textContent = trigger.dataset.caption;
  });
});
