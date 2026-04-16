# README técnico — html/

Arquivos-fonte do site. Editar sempre aqui primeiro, depois sincronizar com XAMPP.

**Design e copy:** ver `documentos/brand-system.md` e `documentos/copy-completa.md`  
**Arquitetura e wireframes:** ver `documentos/estrutura-site.md`  
**Galeria 360°:** ver `documentos/galeria-360.md`

---

## Arquivos

| Arquivo | Função |
|---------|--------|
| `index.html` | Home (7 seções + carrossel hero) |
| `galeria-360.html` | Galeria 360° com Pannellum |
| `grupos.html` | Cotação para grupos (formulário Kommo) |
| `styles.css` | Estilos CSS (mobile-first) |
| `script.js` | JavaScript (carrossel, menu, FAQ, reservas) |

---

## Servidor XAMPP

**Fluxo:** editar em `html/` → copiar para XAMPP → testar → commit.

```cmd
# Copiar arquivo editado para XAMPP (exemplo com index.html)
copy "C:\Users\lenovo\OneDrive\ClaudeCode\lagoa-park-hotel-site\html\index.html" "C:\Users\lenovo\OneDrive\ClaudeCode\xampp\htdocs\lagoa-park-hotel-site\index.html"

# Copiar assets (imagens)
xcopy "C:\Users\lenovo\OneDrive\ClaudeCode\lagoa-park-hotel-site\assets" "C:\Users\lenovo\OneDrive\ClaudeCode\xampp\htdocs\lagoa-park-hotel-site\assets" /E /Y
```

**Iniciar XAMPP:** `C:\xampp\xampp-control.exe` → Start Apache  
**URL de teste:** `http://localhost/lagoa-park-hotel-site/`

---

## Carrossel Hero

Implementado em `index.html` (seção hero) + `styles.css` + `script.js`.

- Auto-rotação a cada 4 segundos, pausa ao interagir
- Setas e indicadores para navegação manual
- Fotos: `assets/img/atracoes/01-fachada.jpg`, `02-recepcao-01.jpg`, `03-recepcao-02.jpg`
- Função JS: `iniciarCarrossel()` em `script.js`
- Classes CSS: `.hero-slide`, `.carousel-indicator`, `.carousel-btn`

```html
<div class="hero-slides-container">
  <img class="hero-slide active" src="assets/img/atracoes/01-fachada.jpg" alt="Fachada">
  <img class="hero-slide" src="assets/img/atracoes/02-recepcao-01.jpg" alt="Recepção">
  <img class="hero-slide" src="assets/img/atracoes/03-recepcao-02.jpg" alt="Recepção">
  <button class="carousel-btn prev">❮</button>
  <button class="carousel-btn next">❯</button>
  <div class="carousel-indicators">
    <span class="carousel-indicator active"></span>
    <span class="carousel-indicator"></span>
    <span class="carousel-indicator"></span>
  </div>
</div>
```

---

## Configurações Pendentes

**Motor de reservas** — substituir placeholder em `script.js`, função `abrirReservas()`:
```javascript
// Substituir por URL real da Foco Multimídia
const urlReservas = `https://seu-dominio.foco-multimidia.com/reserva?check_in=...`;
```

**Redes sociais** — atualizar links no footer do `index.html` (Instagram, Facebook).

**Google Analytics** — se usar GA4, adicionar no `<head>` do `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXX');
</script>
```

---

## Troubleshooting

| Problema | O que verificar |
|----------|----------------|
| Formulário não funciona | IDs dos inputs: `checkin`, `checkout`, `hospedes` — F12 → Console |
| Imagens não aparecem | Caminho relativo `assets/img/nome.jpg` · arquivo existe? extensão correta? |
| Menu mobile não abre | F12 → Console · ID do botão: `menu-toggle` |
| FAQ não abre | F12 → Console · elementos `.faq-item` existem? |
| Galeria 360° não carrega | Ver `documentos/galeria-360.md` → Troubleshooting |
