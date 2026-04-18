# Catálogo de Imagens — Lagoa Park Hotel
> Referência completa de todas as imagens do site  
> Versão 1.0 · 16 de abril de 2026

---

## Como usar este documento

Este catálogo é a **fonte da verdade** para todas as imagens do site.  
Antes de colocar qualquer imagem no HTML, consulte aqui o nome correto e o tamanho esperado.

**Legenda de status:**
| Ícone | Significado |
|-------|-------------|
| ✅ | Imagem existente, no lugar certo, nome correto |
| 🔄 | Imagem existe mas precisa ser renomeada/movida |
| 📐 | Imagem existe mas precisa ser redimensionada |
| ⏳ | Ainda não fotografada — pendente |
| ❌ | Não existe — criar ou providenciar |

---

## Convenção de Nomenclatura

**Regras para nomes de arquivo:**
- Letras minúsculas
- Palavras separadas por hífen
- Sem espaços, acentos ou caracteres especiais
- Formato final: **WebP** (com fallback JPG)
- Exemplo: `hero-lagoa-fachada.jpg`

---

## Tamanhos de Referência Rápida

| Tipo de imagem | Desktop | Mobile | Proporção |
|----------------|---------|--------|-----------|
| Hero (fullscreen) | 1920 × 960 px | 768 × 960 px | 2:1 (desktop) / 4:5 (mobile) |
| Hero subpágina | 1920 × 560 px | 768 × 560 px | ~3:1 |
| Card de quarto (home) | 800 × 533 px | 400 × 267 px | 3:2 |
| Card de quarto (página) | 900 × 600 px | 400 × 267 px | 3:2 |
| Foto galeria quarto | 1200 × 900 px | 600 × 450 px | 4:3 |
| Card de atração | 800 × 533 px | 400 × 267 px | 3:2 |
| Card de blog | 800 × 450 px | 400 × 225 px | 16:9 |
| Open Graph (redes sociais) | 1200 × 630 px | — | ~2:1 |
| Foto 360° (equirretangular) | 1920 × 1080 px (mínimo) | — | 2:1 |

---

---

# PARTE 1 — IMAGENS GLOBAIS

> Usadas em todas as páginas do site (header, footer, favicon, redes sociais).

---

## 1.1 — Logo e Identidade

| # | Nome do arquivo | Caminho | Desktop | Mobile | Status |
|---|----------------|---------|---------|--------|--------|
| 1 | `logo-horizontal-invertido.jpg` | `assets/img/logo/` | 280 × 70 px | 160 × 40 px | 🔄 Existe como `LogoHorizontalInvertido.jpg` |
| 2 | `logo-horizontal-navy.png` | `assets/img/logo/` | 280 × 70 px | 160 × 40 px | ⏳ Pendente |
| 3 | `logo-vertical.png` | `assets/img/logo/` | 200 × 240 px | 120 × 144 px | 🔄 Existe como `Vertical.png` |
| 4 | `logo-simbolo.png` | `assets/img/logo/` | 80 × 80 px | 48 × 48 px | 🔄 Existe como `Invertivo.png` (verificar versão navy) |
| 5 | `favicon.ico` | `assets/img/logo/` | 32 × 32 px | — | ❌ Não existe |
| 6 | `apple-touch-icon.png` | `assets/img/logo/` | 180 × 180 px | — | ❌ Não existe |

**Nota:** O HTML já referencia `assets/img/logo/favicon.ico` e `assets/img/logo/apple-touch-icon.png` — esses arquivos precisam ser criados.

---

## 1.2 — Open Graph / Redes Sociais

> Imagem que aparece quando o link do site é compartilhado no WhatsApp, Facebook, LinkedIn.

| # | Nome do arquivo | Caminho | Tamanho | Status |
|---|----------------|---------|---------|--------|
| 7 | `og-image.jpg` | `assets/img/` | 1200 × 630 px | ⏳ Pendente |

**Conteúdo sugerido:** Foto da Lagoa Sólon de Lucena com as palmeiras + logo do hotel sobreposto.  
**Referência técnica:** Fundo navy (#1B2F5E) com logo em off-white, ou foto real da Lagoa com logo.

---

---

# PARTE 2 — HOME (index.html)

> Página principal. Seções: Hero · Diferenciais · Quartos · Localização · Avaliações · CTA Final.

---

## 2.1 — Hero (Seção #inicio)

> Foto fullscreen que preenche toda a tela na abertura do site. É a imagem mais importante do site.

| # | Nome do arquivo | Caminho | Desktop | Mobile | Status |
|---|----------------|---------|---------|--------|--------|
| 8 | `hero-lagoa-fachada.jpg` | `assets/img/home/` | 1920 × 960 px | 768 × 960 px | ⏳ Pendente (usar FOTO HERO-01 do briefing) |

**O que deve mostrar:** Vista da Lagoa Sólon de Lucena com as palmeiras imperiais e, se possível, a fachada do hotel visível. Idealmente drone ou ângulo elevado.  
**Horário ideal para fotografar:** 7h–9h (luz dourada) ou 16h–17h30.  
**Arquivo atual em uso:** `atracoes/1920x560-parquedalagoa02.jpg` — funciona como temporário, mas não é o ideal.

---

## 2.2 — Carrossel do Hero (slides adicionais)

> O hero atual tem 3 slides. Cada slide é uma foto diferente.

| # | Nome do arquivo | Caminho | Desktop | Mobile | Status |
|---|----------------|---------|---------|--------|--------|
| 9 | `hero-slide-01-lagoa.jpg` | `assets/img/home/` | 1920 × 960 px | 768 × 960 px | 🔄 Usar `atracoes/1920x560-parquedalagoa02.jpg` (renomear) |
| 10 | `hero-slide-02-centro-historico.jpg` | `assets/img/home/` | 1920 × 960 px | 768 × 960 px | 🔄 Usar `atracoes/1920x960-centrohistorico01.jpg` (renomear) |
| 11 | `hero-slide-03-recepcao.jpg` | `assets/img/home/` | 1920 × 960 px | 768 × 960 px | 🔄 Usar `atracoes/1920x560-recepcao01.jpg` (renomear) |

---

## 2.3 — Preview de Quartos (Seção #quartos)

> 3 cards de quartos com foto, nome, capacidade e botão de reserva.

| # | Nome do arquivo | Caminho | Desktop | Mobile | Status |
|---|----------------|---------|---------|--------|--------|
| 12 | `card-quarto-economico.jpg` | `assets/img/home/` | 800 × 533 px | 400 × 267 px | 🔄 Usar `quartos/AP-economico/_MG_9809-01.jpeg` (redimensionar) |
| 13 | `card-quarto-standard.jpg` | `assets/img/home/` | 800 × 533 px | 400 × 267 px | 🔄 Usar `quartos/AP-Standard-dbl/_MG_9869-01.jpeg` (redimensionar) |
| 14 | `card-quarto-confort.jpg` | `assets/img/home/` | 800 × 533 px | 400 × 267 px | ⏳ Pendente — usar melhor foto de `quartos/AP confort/` |

---

---

# PARTE 3 — PÁGINA QUARTOS (/quartos)

> Detalhe completo de cada categoria de acomodação com galeria de fotos, comodidades e botão de reserva.

**Categorias de quartos existentes:**
1. Econômico (casal/individual)
2. Standard (casal/individual)
3. Standard Duplo (cama dupla)
4. Confort Studio

---

## 3.1 — Hero da Página Quartos

| # | Nome do arquivo | Caminho | Desktop | Mobile | Status |
|---|----------------|---------|---------|--------|--------|
| 15 | `hero-quartos.jpg` | `assets/img/quartos/` | 1920 × 560 px | 768 × 560 px | ⏳ Pendente |

**Sugestão:** Foto de um quarto bem iluminado com vista ou detalhe elegante da cama arrumada.

---

## 3.2 — AP Econômico

> Quarto simples, 1–2 hóspedes, sem frigobar.  
> Fotos disponíveis: `quartos/AP-economico/` (4 fotos profissionais _MG_)

| # | Nome do arquivo | Caminho | Desktop | Mobile | Status |
|---|----------------|---------|---------|--------|--------|
| 16 | `economico-thumb.jpg` | `assets/img/quartos/economico/` | 800 × 533 px | 400 × 267 px | 🔄 Renomear `_MG_9809-01.jpeg` |
| 17 | `economico-01-quarto.jpg` | `assets/img/quartos/economico/` | 1200 × 900 px | 600 × 450 px | 🔄 Renomear `_MG_9809-01.jpeg` |
| 18 | `economico-02-cama.jpg` | `assets/img/quartos/economico/` | 1200 × 900 px | 600 × 450 px | 🔄 Renomear `_MG_9811-01.jpeg` |
| 19 | `economico-03-banheiro.jpg` | `assets/img/quartos/economico/` | 1200 × 900 px | 600 × 450 px | 🔄 Renomear `_MG_9816-01.jpeg` |
| 20 | `economico-04-detalhe.jpg` | `assets/img/quartos/economico/` | 1200 × 900 px | 600 × 450 px | 🔄 Renomear `_MG_9827-01.jpeg` |

---

## 3.3 — AP Standard (Casal/Individual)

> Quarto com frigobar, 1–2 hóspedes.  
> Fotos disponíveis: `quartos/AP standard/`

| # | Nome do arquivo | Caminho | Desktop | Mobile | Status |
|---|----------------|---------|---------|--------|--------|
| 21 | `standard-thumb.jpg` | `assets/img/quartos/standard/` | 800 × 533 px | 400 × 267 px | 🔄 Usar `ApSuperior01.jpg` ou `0600x400 - apsuperior02.jpg` |
| 22 | `standard-01-quarto.jpg` | `assets/img/quartos/standard/` | 1200 × 900 px | 600 × 450 px | 🔄 Renomear `1920x960 - apsuperior01.jpg` |
| 23 | `standard-02-ambiente.jpg` | `assets/img/quartos/standard/` | 1200 × 900 px | 600 × 450 px | 🔄 Renomear `1920x960 - apsuperior02.jpg` |
| 24 | `standard-03-vista.jpg` | `assets/img/quartos/standard/` | 1200 × 900 px | 600 × 450 px | 🔄 Renomear `1920x960 - apsuperior03.jpg` |
| 25 | `standard-04-banheiro.jpg` | `assets/img/quartos/standard/` | 900 × 1200 px | 400 × 533 px | 🔄 Renomear `0388x480 - apsuperiorbanheiro01.jpg` |

---

## 3.4 — AP Standard Duplo (Duas camas)

> Quarto com duas camas de solteiro, 2–3 hóspedes.  
> Fotos disponíveis: `quartos/AP-Standard-dbl/`

| # | Nome do arquivo | Caminho | Desktop | Mobile | Status |
|---|----------------|---------|---------|--------|--------|
| 26 | `standard-dbl-thumb.jpg` | `assets/img/quartos/standard-dbl/` | 800 × 533 px | 400 × 267 px | 🔄 Renomear `_MG_9869-01.jpeg` |
| 27 | `standard-dbl-01-quarto.jpg` | `assets/img/quartos/standard-dbl/` | 1200 × 900 px | 600 × 450 px | 🔄 Renomear `_MG_9869-01.jpeg` |
| 28 | `standard-dbl-02-camas.jpg` | `assets/img/quartos/standard-dbl/` | 1200 × 900 px | 600 × 450 px | 🔄 Renomear `20210115_135255.jpg` (avaliar qualidade) |
| 29 | `standard-dbl-03-detalhe.jpg` | `assets/img/quartos/standard-dbl/` | 1200 × 900 px | 600 × 450 px | 🔄 Renomear `20210115_135306.jpg` (avaliar qualidade) |
| 30 | `standard-dbl-04-banheiro.jpg` | `assets/img/quartos/standard-dbl/` | 900 × 1200 px | 400 × 533 px | 🔄 Renomear `0388x480 - apsuperiorbanheiro02.jpeg` |

---

## 3.5 — AP Confort Studio

> Quarto reformado com poltrona, mesa de trabalho e mini copa.  
> Fotos disponíveis: `quartos/AP confort/` (17 fotos de 02/04/2025)

| # | Nome do arquivo | Caminho | Desktop | Mobile | Status |
|---|----------------|---------|---------|--------|--------|
| 31 | `confort-thumb.jpg` | `assets/img/quartos/confort/` | 800 × 533 px | 400 × 267 px | 📐 Selecionar melhor foto de `AP confort/` e redimensionar |
| 32 | `confort-01-quarto.jpg` | `assets/img/quartos/confort/` | 1200 × 900 px | 600 × 450 px | 📐 Selecionar de `AP confort/` (ex: `20250402_123949.jpg`) |
| 33 | `confort-02-poltrona.jpg` | `assets/img/quartos/confort/` | 1200 × 900 px | 600 × 450 px | 📐 Selecionar foto com poltrona visível |
| 34 | `confort-03-mesa-trabalho.jpg` | `assets/img/quartos/confort/` | 1200 × 900 px | 600 × 450 px | 📐 Selecionar foto com mesa de trabalho visível |
| 35 | `confort-04-banheiro.jpg` | `assets/img/quartos/confort/` | 900 × 1200 px | 400 × 533 px | ⏳ Pendente — não há foto do banheiro do confort |
| 36 | `confort-05-mini-copa.jpg` | `assets/img/quartos/confort/` | 1200 × 900 px | 600 × 450 px | ⏳ Pendente — não há foto da mini copa |

**Nota:** As 17 fotos de `AP confort/` precisam ser avaliadas uma a uma para identificar quais mostram os diferenciais do quarto (poltrona, mesa de trabalho, mini copa, micro-ondas).

---

---

# PARTE 4 — PÁGINA ATRAÇÕES (/atracoes)

> Grid com 8 atrações principais + centro histórico + praias + passeios.  
> Todas as fotos desta seção dependem da sessão fotográfica (ver `briefing-fotografico-atracoes.md`).

---

## 4.1 — Hero da Página Atrações

| # | Nome do arquivo | Caminho | Desktop | Mobile | Status |
|---|----------------|---------|---------|--------|--------|
| 37 | `hero-atracoes.jpg` | `assets/img/atracoes/` | 1920 × 560 px | 768 × 560 px | ⏳ Pendente (FOTO HERO-01 do briefing) |

**Conteúdo:** Vista panorâmica de João Pessoa — Lagoa Sólon de Lucena em primeiro plano, centro histórico e oceano ao fundo. Idealmente drone.

---

## 4.2 — Cards das 8 Atrações Principais

| # | Nome do arquivo | Caminho | Desktop | Mobile | Código do briefing | Status |
|---|----------------|---------|---------|--------|--------------------|--------|
| 38 | `atracao-01-lagoa-solon.jpg` | `assets/img/atracoes/` | 800 × 533 px | 400 × 267 px | ATRACAO-01 | 🔄 Existe `0600x400 - parquedalagoa01.jpg` (renomear/manter) |
| 39 | `atracao-02-centro-historico.jpg` | `assets/img/atracoes/` | 800 × 533 px | 400 × 267 px | ATRACAO-02 | 🔄 Existe `0600x400 - centrohistorico01.jpg` (avaliar) |
| 40 | `atracao-03-praia-tambau.jpg` | `assets/img/atracoes/` | 800 × 533 px | 400 × 267 px | ATRACAO-03 | ⏳ Pendente (fotografar calçadão de Tambaú) |
| 41 | `atracao-04-mercado-artesanato.jpg` | `assets/img/atracoes/` | 800 × 533 px | 400 × 267 px | ATRACAO-04 | ⏳ Pendente (interior do MAP) |
| 42 | `atracao-05-praia-cabo-branco.jpg` | `assets/img/atracoes/` | 800 × 533 px | 400 × 267 px | ATRACAO-05 | ⏳ Pendente (falésias de arenito vermelho) |
| 43 | `atracao-06-ponta-seixas.jpg` | `assets/img/atracoes/` | 800 × 533 px | 400 × 267 px | ATRACAO-06 | ⏳ Pendente (marco mais oriental das Américas) |
| 44 | `atracao-07-por-do-sol-jacare.jpg` | `assets/img/atracoes/` | 800 × 533 px | 400 × 267 px | ATRACAO-07 | 🔄 Existe `0600x400 - praiadojacare01.jpg` (avaliar) |
| 45 | `atracao-08-fortaleza-santa-catarina.jpg` | `assets/img/atracoes/` | 800 × 533 px | 400 × 267 px | ATRACAO-08 | ⏳ Pendente (canhões e muralhas de Cabedelo) |

---

## 4.3 — Seção Lucena (extensão do roteiro Cabedelo)

| # | Nome do arquivo | Caminho | Desktop | Mobile | Código | Status |
|---|----------------|---------|---------|--------|--------|--------|
| 46 | `lucena-01-praia.jpg` | `assets/img/atracoes/` | 800 × 533 px | 400 × 267 px | LUCENA-01 | ⏳ Pendente |
| 47 | `lucena-02-igreja-guia.jpg` | `assets/img/atracoes/` | 800 × 533 px | 400 × 267 px | LUCENA-02 | ⏳ Pendente |
| 48 | `lucena-03-peixe-boi.jpg` | `assets/img/atracoes/` | 800 × 533 px | 400 × 267 px | LUCENA-03 | ⏳ Pendente (sujeito a autorização ICMBio) |

---

## 4.4 — Centro Histórico (seção detalhada)

| # | Nome do arquivo | Caminho | Desktop | Mobile | Código | Status |
|---|----------------|---------|---------|--------|--------|--------|
| 49 | `centro-01-lagoa-boulevard.jpg` | `assets/img/atracoes/` | 800 × 600 px | 400 × 300 px | CENTRO-01 | 🔄 Existe `0600x400 - parquedalagoa02.jpg` (renomear) |
| 50 | `centro-02-sao-francisco-azulejos.jpg` | `assets/img/atracoes/` | 800 × 600 px | 400 × 300 px | CENTRO-02 | ⏳ Pendente (azulejos do Centro Cultural) |
| 51 | `centro-03-catedral-basilica.jpg` | `assets/img/atracoes/` | 800 × 600 px | 400 × 300 px | CENTRO-03 | ⏳ Pendente |
| 52 | `centro-04-praca-antenor-navarro.jpg` | `assets/img/atracoes/` | 800 × 533 px | 400 × 267 px | CENTRO-04 | ⏳ Pendente (casarões coloridos) |
| 53 | `centro-05-casa-da-polvora.jpg` | `assets/img/atracoes/` | 800 × 600 px | 400 × 300 px | CENTRO-05 | 🔄 Existe `0600x400 - casadapolvora01.jpg` (renomear) |
| 54 | `centro-06-igreja-carmo.jpg` | `assets/img/atracoes/` | 800 × 600 px | 400 × 300 px | CENTRO-06 | 🔄 Existe `0600x400 - igrejadocarmo01.jpg` (renomear) |

---

## 4.5 — Museus (seção nova)

| # | Nome do arquivo | Caminho | Desktop | Mobile | Código | Status |
|---|----------------|---------|---------|--------|--------|--------|
| 55 | `museu-01-cidade-joao-pessoa.jpg` | `assets/img/atracoes/` | 800 × 600 px | 400 × 300 px | MUSEU-01 | ⏳ Pendente |
| 56 | `museu-02-historia-paraiba.jpg` | `assets/img/atracoes/` | 800 × 600 px | 400 × 300 px | MUSEU-02 | ⏳ Pendente (sala digital imersiva) |
| 57 | `museu-03-tre-pb.jpg` | `assets/img/atracoes/` | 800 × 600 px | 400 × 300 px | MUSEU-03 | ⏳ Pendente (fachada com azulejos) |

---

## 4.6 — Roteiro a Pé (ambiência)

| # | Nome do arquivo | Caminho | Desktop | Mobile | Código | Status |
|---|----------------|---------|---------|--------|--------|--------|
| 58 | `roteiro-01-saida-do-hotel.jpg` | `assets/img/atracoes/` | 1200 × 800 px | 600 × 400 px | ROTEIRO-01 | ⏳ Pendente |
| 59 | `roteiro-02-caminhada-paralelepipedo.jpg` | `assets/img/atracoes/` | 1200 × 675 px | 600 × 338 px | ROTEIRO-02 | ⏳ Pendente |
| 60 | `roteiro-03-detalhe-historico.jpg` | `assets/img/atracoes/` | 1200 × 800 px | 600 × 400 px | ROTEIRO-03 | ⏳ Pendente |

---

## 4.7 — Cards dos 7 Passeios

| # | Nome do arquivo | Caminho | Desktop | Mobile | Código | Status |
|---|----------------|---------|---------|--------|--------|--------|
| 61 | `passeio-01-costa-do-conde.jpg` | `assets/img/atracoes/` | 800 × 533 px | 400 × 267 px | PASSEIO-01 | ⏳ Pendente (Coqueirinho — piscinas naturais) |
| 62 | `passeio-02-litoral-norte.jpg` | `assets/img/atracoes/` | 800 × 533 px | 400 × 267 px | PASSEIO-02 | ⏳ Pendente (praia deserta com coqueiros) |
| 63 | `passeio-03-jacare-saxofone.jpg` | `assets/img/atracoes/` | 800 × 533 px | 400 × 267 px | PASSEIO-03 | 🔄 Existe `0600x400 - praiadojacare02 - JAMS.jpg` (avaliar) |
| 64 | `passeio-04-piscinas-seixas.jpg` | `assets/img/atracoes/` | 800 × 533 px | 400 × 267 px | PASSEIO-04 | ⏳ Pendente (câmera aquática) |
| 65 | `passeio-05-picaozinho.jpg` | `assets/img/atracoes/` | 800 × 533 px | 400 × 267 px | PASSEIO-05 | ⏳ Pendente (câmera aquática — peixinhos) |
| 66 | `passeio-06-ilha-areia-vermelha.jpg` | `assets/img/atracoes/` | 800 × 533 px | 400 × 267 px | PASSEIO-06 | ⏳ Pendente (drone obrigatório) |
| 67 | `passeio-07-city-tour-niemeyer.jpg` | `assets/img/atracoes/` | 800 × 533 px | 400 × 267 px | PASSEIO-07 | ⏳ Pendente (Estação Cabo Branco) |

---

## 4.8 — Cards das 15 Praias

| # | Nome do arquivo | Caminho | Desktop | Mobile | Código | Status |
|---|----------------|---------|---------|--------|--------|--------|
| 68 | `praia-01-manaira.jpg` | `assets/img/atracoes/` | 800 × 533 px | 400 × 267 px | PRAIA-01 | ⏳ Pendente |
| 69 | `praia-02-caribessa.jpg` | `assets/img/atracoes/` | 800 × 533 px | 400 × 267 px | PRAIA-02 | ⏳ Pendente (água verde-esmeralda) |
| 70 | `praia-03-camboinha.jpg` | `assets/img/atracoes/` | 800 × 533 px | 400 × 267 px | PRAIA-03 | ⏳ Pendente |
| 71 | `praia-04-ponta-campina.jpg` | `assets/img/atracoes/` | 800 × 533 px | 400 × 267 px | PRAIA-04 | ⏳ Pendente (kitesurf) |
| 72 | `praia-05-intermares.jpg` | `assets/img/atracoes/` | 800 × 533 px | 400 × 267 px | PRAIA-05 | ⏳ Pendente (surfe) |
| 73 | `praia-06-barra-gramame.jpg` | `assets/img/atracoes/` | 800 × 533 px | 400 × 267 px | PRAIA-06 | ⏳ Pendente (drone — encontro rio/mar) |
| 74 | `praia-07-jacuma-pedra-furada.jpg` | `assets/img/atracoes/` | 800 × 533 px | 400 × 267 px | PRAIA-07 | ⏳ Pendente (Pedra Furada) |
| 75 | `praia-08-tabatinga.jpg` | `assets/img/atracoes/` | 800 × 533 px | 400 × 267 px | PRAIA-08 | ⏳ Pendente (banho de argila) |
| 76 | `praia-09-coqueirinho.jpg` | `assets/img/atracoes/` | 800 × 533 px | 400 × 267 px | PRAIA-09 | ⏳ Pendente (drone — enseada completa) |
| 77 | `praia-10-tambaba.jpg` | `assets/img/atracoes/` | 800 × 533 px | 400 × 267 px | PRAIA-10 | ⏳ Pendente (falésias — sem pessoas nuas) |
| 78 | `praia-11-seixas.jpg` | `assets/img/atracoes/` | 800 × 533 px | 400 × 267 px | PRAIA-11 | ⏳ Pendente (Escadaria da Penha) |
| 79 | `praia-12-cabedelo.jpg` | `assets/img/atracoes/` | 800 × 533 px | 400 × 267 px | PRAIA-12 | ⏳ Pendente |
| 80 | `praia-13-formosa.jpg` | `assets/img/atracoes/` | 800 × 533 px | 400 × 267 px | PRAIA-13 | ⏳ Pendente |
| 81 | `praia-tambau-card.jpg` | `assets/img/atracoes/` | 800 × 533 px | 400 × 267 px | ATRACAO-03 | 🔄 Mesma que `atracao-03-praia-tambau.jpg` (reaproveitar) |
| 82 | `praia-cabo-branco-card.jpg` | `assets/img/atracoes/` | 800 × 533 px | 400 × 267 px | ATRACAO-05 | 🔄 Mesma que `atracao-05-praia-cabo-branco.jpg` (reaproveitar) |

---

## 4.9 — Marcos Icônicos na Orla

| # | Nome do arquivo | Caminho | Desktop | Mobile | Código | Status |
|---|----------------|---------|---------|--------|--------|--------|
| 83 | `orla-01-bulevar-tambau.jpg` | `assets/img/atracoes/` | 800 × 533 px | 400 × 267 px | ORLA-01 | 🔄 Existe `0600x400 - praiadobessa01.jpg` — verificar se é Tambaú ou Bessa |
| 84 | `orla-02-farol-cabo-branco.jpg` | `assets/img/atracoes/` | 800 × 533 px | 400 × 267 px | ORLA-02 | ⏳ Pendente |
| 85 | `orla-03-niemeyer.jpg` | `assets/img/atracoes/` | 800 × 533 px | 400 × 267 px | ORLA-03 | ⏳ Pendente |

---

---

# PARTE 5 — PÁGINA FAQ (/faq)

> Accordion de perguntas e respostas. Página sem galeria de fotos — apenas o hero.

---

## 5.1 — Hero da Página FAQ

| # | Nome do arquivo | Caminho | Desktop | Mobile | Status |
|---|----------------|---------|---------|--------|--------|
| 86 | `hero-faq.jpg` | `assets/img/faq/` | 1920 × 560 px | 768 × 560 px | ⏳ Pendente |

**Sugestão:** Foto da recepção do hotel — transmite confiança e atendimento.  
**Alternativa temporária:** Usar `Recepção/1920x960 - recepcao01.jpg` (recortar/redimensionar).

---

---

# PARTE 6 — PÁGINA GRUPOS (/grupos)

> Página com formulário Kommo para cotação de grupos. Apenas hero + texto.

---

## 6.1 — Hero da Página Grupos

| # | Nome do arquivo | Caminho | Desktop | Mobile | Status |
|---|----------------|---------|---------|--------|--------|
| 87 | `hero-grupos.jpg` | `assets/img/grupos/` | 1920 × 560 px | 768 × 560 px | ⏳ Pendente |

**Sugestão:** Foto da recepção ou área comum do hotel — passa profissionalismo para grupos corporativos.

---

---

# PARTE 7 — PÁGINA BLOG (/blog)

> Grid de cards de posts. Cada post tem uma imagem de destaque.

---

## 7.1 — Hero da Página Blog

| # | Nome do arquivo | Caminho | Desktop | Mobile | Status |
|---|----------------|---------|---------|--------|--------|
| 88 | `hero-blog.jpg` | `assets/img/blog/` | 1920 × 560 px | 768 × 560 px | ⏳ Pendente |

**Sugestão:** Vista de João Pessoa — Lagoa ou orla — representa o conteúdo do blog sobre a cidade.

---

## 7.2 — Imagens dos Posts do Blog

> Cada post terá sua própria imagem de destaque. O padrão abaixo se aplica a todos.

| # | Nome do arquivo | Caminho | Desktop | Mobile | Status |
|---|----------------|---------|---------|--------|--------|
| 89 | `post-[slug-do-post].jpg` | `assets/img/blog/` | 800 × 450 px | 400 × 225 px | ⏳ Definir ao criar cada post |

**Exemplo:** Post sobre o Centro Histórico → `post-centro-historico-joao-pessoa.jpg`  
**Nota:** Criar a pasta `assets/img/blog/` quando o primeiro post for escrito.

---

---

# PARTE 8 — PÁGINA CONTATO (/contato)

> Dados de contato + formulário + mapa interativo. Não tem galeria — apenas o hero.

---

## 8.1 — Hero da Página Contato

| # | Nome do arquivo | Caminho | Desktop | Mobile | Status |
|---|----------------|---------|---------|--------|--------|
| 90 | `hero-contato.jpg` | `assets/img/contato/` | 1920 × 560 px | 768 × 560 px | ⏳ Pendente |

**Sugestão:** Foto da fachada ou da entrada do hotel — orienta o visitante sobre onde fica o hotel.

---

---

# PARTE 9 — GALERIA 360° (galeria-360.html)

> Fotos equirretangulares tiradas com câmera Insta360 X3.  
> Visualizadas pelo Pannellum v2.5.6 instalado localmente.

**Todas as fotos ficam em:** `assets/img/360/`  
**Formato:** JPG equirretangular · 1920 × 1080 px · ~500KB–1MB por foto

| # | Nome do arquivo | Ambiente | Status |
|---|----------------|---------|--------|
| 91 | `01-fachada.jpg` | Fachada externa do hotel | ✅ |
| 92 | `02-recepcao-01.jpg` | Recepção — ângulo 1 | ✅ |
| 93 | `03-recepcao-02.jpg` | Recepção — ângulo 2 | ✅ |
| 94 | `04-recepcao-03.jpg` | Recepção — ângulo 3 | ✅ |
| 95 | `05-recepcao-04.jpg` | Recepção — ângulo 4 | ✅ |
| 96 | `06-restaurante-01.jpg` | Restaurante — visão geral | ⏳ |
| 97 | `07-restaurante-02.jpg` | Restaurante — ângulo 2 | ⏳ |
| 98 | `08-buffet-01.jpg` | Área do buffet do café da manhã | ⏳ |
| 99 | `09-ap-standard-duplo-01.jpg` | AP Standard — vista geral | ⏳ |
| 100 | `10-ap-standard-duplo-02.jpg` | AP Standard — ângulo 2 | ⏳ |
| 101 | `11-ap-standard-triplo.jpg` | AP Standard — configuração triplo | ⏳ |
| 102 | `12-ap-standard-banheiro.jpg` | AP Standard — banheiro | ⏳ |
| 103 | `13-ap-standard-dbl-duplo-01.jpg` | AP Standard DBL — vista geral | ⏳ |
| 104 | `14-ap-standard-dbl-duplo-02.jpg` | AP Standard DBL — ângulo 2 | ⏳ |
| 105 | `15-ap-standard-dbl-banheiro.jpg` | AP Standard DBL — banheiro | ⏳ |
| 106 | `16-ap-confort-duplo-01.jpg` | AP Confort — vista geral | ⏳ |
| 107 | `17-ap-confort-duplo-02.jpg` | AP Confort — ângulo 2 | ⏳ |
| 108 | `18-ap-confort-triplo.jpg` | AP Confort — configuração triplo | ⏳ |
| 109 | `19-ap-confort-banheiro.jpg` | AP Confort — banheiro | ⏳ |
| 110 | `20-ap-confort-dbl-duplo-01.jpg` | AP Confort DBL — vista geral | ⏳ |
| 111 | `21-ap-confort-dbl-duplo-02.jpg` | AP Confort DBL — ângulo 2 | ⏳ |
| 112 | `22-ap-confort-dbl-triplo.jpg` | AP Confort DBL — configuração triplo | ⏳ |
| 113 | `23-ap-confort-dbl-banheiro.jpg` | AP Confort DBL — banheiro | ⏳ |

**Status atual:** 5 de 23 prontas · 18 pendentes (câmera Insta360 X3).

---

---

# PARTE 10 — IMAGENS DO RESTAURANTE / CAFÉ DA MANHÃ

> Usadas na seção de diferenciais da Home, no blog e possivelmente na Galeria 360.

**Pasta atual:** `assets/img/Restaurante/` e `assets/img/café da manhã/`  
**Problema:** Nomes com data de câmera e pasta com acento — precisam ser reorganizados.

| # | Nome do arquivo | Caminho destino | Desktop | Mobile | Status |
|---|----------------|-----------------|---------|--------|--------|
| 114 | `restaurante-01-ambiente.jpg` | `assets/img/restaurante/` | 1200 × 800 px | 600 × 400 px | 🔄 Renomear melhor foto de `Restaurante/` |
| 115 | `restaurante-02-buffet.jpg` | `assets/img/restaurante/` | 1200 × 800 px | 600 × 400 px | 🔄 Selecionar de `Restaurante/` |
| 116 | `cafe-manha-01-mesa.jpg` | `assets/img/restaurante/` | 1200 × 800 px | 600 × 400 px | 📐 Selecionar melhor foto de `café da manhã/` |
| 117 | `cafe-manha-02-alimentos.jpg` | `assets/img/restaurante/` | 1200 × 800 px | 600 × 400 px | 📐 Selecionar foto com alimentos em destaque |
| 118 | `cafe-manha-03-detalhe.jpg` | `assets/img/restaurante/` | 1200 × 800 px | 600 × 400 px | 📐 Selecionar close de detalhe |

**Nota:** A pasta `café da manhã` tem 35 fotos profissionais (Editadas 1 a 36). Selecionar as 3–5 melhores para uso no site.

---

---

# RESUMO GERAL

## Contagem por status

| Status | Quantidade |
|--------|-----------|
| ✅ Prontas e no lugar certo | 5 (fotos 360°) |
| 🔄 Existem mas precisam ser renomeadas/movidas | ~25 imagens |
| 📐 Existem mas precisam ser redimensionadas | ~10 imagens |
| ⏳ Pendentes — ainda não fotografadas | ~65 imagens |
| ❌ Não existem (favicon, apple-touch-icon) | 2 imagens |
| **Total de imagens no site** | **~113 imagens** |

---

## Próximos passos recomendados

1. **Criar as pastas** `home/`, `faq/`, `grupos/`, `blog/`, `contato/`, `restaurante/`, `quartos/economico/`, `quartos/standard/`, `quartos/standard-dbl/`, `quartos/confort/` dentro de `assets/img/`

2. **Renomear e mover** as imagens existentes conforme a coluna "Nome do arquivo" deste catálogo

3. **Redimensionar** para os tamanhos definidos usando ferramentas como Squoosh (squoosh.app) — qualidade 85, formato WebP

4. **Criar favicon.ico e apple-touch-icon.png** a partir do símbolo do logo

5. **Agendar sessão fotográfica** para as ~65 imagens pendentes (ver `briefing-fotografico-atracoes.md`)

6. **Prioridade máxima:** `hero-lagoa-fachada.jpg`, `favicon.ico`, `og-image.jpg`

---

## Ferramentas para redimensionar imagens

- **Squoosh** (online, gratuito): [squoosh.app](https://squoosh.app) — qualidade 85, formato WebP
- **IrfanView** (Windows, gratuito): processamento em lote
- **GIMP** (Windows, gratuito): controle total sobre tamanho e formato

---

*Documento gerado em 16 de abril de 2026*  
*Lagoa Park Hotel — Projeto Site Oficial*  
*Localização: `lagoa-park-hotel-site/assets/img/CATALOGO-IMAGENS.md`*
