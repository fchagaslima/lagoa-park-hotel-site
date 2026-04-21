# Lagoa Park Hotel — Site Oficial

**Última atualização:** 21 de abril de 2026
**Status:** ✅ Design completo — aguardando imagens reais e motor de reservas

---

> **Regra deste arquivo:** toda ação concluída no projeto deve ser registrada aqui — arquivos criados, pastas criadas, configurações feitas, itens do checklist marcados. Este é o documento de referência do que já foi feito e do que ainda falta.

---

## Resumo

Site em HTML puro + **Tailwind CSS v4** (CLI standalone) + JavaScript vanilla.
Única biblioteca JS externa: Pannellum v2.5.6 (galeria 360°, instalado localmente).
Objetivo: aumentar reservas, informar hóspedes, melhorar reputação online.
Modelo: Home one-page + páginas complementares (galeria-360, grupos).

---

## Caminhos

| Ambiente | Caminho |
|----------|---------|
| Desenvolvimento | `C:\Users\lenovo\OneDrive\ClaudeCode\lagoa-park-hotel-site\html\` |
| XAMPP (testes) | `C:\Users\lenovo\OneDrive\ClaudeCode\xampp\htdocs\lagoa-park-hotel-site\` |
| GitHub | `github.com/fchagaslima/lagoa-park-hotel-site` (branch `master`) |
| URL local | `http://localhost/lagoa-park-hotel-site/` |

---

## Documentação

| Documento | Conteúdo |
|-----------|----------|
| `documentos/brand-system.md` | Cores, tipografia, tom de voz, logo, botões |
| `documentos/estrutura-site.md` | Sitemap, wireframes, interações por seção |
| `documentos/copy-completa.md` | Textos oficiais de todas as seções |
| `documentos/galeria-360.md` | Galeria 360°: fotos, status, como adicionar |
| `documentos/analise-site-atual.md` | ⚠️ Legado — diagnóstico do site antigo (WordPress/Omnibees). Consultar apenas para referência histórica. |
| `html/README.md` | XAMPP, carrossel, configurações técnicas |
| `assets/img/CATALOGO-IMAGENS.md` | Catálogo completo de imagens — nomes, caminhos, tamanhos (desktop e mobile) e status de todas as 113 imagens do site |

> **Documentos confidenciais movidos** — os seguintes arquivos foram transferidos para `lagoa-park-hotel/` (repositório privado) por conterem dados sensíveis do negócio:
>
> - `lagoa_park_hotel_dossier.md` → `gerencia/lagoa_park_hotel_dossier.md`
> - `reputacao-online.md` → `marketing/reputacao-online.md`
> - `analise-concorrentes.md` → `marketing/analise-concorrentes.md`
> - `briefing-fotografico-atracoes.md` → `marketing/briefing-fotografico-atracoes.md`
> - `roteiro-centro-historico-joao-pessoa.md` → `marketing/roteiro-centro-historico-joao-pessoa.md`

---

## Tooling / Build

| Ferramenta | Versão | Localização |
| ---------- | ------ | ----------- |
| Tailwind CSS | v4 (CLI standalone) | `html/tools/tailwindcss.exe` |
| Pannellum | v2.5.6 | `assets/lib/pannellum/` |

**Pipeline CSS:**
- Fonte: `html/src/input.css` (design tokens + utilitários Tailwind)
- Saída: `html/dist/styles.css` (gerado automaticamente)
- Desenvolvimento: `html/dev.bat` (watch — recompila a cada alteração)
- Produção: `html/build.bat` (minificado)

> ⚠️ Nunca editar `dist/styles.css` diretamente — ele é gerado pelo Tailwind.

---

## Configurações Críticas Pendentes

**Motor de reservas** — URL da Foco Multimídia ainda não disponível.
Placeholder em `script.js` → função `abrirReservas()`.

**WhatsApp:** (83) 3015-1414 — `wa.me/558330151414` (já configurado).

---

## Checklist Pré-Deploy

- [ ] Substituir URL do motor de reservas (Foco Multimídia)
- [ ] Adicionar fotos reais dos apartamentos em `assets/img/quartos/`
- [ ] Completar fotos 360° (18 de 23 pendentes — ver `documentos/galeria-360.md`)
- [ ] Otimizar imagens para WebP (squoosh.app, qualidade 85)
- [ ] Atualizar links de redes sociais no footer
- [ ] Configurar Google Analytics GA4
- [ ] Testar formulário de reserva rápida
- [ ] Validar HTML: validator.w3.org
- [ ] Testar performance: pagespeed.web.dev
- [ ] Configurar SSL/HTTPS no servidor

---

## Histórico de Execução

> Registro cronológico de tudo que foi feito no projeto. Atualizar sempre que uma ação for concluída.

### 21 de abril de 2026

#### README.md atualizado

- ✅ `README.md` reescrito com boas práticas do GitHub — seções: Sobre, Páginas, Stack, Estrutura de Pastas, Como Desenvolver, Configurações Críticas, Checklist Pré-Deploy, Documentação e Contato
- ✅ `.markdownlint.json` criado na raiz — configura estilo de tabelas como `consistent` para evitar erros de linting
- ✅ `CLAUDE.md` — adicionada Regra 7: instrução para manter `README.md` atualizado a cada alteração relevante no projeto

#### Ícones gerados

- ✅ `assets/img/logo/favicon.ico` — gerado a partir de `0270x0270 - LogoHotelQuadrada.png` (tamanhos 16×16, 32×32 e 48×48 embutidos)
- ✅ `assets/img/logo/apple-touch-icon.png` — gerado a partir do mesmo logo (180×180 px)
- Ferramenta: Python 3.14 + Pillow

#### Estrutura de pastas de imagens criada

- ✅ `assets/img/home/`
- ✅ `assets/img/faq/`
- ✅ `assets/img/grupos/`
- ✅ `assets/img/blog/`
- ✅ `assets/img/contato/`
- ✅ `assets/img/restaurante/`
- ✅ `assets/img/quartos/economico/`
- ✅ `assets/img/quartos/standard/`
- ✅ `assets/img/quartos/standard-dbl/`
- ✅ `assets/img/quartos/confort/`

### 16 de abril de 2026

- ✅ Design completo concluído
- ✅ Catálogo de imagens criado — `assets/img/CATALOGO-IMAGENS.md` (113 imagens mapeadas)
