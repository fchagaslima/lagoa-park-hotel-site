# Galeria 360° — Lagoa Park Hotel

> Documentação técnica e operacional da galeria de fotos esféricas 360°.

---

## Objetivo

Permitir que hóspedes explorem os ambientes do hotel antes da chegada.
Diferencial competitivo: poucas pousadas/hotéis em João Pessoa oferecem essa experiência.

---

## Tecnologia

- **Visualizador:** Pannellum v2.5.6 (open-source, sem dependências)
- **Instalação:** Local em `assets/lib/pannellum/` — não depende de CDN externo
- **Câmera:** Insta360 X3
- **Formato:** JPG equirectangular (esférico), 1920×1080px, ~500KB–1MB por foto

## Página

- **Arquivo:** `html/galeria-360.html`
- **URL local:** `http://localhost/lagoa-park-hotel-site/galeria-360.html`
- **Localização dev:** `C:\Users\lenovo\OneDrive\ClaudeCode\lagoa-park-hotel-site\html\galeria-360.html`
- **Localização XAMPP:** `C:\Users\lenovo\OneDrive\ClaudeCode\xampp\htdocs\lagoa-park-hotel-site\galeria-360.html`

## Funcionalidades

- Visualizador 360° interativo (clique + arraste para rotacionar)
- Zoom com scroll do mouse
- Rotação automática suave (após 3s de inatividade)
- Fullscreen disponível
- Grid de ambientes clicáveis com múltiplas fotos por ambiente
- Responsivo (mobile + desktop)

---

## Fotos Planejadas (23 total)

Pasta: `assets/img/360/`

| # | Arquivo | Status |
|---|---------|--------|
| 01 | `01-fachada.jpg` | ✅ |
| 02 | `02-recepcao-01.jpg` | ✅ |
| 03 | `03-recepcao-02.jpg` | ✅ |
| 04 | `04-recepcao-03.jpg` | ✅ |
| 05 | `05-recepcao-04.jpg` | ✅ |
| 06 | `06-restaurante-01.jpg` | ⏳ |
| 07 | `07-restaurante-02.jpg` | ⏳ |
| 08 | `08-buffet-01.jpg` | ⏳ |
| 09 | `09-ap-standard-duplo-01.jpg` | ⏳ |
| 10 | `10-ap-standard-duplo-02.jpg` | ⏳ |
| 11 | `11-ap-standard-triplo.jpg` | ⏳ |
| 12 | `12-ap-standard-banheiro.jpg` | ⏳ |
| 13 | `13-ap-standard-dbl-duplo-01.jpg` | ⏳ |
| 14 | `14-ap-standard-dbl-duplo-02.jpg` | ⏳ |
| 15 | `15-ap-standard-dbl-banheiro.jpg` | ⏳ |
| 16 | `16-ap-confort-duplo-01.jpg` | ⏳ |
| 17 | `17-ap-confort-duplo-02.jpg` | ⏳ |
| 18 | `18-ap-confort-triplo.jpg` | ⏳ |
| 19 | `19-ap-confort-banheiro.jpg` | ⏳ |
| 20 | `20-ap-confort-dbl-duplo-01.jpg` | ⏳ |
| 21 | `21-ap-confort-dbl-duplo-02.jpg` | ⏳ |
| 22 | `22-ap-confort-dbl-triplo.jpg` | ⏳ |
| 23 | `23-ap-confort-dbl-banheiro.jpg` | ⏳ |

**Status atual (10/04/2026):** 5 de 23 prontas (35MB total). 18 pendentes.

---

## Como Adicionar Novas Fotos

1. **Exporte do Insta360 Studio:**
   - Resolução: 1920×1080px · Formato: JPG · Tipo: Esférico/Equirectangular

2. **Renomeie** com o nome exato da tabela acima.

3. **Coloque nos dois locais:**
   - `lagoa-park-hotel-site\assets\img\360\`
   - `xampp\htdocs\lagoa-park-hotel-site\assets\img\360\`

4. **Se for um ambiente novo** (não listado), atualize a seção `ambientes` no JavaScript de `galeria-360.html`.

---

## Troubleshooting

### Galeria mostra spinner mas não carrega a foto

**Causa 1 — CDN externo**
Pannellum via CDN pode falhar sem internet.
**Solução:** Referenciar sempre os arquivos locais:
```html
<link rel="stylesheet" href="assets/lib/pannellum/pannellum.css">
<script src="assets/lib/pannellum/pannellum.js"></script>
```

**Causa 2 — Container com filhos**
O Pannellum exige container vazio para inicializar.
**Solução:** Nenhum elemento HTML dentro do `<div id="pannellum-viewer">`:
```html
<div id="pannellum-viewer" style="width:100%; height:500px;"></div>
```

**Causa 3 — Altura não aplicada**
Classes CSS podem não definir altura corretamente.
**Solução:** Usar `style` inline com `height` definido (veja exemplo acima).
