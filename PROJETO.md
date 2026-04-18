# Lagoa Park Hotel — Site Oficial

**Última atualização:** 16 de abril de 2026
**Status:** ✅ Design completo — aguardando imagens reais e motor de reservas

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
| `documentos/reputacao-online.md` | Avaliações reais de hóspedes (OTAs) |
| `documentos/analise-concorrentes.md` | Padrões de estrutura e funil de conversão |
| `documentos/lagoa_park_hotel_dossier.md` | Informações gerais do hotel |
| `documentos/briefing-fotografico-atracoes.md` | Briefing para o fotógrafo — 47 fotos da página `/atracoes` com ângulos e especificações técnicas |
| `documentos/roteiro-centro-historico-joao-pessoa.md` | Pesquisa histórica do Centro Histórico — fonte para copy da página `/atracoes` e blog |
| `documentos/analise-site-atual.md` | ⚠️ Legado — diagnóstico do site antigo (WordPress/Omnibees). Consultar apenas para referência histórica. |
| `html/README.md` | XAMPP, carrossel, configurações técnicas |
| `assets/img/CATALOGO-IMAGENS.md` | Catálogo completo de imagens — nomes, caminhos, tamanhos (desktop e mobile) e status de todas as 113 imagens do site |

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
