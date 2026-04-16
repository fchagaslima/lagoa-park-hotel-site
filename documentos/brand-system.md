# Lagoa Park Hotel — Brand System
> Documento de referência de marca para desenvolvimento do site.  
> Versão 1.0 · João Pessoa, PB · 2025

---

## Índice

1. [Sobre o Hotel](#1-sobre-o-hotel)
2. [Posicionamento Estratégico](#2-posicionamento-estratégico)
3. [Público-Alvo](#3-público-alvo)
4. [Personalidade da Marca](#4-personalidade-da-marca)
5. [Identidade Visual](#5-identidade-visual)
6. [Tipografia](#6-tipografia)
7. [Tom de Voz](#7-tom-de-voz)
8. [Símbolo e Logo](#8-símbolo-e-logo)
9. [Aplicações Digitais](#9-aplicações-digitais)
10. [Diretrizes para o Site](#10-diretrizes-para-o-site)

---

## 1. Sobre o Hotel

| Campo | Informação |
|---|---|
| **Nome** | Lagoa Park Hotel |
| **Razão Social** | Lagoa Park Hotel Ltda |
| **Localização** | Centro, João Pessoa, Paraíba, Brasil |
| **Endereço de referência** | Frente à Lagoa do Parque Sólon de Lucena |
| **Número de UHs** | 38 apartamentos |
| **Categoria** | Hotel econômico urbano |
| **E-mail** | gerencia@lagoaparkhotel.com.br |
| **Contexto atual** | Em reforma · rebranding em andamento (2025) |

### Sobre a Localização

O hotel está posicionado em frente à **Lagoa do Parque Sólon de Lucena**, o principal cartão-postal de João Pessoa. O parque é caracterizado pelo espelho d'água central, palmeiras imperiais e boulevard ao redor — referência visual e cultural para toda a cidade.

Essa localização é o principal diferencial competitivo do hotel e deve aparecer com protagonismo em toda a comunicação digital.

---

## 2. Posicionamento Estratégico

### Conceito Central

> **Smart/Lifestyle** — Hotel econômico com design superior.  
> O hóspede deve sentir que fez uma escolha inteligente: preço justo em um ambiente pensado com cuidado.

### O que somos

- Hotel **contemporâneo**, **urbano** e **essencial**
- Localização privilegiada no centro histórico de João Pessoa
- Ambiente clean, minimalista, funcional
- Opção inteligente para quem viaja com critério

### O que não somos

- ❌ Hotel de luxo ou boutique sofisticado
- ❌ Hotel simples, básico ou sem personalidade
- ❌ Pousada ou hospedagem informal

### Três Palavras da Marca

```
CLAREZA · LOCALIZAÇÃO · CONFIANÇA
```

### Proposta de Valor

*"Você não está pagando menos. Está pagando certo."*

---

## 3. Público-Alvo

### Perfil Primário — Viajante Corporativo
- **Período:** Segunda a sexta-feira
- **Faixa etária:** 28–45 anos
- **Contexto:** Viagem a trabalho, frequentemente com hospedagem escolhida pela empresa
- **Prioridades:** Wi-Fi confiável, quarto limpo e bem-iluminado, localização central, check-in sem fricção
- **Comportamento digital:** Pesquisa em OTAs (Booking, Expedia), decide por avaliações e localização no mapa
- **Não prioriza:** Decoração elaborada, amenities extras, restaurante no hotel

### Perfil Secundário — Turista de Lazer
- **Período:** Fins de semana e feriados
- **Perfil:** Casais e famílias visitando João Pessoa
- **Contexto:** Turismo de lazer, base para passeios pela cidade e litoral
- **Prioridades:** Boa localização, custo-benefício, ambiente agradável
- **Comportamento digital:** Pesquisa no Google Maps, Instagram e Booking; fotos do ambiente influenciam a decisão

### Denominador Comum

Ambos os perfis tomam decisões de hospedagem com **critério**. Querem sentir que fizeram uma **escolha inteligente** — não necessariamente a mais barata, mas a mais acertada para o que precisam.

---

## 4. Personalidade da Marca

### Arquétipo

**O Explorador Urbano Eficiente** — Sabe o que quer, não desperdiça, aprecia quando as coisas funcionam bem e têm boa aparência sem esforço.

### Persona Humanizada

> Consultor, 34 anos. Voa toda semana. Tem o Nubank roxo e o Airpod branco.  
> Quando chega no hotel às 22h após uma reunião, quer: Wi-Fi rápido, quarto iluminado corretamente e cama arrumada.  
> Não quer espelhos dourados — quer espelho **bem posicionado**.  
> Não quer muito — quer **certo**.

### Referências de Marca (Posicionamento)

| Marca | O que referencia |
|---|---|
| **Hilton Hotels** | Clareza corporativa, tipografia forte, sem ornamento |
| **Nubank** | Modernidade acessível, design como diferencial não como luxo |
| **Airbnb** | Localização como protagonista da comunicação |

---

## 5. Identidade Visual

### Paleta de Cores

#### Cores Primárias

```css
/* Navy Profundo — cor estrutural e dominante */
--color-primary: #1B2F5E;

/* Off-White Arenoso — fundo e respiro */
--color-background: #F5F3EE;

/* Terracota Suave — acento cromático único */
--color-accent: #C0603A;
```

#### Cores de Suporte

```css
/* Texto principal */
--color-text: #2D3748;

/* Texto secundário / metadados */
--color-text-muted: #6B7280;

/* Bordas e divisores */
--color-border: #E5E7EB;

/* Fundo alternativo (cards, seções) */
--color-surface: #FAFAF8;

/* Branco puro (usar com moderação) */
--color-white: #FFFFFF;
```

#### Regra de Proporção

| Cor | Proporção | Uso |
|---|---|---|
| Navy `#1B2F5E` | ~60% | Estrutura, headers, textos de destaque |
| Off-white `#F5F3EE` | ~30% | Fundos, respiro, espaços negativos |
| Terracota `#C0603A` | ~10% | CTAs, destaques pontuais, hover states |

> ⚠️ **Regra de ouro:** O navy domina — o off-white respira — o terracota pontua.  
> Nunca usar as três cores em proporção igual.

#### Cores Proibidas

```
❌ Verde lima (qualquer tom de #7CB518 e similares)
❌ Teal / ciano (qualquer tom de #00B4D8 e similares)
❌ Dourado brilhante / metálico
❌ Tons neon ou saturados
```

### Dark Mode / Versão Escura

Quando necessário (cards escuros, hero sections, footer):

```css
/* Versão invertida */
--color-dark-bg: #1B2F5E;       /* navy como fundo */
--color-dark-text: #F5F3EE;     /* off-white como texto */
--color-dark-accent: #C0603A;   /* terracota mantém */
```

---

## 6. Tipografia

### Família Principal

**Recomendação:** `Outfit` (Google Fonts — open source)  
**Alternativas aceitáveis:** `DM Sans` · `Plus Jakarta Sans`

```html
<!-- Google Fonts import -->
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600&display=swap" rel="stylesheet">
```

```css
font-family: 'Outfit', sans-serif;
```

### Escala Tipográfica

```css
/* Display — hero, títulos principais */
--text-display: 3.5rem;      /* 56px */
font-weight: 600;
letter-spacing: -0.02em;

/* H1 — títulos de seção */
--text-h1: 2.5rem;           /* 40px */
font-weight: 600;

/* H2 — subtítulos */
--text-h2: 1.75rem;          /* 28px */
font-weight: 500;

/* H3 — cards, itens */
--text-h3: 1.25rem;          /* 20px */
font-weight: 500;

/* Body Large — texto principal */
--text-body-lg: 1.125rem;    /* 18px */
font-weight: 400;
line-height: 1.7;

/* Body — texto corrido */
--text-body: 1rem;           /* 16px */
font-weight: 400;
line-height: 1.6;

/* Small — metadados, labels, captions */
--text-small: 0.875rem;      /* 14px */
font-weight: 400;
letter-spacing: 0.02em;

/* Label — tags, badges, navegação */
--text-label: 0.75rem;       /* 12px */
font-weight: 500;
letter-spacing: 0.08em;
text-transform: uppercase;
```

### Regras Tipográficas

- Nunca usar bold (`font-weight: 700+`) no nome completo do hotel — usar `500` ou `600`
- Subtítulos e taglines sempre em `Light (300)` com `letter-spacing` ampliado
- Labels e categorias em `uppercase` com `tracking` generoso
- Evitar itálico em textos longos

---

## 7. Tom de Voz

### Princípio

**Direto, acolhedor, sem exageros.** Fala como cidade: objetivo e hospitaleiro ao mesmo tempo.

### Características

| Característica | Sim | Não |
|---|---|---|
| **Clareza** | Frases curtas, diretas | Rodeios, jargões |
| **Calor** | Próximo, humano | Frio, corporativo demais |
| **Confiança** | Afirmativo, sem exagero | Promessas vazias |
| **Localidade** | Referências a João Pessoa | Genérico, poderia ser qualquer cidade |

### Exemplos de Tom

✅ **Correto:**
> "No centro de João Pessoa, a 30 metros da Lagoa Sólon de Lucena."

> "Tudo que você precisa. Nada que você não pediu."

> "Wi-Fi 200 Mbps. Check-in às 14h. Estacionamento conveniado."

❌ **Evitar:**
> "Sua casa longe de casa." *(clichê)*

> "Experiência única de hospedagem premium." *(promete luxo)*

> "Conforto e bem-estar para toda a família." *(genérico)*

### Palavras-Chave da Marca

```
Usar: contemporâneo · urbano · essencial · funcional · central · inteligente · limpo · eficiente

Evitar: luxo · premium · exclusivo · sofisticado · requintado · simples · básico · popular
```

---

## 8. Símbolo e Logo

### Conceito do Símbolo

O símbolo abstrai o **espelho d'água da Lagoa Sólon de Lucena**.  
Referência: dualidade reflexo/superfície — equilíbrio, calma e profundidade sem ornamentação.

**Construção:** Geometria com simetria horizontal. A linha d'água como elemento estrutural. Forma que se "reflete" sobre um eixo central.

### Restrições Técnicas

- Funcional em **monocromia** (bordado, carimbo, gravação)
- Legível em **16px** (favicon) e em **30cm** (fachada)
- Máximo **2 elementos visuais** na composição
- Proporção símbolo/tipografia: símbolo ocupa **30–40%** da área total

### Versões do Logo

| Versão | Uso |
|---|---|
| **Horizontal** | Header do site, papelaria, fachada |
| **Vertical / Empilhado** | Posts quadrados, key cards |
| **Símbolo isolado** | Favicon, bordado, app icon |
| **Monocromático navy** | Fundos claros |
| **Monocromático off-white** | Fundos escuros (navy) |

### O que Evitar no Símbolo

- ❌ Ondas literais ou gotas d'água
- ❌ Silhuetas de palmeira
- ❌ Gradientes ou efeitos 3D
- ❌ Mais de 2 elementos visuais

---

## 9. Aplicações Digitais

### Favicon

Usar exclusivamente o **símbolo isolado** em navy sobre fundo off-white.  
Formato: `.ico` (16×16, 32×32) + `.png` (180×180 para Apple Touch Icon).

### Open Graph / Social Preview

```
Dimensões: 1200×630px
Fundo: Navy #1B2F5E
Logo: versão off-white centralizada ou no canto superior esquerdo
Texto: off-white, fonte Outfit
Acento: terracota apenas em elemento de destaque
```

### Imagens do Hotel

- Tratamento fotográfico deve ser coerente com a paleta: tons frios suaves, sem saturação excessiva
- Luz natural valorizada — claridade e limpeza visual
- Evitar filtros quentes demais (contradiz o off-white da paleta) ou frios demais (contradiz o terracota)
- A Lagoa Sólon de Lucena deve aparecer em destaque nas fotos externas

### Ícones

- Estilo: **line icons**, traço fino, sem preenchimento sólido
- Peso: 1.5–2px de stroke
- Biblioteca recomendada: Lucide Icons ou Phosphor Icons
- Cor: navy para fundo claro · off-white para fundo escuro · terracota para destaque

---

## 10. Diretrizes para o Site

### Princípio de Design

> O minimalismo aqui não é ausência de design — é **disciplina**.  
> Cada elemento deve ter função. Cada seção deve respirar.

### Espaçamento

```css
/* Sistema de espaçamento baseado em 8px */
--space-xs:  8px
--space-sm:  16px
--space-md:  24px
--space-lg:  40px
--space-xl:  64px
--space-2xl: 96px
--space-3xl: 128px
```

### Regra dos Espaços Negativos

A área de proteção ao redor do logo deve ser equivalente à altura da letra "L" do nome em todos os lados. Nunca comprimir o logo contra bordas ou outros elementos.

Aplicar o mesmo princípio em seções do site: **generosidade de espaço = percepção de qualidade**.

### Estrutura de Páginas

> Arquitetura completa, wireframes e interações em `documentos/estrutura-site.md`.

### Componentes Prioritários

```
Header fixo com logo + CTA de reserva sempre visível
Hero com foto de alta qualidade e overlay navy suave
Cards de apartamentos com hover suave (sem efeito excessivo)
Botão CTA principal: fundo terracota, texto off-white
Botão secundário: borda navy, texto navy, fundo transparente
Footer: fundo navy, texto off-white, acento terracota nos links hover
```

### Botões

```css
/* CTA Principal — reserva */
.btn-primary {
  background-color: #C0603A;  /* terracota */
  color: #F5F3EE;             /* off-white */
  font-family: 'Outfit', sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 14px 28px;
  border-radius: 4px;         /* mínimo — não arredondar demais */
  border: none;
}

/* CTA Secundário */
.btn-secondary {
  background-color: transparent;
  color: #1B2F5E;             /* navy */
  border: 1.5px solid #1B2F5E;
  /* demais propriedades iguais ao primary */
}

/* Versão invertida (sobre fundo navy) */
.btn-outline-light {
  background-color: transparent;
  color: #F5F3EE;
  border: 1.5px solid #F5F3EE;
}
```

### Animações e Transições

- **Filosofia:** suaves e funcionais — nunca chamar atenção para si mesmas
- `transition: all 0.2s ease` para hovers
- Fade-in suave ao rolar a página (`opacity: 0` → `opacity: 1`, `transform: translateY(12px)` → `translateY(0)`)
- Evitar: parallax pesado, animações de entrada chamativas, carrosséis com autoplay agressivo

### Performance e SEO

- Imagens em formato **WebP** com fallback JPEG
- Lazy loading em todas as imagens fora do viewport inicial
- Fonte carregada via Google Fonts com `display=swap`
- Meta tags com foco em: "hotel centro João Pessoa", "hotel frente à Lagoa Sólon de Lucena", "hotel João Pessoa centro"
- Schema.org do tipo `Hotel` e `LodgingBusiness`

### Responsividade

- **Mobile-first** — a maior parte das buscas em OTAs e Google Hotel Ads vem de mobile
- Breakpoints:
  ```
  sm: 640px
  md: 768px
  lg: 1024px
  xl: 1280px
  ```
- CTA de reserva sempre acessível em mobile — considerar botão fixo no rodapé em telas pequenas

---

## Referências Visuais de Posicionamento

| Marca | O que observar |
|---|---|
| **Hilton.com** | Clareza de hierarquia, força tipográfica, ausência de ornamento |
| **citizenM Hotels** | Modernidade acessível, linguagem direta, design como diferencial |
| **Ibis Style** | Econômico com personalidade — mostra que preço e design coexistem |

---

## Histórico de KPIs (para contexto de negócio)

> Dados reais do hotel — úteis para decisões de UX e sazonalidade no site.

| Mês | Receita Bruta | Ocupação | ADR |
|---|---|---|---|
| Dez/24 | R$ 138k | 32,77% | R$ 241 |
| Jan/25 | R$ 218k | 38,62% | R$ 349 |
| Fev/25 | R$ 103k | 36,94% | R$ 161 |
| Mar/25 | R$ 145k | 29,03% | R$ 302 |
| Abr/25 | R$ 116k | 39,91% | R$ 181 |
| Mai/25 | R$ 104k | 36,08% | R$ 135 |
| Jun/25 | R$ 114k | 33,51% | R$ 154 |
| Jul/25 | R$ 137k | 36,08% | R$ 193 |
| Ago/25 | R$ 128k | 38,62% | R$ 165 |
| Set/25 | R$ 185k | 42,63% | R$ 262 |
| Out/25 | R$ 214k | 44,57% | R$ 272 |
| Nov/25 | R$ 168k | 59,04% | R$ 167 |
| Dez/25 | R$ 194k | 68,08% | R$ 159 |
| Jan/26 | R$ 294k | 26,74% | R$ 703 |
| Fev/26 | R$ 149k | 41,07% | R$ 334 |

> **Nota para desenvolvimento:** Jan/26 teve ADR de R$ 703 com baixa ocupação — indicativo de evento/temporada especial. Considerar comunicação de disponibilidade em tempo real no site.

---

*Documento gerado para uso interno no projeto de desenvolvimento do site do Lagoa Park Hotel.*  
*Versão 1.0 · 2025 · Confidencial*
