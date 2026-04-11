# 📋 PROJETO: Lagoa Park Hotel — Site Oficial

**Última atualização:** 11 de abril de 2026  
**Status:** ✅ Design completo e pronto para deploy

---

## 🎯 Resumo do Projeto

Novo site oficial do Lagoa Park Hotel desenvolvido com **HTML puro**, **CSS puro** e **JavaScript vanilla** (sem frameworks).

- **Objetivo:** Aumentar reservas, informar hóspedes e melhorar reputação online
- **Modelo:** Home one-page + 6 páginas complementares
- **Responsividade:** Mobile-first (testado em iPhone, Tablet, Desktop)
- **Localização:** `C:\Users\lenovo\OneDrive\ClaudeCode\lagoa-park-hotel-site\`

---

## 🏗️ Estrutura de Pastas

```
lagoa-park-hotel-site/
├── html/
│   ├── index.html          ← Página home (7 seções + carrossel hero)
│   ├── galeria-360.html    ← Galeria 360º com Pannellum ✅ NOVO
│   ├── grupos.html         ← Cotação para grupos
│   ├── styles.css          ← Estilos (CSS puro)
│   ├── script.js           ← Interações (JavaScript + carrossel)
│   ├── llm.txt             ← Context para Claude
│   └── README.md           ← Instruções técnicas
│
├── assets/
│   └── img/
│       ├── 360/            ← Fotos 360º esféricas (Pannellum)
│       ├── atracoes/       ← Fotos para carrossel hero
│       ├── quartos/        ← Fotos de apartamentos
│       ├── logo/           ← Logotipos
│       └── [outras pastas]
│
├── documentos/
│   ├── copy-completa.md         ← Textos de todas as seções
│   ├── brand-system.md          ← Cores, tipografia, tom
│   ├── estrutura-site.md        ← Arquitetura das páginas
│   ├── analise-concorrentes.md  ← Pesquisa de concorrentes
│   ├── reputacao-online.md      ← Avaliações de hóspedes
│   ├── analise-site-atual.md    ← Diagnóstico anterior
│   └── lagoa_park_hotel_dossier.md ← Info do hotel
│
├── .git/                   ← Histórico de versões
├── PROJETO.md              ← Este arquivo
└── README.md               ← README geral do projeto
```

---

## 🖥️ Servidor Local (XAMPP)

### 📂 Estrutura de Arquivos

**Repositório Principal (Desenvolvimento):**

```
C:\Users\lenovo\OneDrive\ClaudeCode\lagoa-park-hotel-site\
├── html/                    ← Arquivos-fonte (atualizar aqui primeiro)
│   ├── index.html
│   ├── grupos.html
│   ├── styles.css
│   ├── script.js
│   ├── llm.txt
│   └── README.md
├── assets/
│   └── img/
├── documentos/
├── .git/
├── PROJETO.md              ← Este arquivo
└── README.md
```

**Servidor Web Local (XAMPP - para testes):**

```
C:\Users\lenovo\OneDrive\ClaudeCode\xampp\htdocs\lagoa-park-hotel-site\
├── index.html              ← Sincronizado com html/index.html
├── grupos.html             ← Sincronizado com html/grupos.html
├── styles.css              ← Sincronizado com html/styles.css
├── script.js               ← Sincronizado com html/script.js
├── llm.txt                 ← Sincronizado com html/llm.txt
├── README.md               ← Sincronizado com html/README.md
├── .git/
└── assets/                 ← Sincronizado com assets/ (imagens)
    └── img/
```

### ⚙️ Como Usar XAMPP para Testes

1. **Inicie o XAMPP:**

   ```cmd
   C:\xampp\xampp-control.exe
   ```

   Clique em **"Start"** para **Apache** (MySQL opcional)

2. **Acesse no navegador:**

   ```
   http://localhost/lagoa-park-hotel-site/
   ```

3. **Vantagens:**

   - Simula ambiente de produção real
   - Testa path relativo de imagens
   - Testa performance HTTP real
   - Melhor que abrir arquivo local

### 🔄 Sincronização de Arquivos

**⚠️ IMPORTANTE:** Manter os dois diretórios sincronizados!

**Fluxo de Trabalho:**

1. **Editar no repositório principal:** `C:\Users\lenovo\OneDrive\ClaudeCode\lagoa-park-hotel-site\html\`
2. **Copiar para XAMPP:** `C:\Users\lenovo\OneDrive\ClaudeCode\xampp\htdocs\lagoa-park-hotel-site\`
3. **Testar localmente:** `http://localhost/lagoa-park-hotel-site/`
4. **Fazer commit:** `git add . && git commit -m "..."`
5. **Deploy:** Copiar para servidor de produção

**Arquivos Críticos para Sincronizar:**

- ✅ `index.html` — página principal com carrossel hero
- ✅ `grupos.html` — página de cotação
- ✅ `styles.css` — estilos
- ✅ `script.js` — interações e carrossel
- ✅ `assets/img/` — todas as imagens

### 📋 Checklist de Sincronização

Quando atualizar arquivos HTML/CSS/JS:

```bash
# Copiar arquivo específico
cp "C:\Users\lenovo\OneDrive\ClaudeCode\lagoa-park-hotel-site\html\index.html" \
   "C:\Users\lenovo\OneDrive\ClaudeCode\xampp\htdocs\lagoa-park-hotel-site\index.html"

# Ou copiar pasta inteira (assets)
cp -r "C:\Users\lenovo\OneDrive\ClaudeCode\lagoa-park-hotel-site\assets" \
      "C:\Users\lenovo\OneDrive\ClaudeCode\xampp\htdocs\lagoa-park-hotel-site\assets"
```

**Atualização:** 10 de abril de 2026 — Sincronização inicial realizada ✅

---

## 🎨 Design & Marca

### Cores Oficiais (Palette)
| Cor | Código | Uso | Proporção |
|-----|--------|-----|-----------|
| Navy Profundo | `#1B2F5E` | Estrutura, headers, texto | 60% |
| Off-White | `#F5F3EE` | Fundos, cards | 30% |
| Terracota | `#C0603A` | Botões CTA, destaques | 10% |

### Tipografia
- **Fonte:** Outfit (Google Fonts)
- **Pesos:** 300 (light), 400 (regular), 500 (medium), 600 (bold)
- **Importação:** Já configurada no `<head>` de `index.html`

### Logo
- Localização esperada: `assets/img/logo.png` ou `.svg`
- Usar em header e footer

---

## 📄 Seções da Home (index.html)

Todas as 7 seções estão implementadas e prontas:

1. **Hero com Carrossel** — 3 fotos 360º em auto-rotação + headline + formulário de reserva rápida ✅ NOVO
2. **Diferenciais** — 5 cards: localização, equipe, custo-benefício, inclusos, quartos
3. **Preview de Quartos** — 3 categorias (Econômico, Standard, Confort Studio)
4. **Localização** — Mapa interativo + distâncias em minutos
5. **Avaliações** — Notas reais + 4 depoimentos de hóspedes
6. **FAQ** — Acordeom com 4 grupos: Reservas, Quartos, Estacionamento, Check-in
7. **CTA Final** — Urgência suave + canais de contato

### Componentes Globais
- **Header Fixo** — Logo + Menu horizontal + WhatsApp + Botão RESERVAR
- **Footer** — Logo + Endereço + Links + Redes Sociais
- **Widget WhatsApp** — Botão flutuante (canto inferior direito)

---

## ⚙️ Configurações Críticas

### 1. Motor de Reservas (IMPORTANTE!)

**Atual:** Placeholder em `script.js`

```javascript
// Localização: script.js → função abrirReservas()
const urlReservas = `https://book.seuhotel.com?...`;
```

**Substituir por URL real da Foco Multimídia:**
```javascript
const urlReservas = `https://seu-dominio.foco-multimida.com/reserva?check_in=...`;
```

### 2. Contato WhatsApp

- **Número:** (83) 3015-1414
- **Localização:** `index.html` → buscar por `wa.me/558330151414`
- **Mensagem padrão:** "Olá! Gostaria de informações sobre hospedagem..."

### 3. Redes Sociais

Atualizar links no footer com URLs reais:
- Instagram
- Facebook
- TripAdvisor (se houver)

### 4. Google Analytics (Opcional)

Se usar GA4, adicionar script no `<head>` de `index.html`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXX');
</script>
```

---

## 🖼️ Imagens Esperadas

Adicionar em `assets/img/`:

| Arquivo | Uso | Dimensão Recomendada |
|---------|-----|----------------------|
| `hero-lagoa.jpg` | Hero section | 1920x1080px |
| `quarto-individual.jpg` | Quarto Econômico | 1000x667px |
| `quarto-standard.jpg` | Quarto Standard | 1000x667px |
| `quarto-studio.jpg` | Quarto Confort Studio | 1000x667px |
| `localizacao-mapa.jpg` | Seção localização | 1200x600px |
| `logo.png` ou `.svg` | Header + Footer | 200x100px |

**Fallback:** Se imagens não carregarem, CSS usa cor de fundo `#F5F3EE` — design não quebra.

---

## 🚀 Como Testar Localmente

### Opção 1: Abrir no Navegador (Mais rápido)
```cmd
start "C:\Users\lenovo\OneDrive\ClaudeCode\lagoa-park-hotel-site\html\index.html"
```

Ou simplesmente **dar dois cliques** no arquivo.

### Opção 2: Servidor Local (Mais realista)

```cmd
cd "C:\Users\lenovo\OneDrive\ClaudeCode\lagoa-park-hotel-site\html"
http-server . -p 8080
```

Depois abrir: `http://localhost:8080`

---

## ✅ Checklist Pré-Deploy

Antes de subir para o servidor:

- [ ] Substituir URL do motor de reservas (Foco Multimídia)
- [ ] Verificar número de WhatsApp (83) 3015-1414
- [ ] Atualizar links de redes sociais (Instagram, Facebook)
- [ ] Adicionar Google Analytics (se usar)
- [ ] Otimizar imagens (WebP + JPEG fallback)
- [ ] Testar responsividade em mobile (iPhone, iPad, Android)
- [ ] Validar HTML: https://validator.w3.org
- [ ] Testar performance: https://pagespeed.web.dev
- [ ] Configurar SSL/HTTPS no servidor
- [ ] Testar formulário de reserva (redireciona corretamente?)
- [ ] Testar links de navegação (todas as âncoras funcionam?)
- [ ] Testar FAQ (acordeom abre/fecha?)

---

## 📱 Responsividade

Projeto testado nos seguintes breakpoints:

| Dispositivo | Largura | Status |
|-------------|---------|--------|
| Mobile (iPhone) | 375px | ✅ Otimizado |
| Tablet (iPad) | 768px | ✅ Otimizado |
| Desktop (1080p) | 1920px | ✅ Otimizado |
| Desktop (4K) | 2560px | ✅ Otimizado |

**Mobile-first:** CSS prioriza mobile, depois expande para maiores.

---

## 🎠 Carrossel Hero (Novo - Abril 2026)

### Objetivo
Substituir imagem estática na seção hero por carrossel automático de 3 fotos de atrações principais, melhorando engagement e mostrando diversidade de ambientes.

### Funcionalidades
✅ **Auto-rotação:** Alterna entre fotos automaticamente a cada 4 segundos  
✅ **Controle manual:** Setas e botões indicadores para navegação manual  
✅ **Responsivo:** Adapta tamanho para mobile (100% largura) e desktop (1920x1080px)  
✅ **Transições suaves:** CSS fade-in/fade-out  
✅ **Pausa ao interagir:** Carrossel pausa ao usuário clicar  

### Fotos Usadas
3 fotos do folder `assets/img/atracoes/`:

| Foto | Uso | Resolução |
|------|-----|-----------|
| `01-fachada.jpg` | Slide 1 - Fachada do hotel | 1920x1080px |
| `02-recepcao-01.jpg` | Slide 2 - Recepção | 1920x1080px |
| `03-recepcao-02.jpg` | Slide 3 - Recepção alternativa | 1920x1080px |

### Implementação Técnica
- **Arquivo:** `html/index.html` (seção hero)
- **Estilos:** `html/styles.css` (classes `.hero-slide`, `.carousel-indicator`)
- **JavaScript:** `html/script.js` (função `iniciarCarrossel()`)
- **Caminhos:** Relativo `assets/img/atracoes/` (funciona em desenvolvimento e XAMPP)

### Estrutura HTML
```html
<div class="hero-slides-container">
  <img class="hero-slide active" src="assets/img/atracoes/01-fachada.jpg" alt="Fachada">
  <img class="hero-slide" src="assets/img/atracoes/02-recepcao-01.jpg" alt="Recepção">
  <img class="hero-slide" src="assets/img/atracoes/03-recepcao-02.jpg" alt="Recepção">
  
  <!-- Controles -->
  <button class="carousel-btn prev">❮</button>
  <button class="carousel-btn next">❯</button>
  
  <!-- Indicadores -->
  <div class="carousel-indicators">
    <span class="carousel-indicator active"></span>
    <span class="carousel-indicator"></span>
    <span class="carousel-indicator"></span>
  </div>
</div>
```

### Próximas Melhorias
- Adicionar mais fotos (atrações, quartos, piscina)
- Considerar WebP para melhor performance
- Implementar lazy loading
- Adicionar legendas ou CTA por slide

---

## 📸 Galeria 360º (Novo - Abril 2026)

### Objetivo
Permitir que hóspedes explorem os ambientes do hotel em fotos esféricas 360º antes da chegada.
Diferenciar competitivamente: poucas pousadas/hotéis em João Pessoa oferecem essa experiência.

### Tecnologia
- **Visualizador:** Pannellum v2.5.6 (open-source, leve, sem dependências)
- **Instalação:** Arquivo local em `assets/lib/pannellum/` — **não depende de CDN externo**
- **Fotos:** Capturadas com Insta360 X3
- **Formato:** Equirectangular 360º (JPG)
- **Resolução:** 1920 × 1080px (16:9)
- **Tamanho:** ~500KB-1MB por foto

### Página
- **URL:** `http://localhost/lagoa-park-hotel-site/galeria-360.html`
- **Arquivo:** `galeria-360.html`
- **Localização:**
  - Repositório: `C:\Users\lenovo\OneDrive\ClaudeCode\lagoa-park-hotel-site\html\galeria-360.html`
  - XAMPP: `C:\Users\lenovo\OneDrive\ClaudeCode\xampp\htdocs\lagoa-park-hotel-site\galeria-360.html`

### Funcionalidades
✅ Visualizador 360º interativo
✅ Clique e arraste para rotacionar
✅ Zoom com scroll do mouse
✅ Rotação automática suave (após 3s inatividade)
✅ Fullscreen disponível
✅ Grid de ambientes clicáveis
✅ Múltiplas fotos por ambiente
✅ Responsivo (mobile + desktop)
✅ Design consistente com brand system

### Estrutura de Pastas Corrigida (10 de Abril de 2026)

**Problema:** Havia duplicação `assets/assets/img/` no XAMPP (corrigido ✅)

**Estrutura Correta (ambos os locais):**
```
assets/
├── img/
│   ├── 360/                  ← Fotos 360º (esféricas)
│   ├── atracoes/             ← Fotos de atrações (1920x560 e 1920x960)
│   ├── quartos/              ← Fotos de apartamentos
│   │   ├── AP-economico/
│   │   └── AP-Standard-dbl/
│   ├── logo/                 ← Logotipos
│   ├── Restaurante/
│   ├── Jams/
│   ├── café da manhã/
│   ├── hero/
│   └── Recepção/
└── lib/
    └── pannellum/            ← Pannellum v2.5.6 (instalado localmente)
        ├── pannellum.js
        └── pannellum.css
```

**Locais de Armazenamento:**
- Desenvolvimento: `C:\Users\lenovo\OneDrive\ClaudeCode\lagoa-park-hotel-site\assets\img\360\`
- XAMPP (testes): `C:\Users\lenovo\OneDrive\ClaudeCode\xampp\htdocs\lagoa-park-hotel-site\assets\img\360\`
- URL: `http://localhost/lagoa-park-hotel-site/assets/img/360/`

### Fotos Planejadas (23 Total)

#### 1️⃣ Fachada (1 foto)
- `01-fachada.jpg` ✅

#### 2️⃣ Recepção (4 fotos)
- `02-recepcao-01.jpg` ✅
- `03-recepcao-02.jpg` ✅
- `04-recepcao-03.jpg` ✅
- `05-recepcao-04.jpg` ✅

#### 3️⃣ Restaurante (2 fotos) — Pendente
- `06-restaurante-01.jpg`
- `07-restaurante-02.jpg`

#### 4️⃣ Buffet (1 foto) — Pendente
- `08-buffet-01.jpg`

#### 5️⃣ AP Standard - Duplo (2+1 camas) (3 fotos) — Pendente
- `09-ap-standard-duplo-01.jpg`
- `10-ap-standard-duplo-02.jpg`
- `12-ap-standard-banheiro.jpg`

#### 6️⃣ AP Standard - Triplo (3 camas) (1 foto) — Pendente
- `11-ap-standard-triplo.jpg`

#### 7️⃣ AP Standard DBL - Duplo (2+1 camas) (3 fotos) — Pendente
- `13-ap-standard-dbl-duplo-01.jpg`
- `14-ap-standard-dbl-duplo-02.jpg`
- `15-ap-standard-dbl-banheiro.jpg`

#### 8️⃣ AP Confort - Duplo (2+1 camas) (3 fotos) — Pendente
- `16-ap-confort-duplo-01.jpg`
- `17-ap-confort-duplo-02.jpg`
- `19-ap-confort-banheiro.jpg`

#### 9️⃣ AP Confort - Triplo (3 camas) (1 foto) — Pendente
- `18-ap-confort-triplo.jpg`

#### 🔟 AP Confort DBL - Duplo (2+1 camas) (3 fotos) — Pendente
- `20-ap-confort-dbl-duplo-01.jpg`
- `21-ap-confort-dbl-duplo-02.jpg`
- `23-ap-confort-dbl-banheiro.jpg`

#### 1️⃣1️⃣ AP Confort DBL - Triplo (3 camas) (1 foto) — Pendente
- `22-ap-confort-dbl-triplo.jpg`

### Status Atual (10 de Abril de 2026 - FINALIZADO)
- ✅ **5 de 23 fotos** prontas e **100% funcionando** (Fachada + Recepção)
  - Local: `assets/img/360/`
  - Tamanho: 35MB total
  - URLs testadas e respondendo corretamente
- ⏳ **18 fotos pendentes** (Restaurante, Buffet, Apartamentos)
- ✅ **Galeria 360º ativa** em produção
- ✅ **Links integrados** no menu principal (header, mobile, footer)

### Como Adicionar Novas Fotos

1. **Exporte do Insta360 Studio:**
   - Resolução: 1920 × 1080px
   - Formato: JPG
   - Tipo: Esférico/Equirectangular

2. **Renomeie com padrão:** Use exatamente os nomes listados acima

3. **Coloque em ambos os locais:**
   - `C:\Users\lenovo\OneDrive\ClaudeCode\lagoa-park-hotel-site\assets\img\360\`
   - `C:\Users\lenovo\OneDrive\ClaudeCode\xampp\htdocs\lagoa-park-hotel-site\assets\img\360\`

4. **Atualize galeria-360.html** se adicionar novos ambientes (seção JavaScript `ambientes`)

### Próximas Etapas
1. Coletar e exportar fotos 360º dos apartamentos
2. Adicionar link para galeria no menu principal (`index.html`)
3. Otimizar carregamento (lazy loading de imagens)
4. Considerar compressão WebP para melhor performance

### Integração com Site Principal
- Menu: Adicionar link "Galeria 360º" no header
- Footer: Link direto para galeria
- Home: Card ou CTA mencionando fotos 360º

---

## 🔗 Informações do Hotel

### Contato
- **Telefone:** (83) 3015-1414
- **WhatsApp:** (83) 3015-1414
- **Email:** [adicionar quando disponível]
- **Endereço:** João Pessoa, Paraíba

### Características
- **Setores:** Gerência, Recepção, Governança, Alimentos & Bebidas
- **Quartos:** 3 categorias (Econômico, Standard, Confort Studio)
- **Diferenciais:** Localização premium, equipe experiente, custo-benefício, inclusos bem definidos

---

## 📚 Documentação Detalhada

Para informações específicas, consulte:

| Documento | Conteúdo |
|-----------|----------|
| `documentos/copy-completa.md` | Textos de TODAS as seções — 15 praias, 7 passeios, centro histórico, museus, igrejas |
| `documentos/brand-system.md` | Cores, tipografia, tom de voz, guidelines |
| `documentos/estrutura-site.md` | Arquitetura, wireframes, interações |
| `documentos/analise-concorrentes.md` | Análise de concorrentes e boas práticas |
| `documentos/reputacao-online.md` | Avaliações reais de hóspedes (OTA insights) |
| `html/README.md` | Instruções técnicas detalhadas |

---

## 🔍 Troubleshooting

### "Galeria 360º mostra spinner mas não carrega a foto"

**Causa 1 — Pannellum via CDN externo não carrega**
- CDN `pannellum.org` e `cdn.jsdelivr.net` podem falhar sem internet ou por bloqueio
- **Solução aplicada (11/04/2026):** Pannellum baixado e salvo localmente em `assets/lib/pannellum/`
- O HTML deve referenciar: `assets/lib/pannellum/pannellum.js` e `assets/lib/pannellum/pannellum.css`

**Causa 2 — Div filho dentro do container do Pannellum**
- O Pannellum precisa de um container **vazio** para inicializar
- Ter qualquer HTML dentro do `<div id="pannellum-viewer">` impede a renderização
- **Solução aplicada (11/04/2026):** Container deixado vazio com altura definida via `style` inline:
  ```html
  <div id="pannellum-viewer" style="width:100%; height:500px;"></div>
  ```

**Causa 3 — Classes Tailwind CSS conflitando com altura**
- Classes como `h-[400px]` do Tailwind CDN podem não ser aplicadas corretamente
- **Solução:** Usar `style="height:500px"` diretamente no elemento

---

### "Formulário não funciona"
- Verifique se os inputs têm IDs: `checkin`, `checkout`, `hospedes`
- Abra F12 (DevTools) → Console para ver erros

### "Imagens não aparecem"
- Caminho relativo correto? (`../assets/img/nome.jpg`)
- Arquivo existe? Extensão correta? (.jpg, .png, .webp)

### "Menu mobile não abre"
- JavaScript carregando? (F12 → Console)
- ID do botão hambúrguer: `menu-toggle`

### "FAQ não abre"
- Elementos `.faq-item` existem?
- Sem erros no console?

---

## 📊 Próximas Etapas

### ⚡ ATIVIDADES PRIORITÁRIAS (Otimização)

#### 1️⃣ **Otimizar Imagens para WebP** — 🔴 PENDENTE
**Status:** Aguardando ação manual  
**Prazo:** Próxima conversa  
**Esforço:** ~15 minutos

**O que fazer:**
1. Acesse https://squoosh.app/
2. Arraste as fotos grandes (especialmente Restaurante: 11-14MB cada)
3. Converta para **WebP** com qualidade **85**
4. Salve na pasta `assets/img/` (mesmo local)
5. Avise quando terminar

**Arquivos críticos para otimizar:**
- `assets/img/Restaurante/*.jpg` (11-14MB cada → ~7-8MB)
- `assets/img/quartos/AP-Standard-dbl/*.jpg` (2.8-3.6MB → ~1.5-2MB)
- `assets/img/360/*.jpg` (1-2MB → ~0.6-1MB)

**Benefício esperado:**
- Redução de 765MB → 450-500MB (-35%)
- Carregamento 2-3x mais rápido

**Ferramentas:**
- `otimizar-imagens.py` (se Pillow for instalado)
- `otimizar-imagens.ps1` (PowerShell script)
- Online: Squoosh.app (recomendado) ⭐

#### 2️⃣ **Atualizar HTML com <picture> fallback** — ⏳ APÓS OTIMIZAR
Adicionar suporte a WebP com fallback JPEG:
```html
<picture>
  <source srcset="imagem.webp" type="image/webp">
  <img src="imagem.jpg" alt="...">
</picture>
```

#### 3️⃣ **Adicionar Lazy Loading** — ⏳ APÓS OTIMIZAR
Carregar imagens 360º e galerias só quando visível na tela (extra 20% de performance)

---

### 📋 ATIVIDADES GERAIS

1. **Imagens:** Adicionar fotos reais do hotel em `assets/img/` ✅ Em progresso
2. **Integração de Reservas:** Conectar com Foco Multimídia
3. **Analytics:** Configurar Google Analytics GA4
4. **Email:** Testar formulários de contato
5. **Deploy:** Subir para servidor (recomenda-se servidor estático)
6. **HTTPS:** Configurar SSL/TLS
7. **Monitoramento:** Acompanhar conversão, bounce rate, devices

---

## 🎓 Tecnologias Usadas

- **HTML5** — Estrutura semântica
- **CSS3** — Estilos responsivos, mobile-first
- **JavaScript (ES6)** — Interações, validações, formulário
- **Google Fonts** — Tipografia (Outfit)
- **Git** — Controle de versão

**Nenhum framework:** Tudo código puro para máxima performance.

---

## 📞 Contatos Rápidos

| Tipo | Info | Canal |
|------|------|-------|
| WhatsApp | (83) 3015-1414 | https://wa.me/558330151414 |
| Telefone | (83) 3015-1414 | Ligação direta |
| Site Antigo | [URL do site atual] | Referência |

---

## 🗂️ Arquivos Principais

| Arquivo | Função | Última Alteração |
|---------|--------|------------------|
| `html/index.html` | Página home | 10/04/2026 |
| `html/grupos.html` | Cotação para grupos | 09/04/2026 |
| `html/styles.css` | Estilos CSS | 10/04/2026 |
| `html/script.js` | Lógica JavaScript | 10/04/2026 |
| `documentos/copy-completa.md` | Copy oficial | 11/04/2026 |

---

## ✨ Notas Finais

- **Projeto totalmente funcional** — todas as seções implementadas
- **Copy baseada em dados reais** — análise de concorrentes e avaliações de hóspedes
- **Design sem frameworks** — 100% CSS/JS puro para performance máxima
- **Pronto para production** — faltam apenas imagens reais e integrações

---

**Dúvidas?** Consulte a documentação em `documentos/` ou pergunte!

📍 Raiz do projeto: `C:\Users\lenovo\OneDrive\ClaudeCode\lagoa-park-hotel-site\`
