# Lagoa Park Hotel — Estrutura do Site
> Documento de arquitetura: páginas, seções e interações
> Versão 1.0 · 08/04/2026

---

## MODELO: HÍBRIDO
- **Home:** one-page com âncoras de navegação
- **Páginas próprias:** Quartos · Atrações · FAQ · Grupos · Blog · Contato

---

## SITEMAP

```
lagoaparkhotel.com.br/
├── /                    → Home (one-page)
│   ├── #inicio          → Hero + Formulário de reserva
│   ├── #diferenciais    → Por que o Lagoa Park
│   ├── #quartos         → Preview das acomodações
│   ├── #localizacao     → Mapa + entorno
│   ├── #avaliacoes      → Reviews de hóspedes
│   └── #reservar        → CTA final
│
├── /quartos             → Acomodações (detalhe completo)
├── /atracoes            → Atrações turísticas de João Pessoa
├── /faq                 → Dúvidas frequentes
├── /grupos              → Cotação para grupos e eventos
├── /blog                → Blog do hotel
└── /contato             → Contato e formulário
```

---

## COMPONENTES GLOBAIS

Esses elementos aparecem em TODAS as páginas.

### HEADER (fixo — sempre visível ao rolar)

```
[ Logo ]    [ Home · Quartos · Atrações · FAQ · Blog · Contato ]    [ WhatsApp ]  [ RESERVAR → ]
```

**Comportamento:**
- Fixo no topo da tela (position: sticky)
- Em mobile: logo + ícone de menu hambúrguer + botão RESERVAR
- Menu mobile: abre gaveta lateral (drawer) da direita
- Botão RESERVAR: abre motor de reservas Foco Multimídia em nova aba
- Ao rolar mais de 80px: header ganha sombra suave para separar do conteúdo

---

### FOOTER

```
[ Logo ]
[ Endereço completo ]          [ Links rápidos ]        [ Redes sociais ]
[ Telefone · WhatsApp · Email ]
[ © 2026 Lagoa Park Hotel · Política de Privacidade ]
```

**Links rápidos no footer:**
- Quartos
- Como Chegar
- Atrações
- Dúvidas Frequentes
- Blog
- Contato
- Reservar (Foco Multimídia)

---

### WIDGET WHATSAPP

- Botão flutuante fixo no canto inferior direito
- Visível em todas as páginas
- Abre conversa no WhatsApp com mensagem pré-preenchida:
  `"Olá! Gostaria de informações sobre hospedagem no Lagoa Park Hotel."`

---

## HOME — SEÇÕES DETALHADAS

---

### SEÇÃO 1 — HERO `#inicio`

**Objetivo:** Capturar atenção e direcionar para reserva em menos de 3 segundos.

```
┌─────────────────────────────────────────────────────┐
│  [FOTO: fachada do hotel ou vista da Lagoa]         │
│  [overlay navy suave]                               │
│                                                     │
│  HEADLINE PRINCIPAL                                 │
│  Subtítulo de apoio                                 │
│                                                     │
│  ┌─────────────────────────────────────────────┐   │
│  │  Check-in  │  Check-out  │  Hóspedes  │ →  │   │
│  └─────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────┘
```

**Conteúdo:**
- Foto de fundo: hero fullscreen (100vh)
- Headline: definida na etapa de copy
- Subtítulo: definido na etapa de copy
- Formulário de reserva inline com campos: Check-in · Check-out · Adultos · Quartos
- Botão do formulário: redireciona ao motor de reservas da Foco Multimídia em nova aba

**Interações:**
- Formulário: campos de data abrem datepicker nativo
- Botão: valida se datas estão preenchidas antes de redirecionar
- Em mobile: formulário empilha verticalmente (campos um abaixo do outro)

---

### SEÇÃO 2 — DIFERENCIAIS `#diferenciais`

**Objetivo:** Responder "por que aqui?" com argumentos objetivos.

```
┌─────────────────────────────────────────────────────┐
│              TÍTULO DA SEÇÃO                        │
│                                                     │
│  [ ícone ]      [ ícone ]      [ ícone ]            │
│  Diferencial 1  Diferencial 2  Diferencial 3        │
│  Descrição      Descrição      Descrição            │
│                                                     │
│  [ ícone ]      [ ícone ]                           │
│  Diferencial 4  Diferencial 5                       │
│  Descrição      Descrição                           │
└─────────────────────────────────────────────────────┘
```

**Conteúdo:**
- 5 diferenciais com ícone (line-style), título curto e descrição de 1 linha
- Conteúdo definido na etapa de copy

**Interações:**
- Estático — sem interação
- Animação: cards entram com fade-in suave ao aparecer na tela (scroll reveal)

---

### SEÇÃO 3 — PREVIEW DE QUARTOS `#quartos`

**Objetivo:** Apresentar as categorias e conduzir para a página de Quartos.

```
┌─────────────────────────────────────────────────────┐
│              TÍTULO DA SEÇÃO                        │
│                                                     │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐          │
│  │  [foto]  │  │  [foto]  │  │  [foto]  │          │
│  │          │  │          │  │          │          │
│  │ Individual│  │  Casal   │  │  Triplo  │          │
│  │ 1 hóspede│  │2 hóspedes│  │3 hóspedes│          │
│  │ [RESERVAR]│  │[RESERVAR]│  │[RESERVAR]│          │
│  └──────────┘  └──────────┘  └──────────┘          │
│                                                     │
│              [ Ver todos os quartos → ]             │
└─────────────────────────────────────────────────────┘
```

**Conteúdo de cada card:**
- Foto do quarto
- Nome da categoria
- Capacidade de hóspedes
- 2 a 3 comodidades principais (ícone + texto)
- Botão RESERVAR → abre motor de reservas Foco Multimídia em nova aba

**Interações:**
- Card: hover eleva levemente (translateY -4px, sombra suave)
- Botão RESERVAR: abre motor de reservas Foco Multimídia em nova aba
- Link "Ver todos os quartos": navega para `/quartos`
- Em mobile: cards empilham em coluna única com scroll vertical

---

### SEÇÃO 4 — LOCALIZAÇÃO `#localizacao`

**Objetivo:** Mostrar que a localização é um diferencial real, não um detalhe.

```
DESKTOP
┌─────────────────────────────────────────────────────┐
│  TÍTULO DA SEÇÃO                                    │
│                                                     │
│  ┌─────────────────────┐  ┌─────────────────────┐  │
│  │                     │  │ Aeroporto   20 min   │  │
│  │   [MAPA INTERATIVO] │  │ Rodoviária  10 min   │  │
│  │                     │  │ Lagoa        5 min   │  │
│  │                     │  │ Tambaú      15 min   │  │
│  │                     │  │ Centro Hist 10 min   │  │
│  └─────────────────────┘  └─────────────────────┘  │
│                                                     │
│                  [ Google Maps ]                    │
└─────────────────────────────────────────────────────┘

MOBILE (apenas)
┌─────────────────────────────────────────────────────┐
│  [MAPA INTERATIVO — largura total]                  │
│                                                     │
│  Aeroporto   20 min                                 │
│  Rodoviária  10 min  ...                            │
│                                                     │
│   [ 🚗 Uber ]   [ 🔵 Waze ]   [ 🗺 Google Maps ]   │
└─────────────────────────────────────────────────────┘
```

**Conteúdo:**
- Mapa interativo: Leaflet.js + OpenStreetMap
- Coordenadas: -7.1199157, -34.8817816
- Marcador: logo do hotel
- Zoom inicial: 16
- Lista de distâncias em minutos

**Botões de navegação:**

| Botão       | Visível em       |
| ----------- | ---------------- |
| Google Maps | Desktop + Mobile |
| Waze        | Somente Mobile   |
| Uber        | Somente Mobile   |

**Links:**

- **Google Maps:** `https://maps.google.com/?q=-7.1199157,-34.8817816`
- **Waze:** `https://waze.com/ul?ll=-7.1199157,-34.8817816`
- **Uber:** `https://m.uber.com/ul/?action=setPickup&client_id=Fw0uh3oyw_6K9hSqYWdXlm2D-NnGg7D_&pickup=my_location&dropoff[latitude]=-7.1199157&dropoff[longitude]=-34.8817816&dropoff[nickname]=Lagoa%20Park%20Hotel&dropoff[formatted_address]=Parque%20S%C3%B3lon%20de%20Lucena%2C%2019%20-%20Centro%2C%20Jo%C3%A3o%20Pessoa%20-%20PB%2C%2058013-131%2C%20Brasil`

**Interações:**
- Mapa: scroll para zoom, arrastar para mover
- Botões Waze e Uber: visíveis apenas em mobile (`display: none` no desktop, `display: flex` abaixo de 640px)
- Google Maps: visível em todas as telas
- Em mobile: mapa ocupa largura total, lista de distâncias e botões ficam abaixo

---

### SEÇÃO 5 — AVALIAÇÕES `#avaliacoes`

**Objetivo:** Construir confiança com prova social real antes da decisão de reserva.

```
┌─────────────────────────────────────────────────────┐
│              TÍTULO DA SEÇÃO                        │
│         Nota: ★★★★★  X.X/10 — Fonte               │
│                                                     │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐          │
│  │ "Texto   │  │ "Texto   │  │ "Texto   │          │
│  │  do      │  │  do      │  │  do      │          │
│  │  review" │  │  review" │  │  review" │          │
│  │          │  │          │  │          │          │
│  │ — Nome   │  │ — Nome   │  │ — Nome   │          │
│  │   Data   │  │   Data   │  │   Data   │          │
│  └──────────┘  └──────────┘  └──────────┘          │
└─────────────────────────────────────────────────────┘
```

**Conteúdo:**
- Nota geral do Google (atualizada manualmente ou via widget)
- Mínimo 3 depoimentos reais com nome e data
- Fonte identificada (Google, Booking, etc.)

**Interações:**
- Em mobile: cards em carrossel horizontal com swipe
- Em desktop: cards lado a lado estáticos
- Animação: fade-in ao entrar na tela

---

### SEÇÃO 6 — CTA FINAL `#reservar`

**Objetivo:** Converter quem chegou até o fim da página sem ter reservado ainda.

```
┌─────────────────────────────────────────────────────┐
│  [fundo navy]                                       │
│                                                     │
│           HEADLINE DE FECHAMENTO                    │
│           Subtítulo de apoio                        │
│                                                     │
│              [ RESERVAR AGORA → ]                   │
│                                                     │
│    (83) 3015-1414  ·  WhatsApp  ·  reservas@...     │
└─────────────────────────────────────────────────────┘
```

**Conteúdo:**
- Fundo: navy (#1B2F5E)
- Textos: off-white
- Botão RESERVAR: terracota (#C0603A)
- Canais alternativos: telefone · WhatsApp · e-mail

---

## PÁGINA: QUARTOS `/quartos`

**Objetivo:** Detalhar cada categoria de acomodação e converter para reserva.

```
┌─────────────────────────────────────────────────────┐
│  HERO DA PÁGINA (foto + título)                     │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│  QUARTO INDIVIDUAL                                  │
│  ┌─────────────┐  Nome · Capacidade · Área          │
│  │             │  Descrição                         │
│  │  [galeria]  │  ✓ Comodidade 1                    │
│  │             │  ✓ Comodidade 2                    │
│  │             │  ✓ Comodidade 3 ...                │
│  └─────────────┘  [ RESERVAR → ]                   │
└─────────────────────────────────────────────────────┘

(repetir para Casal/Duplo e Triplo)
```

**Interações:**
- Galeria de fotos: clique abre lightbox (foto em tela cheia)
- Lightbox: navegação por setas · fechar com ESC ou clique fora
- Botão RESERVAR: abre motor de reservas Foco Multimídia em nova aba
- Em mobile: foto no topo, detalhes abaixo (layout em coluna)

---

## PÁGINA: ATRAÇÕES `/atracoes`

**Objetivo:** Mostrar o entorno de João Pessoa e reforçar a localização do hotel.

```
┌─────────────────────────────────────────────────────┐
│  HERO DA PÁGINA (foto de João Pessoa + título)      │
└─────────────────────────────────────────────────────┘

┌──────────┐  ┌──────────┐  ┌──────────┐
│  [foto]  │  │  [foto]  │  │  [foto]  │
│ Lagoa    │  │ Jacaré   │  │ Tambaú   │
│ Descrição│  │ Descrição│  │ Descrição│
└──────────┘  └──────────┘  └──────────┘

(grid de 7 atrações — 3 por linha no desktop, 1 por linha no mobile)
```

**Interações:**
- Cards: hover revela overlay com descrição completa
- Em mobile: cards em coluna, descrição sempre visível

---

## PÁGINA: FAQ `/faq`

**Objetivo:** Responder as dúvidas que impedem a reserva e reduzir o volume de contatos repetitivos.

```
┌─────────────────────────────────────────────────────┐
│  HERO DA PÁGINA (título + subtítulo)                │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│  GRUPO 1 — Reservas                                 │
│  ▶  Pergunta 1                                      │
│  ─────────────────────────────────────────────────  │
│  ▶  Pergunta 2 ...                                  │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│  GRUPO 2 — Apartamentos                             │
│  ▶  Pergunta 1 ...                                  │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│  GRUPO 3 — Estacionamento                           │
│  ▶  Pergunta 1 ...                                  │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│  GRUPO 4 — Check-in e Check-out                     │
│  ▶  Pergunta 1 ...                                  │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│  Ainda com dúvidas? → [ Falar pelo WhatsApp ]       │
└─────────────────────────────────────────────────────┘
```

**Organização dos grupos:**

1. **Reservas** — cancelamento, antecipação, cupom, reembolso
2. **Apartamentos** — quarto de frente, barulho, frigobar, secador, capacidade
3. **Estacionamento** — regras por dia e horário, apoio da recepção
4. **Check-in e Check-out** — horários, chegada de madrugada, saída antecipada

**Interações:**

- Accordion: clique na pergunta abre/fecha a resposta com animação suave
- Múltiplas respostas podem ficar abertas simultaneamente (diferente do accordion da home)
- Ícone rotaciona 90° ao abrir (▶ vira ▼)
- Âncoras por grupo: `/faq#reservas`, `/faq#apartamentos`, `/faq#estacionamento`, `/faq#checkin`
- Botão final: abre WhatsApp com mensagem pré-preenchida

---

## PÁGINA: GRUPOS `/grupos`

**Objetivo:** Capturar solicitações de cotação para grupos, eventos corporativos e reservas coletivas.

```
┌─────────────────────────────────────────────────────┐
│  HERO DA PÁGINA (título + subtítulo)                │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│  FORMULÁRIO DE COTAÇÃO (Kommo/amoCRM)               │
│  Script externo — carregado via tag <script>        │
│  ID do formulário: 1678696                          │
└─────────────────────────────────────────────────────┘
```

**Conteúdo:**
- Hero com título e subtítulo definidos na etapa de copy
- Formulário gerenciado externamente pela plataforma Kommo
- O script é carregado de forma assíncrona (`async`) — não impacta a performance da página

**Interações:**
- Formulário inteiramente controlado pelo Kommo — sem lógica própria no site
- Após envio: comportamento definido pela configuração do formulário no Kommo

**Nota técnica:**
```html
<!-- Scripts do formulário Kommo — inserir antes do </body> -->
<script>!function(a,m,o,c,r,m){a[o+c]=a[o+c]||{setMeta:function(p){this.params=(this.params||[]).concat([p])}},a[o+r]=a[o+r]||function(f){a[o+r].f=(a[o+r].f||[]).concat([f])},a[o+r]({id:"1678696",hash:"e4747e77d6aedd294d2c6d9e401cdad5",locale:"pt"}),a[o+m]=a[o+m]||function(f,k){a[o+m].f=(a[o+m].f||[]).concat([[f,k]])}}(window,0,"amo_forms_","params","load","loaded");</script>
<script id="amoforms_script_1678696" async="async" charset="utf-8" src="https://forms.kommo.com/forms/assets/js/amoforms.js?1775764539"></script>
```

---

## PÁGINA: BLOG `/blog`

**Objetivo:** SEO e conteúdo sobre João Pessoa para atrair visitantes orgânicos.

```
┌─────────────────────────────────────────────────────┐
│  HERO DA PÁGINA (título + subtítulo)                │
└─────────────────────────────────────────────────────┘

┌──────────────────────┐  ┌──────────────────────┐
│  [imagem do post]    │  │  [imagem do post]    │
│  Categoria           │  │  Categoria           │
│  Título do post      │  │  Título do post      │
│  Trecho              │  │  Trecho              │
│  Data · [ Ler → ]   │  │  Data · [ Ler → ]   │
└──────────────────────┘  └──────────────────────┘
```

**Interações:**
- Cards em grid (2 colunas no desktop, 1 no mobile)
- Clique no card ou em "Ler →" abre o post completo

> **Nota:** Posts individuais serão páginas dinâmicas (`/blog/nome-do-post`). Estrutura interna definida quando o primeiro post for criado.

---

## PÁGINA: CONTATO `/contato`

**Objetivo:** Centralizar todos os canais e capturar mensagens diretas.

```
┌─────────────────────────────────────────────────────┐
│  HERO DA PÁGINA (título + subtítulo)                │
└─────────────────────────────────────────────────────┘

┌──────────────────────────┐  ┌────────────────────────┐
│  DADOS DE CONTATO        │  │  FORMULÁRIO            │
│                          │  │                        │
│  📞 (83) 3015-1414       │  │  Nome                  │
│  💬 WhatsApp             │  │  E-mail                │
│  ✉ contato@...           │  │  Assunto               │
│  ✉ reservas@...          │  │  Mensagem              │
│  📍 Endereço completo    │  │  [ ENVIAR → ]          │
│                          │  │                        │
└──────────────────────────┘  └────────────────────────┘

┌─────────────────────────────────────────────────────┐
│  MAPA INTERATIVO (igual ao da Home)                 │
└─────────────────────────────────────────────────────┘
```

**Interações:**
- Formulário: validação dos campos antes do envio (nome, e-mail, mensagem obrigatórios)
- Após envio: mensagem de confirmação inline (sem recarregar a página)
- Telefone e WhatsApp: clicáveis (tel: e wa.me/)
- E-mail: clicável (mailto:)

---

## FLUXO DE RESERVA

```
Visitante chega ao site
        │
        ▼
Vê hero + formulário
        │
   Preenche datas?
   ┌────┴────┐
  Sim       Não
   │         │
   ▼         ▼
Clica     Continua
RESERVAR  navegando
   │         │
   ▼         ▼
Foco Multimídia  Vê quartos → RESERVAR → Foco Multimídia
(nova aba)                         (nova aba)
```

**Canais alternativos de conversão:**
- WhatsApp (widget flutuante) → conversa direta
- Telefone (header + footer + contato) → ligação
- Formulário de contato → e-mail para gerência

---

## RESPONSIVIDADE — BREAKPOINTS

| Breakpoint | Largura | Comportamento principal |
|---|---|---|
| Mobile | < 640px | Coluna única · menu gaveta · formulário empilhado |
| Tablet | 640px–1024px | 2 colunas · menu completo reduzido |
| Desktop | > 1024px | Layout completo conforme wireframes acima |

---

## PRÓXIMAS ETAPAS

- [ ] **Copy** — textos de todas as seções (headlines, subtítulos, diferenciais, FAQ, CTAs)
- [ ] **Design** — identidade visual aplicada à estrutura (cores, tipografia, espaçamento)
- [ ] **Código** — HTML + Tailwind CSS + HTMX

---

*Documento interno — Projeto: lagoa-park-hotel-site*
*Versão 1.0 · 08/04/2026*
