/* ========================================
   LAGOA PARK HOTEL — JAVASCRIPT
   Interações e funcionalidades
   ======================================== */

// ── Abrir Reservas via WhatsApp ──
// Substituir pela URL do motor de reservas quando o channel manager estiver ativo
function abrirReservas() {
  const checkin = document.getElementById('checkin')?.value;
  const checkout = document.getElementById('checkout')?.value;
  const hospedes = document.getElementById('adultos')?.value || '2';
  const formErro = document.getElementById('form-error');

  if (!checkin || !checkout) {
    if (formErro) {
      formErro.classList.remove('hidden');
      setTimeout(() => formErro.classList.add('hidden'), 4000);
    }
    return;
  }

  if (formErro) formErro.classList.add('hidden');

  const [anoIn, mesIn, diaIn] = checkin.split('-');
  const [anoOut, mesOut, diaOut] = checkout.split('-');
  const msg = `Olá! Gostaria de verificar disponibilidade no Lagoa Park Hotel.\nCheck-in: ${diaIn}/${mesIn}/${anoIn}\nCheck-out: ${diaOut}/${mesOut}/${anoOut}\nHóspedes: ${hospedes} adulto(s)`;

  window.open(`https://wa.me/558330151414?text=${encodeURIComponent(msg)}`, '_blank');
}

// ── Toggle FAQ ──
function toggleFaq(elemento) {
  const resposta = elemento.nextElementSibling;

  // Fechar outros itens do mesmo grupo se necessário
  const grupo = elemento.closest('.faq-grupo');
  const outrosItens = grupo.querySelectorAll('.faq-item');

  outrosItens.forEach(item => {
    if (item !== elemento.closest('.faq-item')) {
      const outraResposta = item.querySelector('.faq-resposta');
      const outraPergunta = item.querySelector('.faq-pergunta');

      if (outraResposta.classList.contains('active')) {
        outraResposta.classList.remove('active');
        outraPergunta.classList.remove('active');
      }
    }
  });

  // Toggle do item atual
  resposta.classList.toggle('active');
  elemento.classList.toggle('active');
}

// ── Scroll Reveal ──
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Aplicar observer a elementos que entram na tela
document.addEventListener('DOMContentLoaded', () => {
  const elementsToReveal = document.querySelectorAll(
    '.diferencial-card, .quarto-card, .depoimento-card'
  );

  elementsToReveal.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
});

// ── Fechar drawer mobile ──
function fecharDrawer() {
  const drawer = document.getElementById('drawer');
  const overlay = document.getElementById('drawer-overlay');

  if (drawer && overlay) {
    drawer.style.transform = 'translateX(100%)';
    overlay.style.opacity = '0';
    overlay.style.pointerEvents = 'none';
  }
}

// ── Links do menu abrem e fecham drawer ──
document.addEventListener('DOMContentLoaded', () => {
  const linksMenu = document.querySelectorAll('.nav-menu a');

  linksMenu.forEach(link => {
    link.addEventListener('click', () => {
      fecharDrawer();
    });
  });
});

// ── Suavizar scroll para âncoras ──
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href !== '#') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// ── Capturar submit do formulário de reserva ──
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form-reserva');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      abrirReservas();
    });
  }
});

// ── Validar formulário de datas ──
document.addEventListener('DOMContentLoaded', () => {
  const inputCheckin = document.getElementById('checkin');
  const inputCheckout = document.getElementById('checkout');

  if (inputCheckin && inputCheckout) {
    // Data mínima: hoje
    const hoje = new Date().toISOString().split('T')[0];
    inputCheckin.setAttribute('min', hoje);

    // Quando check-in é preenchido, atualizar mínimo do check-out
    inputCheckin.addEventListener('change', () => {
      inputCheckout.setAttribute('min', inputCheckin.value);
    });
  }
});

// ── Analytics: Rastrear cliques em CTA ──
function rastrearCTA(label) {
  if (window.gtag) {
    gtag('event', 'clique_cta', {
      'botao': label,
      'pagina': window.location.pathname
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const botoesReserva = document.querySelectorAll('[onclick*="abrirReservas"]');
  const linksExterno = document.querySelectorAll('a[target="_blank"]');

  botoesReserva.forEach(botao => {
    botao.addEventListener('click', () => {
      rastrearCTA('Reservar');
    });
  });

  linksExterno.forEach(link => {
    link.addEventListener('click', () => {
      const label = link.textContent.trim() || link.href;
      rastrearCTA(label);
    });
  });
});

// ── Lazy Load de Imagens ──
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src || img.src;
        img.classList.add('loaded');
        imageObserver.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

// ── Acessibilidade: Fechar menus ao pressionar ESC ──
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    fecharDrawer();
  }
});

// ── Log de inicialização ──
console.log('✅ Lagoa Park Hotel — Site carregado com sucesso');
