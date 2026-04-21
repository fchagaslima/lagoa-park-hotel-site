# Lagoa Park Hotel — Site Oficial

> Site oficial do **Lagoa Park Hotel**, hotel econômico urbano localizado em frente à Lagoa do Parque Sólon de Lucena, no centro histórico de João Pessoa — PB.

**Status:** ✅ Design completo — aguardando imagens reais e URL do motor de reservas  
**Última atualização:** 21 de abril de 2026

---

## Sobre o Projeto

Site institucional e de conversão de reservas do Lagoa Park Hotel. O objetivo é aumentar reservas diretas, informar hóspedes e fortalecer a reputação online do hotel.

### Páginas

| Página          | Arquivo            | Descrição                                              |
| --------------- | ------------------ | ------------------------------------------------------ |
| Home            | `index.html`       | One-page principal com todas as seções do hotel        |
| Galeria 360°    | `galeria-360.html` | Tour virtual dos ambientes com Pannellum               |
| Grupos & Eventos | `grupos.html`     | Página dedicada para grupos e eventos corporativos     |

---

## Stack Tecnológica

| Tecnologia   | Versão             | Uso                                            |
| ------------ | ------------------ | ---------------------------------------------- |
| HTML         | 5                  | Estrutura de todas as páginas                  |
| Tailwind CSS | v4 (CLI standalone) | Estilização — **sem CDN**, compilado localmente |
| JavaScript   | Vanilla            | Interações, carrossel, reservas                |
| Pannellum    | v2.5.6             | Galeria 360° — instalado localmente            |

**Sem frameworks JS** — sem React, sem Vue, sem HTMX.

---

## Estrutura de Pastas

```text
lagoa-park-hotel-site/
├── html/                        # Arquivos do site (editar aqui)
│   ├── index.html
│   ├── galeria-360.html
│   ├── grupos.html
│   ├── script.js
│   ├── src/
│   │   └── input.css            # Fonte do CSS (editar aqui)
│   ├── dist/
│   │   └── styles.css           # Gerado pelo Tailwind — não editar
│   ├── dev.bat                  # Watch mode (desenvolvimento)
│   └── build.bat                # Build minificado (produção)
├── assets/
│   ├── img/                     # Imagens do site
│   │   ├── CATALOGO-IMAGENS.md  # Catálogo com 113 imagens mapeadas
│   │   ├── home/
│   │   ├── quartos/
│   │   ├── restaurante/
│   │   ├── grupos/
│   │   ├── blog/
│   │   ├── faq/
│   │   ├── contato/
│   │   └── logo/
│   └── lib/
│       └── pannellum/           # Biblioteca 360° local
├── documentos/                  # Documentação do projeto
│   ├── brand-system.md          # Cores, tipografia, tom de voz
│   ├── copy-completa.md         # Textos oficiais de todas as seções
│   ├── estrutura-site.md        # Sitemap e wireframes
│   ├── galeria-360.md           # Status e instruções da galeria 360°
│   └── analise-site-atual.md    # Legado — diagnóstico do site antigo
├── PROJETO.md                   # Log completo: o que foi feito e o que falta
├── CLAUDE.md                    # Instruções para o Claude Code
└── README.md                    # Este arquivo
```

---

## Como Desenvolver

### Pré-requisitos

- [Tailwind CSS CLI](https://tailwindcss.com/docs/installation) (já incluso em `html/tools/tailwindcss.exe`)
- Servidor local (recomendado: [XAMPP](https://www.apachefriends.org/))

### Rodando em Desenvolvimento

1. Copie os arquivos de `html/` para o XAMPP:

   ```text
   C:\...\xampp\htdocs\lagoa-park-hotel-site\
   ```

2. Acesse `http://localhost/lagoa-park-hotel-site/`

3. Para compilar o CSS automaticamente durante edição:

   ```bat
   cd html
   dev.bat
   ```

### Build para Produção

```bat
cd html
build.bat
```

Gera `dist/styles.css` minificado. **Nunca editar `dist/styles.css` diretamente.**

---

## Configurações Críticas

| Item              | Status          | Detalhe                                                                              |
| ----------------- | --------------- | ------------------------------------------------------------------------------------ |
| Motor de reservas | ⏳ Pendente     | URL da Foco Multimídia não disponível — placeholder em `script.js` → `abrirReservas()` |
| WhatsApp          | ✅ Configurado  | (83) 3015-1414 — `wa.me/558330151414`                                               |
| Google Analytics  | ⏳ Pendente     | GA4 ainda não configurado                                                            |
| SSL/HTTPS         | ⏳ Pendente     | Configurar no servidor de produção                                                   |

---

## Checklist Pré-Deploy

- [ ] Substituir URL do motor de reservas (Foco Multimídia)
- [ ] Adicionar fotos reais dos apartamentos em `assets/img/quartos/`
- [ ] Completar fotos 360° (18 de 23 pendentes — ver `documentos/galeria-360.md`)
- [ ] Otimizar imagens para WebP (qualidade 85)
- [ ] Atualizar links de redes sociais no footer
- [ ] Configurar Google Analytics GA4
- [ ] Testar formulário de reserva rápida
- [ ] Validar HTML: [validator.w3.org](https://validator.w3.org)
- [ ] Testar performance: [pagespeed.web.dev](https://pagespeed.web.dev)
- [ ] Configurar SSL/HTTPS no servidor

---

## Documentação

| Documento                                                               | Conteúdo                                            |
| ----------------------------------------------------------------------- | --------------------------------------------------- |
| [PROJETO.md](PROJETO.md)                                                | Log completo — o que foi feito, pendências e histórico |
| [documentos/brand-system.md](documentos/brand-system.md)               | Cores, tipografia, tom de voz, logo                 |
| [documentos/copy-completa.md](documentos/copy-completa.md)             | Textos oficiais de todas as seções                  |
| [documentos/estrutura-site.md](documentos/estrutura-site.md)           | Sitemap, wireframes, interações                     |
| [documentos/galeria-360.md](documentos/galeria-360.md)                 | Galeria 360°: fotos, status, como adicionar         |
| [assets/img/CATALOGO-IMAGENS.md](assets/img/CATALOGO-IMAGENS.md)       | 113 imagens mapeadas com nomes e caminhos           |

> Documentos de negócio (dossier, reputação, concorrentes, briefing fotográfico, roteiro histórico) foram movidos para o repositório privado `lagoa-park-hotel/`.

---

## Contato

**Lagoa Park Hotel**  
Centro, João Pessoa — PB  
E-mail: [gerencia@lagoaparkhotel.com.br](mailto:gerencia@lagoaparkhotel.com.br)  
WhatsApp: (83) 3015-1414
