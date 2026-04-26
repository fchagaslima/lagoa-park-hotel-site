# DESIGN.md — Site Lagoa Park Hotel

As diretrizes de marca e design são definidas pelo Marketing:

**[`../lagoa-park-hotel/marketing/DESIGN.md`](../lagoa-park-hotel/marketing/DESIGN.md)**

Consulte esse arquivo para: paleta de cores, tipografia, logo, tom de voz, posicionamento e público-alvo.

---

## Implementação técnica — exclusiva do site

O que está abaixo é específico da implementação HTML/Tailwind. Não se aplica a outros canais.

### Princípio de Design

> O minimalismo aqui não é ausência de design — é **disciplina**.
> Cada elemento deve ter função. Cada seção deve respirar.

### Espaçamento

```css
/* Sistema de espaçamento baseado em 8px */
--space-xs:  8px;
--space-sm:  16px;
--space-md:  24px;
--space-lg:  40px;
--space-xl:  64px;
--space-2xl: 96px;
--space-3xl: 128px;
```

### Componentes Prioritários

```text
Header fixo com logo + CTA de reserva sempre visível
Hero com foto de alta qualidade e overlay navy suave
Cards de apartamentos com hover suave (sem efeito excessivo)
Botão CTA principal: fundo terracota, texto off-white
Botão secundário: borda navy, texto navy, fundo transparente
Footer: fundo navy, texto off-white, acento terracota nos links hover
```

### Botões

```css
.btn-primary {
  background-color: #C0603A;
  color: #F5F3EE;
  font-family: 'Outfit', sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 14px 28px;
  border-radius: 4px;
  border: none;
}

.btn-secondary {
  background-color: transparent;
  color: #1B2F5E;
  border: 1.5px solid #1B2F5E;
}

.btn-outline-light {
  background-color: transparent;
  color: #F5F3EE;
  border: 1.5px solid #F5F3EE;
}
```

### Animações e Transições

- `transition: all 0.2s ease` para hovers
- Fade-in ao rolar: `opacity: 0 → 1`, `translateY(12px) → 0`
- Evitar: parallax pesado, animações chamativas, autoplay agressivo

### Responsividade

**Mobile-first.** Breakpoints:

```text
sm: 640px  |  md: 768px  |  lg: 1024px  |  xl: 1280px
```

### Performance e SEO

- Imagens **WebP** com fallback JPEG; lazy loading fora do viewport
- Fonte via Google Fonts com `display=swap`
- Meta tags: "hotel centro João Pessoa", "hotel frente à Lagoa Sólon de Lucena"
- Schema.org: `Hotel` e `LodgingBusiness`
