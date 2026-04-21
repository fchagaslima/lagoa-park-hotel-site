# CLAUDE.md — Site Lagoa Park Hotel

Instrucoes especificas para este projeto. Para contexto completo, ler `PROJETO.md`.

---

## Stack

HTML puro + **Tailwind CSS v4** (CLI standalone) + JavaScript vanilla. **Sem frameworks JS** — sem React, sem HTMX.
Unica biblioteca JS externa: Pannellum v2.5.6 (instalado localmente em `assets/lib/pannellum/`).

**Pipeline CSS:** `src/input.css` → Tailwind CLI → `dist/styles.css`.

- Desenvolvimento: rodar `dev.bat` (watch mode — recompila automaticamente).
- Producao: rodar `build.bat` (gera CSS minificado).
- **Nunca editar `dist/styles.css` diretamente** — ele e gerado pelo Tailwind.

---

## Servidores

- Desenvolvimento: `html/` (editar sempre aqui primeiro)
- Testes: `C:\Users\lenovo\OneDrive\ClaudeCode\xampp\htdocs\lagoa-park-hotel-site\` → `http://localhost/lagoa-park-hotel-site/`
- Apos editar: copiar arquivos de `html/` para o XAMPP antes de testar.

---

## Skills Obrigatorias

Ao trabalhar neste site, **sempre usar as skills abaixo** antes de escrever qualquer texto ou interface:

- `/copywriting` — para escrever ou reescrever qualquer texto do site (titulos, CTAs, descricoes, secoes)
- `/frontend-design` — para criar ou modificar qualquer componente visual, pagina ou layout

Essas skills garantem qualidade profissional de copy e design. Nunca pular esse passo.

---

## Regras

1. **Sem frameworks JS** — HTML + Tailwind CSS + JS vanilla apenas. Estilos vao em `src/input.css`.
2. **Design e copy:** consultar `documentos/brand-system.md` e `documentos/copy-completa.md`.
3. **Pannellum:** carregar sempre localmente, nunca por CDN. Container `<div id="pannellum-viewer">` deve estar vazio (sem filhos).
4. **Imagens:** caminhos relativos — `assets/img/nome.jpg`. Antes de usar qualquer imagem, consultar `assets/img/CATALOGO-IMAGENS.md` para o nome correto, o caminho e os tamanhos esperados (desktop e mobile).
5. **Sincronizar** `html/` e XAMPP ao editar arquivos HTML, CSS ou JS. Apos editar `src/input.css`, rodar `build.bat` antes de copiar para XAMPP.
6. **Duvidas sobre o projeto:** consultar `PROJETO.md` (estrutura, pendencias, troubleshooting).
7. **Atualizar `README.md`** sempre que ocorrer qualquer uma das situacoes abaixo:
   - Nova pagina HTML criada ou removida → atualizar secao "Paginas"
   - Nova biblioteca ou ferramenta adicionada → atualizar secao "Stack Tecnologica"
   - Nova pasta criada em `html/` ou `assets/` → atualizar secao "Estrutura de Pastas"
   - Item do Checklist Pre-Deploy concluido → marcar com `[x]`
   - Configuracao critica resolvida (motor de reservas, GA4, SSL) → atualizar secao "Configuracoes Criticas"
   - Novo documento adicionado em `documentos/` → atualizar secao "Documentacao"
   - Data de ultima atualizacao sempre que o README for editado

---

## Configuracoes Criticas (ainda pendentes)

- Motor de reservas: URL da Foco Multimidia nao disponivel — placeholder em `script.js` na funcao `abrirReservas()`
- WhatsApp: (83) 3015-1414 — `wa.me/558330151414`
