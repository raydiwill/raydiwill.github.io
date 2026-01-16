# Project Summary

## Goal
Personal portfolio website to showcase professional experience, education, projects, and technical skills.

## Technology Stack
- **Template**: HTML5 UP "Massively" - Article-oriented responsive design
- **Frontend**: HTML5, CSS3, JavaScript (jQuery)
- **Styling**: Custom SCSS (pre-compiled), Font Awesome icons
- **Libraries**: jQuery, Scrollex (parallax/scroll effects), Scrolly (smooth scroll)
- **Form Backend**: Formspree (AJAX submissions, no redirect)
- **Deployment**: GitHub Pages (Live at raydiwill.github.io)
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
3. **Project Showcase**: 4 live projects with GitHub links and custom images
4. **Navigation**: Fixed header with smooth scrolling, 5 social media platforms
5. **Contact Form**: Formspree integration with AJAX submission (no redirect)
6. **Scroll Effects**: Powered by Scrollex for smooth animations
7. **Professional Branding**: Custom favicon, resume link, personalized bio

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

## Deployment Information

### Live Site
- **URL**: https://raydiwill.github.io
- **Status**: ✅ Live and functional
- **Hosting**: GitHub Pages
- **Branch**: master
- **Last Updated**: January 2026

### Repository Structure
```
raydiwill.github.io/
├── index.html              # Main portfolio page (✅ Complete)
├── about.html              # About page (⏳ Needs content)
├── elements.html           # UI reference (kept for dev)
├── assets/
│   ├── css/               # Pre-compiled stylesheets
│   ├── js/                # jQuery libraries + utilities
│   └── webfonts/          # Font Awesome fonts
├── images/                # Project images + favicon
│   ├── favicon.ico
│   ├── prof_hero.webp
│   ├── stock.webp
│   ├── telecom.webp
│   ├── bank.webp
│   └── bot.webp
└── original_backup/       # Template backups
```

### Next Steps for Full Launch
1. **Content Completion**
   - Write About page content
   - Add project detail pages (optional - currently link to GitHub)
   - Update page titles and meta descriptions

2. **SEO Optimization**
   - Add meta description tags
   - Add Open Graph tags for social sharing
   - Create sitemap.xml
   - Add robots.txt

3. **Performance Optimization**
   - Already using WebP images ✅
   - Consider lazy loading for images
   - Test page speed with Lighthouse

4. **Analytics** (Optional)
   - Add Google Analytics
   - Track form submissions
   - Monitor project link clicks

## Current State
**Status**: Live and deployed on GitHub Pages

### Completed Features ✅
1. **Personal Branding**
   - Custom page title: "Raydi TRAN"
   - Favicon configured (images/favicon.ico)
   - Intro section with personalized tagline
   - Professional hero image (prof_hero.webp)

2. **Navigation & Links**
   - Header: Resume link → raydiwill.github.io/resume/resume.pdf
   - Navigation menu: Home, About
   - Social media icons (4 platforms):
     - GitHub: raydiwill
     - LinkedIn: kduongtran
     - Medium: @duong.tranhn1102
     - Instagram: mrraydi
   - All links open in new tabs (target="_blank")

3. **Featured About Section**
   - Custom headline: "I want things to work / Free of bugs during weekend"
   - Professional bio highlighting:
     - Role: Analytics Engineer (1+ YOE in Adtech)
     - Skills: Airflow/SQL, FastAPI/Docker, ELT pipelines
   - CTA button links to about.html

4. **Project Showcase (4 Live Projects)**
   - **Stock Price Movement Prediction**
     - GitHub: raydiwill/stock-prediction-ml
     - Image: stock.webp
     - Description: End-to-end MLOps platform
   
   - **Deep Learning Churn Prediction (Telecoms)**
     - GitHub: raydiwill/dsa-4-action-learning
     - Image: telecom.webp
     - Description: MVP with state-of-the-art deep learning
   
   - **Customer Bank Churn Prediction**
     - GitHub: raydiwill/customers-churn-ml-app
     - Image: bank.webp
     - Description: Web application with ML
   
   - **LinkedIn Job Scraper Bot**
     - GitHub: raydiwill/linkedin_job_scraper
     - Image: bot.webp
     - Description: Automated job posting scraper

5. **Contact Form (Functional)**
   - Service: Formspree (form ID: xnjjngzg)
   - AJAX submission (no page redirect)
   - Success/error notifications (green/red pop-ups)
   - Auto-clears after 5 seconds
   - Fields: Name, Email, Message (all required)
   - Email delivery to: duong.tranhn1102@gmail.com

6. **Footer Contact Information**
   - Location: Île-de-France, France
   - Phone: (+33) 6 62 48 81 52
   - Email: duong.tranhn1102@gmail.com
   - Social links (5 platforms): LinkedIn, GitHub, Medium, Facebook, Instagram

7. **Images & Assets**
   - Custom project images (4 webp files: stock, telecom, bank, bot)
   - Professional hero image (prof_hero.webp)
   - Favicon (favicon.ico)
   - All optimized for web performance

8. **Design Customizations**
   - Inline font-size adjustment for main headline (2.5rem)
   - Pagination section hidden (commented out)
   - Dark theme with cyan accent colors maintained

### Pending Tasks ⏳
- [ ] Complete About page content (about.html still has placeholder)
- [ ] Add project detail pages (currently links go to GitHub repos)
- [ ] Update page meta tags (description, og:image for social sharing)
- [ ] Consider adding more projects (currently 4 showcased)
- [ ] Test mobile responsiveness thoroughly
- [ ] Add Google Analytics (optional)

## Implementation Roadmap

### Phase 1: Structure Setup ✅ COMPLETED
- [x] Update personal information (name, title, bio)
- [x] Configure favicon
- [x] Update navigation links
- [x] Add social media links (GitHub, LinkedIn, Medium, Instagram, Facebook)
- [x] Customize intro section
- [x] Update resume link

### Phase 2: Content Creation ✅ COMPLETED
- [x] Write professional bio for featured section
- [x] Add 4 project cards with descriptions:
  - Stock Price Prediction (MLOps)
  - Telecom Churn Prediction (Deep Learning)
  - Banking Churn Prediction (ML Web App)
  - LinkedIn Job Scraper (Automation)
- [x] Generate/add project images (stock.webp, telecom.webp, bank.webp, bot.webp)
- [x] Add professional hero image (prof_hero.webp)
- [ ] Complete About page content (placeholder remains)

### Phase 3: Configuration ✅ COMPLETED
- [x] Add favicon (images/favicon.ico)
- [x] Configure contact form with Formspree
- [x] Implement AJAX form submission (no redirect)
- [x] Add success/error notifications
- [x] Update contact information (address, phone, email)
- [x] Link all social media profiles
- [x] Update copyright section

### Phase 4: Polish & Deploy ✅ COMPLETED
- [x] Test form functionality
- [x] Verify all external links open in new tabs
- [x] Hide pagination section
- [x] Deploy to GitHub Pages
- [ ] Test responsive design on mobile/tablet
- [ ] Add meta tags for SEO
- [ ] Configure custom domain (if desired)

## Content Guidelines

### Project Descriptions ✅ Implemented
- Keep summaries under 50 words per card
- Focus on **results** over technology lists
- Include GitHub repo links
- Each project has dedicated call-to-action button

### Image Requirements ✅ Completed
- Hero image: prof_hero.webp (professional photo)
- Project images: stock.webp, telecom.webp, bank.webp, bot.webp
- All images optimized for web (WebP format)
- Consistent dark theme with cyan accents

### Links Configuration ✅ Completed
- Navigation: Home, About
- Social media: GitHub, LinkedIn, Medium, Instagram, Facebook (all target="_blank")
- Project cards: Direct GitHub repo links
- Resume: Hosted on raydiwill.github.io/resume/resume.pdf
- Contact form: Formspree endpoint active

### Technical Improvements Made
1. **Form UX Enhancement**
   - AJAX submission prevents page redirect
   - Inline success/error notifications (green/red)
   - Auto-hide messages after 5 seconds
   - Button state management (disabled while sending)

2. **Navigation Fixes**
   - All external links open in new tabs
   - target="_blank" properly placed on <a> tags (not <span>)

3. **Design Customizations**
   - Custom headline font size (2.5rem)
   - Pagination hidden for cleaner look
   - Professional disclaimer added to featured section
