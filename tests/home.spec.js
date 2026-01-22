const { test, expect } = require('@playwright/test');

// Base URL - Change based on environment
// Local development: VS Code Live Server on port 5500
// CI/CD: use environment variable
// Production: 'https://raydiwill.github.io'
const BASE_URL = process.env.BASE_URL || 'http://localhost:5500';

// ==========================================
// 1. BASIC PAGE LOAD TESTS
// ==========================================

test.describe('Home Page - Basic Loading', () => {
  test('should load successfully with correct title', async ({ page }) => {
    await page.goto(BASE_URL);
    
    // Check if page title is correct
    await expect(page).toHaveTitle('Raydi TRAN');
  });

  test('should display hero section with name', async ({ page }) => {
    await page.goto(BASE_URL);
    
    // Check if hero heading contains your name
    const heroHeading = page.locator('#intro h1');
    await expect(heroHeading).toContainText('Khanh Duong TRAN');
  });

  test('should display tagline in hero section', async ({ page }) => {
    await page.goto(BASE_URL);
    
    // Check if your tagline is visible
    const tagline = page.locator('#intro p');
    await expect(tagline).toContainText('Machine learning Engineer');
    await expect(tagline).toContainText('Photographer');
  });
});

// ==========================================
// 2. NAVIGATION TESTS
// ==========================================

test.describe('Navigation', () => {
  test('should have all navigation links', async ({ page }) => {
    await page.goto(BASE_URL);
    
    // Check if all nav links exist
    const homeLink = page.locator('nav a[href="index.html"]');
    const aboutLink = page.locator('nav a[href="about.html"]');
    const experienceLink = page.locator('nav a[href="experience.html"]');
    const galleryLink = page.locator('nav a[href="gallery.html"]');
    
    await expect(homeLink).toBeVisible();
    await expect(aboutLink).toBeVisible();
    await expect(experienceLink).toBeVisible();
    await expect(galleryLink).toBeVisible();
  });

  test('should have resume link in header', async ({ page }) => {
    await page.goto(BASE_URL);
    
    // The logo is initially hidden by CSS and only shows after scrolling
    // Test that it exists in the DOM with correct attributes
    const resumeLink = page.locator('#header a.logo[href*="resume.pdf"]');
    
    // Check if link exists in DOM (not necessarily visible due to scroll effect)
    await expect(resumeLink).toHaveCount(1);
    await expect(resumeLink).toHaveText('My Resume');
    await expect(resumeLink).toHaveAttribute('target', '_blank');
    await expect(resumeLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  test('should navigate to About page', async ({ page }) => {
    await page.goto(BASE_URL);
    
    // Click About link and wait for navigation
    await page.click('nav a[href="about.html"]');
    await page.waitForURL(/about\.html/); // Add explicit wait
    await expect(page).toHaveURL(/about\.html/);
  });
});

// ==========================================
// 3. PROJECT CARDS TESTS
// ==========================================

test.describe('Project Showcase', () => {
  test('should display all 4 project cards', async ({ page }) => {
    await page.goto(BASE_URL);
    
    // Count project articles in the posts section
    const projectCards = page.locator('.posts article');
    await expect(projectCards).toHaveCount(4);
  });

  test('should display stock prediction project', async ({ page }) => {
    await page.goto(BASE_URL);
    
    // Check if first project is visible with correct link
    const stockProject = page.locator('a[href="https://github.com/raydiwill/stock-prediction-ml"]').first();
    await expect(stockProject).toBeVisible();
    await expect(stockProject).toContainText('Stock price movement');
  });

  test('should display telecom churn project', async ({ page }) => {
    await page.goto(BASE_URL);
    
    const telecomProject = page.locator('a[href="https://github.com/raydiwill/dsa-4-action-learning"]').first();
    await expect(telecomProject).toBeVisible();
    await expect(telecomProject).toContainText('Deep learning churn');
  });

  test('should display bank churn project', async ({ page }) => {
    await page.goto(BASE_URL);
    
    const bankProject = page.locator('a[href="https://github.com/raydiwill/customers-churn-ml-app"]').first();
    await expect(bankProject).toBeVisible();
    await expect(bankProject).toContainText('Customer bank');
  });

  test('should display LinkedIn scraper project', async ({ page }) => {
    await page.goto(BASE_URL);
    
    const scraperProject = page.locator('a[href="https://github.com/raydiwill/linkedin_job_scraper"]').first();
    await expect(scraperProject).toBeVisible();
    await expect(scraperProject).toContainText('LinkedIn job');
  });

  test('all project images should be present', async ({ page }) => {
    await page.goto(BASE_URL);
    
    // Check if all project images are loaded
    const projectImages = page.locator('.posts article img');
    await expect(projectImages).toHaveCount(4);
  });
});

// ==========================================
// 4. CONTACT FORM TESTS
// ==========================================

test.describe('Contact Form', () => {
  test('should display contact form with all fields', async ({ page }) => {
    await page.goto(BASE_URL);
    
    // Check if form exists
    const form = page.locator('#contact-form');
    await expect(form).toBeVisible();
    
    // Check if all form fields exist
    await expect(page.locator('#name')).toBeVisible();
    await expect(page.locator('#email')).toBeVisible();
    await expect(page.locator('#message')).toBeVisible();
  });

  test('form fields should have correct labels', async ({ page }) => {
    await page.goto(BASE_URL);
    
    // Check if labels are correct
    await expect(page.locator('label[for="name"]')).toContainText('Name');
    await expect(page.locator('label[for="email"]')).toContainText('Email');
    await expect(page.locator('label[for="message"]')).toContainText('Message');
  });

  test('should have submit button', async ({ page }) => {
    await page.goto(BASE_URL);
    
    const submitButton = page.locator('input[type="submit"]');
    await expect(submitButton).toBeVisible();
    await expect(submitButton).toHaveValue('Send Message');
  });

  test('form should have required fields', async ({ page }) => {
    await page.goto(BASE_URL);
    
    // Check if fields have 'required' attribute
    await expect(page.locator('#name')).toHaveAttribute('required', '');
    await expect(page.locator('#email')).toHaveAttribute('required', '');
    await expect(page.locator('#message')).toHaveAttribute('required', '');
  });
});

// ==========================================
// 5. SOCIAL MEDIA LINKS TESTS
// ==========================================

test.describe('Social Media Links', () => {
  test('should have GitHub link in navigation', async ({ page }) => {
    await page.goto(BASE_URL);
    
    const githubLink = page.locator('nav a[href="https://github.com/raydiwill"]');
    await expect(githubLink).toBeVisible();
  });

  test('should have LinkedIn link in navigation', async ({ page }) => {
    await page.goto(BASE_URL);
    
    const linkedinLink = page.locator('nav a[href="https://www.linkedin.com/in/kduongtran/"]');
    await expect(linkedinLink).toBeVisible();
  });

  test('should have Medium link in navigation', async ({ page }) => {
    await page.goto(BASE_URL);
    
    const mediumLink = page.locator('nav a[href="https://medium.com/@duong.tranhn1102"]');
    await expect(mediumLink).toBeVisible();
  });

  test('should have Instagram link in navigation', async ({ page }) => {
    await page.goto(BASE_URL);
    
    const instagramLink = page.locator('nav a[href="https://www.instagram.com/mrraydi/"]');
    await expect(instagramLink).toBeVisible();
  });

  test('should have all social links in footer', async ({ page }) => {
    await page.goto(BASE_URL);
    
    // Check footer social links
    const footerSocialLinks = page.locator('#footer .icons.alt a');
    await expect(footerSocialLinks).toHaveCount(5); // LinkedIn, GitHub, Medium, Facebook, Instagram
  });
});

// ==========================================
// 6. FOOTER CONTACT INFO TESTS
// ==========================================

test.describe('Footer Contact Information', () => {
  test('should display address', async ({ page }) => {
    await page.goto(BASE_URL);
    
    const address = page.locator('#footer .split.contact').getByText('Île-de-France, France');
    await expect(address).toBeVisible();
  });

  test('should display phone number', async ({ page }) => {
    await page.goto(BASE_URL);
    
    // More specific selector targeting the Phone section
    const phone = page.locator('#footer .split.contact h3:has-text("Phone") + p');
    await expect(phone).toContainText('6 62 48 81 52'); // Partial match instead of exact
  });

  test('should display email', async ({ page }) => {
    await page.goto(BASE_URL);
    
    const email = page.locator('#footer .split.contact').getByText('duong.tranhn1102@gmail.com');
    await expect(email).toBeVisible();
  });
});

// ==========================================
// 7. RESPONSIVE DESIGN TESTS
// ==========================================

test.describe('Responsive Design', () => {
  test('should display correctly on mobile viewport', async ({ page }) => {
    // Set mobile viewport (iPhone 12)
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto(BASE_URL);
    
    await page.waitForLoadState('networkidle');
    
    // Check wrapper instead of nav (which might be hidden on mobile)
    const heading = page.locator('#intro h1');
    const wrapper = page.locator('#wrapper');
    
    await expect(heading).toBeAttached();
    await expect(wrapper).toBeVisible();
  });

  test('should display correctly on tablet viewport', async ({ page }) => {
    // Set tablet viewport (iPad)
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto(BASE_URL);
    
    await expect(page.locator('#intro h1')).toBeVisible();
    await expect(page.locator('.posts article')).toHaveCount(4);
  });

  test('should display correctly on desktop viewport', async ({ page }) => {
    // Set desktop viewport
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(BASE_URL);
    
    await expect(page.locator('#intro h1')).toBeVisible();
    await expect(page.locator('.posts article')).toHaveCount(4);
  });
});

// ==========================================
// 8. EXTERNAL LINKS VALIDATION
// ==========================================

test.describe('External Links Validation', () => {
  test('all project links should have correct attributes', async ({ page }) => {
    await page.goto(BASE_URL);
    
    // Check if external links have target="_blank" and rel attributes for security
    const externalLinks = page.locator('.posts article a[target="_blank"]');
    
    for (let i = 0; i < await externalLinks.count(); i++) {
      const link = externalLinks.nth(i);
      await expect(link).toHaveAttribute('target', '_blank');
      await expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    }
  });

  test('resume link should have correct attributes', async ({ page }) => {
    await page.goto(BASE_URL);
    
    const resumeLink = page.locator('header a.logo');
    await expect(resumeLink).toHaveAttribute('target', '_blank');
    await expect(resumeLink).toHaveAttribute('rel', 'noopener noreferrer');
  });
});