# Project Summary

## Goal
Personal portfolio website to showcase professional experience, education, projects, and technical skills.

## Technology Stack
- **Template**: HTML5 UP "Massively" - Article-oriented responsive design
- **Frontend**: HTML5, CSS3, JavaScript (jQuery)
- **Styling**: Custom SCSS (pre-compiled), Font Awesome icons
- **Libraries**: jQuery, Scrollex (parallax/scroll effects), Scrolly (smooth scroll)
- **Deployment**: GitHub Pages
- **Build**: No build process required (pre-compiled assets)

## Project Structure
```
raydiwill.github.io/
├── index.html              # Main portfolio page
├── generic.html            # Generic content template
├── elements.html           # UI elements reference
├── assets/
│   ├── css/               # Pre-compiled stylesheets (main.css, noscript.css)
│   ├── js/                # Minified JavaScript libraries and scripts
│   ├── sass/              # SCSS source files (for customization)
│   └── webfonts/          # Font Awesome web fonts
└── images/                # Background and content images
```

## Key Features
1. **Responsive Design**: Mobile-first, fluid layouts with breakpoint-based adaptations
2. **Parallax Background**: Huge background image with scroll effects
3. **Article Layout**: Post-style content blocks with featured images
4. **Navigation**: Fixed header with smooth scrolling, social media links
5. **Contact Form**: Simple form in footer (needs action endpoint configuration)
6. **Pagination**: Multi-page navigation UI
7. **Scroll Effects**: Powered by Scrollex for smooth animations

## Design System
- **Theme**: Dark, text-heavy, article-oriented design
- **Typography**: Sans-serif font stack, hierarchical heading system
- **Layout**: Full-width background, centered content container
- **Components**: Article cards, image overlays, icon buttons, form elements
- **Effects**: Fade-in animations, parallax scrolling, hover transitions
- **Colors**: Dark background, white text, customizable via SCSS variables

## Customization
SCSS source files located in `assets/sass/` for theming:
- `libs/_vars.scss` - Color palette, spacing, breakpoints
- `layout/` - Structural components (header, footer, nav, etc.)
- `components/` - UI elements (buttons, forms, images, etc.)

Requires SASS compiler if modifications needed.

## Current State
Clean HTML5 UP template ready for content customization. Contains placeholder text, demo images, and inactive form/social links. 
