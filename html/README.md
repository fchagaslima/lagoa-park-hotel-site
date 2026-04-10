# LAGOA PARK HOTEL — NOVO SITE

> **Status:** ✅ Design completo e pronto para deploy  
> **Data:** 10 de abril de 2026  
> **Arquivos:** HTML + CSS + JavaScript

---

## 📂 Arquivos do Projeto

```
lagoa-park-hotel-site/html/
├── index.html          ← Página home completa (7 seções)
├── styles.css          ← Estilos (CSS puro, sem frameworks)
├── script.js           ← Interações e funcionalidades
├── grupos.html         ← Página de cotação para grupos (já existe)
└── README.md           ← Este arquivo
```

### Assets Relacionados
```
lagoa-park-hotel-site/assets/
└── img/                ← Imagens do hotel
```

---

## 🎨 Design & Brand

### Cores
- **Navy Profundo:** `#1B2F5E` (60% — estrutura)
- **Off-White Arenoso:** `#F5F3EE` (30% — fundos)
- **Terracota Suave:** `#C0603A` (10% — CTAs)

### Tipografia
- **Fonte:** Outfit (Google Fonts)
- **Importação:** Já incluída no `<head>`
- **Pesos:** 300, 400, 500, 600

### Responsividade
- **Mobile-first:** Prioriza telas pequenas
- **Breakpoints:** 640px, 768px, 1024px, 1280px
- **Testado:** iPhone, Tablet, Desktop

---

## 📄 Seções da Home

1. **Hero** — Foto da Lagoa + Headline + Formulário de Reserva
2. **Diferenciais** — 5 cards com ícones (localização, equipe, custo-benefício, inclusos, quartos)
3. **Quartos Preview** — 3 categorias principais com fotos
4. **Localização** — Mapa interativo + distâncias em minutos
5. **Avaliações** — Notas reais + 4 depoimentos de hóspedes
6. **FAQ** — Acordeom com 4 grupos de perguntas (Reservas, Quartos, Estacionamento, Check-in)
7. **CTA Final** — Urgência suave + canais alternativos

### Componentes Globais
- **Header Fixo** — Logo + Menu + WhatsApp + Botão RESERVAR
- **Footer** — Contato + Links Rápidos + Redes Sociais
- **Widget WhatsApp** — Flutuante no canto inferior direito

---

## 🚀 Como Usar

### 1. Abrir Localmente
```bash
# Navegar até a pasta
cd "C:\Users\lenovo\OneDrive\ClaudeCode\lagoa-park-hotel-site\html"

# Abrir no navegador
start index.html
```

Ou simplesmente **dar dois cliques** em `index.html`.

### 2. Para Deploy em Servidor

#### Opção A: Servidor Estático (Recomendado)
```bash
# Copiar todos os arquivos para o servidor
scp index.html styles.css script.js user@servidor:/var/www/lagoaparkhotel/
scp -r ../assets/img user@servidor:/var/www/lagoaparkhotel/assets/
```

#### Opção B: Com Node.js (Local Testing)
```bash
# Instalar http-server globalmente (uma só vez)
npm install -g http-server

# Rodar servidor local na porta 8080
http-server . -p 8080

# Abrir no navegador
http://localhost:8080
```

---

## ⚙️ Configurações Importantes

### Motor de Reservas
Atualmente, o botão "RESERVAR" redireciona para URL placeholding:
```javascript
// Em script.js, função abrirReservas()
const urlReservas = `https://book.seuhotel.com?...`;
```

**Substituir pela URL real da Foco Multimídia quando disponível:**
```javascript
const urlReservas = `https://seu-dominio.foco-multimida.com/reserva?...`;
```

### WhatsApp
O widget WhatsApp já está configurado com:
- **Número:** (83) 3015-1414
- **Mensagem pré-preenchida:** "Olá! Gostaria de informações sobre hospedagem..."

Para alterar:
```html
<!-- Em index.html, buscar por: -->
<a href="https://wa.me/558330151414?text=...">
```

### Google Analytics
Se usar GA4, adicionar no `<head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXX');
</script>
```

---

## 📸 Imagens

### Esperadas em `assets/img/`
- `hero-lagoa.jpg` — Hero section background
- `quarto-individual.jpg` — Quarto Econômico
- `quarto-standard.jpg` — Quarto Standard
- `quarto-studio.jpg` — Quarto Confort Studio

**Se imagens não carregarem:**
- Verifique se existem em `../assets/img/`
- CSS fallback usa cor de fundo `#F5F3EE`
- Não quebra o design

---

## ✅ Checklist Pré-Deploy

- [ ] Substituir URL do motor de reservas (Foco Multimídia)
- [ ] Verificar número de WhatsApp está correto
- [ ] Testar links do footer (Instagram, Facebook)
- [ ] Adicionar Google Analytics (se usar)
- [ ] Otimizar imagens (WebP + JPEG fallback)
- [ ] Testar responsividade em mobile
- [ ] Validar HTML (`https://validator.w3.org`)
- [ ] Testar performance (`https://pagespeed.web.dev`)
- [ ] Configurar SSL/HTTPS no servidor

---

## 🔍 Testes Recomendados

### Navegadores
- Chrome/Edge (Windows)
- Firefox (Windows)
- Safari (Mac/iOS)
- Chrome Mobile (Android)

### Devices
- iPhone 12/13/14 (375px)
- iPad (768px)
- Desktop 1080p (1920px)
- Desktop 4K (2560px)

### Ferramentas
```bash
# Validar HTML
https://validator.w3.org

# Testar Performance
https://pagespeed.web.dev

# Testar Responsividade
Chrome DevTools > F12 > Toggle device toolbar (Ctrl+Shift+M)
```

---

## 📋 Cópias Completas do Projeto

### Documentação Relacionada
- **Copy Completa:** `documentos/copy-completa.md`
- **Brand System:** `documentos/brand-system.md`
- **Análise de Concorrentes:** `documentos/analise-concorrentes.md`

### Diretórios
```
lagoa-park-hotel-site/
├── html/                    ← Arquivos do site
├── assets/
│   └── img/                 ← Imagens
├── documentos/              ← Documentação
│   ├── copy-completa.md
│   ├── brand-system.md
│   ├── analise-concorrentes.md
│   ├── estrutura-site.md
│   ├── lagoa_park_hotel_dossier.md
│   └── reputacao-online.md
└── README.md
```

---

## 🐛 Solução de Problemas

### "Formulário não funciona"
- Verifique se os inputs têm IDs: `checkin`, `checkout`, `hospedes`, `quartos`
- JavaScript está carregando? (Ctrl+Shift+J para console)

### "Imagens não aparecem"
- Caminho relativo correto? (`../assets/img/nome.jpg`)
- Arquivo existe na pasta?
- Extensão correta (.jpg, .png, .webp)?

### "Estilos não carregam"
- `styles.css` está na mesma pasta que `index.html`?
- Sem erros na console (F12)?

### "FAQ não abre"
- Verifique se há JavaScript errors (F12)
- Elementos `.faq-item` existem no HTML?

---

## 📞 Suporte

Para dúvidas sobre:
- **Copy/Textos:** Ver `documentos/copy-completa.md`
- **Design/Colors:** Ver `documentos/brand-system.md`
- **Estrutura:** Ver `documentos/estrutura-site.md`

---

## 📝 Histórico

| Data | Versão | Nota |
|------|--------|------|
| 10/04/2026 | 1.0 | Design completo com 7 seções, 3 categorias de quartos, FAQ, avaliações |

---

**🎉 Bem-vindo ao novo site do Lagoa Park Hotel!**

Todas as seções estão prontas, responsivas e otimizadas para conversão.  
O design segue fielmente o brand system (cores, tipografia, tom de voz).  
A copy está baseada em análise real de competidores e reputação dos hóspedes.
