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
├── original_backup        # Backup
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

## Page Structure Strategy

### Template Files Purpose

1. **`index.html`** - Projects Showcase (Main Page) - "Home" section

    - **Fullscreen Intro** - Name + tagline splash screen
    - **Featured Section** - About Me TL;DR (3-4 sentences + image)
        - Links to `about.html` via "Read Full Story" button
        - Functions as brief professional summary
        - Image: Professional photo or workspace shot
    - **Project Grid** - 6+ project showcases
        - Each links to individual `project-*.html` detail pages

    - Multi-column grid layout for project portfolio
    - Featured project section (hero position)
    - 6+ project cards in grid layout
    - Built-in pagination UI
    - **Usage**: Main landing page, no duplication needed

2. **`generic.html`** - Single-Column Content Template
   - Clean single-column layout for long-form content
   - **Usage**: Duplicate for each content page needed
   - Create `about.html` (copy of generic.html)
   - Create `project-detail-*.html` (one copy per project)

3. **`elements.html`** - UI Component Reference
   - Complete showcase of available HTML/CSS components
   - Contains: forms, buttons, tables, lists, images, icons, etc.
   - **Usage**: Developer reference only - DO NOT use as content page
   - Keep in repo but hide from public navigation

### Site Architecture
```
index.html (Projects Grid)
├── about.html (from generic.html)
├── project-ml-classifier.html (from generic.html)
├── project-react-dashboard.html (from generic.html)
├── project-api-tool.html (from generic.html)
└── [more project pages as needed]
```

### Navigation Structure
Update in ALL HTML files:
```html
<ul class="links">
  <li><a href="index.html">Home</a></li>
  <li><a href="about.html">About</a></li>
</ul>
```

### Content Templates

#### Index.html - Project Card Structure
```html
<article class="post featured">
  <header>
    <span class="date">January 2026</span>
    <h2><a href="project-name.html">Project Title</a></h2>
    <p>2-3 sentence summary (under 50 words)</p>
  </header>
  <a href="project-name.html" class="image main">
    <img src="images/project-hero.jpg" alt="" />
  </a>
  <ul class="actions special">
    <li><a href="project-name.html" class="button large">View Details</a></li>
  </ul>
</article>

<section class="posts">
  <article>
    <header>
      <span class="date">December 2025</span>
      <h2><a href="project-2.html">Project 2</a></h2>
    </header>
    <a href="project-2.html" class="image fit">
      <img src="images/project-2.jpg" alt="" />
    </a>
    <p>Brief description...</p>
    <ul class="actions special">
      <li><a href="project-2.html" class="button">View Project</a></li>
    </ul>
  </article>
  <!-- Repeat for more projects -->
</section>
```

#### About.html (from generic.html)
```html
<section class="post">
  <header class="major">
    <h1>About Me</h1>
  </header>
  <p>Professional summary paragraph...</p>
  <p>Technical background and expertise...</p>
  
  <h2>Technical Skills</h2>
  <ul>
    <li>Languages: Python, JavaScript, Java</li>
    <li>Frameworks: React, Node.js, Flask</li>
    <li>Tools: Git, Docker, AWS</li>
  </ul>
  
  <h2>Experience</h2>
  <p>Work history and achievements...</p>
  
  <h2>Education</h2>
  <p>Degrees and certifications...</p>
</section>
```

#### Project Detail (from generic.html)
```html
<section class="post">
  <header class="major">
    <span class="date">January 2026</span>
    <h1>Project Title</h1>
    <p>Tech Stack: Python • TensorFlow • Flask • AWS</p>
  </header>
  
  <span class="image fit">
    <img src="images/project-hero.jpg" alt="" />
  </span>
  
  <h2>The Challenge</h2>
  <p>Problem statement and context...</p>
  
  <h2>Solution & Implementation</h2>
  <p>Technical approach and architecture decisions...</p>
  <ul>
    <li>Key technical decision 1</li>
    <li>Key technical decision 2</li>
  </ul>
  
  <h2>Results & Impact</h2>
  <ul>
    <li>Metric 1: 94% accuracy achieved</li>
    <li>Metric 2: 500+ active users</li>
    <li>Metric 3: 50% performance improvement</li>
  </ul>
  
  <ul class="actions">
    <li><a href="https://github.com/username/repo" class="button icon brands fa-github">View Code</a></li>
    <li><a href="https://demo-url.com" class="button primary">Live Demo</a></li>
  </ul>
</section>
```

## Current State
Clean HTML5 UP template ready for content customization. Contains placeholder text, demo images, and inactive form/social links.

## Implementation Roadmap

### Phase 1: Structure Setup
- [ ] Duplicate `generic.html` → `about.html`
- [ ] Create project detail pages from `generic.html` (one per project)
- [ ] Update navigation in all HTML files
- [ ] Remove/hide `elements.html` from navigation

### Phase 2: Content Creation
- [ ] Write About page content (bio, skills, experience)
- [ ] Draft 5-7 project descriptions for index.html
- [ ] Create detailed project pages for each showcase
- [ ] Gather/create all project images (1 hero bg + 7+ project screenshots)

### Phase 3: Configuration
- [ ] Replace background image (`images/bg.jpg`)
- [ ] Update header logo/title
- [ ] Configure contact form action (Formspree or similar)
- [ ] Add real social media links
- [ ] Update meta tags (title, description, og:image)

### Phase 4: Polish & Deploy
- [ ] Test responsive design on mobile/tablet
- [ ] Verify all internal links work
- [ ] Add favicon
- [ ] Push to GitHub Pages (`main` branch)
- [ ] Configure custom domain (optional)

## Content Guidelines

### Project Descriptions
- Keep summaries under 50 words per card
- Focus on **results** over technology lists
- Use metrics when possible (e.g., "94% accuracy", "500+ users")
- Include call-to-action ("View Details", "See Demo")

### Image Requirements
- Hero background: 1920x1080px (professional/tech-themed)
- Project screenshots: 800x600px minimum
- Optimize for web (use compressed JPG/PNG)
- Use consistent image styling across projects

### Links to Update
- Navigation menu items (all pages)
- Social media icons (header + footer)
- Project cards → detail pages
- GitHub/demo buttons on project pages
- Contact form action endpoint
