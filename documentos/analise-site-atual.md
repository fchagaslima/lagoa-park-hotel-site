# Lagoa Park Hotel — Análise Completa do Site
> Documento gerado por varredura automatizada em 08/04/2026
> URL base: https://www.lagoaparkhotel.com.br/
> ⚠️ **Atenção:** O motor de reservas foi alterado. O site atual usa Omnibees, mas o novo site utilizará a **Foco Multimídia**.

---

## 1. VISÃO GERAL DO PROJETO

| Campo | Informação |
|---|---|
| **Nome do Hotel** | Lagoa Park Hotel |
| **Slogan** | Conforto e praticidade no centro de João Pessoa |
| **Proposta de valor** | Hospedagem acessível, ambiente seguro e localização estratégica para quem viaja a trabalho ou quer explorar a cidade. |
| **Público-alvo** | Viajantes a trabalho e turistas que buscam praticidade e economia em João Pessoa |
| **Localização** | Parque Sólon de Lucena, 19 - Centro, João Pessoa - PB, CEP 58013-131 |
| **Coordenadas GPS** | Lat: -7.1199157 / Long: -34.8817816 |

---

## 2. ESTRUTURA DE NAVEGAÇÃO (SITEMAP)

```
lagoaparkhotel.com.br/
├── /                                   → Home
├── /index.php/quartos/                 → Quartos
├── /index.php/localizacao/             → Como Chegar (Localização)
├── /index.php/atracoes/                → Atrações Turísticas
├── /#duvidas                           → Dúvidas Frequentes (âncora na Home)
├── /index.php/blog/                    → Blog
└── /index.php/contato/                 → Contato
```

### Menu Principal (Header)
| Item | URL | Observação |
|---|---|---|
| Home | `/` | |
| Quartos | `/index.php/quartos/` | |
| Localização | `/index.php/localizacao/` | |
| Atrações | `/index.php/atracoes/` | |
| Dúvidas Frequentemente | `/#duvidas` | Âncora na Home |
| Blog | `/index.php/blog/` | |
| Contato | `/index.php/contato/` | |
| **Reservar** *(CTA destaque)* | Omnibees externo | Botão verde no header |

### Footer — Links Rápidos
- Nossos Quartos
- Como Chegar
- Faça sua reserva
- Blog
- Instagram
- Facebook

---

## 3. TECNOLOGIAS DO SITE ATUAL

| Tecnologia | Detalhes |
|---|---|
| **CMS** | WordPress |
| **Page Builder** | Elementor Pro v3.34.2 |
| **Tema** | Hello Elementor |
| **Motor de Reservas** | Omnibees — código do hotel: `q=2866` |
| **Mapa** | Leaflet.js + OpenStreetMap |
| **Widget WhatsApp** | Plugin premium (flutuante) |
| **Avaliações** | Trustindex (integração Google Reviews) |
| **Cache/Performance** | WP Rocket (prefetch de links) |
| **Servidor** | Apache/2.4.66 (Debian) |

---

## 4. PÁGINAS — CONTEÚDO DETALHADO

---

### 4.1 HOME (`/`)

#### Hero Section
- **Título H1:** Lagoa Park Hotel
- **Subtítulo:** Conforto e praticidade no centro de João Pessoa
- **Descrição:** Hospedagem acessível, ambiente seguro e localização estratégica para quem viaja a trabalho ou quer explorar a cidade.
- **Fundo:** Foto aérea da cidade de João Pessoa / hotel

#### Formulário de Reserva (Hero)
| Campo | Tipo | Opções |
|---|---|---|
| Check-in | Date picker | dd/mm/aaaa |
| Check-out | Date picker | dd/mm/aaaa |
| Adultos | Select | 0 a 10 |
| Crianças | Select | 0 a 2 (com campos de idade condicionais) |
| Quartos | Select | 0 a 5 |
| Cupom desconto | Texto livre | — |
| **Reservar agora** | Submit | Redireciona ao Omnibees |

> **Lógica de redirecionamento:** O formulário monta a URL do Omnibees dinamicamente:
> `https://book.omnibees.com/hotelresults?q=2866&lang=pt&currencyId=BRL&CheckIn={data}&CheckOut={data}&ad={adultos}&ch={criancas}&NRooms={quartos}&Code={cupom}`

#### Seção: Diferenciais ("Tudo para seu conforto")
| Ícone | Título | Descrição |
|---|---|---|
| 📍 | Localização central | Perto de tudo que importa: Lagoa, comércio, bancos e principais vias da cidade. |
| 📶 | Wi-Fi gratuito | Internet rápida para trabalhar, estudar ou se manter conectado. |
| 🛏️ | Conforto acessível | Quartos simples, limpos e funcionais, com excelente custo-benefício. |
| 🕐 | Atendimento 24h | Recepção preparada para te atender em qualquer horário. |
| 🔒 | Ambiente seguro | Hotel tranquilo e com fácil acesso aos pontos turísticos. |

#### Seção: Preview de Quartos
Exibe 3 cards resumidos: Individual, Duplo/Casal, Triplo — com botão "Reservar" em cada card.

#### Seção: Nossos Serviços
- ☕ Café da manhã incluso
- 📶 Wi-Fi grátis em todos os ambientes
- 🕐 Recepção 24 horas
- ❄️ Quartos com ar-condicionado
- 📺 TV e frigobar
- 🛏️ Roupa de cama e banho

#### Seção: Texto Institucional
> "O Lagoa Park Hotel é a escolha ideal para quem busca praticidade e economia em João Pessoa. Estamos localizados no coração da cidade, próximos a mercados, farmácias, restaurantes e dos principais pontos turísticos. Aqui você encontra quartos confortáveis, atendimento acolhedor e tudo o que precisa para uma estadia tranquila, seja para negócios, lazer ou viagens rápidas. Perto de tudo que você precisa — estamos a poucos minutos da Lagoa, do Centro Histórico, das avenidas principais e a menos de 15 minutos das praias mais famosas de João Pessoa."

#### Seção: Mapa Interativo
- Biblioteca: Leaflet.js
- Tile provider: OpenStreetMap
- Coordenadas: `-7.1199157, -34.8817816`
- Zoom inicial: 16
- Marcador: Imagem do logo do hotel

#### Seção: Avaliações Google
Exibição via **Trustindex** (widget de avaliações Google).

**Avaliações coletadas:**
| Autor | Data | Nota resumida |
|---|---|---|
| aldaircostaoficial | 28/11/2025 | "A pousada é muito legal, o funcionário da parte do dia é muito gente boa..." |
| Jefferson Silva | 24/11/2025 | "Me hospedei lá e não tenho o que reclamar, estava tudo limpo e bem arrumado, e os funcionários foram muito atenciosos e simpáticos." |
| Matheus Vitor | 16/11/2025 | "Ótimo lugar, e um atendimento excelente do Samuel!" |
| Ívina Sanches | 16/11/2025 | "Um hotel que acolhe 🥰 Gratidão a todos: Sr. Francisco, Samuel, Fagner, Bárbara, Vitória, Guia e Aline. Já sei onde ficar quando voltar!!" |

#### Seção: CTA de reserva
Botão: "Reservar hospedagem no centro"

---

### 4.2 QUARTOS (`/index.php/quartos/`)

**Título:** Quartos confortáveis com ótimo custo-benefício
**Subtítulo:** Escolha entre nossas opções de acomodação, projetadas para oferecer praticidade, conforto e tranquilidade durante sua estadia em João Pessoa.

#### Quarto Individual
| Atributo | Valor |
|---|---|
| **Descrição** | Opção econômica e funcional para quem precisa de praticidade no dia a dia. |
| **Configuração de camas** | 1 Cama Casal |
| **Capacidade** | 1 Hóspede |
| **Banheiros** | 1 |
| **Área** | 21m² |
| **Política** | Não fumante |
| **Tensão** | 220v |

**Comodidades:**
- Ar-condicionado
- Frigobar (desligado; disponível para uso do hóspede)
- Telefone
- TV — canal aberto
- Mesa de trabalho
- Arara de roupas

---

#### Quarto Casal ou Duplo
| Atributo | Valor |
|---|---|
| **Descrição** | Ambiente confortável com cama de casal, ideal para viagens a dois ou para quem busca mais privacidade. |
| **Configuração de camas** | 1 Cama Casal OU 1 Cama Casal + Solteiro |
| **Capacidade** | 2 Hóspedes |
| **Banheiros** | 1 |
| **Área** | 21m² |
| **Política** | Não fumante |
| **Tensão** | 220v |

**Comodidades:** (mesmas do Individual)
- Ar-condicionado, Frigobar, Telefone, TV canal aberto, Mesa de trabalho, Arara de roupas

---

#### Quarto Triplo
| Atributo | Valor |
|---|---|
| **Descrição** | Perfeito para grupos pequenos ou famílias que desejam economizar sem abrir mão da comodidade. |
| **Configuração de camas** | 3 Camas Solteiro OU 1 Cama Casal + Solteiro |
| **Capacidade** | 2+ Hóspedes (máx. 3 adultos) |
| **Banheiros** | 1 |
| **Área** | 21m² |
| **Política** | Não fumante |
| **Tensão** | 220v |

**Comodidades:** (mesmas do Individual)
- Ar-condicionado, Frigobar, Telefone, TV canal aberto, Mesa de trabalho, Arara de roupas

---

### 4.3 LOCALIZAÇÃO (`/index.php/localizacao/`)

**Título da página:** Como chegar
**Título da seção:** Localização privilegiada no centro de João Pessoa
**Descrição:** Nosso hotel está em uma das áreas mais estratégicas da cidade. Perto de comércio, serviços essenciais e dos principais pontos turísticos, você chega rapidamente a qualquer lugar.

#### Botões de Navegação
- 🚗 Uber
- 📍 Waze
- 🗺️ Google Maps

#### Distâncias e Referências
| Destino | Tempo estimado |
|---|---|
| Aeroporto Internacional de João Pessoa | 20 minutos |
| Rodoviária | 10 minutos |
| Lagoa (Parque Sólon de Lucena) | 5 minutos |
| Centro Histórico | 10 minutos |
| Praia de Tambaú | 15 minutos |
| Mercados, padarias, restaurantes e bancos | Proximidade imediata |
| Transporte público | Fácil acesso |

#### Mapa
- Mesmo mapa interativo Leaflet da Home
- Coordenadas: `-7.1199157, -34.8817816`

#### CTA
> "Planeje sua viagem e hospede no centro de João Pessoa" → **Reservar agora**

---

### 4.4 ATRAÇÕES (`/index.php/atracoes/`)

**Título:** Atrações Turísticas de João Pessoa
**Subtítulo:** Conheça os principais pontos turísticos da cidade mais verde do Brasil. Praias paradisíacas, história rica e pôr do sol inesquecível esperam por você.

#### Atrações Listadas

| # | Atração | Descrição |
|---|---|---|
| 1 | **Parque da Lagoa (Parque Solon de Lucena)** | Localizado no coração da cidade, é um dos símbolos de João Pessoa. Ideal para caminhadas, fotos e momentos de descanso ao ar livre. A poucos minutos do hotel. |
| 2 | **Jacaré – Pôr do Sol ao som do saxofone** | Famoso espetáculo no bairro do Jacaré ao som de "Bolero de Ravel". Um dos mais famosos da Paraíba. |
| 3 | **Centro Histórico de João Pessoa** | Casarões coloniais, igrejas centenárias. Inclui Hotel Globo, Igreja de São Francisco e Praça Antenor Navarro. |
| 4 | **Praia de Tambaú** | Uma das mais famosas de João Pessoa. Orla movimentada, calçadão iluminado, restaurantes e quiosques. |
| 5 | **Farol do Cabo Branco** | No Ponta do Seixas — o ponto mais oriental das Américas. Vista privilegiada e área de preservação. |
| 6 | **Feirinha de Tambaú** | Artesanato, comidas típicas e música regional. Ponto tradicional para lembranças da Paraíba. |
| 7 | **Estação Cabo Branco** | Projetada por Oscar Niemeyer. Exposições, eventos e vista panorâmica da cidade. |

---

### 4.5 FAQ / DÚVIDAS FREQUENTES (âncora `#duvidas` na Home)

#### Reservas

**P: Preciso pagar a minha reserva antecipado?**
R: Será necessário efetuar depósito do valor referente à primeira diária para que a reserva seja confirmada.

**P: Se eu desistir, terei o meu dinheiro de volta?**
R: Todas as reservas podem ser canceladas com reembolso total quando o cancelamento é efetuado até 7 dias da data da reserva (direito assegurado pelo CDC).

**P: Minha reserva é somente para uma diária. Terei de pagar antecipado o valor total?**
R: O valor mínimo de pagamento antecipado é o valor de uma diária. Então, neste caso, sim.

**P: Como faço para cancelar minha reserva?**
R: Enviar e-mail para `reservas@lagoaparkhotel.com.br` com os dados da reserva.

**P: Posso dar entrada mais cedo ou sair mais tarde sem cobrança extra?**
R: Dependendo do horário e disponibilidade, é possível. Deve ser consultado com antecedência com a recepção.

**P: Vou chegar de madrugada. Reservo para o mesmo dia?**
R: As diárias iniciam às 14h. Chegando de madrugada, a reserva deve ser feita para o dia anterior.

**P: Posso escolher o quarto que vou me hospedar?**
R: O hotel busca atender os pedidos, mas não pode garantir um quarto exato — depende de disponibilidade.

**P: Posso receber visitas no quarto?**
R: Não é permitido visitas nos apartamentos. Visitas podem usar a recepção.

**P: Irei viajar com crianças. Qual a recomendação?**
R: Somente menores acompanhados dos pais. Obrigatória apresentação de documentação. Se não estiver com os pais, o acompanhante precisa de autorização com cópia dos documentos dos pais.

#### Apartamentos

**P: Somos quatro adultos, posso colocar um colchão no chão?**
R: Não permitido. O apartamento comporta confortavelmente 3 adultos. Criança que durma na cama dos pais é aceita com taxa extra.

**P: O hotel é barulhento?**
R: Em dias úteis, durante o dia tem barulho do trânsito. A partir das 19h é muito tranquilo.

**P: Tem quartos de frente para a lagoa?**
R: Sim, com vista linda, mas mais barulhentos durante o dia. Os apartamentos dos fundos são mais tranquilos.

**P: Os banheiros têm secador de cabelos?**
R: Não.

**P: O frigobar é abastecido?**
R: O frigobar fica desligado por economia de energia, mas está disponível para uso do hóspede.

#### Estacionamento

**P: O hotel tem garagem?**
R: Não. Localização em esquina movimentada; só parada para embarque/desembarque.

**P: Quando posso estacionar em frente ao hotel?**
R:
- Dias úteis: a partir das 19h até 5h do dia seguinte
- Sábados: a partir das 17h
- Domingos e feriados: dia todo liberado
- O recepcionista pode retirar o veículo pela manhã e levar à calçada seguinte (onde é permitido estacionar).

---

### 4.6 BLOG (`/index.php/blog/`)

**Título:** Blog Lagoa Park Hotel
**Subtítulo:** Tudo sobre o Centro Histórico, eventos corporativos e os melhores passeios de João Pessoa com o olhar de quem conhece a cidade.

**Posts publicados:**
1. **Roteiro João Pessoa: O que fazer em 3 dias (Praia, História e Pôr do Sol)**
   - Trecho: "João Pessoa é a cidade onde o sol nasce primeiro, mas para aproveitar cada raio de sol, você precisa de estratégia..."

---

### 4.7 CONTATO (`/index.php/contato/`)

**Título:** Entre em contato
**Subtítulo:** Estamos prontos para tirar dúvidas, confirmar disponibilidade e ajudar você com sua reserva.

#### Dados de Contato
| Canal | Dados |
|---|---|
| Telefone | (83) 3015-1414 |
| WhatsApp | (83) 3015-1414 |
| E-mail geral | contato@lagoaparkhotel.com.br |
| E-mail reservas | reservas@lagoaparkhotel.com.br |
| Endereço completo | Parque Sólon de Lucena, 19 - Centro, João Pessoa - PB, CEP 58013-131 |

#### Formulário de Contato
Campos: Nome, E-mail, Assunto, Mensagem
> Canal direto com a gerência para atenção especial a reservas.

---

## 5. IDENTIDADE VISUAL

| Elemento | Valor aproximado |
|---|---|
| **Cor primária (teal)** | `#4DBFB0` — botões CTA, ícones, destaques, links ativos |
| **Cor secundária (azul escuro)** | `#1A2E4A` — títulos, textos principais, logo |
| **Cor de fundo** | `#FFFFFF` — branco padrão |
| **Cor de fundo secundária** | `#F5F5F5` — seções alternadas |
| **Tipografia** | Sans-serif moderna, limpa |
| **Estilo visual** | Minimalista, corporativo-acolhedor, cores claras com accent teal |
| **Logo** | Ícone quadrado estilizado + texto "LAGOA / PARK HOTEL" |
| **Botão CTA** | Fundo teal, texto branco, sem borda, cantos levemente arredondados |

---

## 6. INTEGRAÇÕES E CANAIS EXTERNOS

| Integração | Detalhes |
|---|---|
| **Motor de Reservas** | Omnibees — `https://book.omnibees.com/hotelresults?q=2866` |
| **WhatsApp** | (83) 3015-1414 — widget flutuante fixo no canto inferior direito |
| **Google Reviews** | Via Trustindex (widget de avaliações) |
| **Instagram** | Link no footer (URL não capturada) |
| **Facebook** | Link no footer (URL não capturada) |
| **Mapa** | OpenStreetMap via Leaflet.js |
| **Waze** | Link na página de Localização |
| **Google Maps** | Link na página de Localização |
| **Uber** | Link na página de Localização |

---

## 7. ARQUITETURA DE COMPONENTES (para Claude Code)

```
COMPONENTES GLOBAIS
├── Header
│   ├── Logo (imagem + texto)
│   ├── Nav (menu horizontal)
│   └── Botão CTA "Reservar" (teal)
│
├── Footer
│   ├── Bloco de Contato (telefone, email, endereço)
│   ├── Links Rápidos (nav secundário)
│   └── Redes Sociais + Copyright
│
└── WhatsAppWidget (botão flutuante fixo)

PÁGINAS
├── HomePage
│   ├── HeroSection (fundo foto aérea + FormulárioReserva)
│   ├── DiferenciaisSection (5 cards de features)
│   ├── QuartosPreviewSection (3 cards)
│   ├── ServicosSection (lista de amenidades)
│   ├── SobreSection (texto + mapa)
│   ├── AvaliacoesSection (carousel Google Reviews)
│   └── FAQSection (accordion 3 categorias)
│
├── QuartosPage
│   ├── HeroSection
│   └── QuartosGrid (3 cards detalhados com comodidades)
│
├── LocalizacaoPage
│   ├── HeroSection
│   ├── BotoesNavegacao (Uber/Waze/Maps)
│   ├── DistanciasGrid (7 itens com ícones)
│   ├── MapaInterativo
│   └── CTASection
│
├── AtacoesPage
│   ├── HeroSection
│   └── AtracoesList (7 cards com foto + texto)
│
├── BlogPage
│   ├── HeroSection
│   └── PostsGrid
│
└── ContatoPage
    ├── InfoContato (cards: telefone, whatsapp, email, endereço)
    └── FormularioContato
```

---

## 8. REGRAS DE NEGÓCIO IMPORTANTES

- **Check-in:** a partir das 14h
- **Chegada de madrugada:** reservar para o dia anterior
- **Cancelamento gratuito:** até 7 dias antes da entrada
- **Antecipação mínima:** valor de 1 diária para confirmar reserva
- **Capacidade máxima por quarto:** 3 adultos (sem colchão extra no chão)
- **Crianças:** apenas com documentação e acompanhadas dos pais ou com autorização
- **Visitas:** apenas na recepção, não nos quartos
- **Secador de cabelo:** não disponível
- **Frigobar:** presente em todos os quartos, desligado por padrão
- **Sem garagem própria** — estacionamento na rua com regras por horário/dia da semana

---

## 9. PONTOS DE MELHORIA OBSERVADOS (para o novo site)

- O site usa URLs com `/index.php/` — o novo projeto pode usar URLs limpas (`/quartos`, `/contato` etc.)
- Apenas 1 post no blog — estrutura de blog pode ser expandida
- Sem galeria de fotos explícita dos quartos (imagens não carregaram totalmente na varredura)
- FAQ está apenas na Home como âncora — poderia ser uma página própria
- Não há página de política de privacidade ou termos de uso identificada
- Redes sociais mencionadas no footer mas sem URLs capturadas
- Sistema de reservas é externo (Omnibees) — pode ser mantido ou integrado via iframe/widget

---

*Documento gerado automaticamente por varredura do site lagoaparkhotel.com.br em 08/04/2026.*
