# Catálogo de Imagens — Lagoa Park Hotel
> Referência completa de todas as imagens do site  
> Versão 2.0 · 21 de abril de 2026

---

## Convenção Desktop / Mobile

### Nomenclatura de arquivos

Cada imagem existe em **dois arquivos distintos no servidor**:

| Versão | Sufixo | Exemplo |
|--------|--------|---------|
| Desktop | _(sem sufixo)_ | `hero-lagoa-fachada.jpg` |
| Mobile | `-m` antes da extensão | `hero-lagoa-fachada-m.jpg` |

**Regras gerais para nomes:**
- Letras minúsculas, palavras separadas por hífen
- Sem espaços, acentos ou caracteres especiais
- Formato final: **WebP** (com fallback JPG)

---

### Padrão HTML — como usar as imagens

O HTML usa o elemento `<picture>` para servir a versão correta automaticamente. O navegador detecta o tamanho da tela e carrega o arquivo certo — sem JavaScript.

**Ponto de corte (breakpoint):** `768px`  
Abaixo de 768px → mobile. Acima → desktop.

```html
<picture>
  <source media="(max-width: 768px)" srcset="assets/img/home/hero-lagoa-fachada-m.jpg">
  <img src="assets/img/home/hero-lagoa-fachada.jpg" alt="Vista da Lagoa Sólon de Lucena">
</picture>
```

> **Imagens sem versão mobile** (logos, favicon, ícones, fotos 360°): usar `<img>` simples, sem `<picture>`.

---

## Legenda de status

| Ícone | Significado |
|-------|-------------|
| ✅ | Arquivo existente, no lugar certo, nome correto |
| 🔄 | Arquivo existe mas precisa ser renomeado/movido |
| 📐 | Arquivo existe mas precisa ser redimensionado |
| ⏳ | Ainda não fotografado — pendente |
| ❌ | Não existe — criar ou providenciar |

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

> Logos não têm versão mobile separada — o HTML redimensiona via CSS.

| # | Nome do arquivo | Caminho | Tamanho | Status |
|---|----------------|---------|---------|--------|
| 1 | `logo-horizontal-invertido.jpg` | `assets/img/logo/` | 280 × 70 px | 🔄 Existe como `LogoHorizontalInvertido.jpg` |
| 2 | `logo-horizontal-navy.png` | `assets/img/logo/` | 280 × 70 px | ⏳ Pendente |
| 3 | `logo-vertical.png` | `assets/img/logo/` | 200 × 240 px | 🔄 Existe como `Vertical.png` |
| 4 | `logo-simbolo.png` | `assets/img/logo/` | 80 × 80 px | 🔄 Existe como `Invertivo.png` (verificar versão navy) |
| 5 | `favicon.ico` | `assets/img/logo/` | 16/32/48 px | ✅ Gerado em 21/04/2026 |
| 6 | `apple-touch-icon.png` | `assets/img/logo/` | 180 × 180 px | ✅ Gerado em 21/04/2026 |

---

## 1.2 — Open Graph / Redes Sociais

> Imagem que aparece quando o link do site é compartilhado no WhatsApp, Facebook, LinkedIn.  
> Sem versão mobile — redes sociais usam sempre a versão desktop.

| # | Nome do arquivo | Caminho | Tamanho | Status |
|---|----------------|---------|---------|--------|
| 7 | `og-image.jpg` | `assets/img/` | 1200 × 630 px | ⏳ Pendente |

**Conteúdo sugerido:** Foto da Lagoa Sólon de Lucena com as palmeiras + logo do hotel sobreposto.

---

---

# PARTE 2 — HOME (index.html)

> Página principal. Seções: Hero · Diferenciais · Quartos · Localização · Avaliações · CTA Final.

---

## 2.1 — Hero (Seção #inicio)

> Foto fullscreen que preenche toda a tela na abertura do site. É a imagem mais importante do site.

| # | Nome — Desktop | Nome — Mobile | Caminho | Tam. Desktop | Tam. Mobile | Status |
|---|----------------|---------------|---------|-------------|-------------|--------|
| 8 | `hero-lagoa-fachada.jpg` | `hero-lagoa-fachada-m.jpg` | `assets/img/home/` | 1920 × 960 px | 768 × 960 px | ⏳ Ambos pendentes |

**O que deve mostrar:** Vista da Lagoa Sólon de Lucena com as palmeiras imperiais e, se possível, a fachada do hotel visível. Idealmente drone ou ângulo elevado.  
**Horário ideal:** 7h–9h (luz dourada) ou 16h–17h30.  
**Temporário em uso:** `atracoes/1920x560-parquedalagoa02.jpg`

---

## 2.2 — Carrossel do Hero (slides adicionais)

| # | Nome — Desktop | Nome — Mobile | Caminho | Tam. Desktop | Tam. Mobile | Status |
|---|----------------|---------------|---------|-------------|-------------|--------|
| 9 | `hero-slide-01-lagoa.jpg` | `hero-slide-01-lagoa-m.jpg` | `assets/img/home/` | 1920 × 960 px | 768 × 960 px | 🔄 Desktop: usar `atracoes/1920x560-parquedalagoa02.jpg` · Mobile: recortar |
| 10 | `hero-slide-02-centro-historico.jpg` | `hero-slide-02-centro-historico-m.jpg` | `assets/img/home/` | 1920 × 960 px | 768 × 960 px | 🔄 Desktop: usar `atracoes/1920x960-centrohistorico01.jpg` · Mobile: recortar |
| 11 | `hero-slide-03-recepcao.jpg` | `hero-slide-03-recepcao-m.jpg` | `assets/img/home/` | 1920 × 960 px | 768 × 960 px | 🔄 Desktop: usar `atracoes/1920x560-recepcao01.jpg` · Mobile: recortar |

---

## 2.3 — Preview de Quartos (Seção #quartos)

> 3 cards de quartos. Em mobile os cards empilham — a proporção muda pouco, mas o arquivo menor carrega mais rápido.

| # | Nome — Desktop | Nome — Mobile | Caminho | Tam. Desktop | Tam. Mobile | Status |
|---|----------------|---------------|---------|-------------|-------------|--------|
| 12 | `card-quarto-economico.jpg` | `card-quarto-economico-m.jpg` | `assets/img/home/` | 800 × 533 px | 400 × 267 px | 🔄 Origem: `quartos/AP-economico/_MG_9809-01.jpeg` (redimensionar nos dois tamanhos) |
| 13 | `card-quarto-standard.jpg` | `card-quarto-standard-m.jpg` | `assets/img/home/` | 800 × 533 px | 400 × 267 px | 🔄 Origem: `quartos/AP-Standard-dbl/_MG_9869-01.jpeg` (redimensionar nos dois tamanhos) |
| 14 | `card-quarto-confort.jpg` | `card-quarto-confort-m.jpg` | `assets/img/home/` | 800 × 533 px | 400 × 267 px | ⏳ Ambos pendentes — selecionar de `quartos/AP confort/` |

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

| # | Nome — Desktop | Nome — Mobile | Caminho | Tam. Desktop | Tam. Mobile | Status |
|---|----------------|---------------|---------|-------------|-------------|--------|
| 15 | `hero-quartos.jpg` | `hero-quartos-m.jpg` | `assets/img/quartos/` | 1920 × 560 px | 768 × 560 px | ⏳ Ambos pendentes |

**Sugestão:** Foto de um quarto bem iluminado com detalhe elegante da cama arrumada.

---

## 3.2 — AP Econômico

> Quarto simples, 1–2 hóspedes, sem frigobar.  
> Fotos disponíveis em: `quartos/AP-economico/` (4 fotos profissionais `_MG_`)

| # | Nome — Desktop | Nome — Mobile | Caminho | Tam. Desktop | Tam. Mobile | Status |
|---|----------------|---------------|---------|-------------|-------------|--------|
| 16 | `economico-thumb.jpg` | `economico-thumb-m.jpg` | `assets/img/quartos/economico/` | 800 × 533 px | 400 × 267 px | 🔄 Origem: `_MG_9809-01.jpeg` |
| 17 | `economico-01-quarto.jpg` | `economico-01-quarto-m.jpg` | `assets/img/quartos/economico/` | 1200 × 900 px | 600 × 450 px | 🔄 Origem: `_MG_9809-01.jpeg` |
| 18 | `economico-02-cama.jpg` | `economico-02-cama-m.jpg` | `assets/img/quartos/economico/` | 1200 × 900 px | 600 × 450 px | 🔄 Origem: `_MG_9811-01.jpeg` |
| 19 | `economico-03-banheiro.jpg` | `economico-03-banheiro-m.jpg` | `assets/img/quartos/economico/` | 1200 × 900 px | 600 × 450 px | 🔄 Origem: `_MG_9816-01.jpeg` |
| 20 | `economico-04-detalhe.jpg` | `economico-04-detalhe-m.jpg` | `assets/img/quartos/economico/` | 1200 × 900 px | 600 × 450 px | 🔄 Origem: `_MG_9827-01.jpeg` |

---

## 3.3 — AP Standard (Casal/Individual)

> Quarto com frigobar, 1–2 hóspedes.  
> Fotos disponíveis em: `quartos/AP standard/`

| # | Nome — Desktop | Nome — Mobile | Caminho | Tam. Desktop | Tam. Mobile | Status |
|---|----------------|---------------|---------|-------------|-------------|--------|
| 21 | `standard-thumb.jpg` | `standard-thumb-m.jpg` | `assets/img/quartos/standard/` | 800 × 533 px | 400 × 267 px | 🔄 Origem: `ApSuperior01.jpg` ou `0600x400 - apsuperior02.jpg` |
| 22 | `standard-01-quarto.jpg` | `standard-01-quarto-m.jpg` | `assets/img/quartos/standard/` | 1200 × 900 px | 600 × 450 px | 🔄 Origem: `1920x960 - apsuperior01.jpg` |
| 23 | `standard-02-ambiente.jpg` | `standard-02-ambiente-m.jpg` | `assets/img/quartos/standard/` | 1200 × 900 px | 600 × 450 px | 🔄 Origem: `1920x960 - apsuperior02.jpg` |
| 24 | `standard-03-vista.jpg` | `standard-03-vista-m.jpg` | `assets/img/quartos/standard/` | 1200 × 900 px | 600 × 450 px | 🔄 Origem: `1920x960 - apsuperior03.jpg` |
| 25 | `standard-04-banheiro.jpg` | `standard-04-banheiro-m.jpg` | `assets/img/quartos/standard/` | 900 × 1200 px | 400 × 533 px | 🔄 Origem: `0388x480 - apsuperiorbanheiro01.jpg` |

---

## 3.4 — AP Standard Duplo (Duas camas)

> Quarto com duas camas de solteiro, 2–3 hóspedes.  
> Fotos disponíveis em: `quartos/AP-Standard-dbl/`

| # | Nome — Desktop | Nome — Mobile | Caminho | Tam. Desktop | Tam. Mobile | Status |
|---|----------------|---------------|---------|-------------|-------------|--------|
| 26 | `standard-dbl-thumb.jpg` | `standard-dbl-thumb-m.jpg` | `assets/img/quartos/standard-dbl/` | 800 × 533 px | 400 × 267 px | 🔄 Origem: `_MG_9869-01.jpeg` |
| 27 | `standard-dbl-01-quarto.jpg` | `standard-dbl-01-quarto-m.jpg` | `assets/img/quartos/standard-dbl/` | 1200 × 900 px | 600 × 450 px | 🔄 Origem: `_MG_9869-01.jpeg` |
| 28 | `standard-dbl-02-camas.jpg` | `standard-dbl-02-camas-m.jpg` | `assets/img/quartos/standard-dbl/` | 1200 × 900 px | 600 × 450 px | 🔄 Origem: `20210115_135255.jpg` (avaliar qualidade) |
| 29 | `standard-dbl-03-detalhe.jpg` | `standard-dbl-03-detalhe-m.jpg` | `assets/img/quartos/standard-dbl/` | 1200 × 900 px | 600 × 450 px | 🔄 Origem: `20210115_135306.jpg` (avaliar qualidade) |
| 30 | `standard-dbl-04-banheiro.jpg` | `standard-dbl-04-banheiro-m.jpg` | `assets/img/quartos/standard-dbl/` | 900 × 1200 px | 400 × 533 px | 🔄 Origem: `0388x480 - apsuperiorbanheiro02.jpeg` |

---

## 3.5 — AP Confort Studio

> Quarto reformado com poltrona, mesa de trabalho e mini copa.  
> Fotos disponíveis em: `quartos/AP confort/` (17 fotos de 02/04/2025)

| # | Nome — Desktop | Nome — Mobile | Caminho | Tam. Desktop | Tam. Mobile | Status |
|---|----------------|---------------|---------|-------------|-------------|--------|
| 31 | `confort-thumb.jpg` | `confort-thumb-m.jpg` | `assets/img/quartos/confort/` | 800 × 533 px | 400 × 267 px | 📐 Selecionar melhor foto de `AP confort/` |
| 32 | `confort-01-quarto.jpg` | `confort-01-quarto-m.jpg` | `assets/img/quartos/confort/` | 1200 × 900 px | 600 × 450 px | 📐 Ex: `20250402_123949.jpg` |
| 33 | `confort-02-poltrona.jpg` | `confort-02-poltrona-m.jpg` | `assets/img/quartos/confort/` | 1200 × 900 px | 600 × 450 px | 📐 Foto com poltrona visível |
| 34 | `confort-03-mesa-trabalho.jpg` | `confort-03-mesa-trabalho-m.jpg` | `assets/img/quartos/confort/` | 1200 × 900 px | 600 × 450 px | 📐 Foto com mesa de trabalho visível |
| 35 | `confort-04-banheiro.jpg` | `confort-04-banheiro-m.jpg` | `assets/img/quartos/confort/` | 900 × 1200 px | 400 × 533 px | ⏳ Ambos pendentes — não há foto do banheiro |
| 36 | `confort-05-mini-copa.jpg` | `confort-05-mini-copa-m.jpg` | `assets/img/quartos/confort/` | 1200 × 900 px | 600 × 450 px | ⏳ Ambos pendentes — não há foto da mini copa |

**Nota:** As 17 fotos de `AP confort/` precisam ser avaliadas para identificar quais mostram os diferenciais (poltrona, mesa, mini copa, micro-ondas).

---

---

# PARTE 4 — PÁGINA ATRAÇÕES (/atracoes)

> Grid com 8 atrações principais + centro histórico + praias + passeios.  
> Todas as fotos desta seção dependem da sessão fotográfica (ver `lagoa-park-hotel/marketing/briefing-fotografico-atracoes.md`).

---

## 4.1 — Hero da Página Atrações

| # | Nome — Desktop | Nome — Mobile | Caminho | Tam. Desktop | Tam. Mobile | Status |
|---|----------------|---------------|---------|-------------|-------------|--------|
| 37 | `hero-atracoes.jpg` | `hero-atracoes-m.jpg` | `assets/img/atracoes/` | 1920 × 560 px | 768 × 560 px | ⏳ Ambos pendentes |

**Conteúdo:** Vista panorâmica de João Pessoa — Lagoa Sólon de Lucena em primeiro plano. Idealmente drone.

---

## 4.2 — Cards das 8 Atrações Principais

| # | Nome — Desktop | Nome — Mobile | Caminho | Tam. Desktop | Tam. Mobile | Código | Status |
|---|----------------|---------------|---------|-------------|-------------|--------|--------|
| 38 | `atracao-01-lagoa-solon.jpg` | `atracao-01-lagoa-solon-m.jpg` | `assets/img/atracoes/` | 800 × 533 px | 400 × 267 px | ATRACAO-01 | 🔄 Existe `0600x400 - parquedalagoa01.jpg` (renomear desktop · recortar mobile) |
| 39 | `atracao-02-centro-historico.jpg` | `atracao-02-centro-historico-m.jpg` | `assets/img/atracoes/` | 800 × 533 px | 400 × 267 px | ATRACAO-02 | 🔄 Existe `0600x400 - centrohistorico01.jpg` (avaliar) |
| 40 | `atracao-03-praia-tambau.jpg` | `atracao-03-praia-tambau-m.jpg` | `assets/img/atracoes/` | 800 × 533 px | 400 × 267 px | ATRACAO-03 | ⏳ Ambos pendentes |
| 41 | `atracao-04-mercado-artesanato.jpg` | `atracao-04-mercado-artesanato-m.jpg` | `assets/img/atracoes/` | 800 × 533 px | 400 × 267 px | ATRACAO-04 | ⏳ Ambos pendentes |
| 42 | `atracao-05-praia-cabo-branco.jpg` | `atracao-05-praia-cabo-branco-m.jpg` | `assets/img/atracoes/` | 800 × 533 px | 400 × 267 px | ATRACAO-05 | ⏳ Ambos pendentes |
| 43 | `atracao-06-ponta-seixas.jpg` | `atracao-06-ponta-seixas-m.jpg` | `assets/img/atracoes/` | 800 × 533 px | 400 × 267 px | ATRACAO-06 | ⏳ Ambos pendentes |
| 44 | `atracao-07-por-do-sol-jacare.jpg` | `atracao-07-por-do-sol-jacare-m.jpg` | `assets/img/atracoes/` | 800 × 533 px | 400 × 267 px | ATRACAO-07 | 🔄 Existe `0600x400 - praiadojacare01.jpg` (avaliar) |
| 45 | `atracao-08-fortaleza-santa-catarina.jpg` | `atracao-08-fortaleza-santa-catarina-m.jpg` | `assets/img/atracoes/` | 800 × 533 px | 400 × 267 px | ATRACAO-08 | ⏳ Ambos pendentes |

---

## 4.3 — Seção Lucena

| # | Nome — Desktop | Nome — Mobile | Caminho | Tam. Desktop | Tam. Mobile | Código | Status |
|---|----------------|---------------|---------|-------------|-------------|--------|--------|
| 46 | `lucena-01-praia.jpg` | `lucena-01-praia-m.jpg` | `assets/img/atracoes/` | 800 × 533 px | 400 × 267 px | LUCENA-01 | ⏳ Ambos pendentes |
| 47 | `lucena-02-igreja-guia.jpg` | `lucena-02-igreja-guia-m.jpg` | `assets/img/atracoes/` | 800 × 533 px | 400 × 267 px | LUCENA-02 | ⏳ Ambos pendentes |
| 48 | `lucena-03-peixe-boi.jpg` | `lucena-03-peixe-boi-m.jpg` | `assets/img/atracoes/` | 800 × 533 px | 400 × 267 px | LUCENA-03 | ⏳ Ambos pendentes (sujeito a autorização ICMBio) |

---

## 4.4 — Centro Histórico (seção detalhada)

| # | Nome — Desktop | Nome — Mobile | Caminho | Tam. Desktop | Tam. Mobile | Código | Status |
|---|----------------|---------------|---------|-------------|-------------|--------|--------|
| 49 | `centro-01-lagoa-boulevard.jpg` | `centro-01-lagoa-boulevard-m.jpg` | `assets/img/atracoes/` | 800 × 600 px | 400 × 300 px | CENTRO-01 | 🔄 Existe `0600x400 - parquedalagoa02.jpg` (renomear) |
| 50 | `centro-02-sao-francisco-azulejos.jpg` | `centro-02-sao-francisco-azulejos-m.jpg` | `assets/img/atracoes/` | 800 × 600 px | 400 × 300 px | CENTRO-02 | ⏳ Ambos pendentes |
| 51 | `centro-03-catedral-basilica.jpg` | `centro-03-catedral-basilica-m.jpg` | `assets/img/atracoes/` | 800 × 600 px | 400 × 300 px | CENTRO-03 | ⏳ Ambos pendentes |
| 52 | `centro-04-praca-antenor-navarro.jpg` | `centro-04-praca-antenor-navarro-m.jpg` | `assets/img/atracoes/` | 800 × 533 px | 400 × 267 px | CENTRO-04 | ⏳ Ambos pendentes |
| 53 | `centro-05-casa-da-polvora.jpg` | `centro-05-casa-da-polvora-m.jpg` | `assets/img/atracoes/` | 800 × 600 px | 400 × 300 px | CENTRO-05 | 🔄 Existe `0600x400 - casadapolvora01.jpg` (renomear) |
| 54 | `centro-06-igreja-carmo.jpg` | `centro-06-igreja-carmo-m.jpg` | `assets/img/atracoes/` | 800 × 600 px | 400 × 300 px | CENTRO-06 | 🔄 Existe `0600x400 - igrejadocarmo01.jpg` (renomear) |

---

## 4.5 — Museus

| # | Nome — Desktop | Nome — Mobile | Caminho | Tam. Desktop | Tam. Mobile | Código | Status |
|---|----------------|---------------|---------|-------------|-------------|--------|--------|
| 55 | `museu-01-cidade-joao-pessoa.jpg` | `museu-01-cidade-joao-pessoa-m.jpg` | `assets/img/atracoes/` | 800 × 600 px | 400 × 300 px | MUSEU-01 | ⏳ Ambos pendentes |
| 56 | `museu-02-historia-paraiba.jpg` | `museu-02-historia-paraiba-m.jpg` | `assets/img/atracoes/` | 800 × 600 px | 400 × 300 px | MUSEU-02 | ⏳ Ambos pendentes |
| 57 | `museu-03-tre-pb.jpg` | `museu-03-tre-pb-m.jpg` | `assets/img/atracoes/` | 800 × 600 px | 400 × 300 px | MUSEU-03 | ⏳ Ambos pendentes |

---

## 4.6 — Roteiro a Pé (ambiência)

| # | Nome — Desktop | Nome — Mobile | Caminho | Tam. Desktop | Tam. Mobile | Código | Status |
|---|----------------|---------------|---------|-------------|-------------|--------|--------|
| 58 | `roteiro-01-saida-do-hotel.jpg` | `roteiro-01-saida-do-hotel-m.jpg` | `assets/img/atracoes/` | 1200 × 800 px | 600 × 400 px | ROTEIRO-01 | ⏳ Ambos pendentes |
| 59 | `roteiro-02-caminhada-paralelepipedo.jpg` | `roteiro-02-caminhada-paralelepipedo-m.jpg` | `assets/img/atracoes/` | 1200 × 675 px | 600 × 338 px | ROTEIRO-02 | ⏳ Ambos pendentes |
| 60 | `roteiro-03-detalhe-historico.jpg` | `roteiro-03-detalhe-historico-m.jpg` | `assets/img/atracoes/` | 1200 × 800 px | 600 × 400 px | ROTEIRO-03 | ⏳ Ambos pendentes |

---

## 4.7 — Cards dos 7 Passeios

| # | Nome — Desktop | Nome — Mobile | Caminho | Tam. Desktop | Tam. Mobile | Código | Status |
|---|----------------|---------------|---------|-------------|-------------|--------|--------|
| 61 | `passeio-01-costa-do-conde.jpg` | `passeio-01-costa-do-conde-m.jpg` | `assets/img/atracoes/` | 800 × 533 px | 400 × 267 px | PASSEIO-01 | ⏳ Ambos pendentes |
| 62 | `passeio-02-litoral-norte.jpg` | `passeio-02-litoral-norte-m.jpg` | `assets/img/atracoes/` | 800 × 533 px | 400 × 267 px | PASSEIO-02 | ⏳ Ambos pendentes |
| 63 | `passeio-03-jacare-saxofone.jpg` | `passeio-03-jacare-saxofone-m.jpg` | `assets/img/atracoes/` | 800 × 533 px | 400 × 267 px | PASSEIO-03 | 🔄 Existe `0600x400 - praiadojacare02 - JAMS.jpg` (avaliar) |
| 64 | `passeio-04-piscinas-seixas.jpg` | `passeio-04-piscinas-seixas-m.jpg` | `assets/img/atracoes/` | 800 × 533 px | 400 × 267 px | PASSEIO-04 | ⏳ Ambos pendentes |
| 65 | `passeio-05-picaozinho.jpg` | `passeio-05-picaozinho-m.jpg` | `assets/img/atracoes/` | 800 × 533 px | 400 × 267 px | PASSEIO-05 | ⏳ Ambos pendentes |
| 66 | `passeio-06-ilha-areia-vermelha.jpg` | `passeio-06-ilha-areia-vermelha-m.jpg` | `assets/img/atracoes/` | 800 × 533 px | 400 × 267 px | PASSEIO-06 | ⏳ Ambos pendentes |
| 67 | `passeio-07-city-tour-niemeyer.jpg` | `passeio-07-city-tour-niemeyer-m.jpg` | `assets/img/atracoes/` | 800 × 533 px | 400 × 267 px | PASSEIO-07 | ⏳ Ambos pendentes |

---

## 4.8 — Cards das 15 Praias

| # | Nome — Desktop | Nome — Mobile | Caminho | Tam. Desktop | Tam. Mobile | Código | Status |
|---|----------------|---------------|---------|-------------|-------------|--------|--------|
| 68 | `praia-01-manaira.jpg` | `praia-01-manaira-m.jpg` | `assets/img/atracoes/` | 800 × 533 px | 400 × 267 px | PRAIA-01 | ⏳ Ambos pendentes |
| 69 | `praia-02-caribessa.jpg` | `praia-02-caribessa-m.jpg` | `assets/img/atracoes/` | 800 × 533 px | 400 × 267 px | PRAIA-02 | ⏳ Ambos pendentes |
| 70 | `praia-03-camboinha.jpg` | `praia-03-camboinha-m.jpg` | `assets/img/atracoes/` | 800 × 533 px | 400 × 267 px | PRAIA-03 | ⏳ Ambos pendentes |
| 71 | `praia-04-ponta-campina.jpg` | `praia-04-ponta-campina-m.jpg` | `assets/img/atracoes/` | 800 × 533 px | 400 × 267 px | PRAIA-04 | ⏳ Ambos pendentes |
| 72 | `praia-05-intermares.jpg` | `praia-05-intermares-m.jpg` | `assets/img/atracoes/` | 800 × 533 px | 400 × 267 px | PRAIA-05 | ⏳ Ambos pendentes |
| 73 | `praia-06-barra-gramame.jpg` | `praia-06-barra-gramame-m.jpg` | `assets/img/atracoes/` | 800 × 533 px | 400 × 267 px | PRAIA-06 | ⏳ Ambos pendentes |
| 74 | `praia-07-jacuma-pedra-furada.jpg` | `praia-07-jacuma-pedra-furada-m.jpg` | `assets/img/atracoes/` | 800 × 533 px | 400 × 267 px | PRAIA-07 | ⏳ Ambos pendentes |
| 75 | `praia-08-tabatinga.jpg` | `praia-08-tabatinga-m.jpg` | `assets/img/atracoes/` | 800 × 533 px | 400 × 267 px | PRAIA-08 | ⏳ Ambos pendentes |
| 76 | `praia-09-coqueirinho.jpg` | `praia-09-coqueirinho-m.jpg` | `assets/img/atracoes/` | 800 × 533 px | 400 × 267 px | PRAIA-09 | ⏳ Ambos pendentes |
| 77 | `praia-10-tambaba.jpg` | `praia-10-tambaba-m.jpg` | `assets/img/atracoes/` | 800 × 533 px | 400 × 267 px | PRAIA-10 | ⏳ Ambos pendentes |
| 78 | `praia-11-seixas.jpg` | `praia-11-seixas-m.jpg` | `assets/img/atracoes/` | 800 × 533 px | 400 × 267 px | PRAIA-11 | ⏳ Ambos pendentes |
| 79 | `praia-12-cabedelo.jpg` | `praia-12-cabedelo-m.jpg` | `assets/img/atracoes/` | 800 × 533 px | 400 × 267 px | PRAIA-12 | ⏳ Ambos pendentes |
| 80 | `praia-13-formosa.jpg` | `praia-13-formosa-m.jpg` | `assets/img/atracoes/` | 800 × 533 px | 400 × 267 px | PRAIA-13 | ⏳ Ambos pendentes |
| 81 | `praia-tambau-card.jpg` | `praia-tambau-card-m.jpg` | `assets/img/atracoes/` | 800 × 533 px | 400 × 267 px | ATRACAO-03 | 🔄 Reaproveitar de `atracao-03-praia-tambau` |
| 82 | `praia-cabo-branco-card.jpg` | `praia-cabo-branco-card-m.jpg` | `assets/img/atracoes/` | 800 × 533 px | 400 × 267 px | ATRACAO-05 | 🔄 Reaproveitar de `atracao-05-praia-cabo-branco` |

---

## 4.9 — Marcos Icônicos na Orla

| # | Nome — Desktop | Nome — Mobile | Caminho | Tam. Desktop | Tam. Mobile | Código | Status |
|---|----------------|---------------|---------|-------------|-------------|--------|--------|
| 83 | `orla-01-bulevar-tambau.jpg` | `orla-01-bulevar-tambau-m.jpg` | `assets/img/atracoes/` | 800 × 533 px | 400 × 267 px | ORLA-01 | 🔄 Existe `0600x400 - praiadobessa01.jpg` — verificar se é Tambaú ou Bessa |
| 84 | `orla-02-farol-cabo-branco.jpg` | `orla-02-farol-cabo-branco-m.jpg` | `assets/img/atracoes/` | 800 × 533 px | 400 × 267 px | ORLA-02 | ⏳ Ambos pendentes |
| 85 | `orla-03-niemeyer.jpg` | `orla-03-niemeyer-m.jpg` | `assets/img/atracoes/` | 800 × 533 px | 400 × 267 px | ORLA-03 | ⏳ Ambos pendentes |

---

---

# PARTE 5 — PÁGINA FAQ (/faq)

---

## 5.1 — Hero da Página FAQ

| # | Nome — Desktop | Nome — Mobile | Caminho | Tam. Desktop | Tam. Mobile | Status |
|---|----------------|---------------|---------|-------------|-------------|--------|
| 86 | `hero-faq.jpg` | `hero-faq-m.jpg` | `assets/img/faq/` | 1920 × 560 px | 768 × 560 px | ⏳ Ambos pendentes |

**Sugestão:** Foto da recepção do hotel — transmite confiança.  
**Alternativa temporária:** Usar `Recepção/1920x960 - recepcao01.jpg` (recortar nos dois tamanhos).

---

---

# PARTE 6 — PÁGINA GRUPOS (/grupos)

---

## 6.1 — Hero da Página Grupos

| # | Nome — Desktop | Nome — Mobile | Caminho | Tam. Desktop | Tam. Mobile | Status |
|---|----------------|---------------|---------|-------------|-------------|--------|
| 87 | `hero-grupos.jpg` | `hero-grupos-m.jpg` | `assets/img/grupos/` | 1920 × 560 px | 768 × 560 px | ⏳ Ambos pendentes |

**Sugestão:** Foto da recepção ou área comum do hotel.

---

---

# PARTE 7 — PÁGINA BLOG (/blog)

---

## 7.1 — Hero da Página Blog

| # | Nome — Desktop | Nome — Mobile | Caminho | Tam. Desktop | Tam. Mobile | Status |
|---|----------------|---------------|---------|-------------|-------------|--------|
| 88 | `hero-blog.jpg` | `hero-blog-m.jpg` | `assets/img/blog/` | 1920 × 560 px | 768 × 560 px | ⏳ Ambos pendentes |

---

## 7.2 — Imagens dos Posts do Blog

> Cada post terá sua própria imagem de destaque em dois arquivos.

| # | Nome — Desktop | Nome — Mobile | Caminho | Tam. Desktop | Tam. Mobile | Status |
|---|----------------|---------------|---------|-------------|-------------|--------|
| 89 | `post-[slug].jpg` | `post-[slug]-m.jpg` | `assets/img/blog/` | 800 × 450 px | 400 × 225 px | ⏳ Definir ao criar cada post |

**Exemplo:** `post-centro-historico-joao-pessoa.jpg` + `post-centro-historico-joao-pessoa-m.jpg`

---

---

# PARTE 8 — PÁGINA CONTATO (/contato)

---

## 8.1 — Hero da Página Contato

| # | Nome — Desktop | Nome — Mobile | Caminho | Tam. Desktop | Tam. Mobile | Status |
|---|----------------|---------------|---------|-------------|-------------|--------|
| 90 | `hero-contato.jpg` | `hero-contato-m.jpg` | `assets/img/contato/` | 1920 × 560 px | 768 × 560 px | ⏳ Ambos pendentes |

**Sugestão:** Foto da fachada ou entrada do hotel.

---

---

# PARTE 9 — GALERIA 360° (galeria-360.html)

> Fotos equirretangulares — visualizadas pelo Pannellum. **Sem versão mobile separada:** o Pannellum adapta a visualização automaticamente.

**Pasta:** `assets/img/360/`  
**Formato:** JPG equirretangular · 1920 × 1080 px · ~500KB–1MB por foto

| # | Nome do arquivo | Ambiente | Status |
|---|----------------|---------|--------|
| 91 | `01-fachada.jpg` | Fachada externa | ✅ |
| 92 | `02-recepcao-01.jpg` | Recepção — ângulo 1 | ✅ |
| 93 | `03-recepcao-02.jpg` | Recepção — ângulo 2 | ✅ |
| 94 | `04-recepcao-03.jpg` | Recepção — ângulo 3 | ✅ |
| 95 | `05-recepcao-04.jpg` | Recepção — ângulo 4 | ✅ |
| 96 | `06-restaurante-01.jpg` | Restaurante — visão geral | ⏳ |
| 97 | `07-restaurante-02.jpg` | Restaurante — ângulo 2 | ⏳ |
| 98 | `08-buffet-01.jpg` | Área do buffet | ⏳ |
| 99 | `09-ap-standard-duplo-01.jpg` | AP Standard — vista geral | ⏳ |
| 100 | `10-ap-standard-duplo-02.jpg` | AP Standard — ângulo 2 | ⏳ |
| 101 | `11-ap-standard-triplo.jpg` | AP Standard — triplo | ⏳ |
| 102 | `12-ap-standard-banheiro.jpg` | AP Standard — banheiro | ⏳ |
| 103 | `13-ap-standard-dbl-duplo-01.jpg` | AP Standard DBL — vista geral | ⏳ |
| 104 | `14-ap-standard-dbl-duplo-02.jpg` | AP Standard DBL — ângulo 2 | ⏳ |
| 105 | `15-ap-standard-dbl-banheiro.jpg` | AP Standard DBL — banheiro | ⏳ |
| 106 | `16-ap-confort-duplo-01.jpg` | AP Confort — vista geral | ⏳ |
| 107 | `17-ap-confort-duplo-02.jpg` | AP Confort — ângulo 2 | ⏳ |
| 108 | `18-ap-confort-triplo.jpg` | AP Confort — triplo | ⏳ |
| 109 | `19-ap-confort-banheiro.jpg` | AP Confort — banheiro | ⏳ |
| 110 | `20-ap-confort-dbl-duplo-01.jpg` | AP Confort DBL — vista geral | ⏳ |
| 111 | `21-ap-confort-dbl-duplo-02.jpg` | AP Confort DBL — ângulo 2 | ⏳ |
| 112 | `22-ap-confort-dbl-triplo.jpg` | AP Confort DBL — triplo | ⏳ |
| 113 | `23-ap-confort-dbl-banheiro.jpg` | AP Confort DBL — banheiro | ⏳ |

**Status atual:** 5 de 23 prontas · 18 pendentes (câmera Insta360 X3).

---

---

# PARTE 10 — RESTAURANTE / CAFÉ DA MANHÃ

> Usadas na seção de diferenciais da Home, no blog e na Galeria 360.

**Problema nas pastas atuais:** nomes com data de câmera e pasta `café da manhã` com acento — reorganizar.

| # | Nome — Desktop | Nome — Mobile | Caminho destino | Tam. Desktop | Tam. Mobile | Status |
|---|----------------|---------------|-----------------|-------------|-------------|--------|
| 114 | `restaurante-01-ambiente.jpg` | `restaurante-01-ambiente-m.jpg` | `assets/img/restaurante/` | 1200 × 800 px | 600 × 400 px | 🔄 Selecionar melhor foto de `Restaurante/` |
| 115 | `restaurante-02-buffet.jpg` | `restaurante-02-buffet-m.jpg` | `assets/img/restaurante/` | 1200 × 800 px | 600 × 400 px | 🔄 Selecionar de `Restaurante/` |
| 116 | `cafe-manha-01-mesa.jpg` | `cafe-manha-01-mesa-m.jpg` | `assets/img/restaurante/` | 1200 × 800 px | 600 × 400 px | 📐 Selecionar melhor foto de `café da manhã/` |
| 117 | `cafe-manha-02-alimentos.jpg` | `cafe-manha-02-alimentos-m.jpg` | `assets/img/restaurante/` | 1200 × 800 px | 600 × 400 px | 📐 Foto com alimentos em destaque |
| 118 | `cafe-manha-03-detalhe.jpg` | `cafe-manha-03-detalhe-m.jpg` | `assets/img/restaurante/` | 1200 × 800 px | 600 × 400 px | 📐 Close de detalhe |

**Nota:** A pasta `café da manhã` tem 35 fotos profissionais. Selecionar as 3–5 melhores.

---

---

# RESUMO GERAL

## Contagem por status

| Status | Arquivos |
|--------|---------|
| ✅ Prontos e no lugar certo | 7 (5 fotos 360° + favicon.ico + apple-touch-icon.png) |
| 🔄 Existem mas precisam ser renomeados/movidos | ~50 arquivos (25 imagens × desktop + mobile) |
| 📐 Existem mas precisam ser redimensionados | ~20 arquivos (10 imagens × desktop + mobile) |
| ⏳ Pendentes — ainda não fotografados | ~130 arquivos (~65 imagens × desktop + mobile) |
| **Total de arquivos no servidor** | **~207 arquivos** |

> A contagem dobrou em relação à versão 1.0 porque cada imagem agora tem arquivo desktop e arquivo mobile separados.

---

## Próximos passos

1. ✅ ~~Criar as pastas~~ — concluído em 21/04/2026
2. ✅ ~~Criar favicon.ico e apple-touch-icon.png~~ — concluído em 21/04/2026
3. **Renomear e mover** as imagens existentes: gerar o arquivo desktop e o arquivo mobile (`-m`) para cada
4. **Redimensionar** usando Squoosh (squoosh.app) — qualidade 85, formato WebP
5. **Agendar sessão fotográfica** para as ~65 imagens pendentes (ver `lagoa-park-hotel/marketing/briefing-fotografico-atracoes.md`)
6. **Prioridade máxima:** `hero-lagoa-fachada.jpg` + `hero-lagoa-fachada-m.jpg` · `og-image.jpg`

---

## Ferramentas para redimensionar imagens

- **Squoosh** (online, gratuito): squoosh.app — qualidade 85, formato WebP
- **IrfanView** (Windows, gratuito): processamento em lote — útil para gerar os pares desktop/mobile
- **GIMP** (Windows, gratuito): controle total sobre tamanho e formato

---

*Versão 2.0 — 21 de abril de 2026 — adicionada convenção desktop/mobile com arquivos distintos*  
*Lagoa Park Hotel — Projeto Site Oficial*  
*Localização: `lagoa-park-hotel-site/assets/img/CATALOGO-IMAGENS.md`*
