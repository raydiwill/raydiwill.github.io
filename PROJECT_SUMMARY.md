# Project Summary

## Instructions for All Future Interactions
- **Goal**: Help build a fully functional portfolio website
- **Communication**: Every response must be clear and concise
- **Approach**: Suggesting changes and let user review first before implementing it
- **Format**: Follow CV-like structure with company context + role summary + achievements

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
├── about.html              # Personal bio and photo gallery
├── experience.html         # Professional experience, education, skills
├── elements.html           # UI elements reference (dev only)
├── assets/
│   ├── css/               # Pre-compiled stylesheets (main.css, noscript.css)
│   ├── js/                # Minified JavaScript libraries and scripts
│   ├── sass/              # SCSS source files (for customization)
│   └── webfonts/          # Font Awesome web fonts
├── images/
│   ├── projects/          # Project preview images
│   ├── me/                # Personal photo gallery (4 portrait images)
│   └── gallery/           # Additional image assets
└── original_backup/       # Template backups
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
├── about.html              # Personal story & gallery (✅ Complete)
├── experience.html         # Professional timeline (✅ Complete)
├── elements.html           # UI reference (kept for dev)
├── assets/
│   ├── css/               # Pre-compiled stylesheets
│   ├── js/                # jQuery libraries + utilities
│   └── webfonts/          # Font Awesome fonts
├── images/                # Project images + favicon
│   ├── favicon.ico
│   ├── prof_hero.webp
│   ├── projects/          # Project screenshots
│   │   ├── stock.webp
│   │   ├── telecom.webp
│   │   ├── bank.webp
│   │   └── bot.webp
│   └── me/                # Personal photos (me1-4.webp)
└── original_backup/       # Template backups
```Enhancement** (Optional)
   - Add project detail pages (currently link to GitHub repos)
   - Add blog section for technical articles
   - Create case studies for key projects

2. **SEO Optimization**
   - Add meta description tags
   - Add Open Graph tags for social sharing
   - Create sitemap.xml
   - Add robots.txt

3. **Performance Optimization**
   - Already using WebP images ✅
   - Consider lazy loading for images
   - Test page speed with Lighthouse
   - Optimize JavaScript bundles

4. **Analytics** (Optional)
   - Add Google Analytics or Plausible
   - Track form submissions
   - Monitor project link clicks
   - A/B test CTA button
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

2. **Navigation & Links**, Experience
   - Social media icons (5 platforms):
     - GitHub: raydiwill
     - LinkedIn: kduongtran
     - Medium: @duong.tranhn1102
     - Instagram: mrraydi
     - Facebook: MrRaydi
   - All links open in new tabs with security (rel="noopener noreferrer
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
9. **About Page (✅ Complete)**
   - Personal bio with company links (EPITA, Viettel Group, Adikteev)
   - Career journey narrative (6 paragraphs with emojis)
   - Bold highlighting of key skills and achievements
   - Photo gallery section (4 portrait images in grid layout)
   - Professional but personable tone

10. **Experience Page (✅ Complete)**
   - **Work Experience** (2 positions):
     - **Analytics Engineer @ Adikteev** (June 2024 - Present)
       - Company context paragraph explaining ad-tech industry
       - Blockquote highlighting main focus
       - Split into two roles: CDD (Dec 2024-Present) and Intern (June-Dec 2024)
       - 8 achievement bullets covering data pipelines, automation, incident resolution
     - **Associate Data Analyst @ Viettel Group** (April-June 2022)
       - Company context explaining telecom/defense conglomerate
       - Blockquote for role summary
       - 3 bullets on ML evaluation, SQL analysis, churn prediction research
   
   - **Education** (2 degrees):
     - **M.Sc. Computer Science** - EPITA, Paris (March 2023 - Dec 2024)
       - GPA: 16.11/20
       - Specialization: Data Science & Analytics
       - 2 capstone projects with GitHub links (telecom churn, bank churn)
     - **B.Sc. Cyber Security** - USTH, Hanoi (August 2018 - Nov 2021)
       - GPA: 15.32
       - Graduated with Distinction
       - Merit scholarship, active student recognition
       - Thesis on OSINT-based cyber threat intelligence
   
   - **Certifications** (6 total, organized in 2 columns):
     - **Data Analytics**: Google Data Analytics Professional (Coursera), Data Analyst Associate (DataCamp), Data Analyst with R (DataCamp)
     - **Data Science**: Data Scientist Professional (DataCamp), Data Scientist Associate (DataCamp), Learn R Course (Codecademy)
   
   - **Technical Skills** (3-column grid):
     - Languages: Python, SQL, JavaScript, R, C/C++, Java, HTML/CSS
     - Frameworks & Tools: Airflow, FastAPI, Docker, MLFlow, Scikit-learn, Pandas/Polars, Grafana, Streamlit, XGBoost/Catboost/LightGBM
     - Data & Cloud: AWS, GCP, PostgreSQL, MongoDB, Redshift, Trino, Apache Hive, Snowflake
   
   - **Design Pattern**:
     - Company context paragraph (industry + scale)
     - Blockquote for role summary/main focus
     - Bulleted achievements with metrics
     - Consistent cyan accent borders and Font Awesome icons

### Pending Tasks ⏳
- [ ] Test mobile responsiveness thoroughly
- [ ] Add page meta tags for SEO (description, og:image for social sharing)
- [ ] Add Google Analytics (optional)
- [ ] Add project detail pages (optional - currently links go to GitHub repos)
- [ ] Consider adding blog section (optional)

## Implementation Roadmap

### Phase 1: Structure Setup ✅ COMPLETED
- [x] Complete About page content with personal story
- [x] Add Experience page with work history and education
- [x] Create photo gallery (4 personal portrait image
- [x] Configure favicon
- [x] Update navigation links
- [x] Add social media links (GitHub, LinkedIn, Medium, Instagram, Facebook)
- [x] Customize intro section
- [x] Update resume link

### Phase 2: Content Creation ✅ COMPLETED
- [x] Write professional bio for featured section
- [x] Add 4 project cards with descriptions:
  - Stock Price Prediction (MLOps)
  - Telecom Churn Prediction (Deep Learning) with security attributes
- [x] Hide pagination section
- [x] Deploy to GitHub Pages (Stock Prediction, Telecom Churn, Bank Churn, LinkedIn Scraper)
- [x] Generate/add project images (stock.webp, telecom.webp, bank.webp, bot.webp)
- [x] Add professional hero image (prof_hero.webp)
- [x] Complete About page content with personal story
- [x] Complete Experience page with actual work history and education
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

4. **Security Best Practices**
   - All external links use rel="noopener noreferrer"
   - Prevents reverse tabnabbing attacks
   - Protects referrer privacy

5. **About Page Enhancements**
   - Emoji-prefixed paragraphs for visual interest
   - Bold formatting for key skills and companies
   - External links to EPITA, Viettel Group, Adikteev
   - Portrait photo gallery (4 images in responsive grid)
   - 3-language fluency highlighted (English, French, Vietnamese)

6. **Experience Page Features**
   - Visual hierarchy with Font Awesome icons
   - Boxed layout for each entry with cyan accent borders
   - Blockquotes highlighting role summaries
   - Alternate lists for cleaner bullet points
   - Grid layouts for certifications and skills
   - Sample data for prototyping (ready to replace)
- Social media: GitHub, LinkedIn, Medium, Instagram, Facebook (all target="_blank")
- Project cards: Direct GitHub repo links
- Resume: Hosted on raydiwill.github.io/resume/resume.pdf
- Contact form: Formspree endpoint active
CV-like structure: company context → role summary → achievements
   - Visual hierarchy with Font Awesome icons
   - Boxed layout for each entry with cyan accent borders
   - Blockquotes highlighting role summaries/main focus
   - Alternate lists for cleaner bullet points
   - Grid layouts for certifications and skills
   - Real data from actual work experience at Adikteev and Viettel
   - Actual certifications from Google/DataCamp/Codecademy
   - Button state management (disabled while sending)

2. **Navigation Fixes**
   - All external links open in new tabs
   - target="_blank" properly placed on <a> tags (not <span>)

3. **Design Customizations**
   - Custom headline font size (2.5rem)
   - Pagination hidden for cleaner look
   - Professional disclaimer added to featured section
