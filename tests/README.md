# Portfolio Website Tests

## Test Coverage

The test suite covers:

### Index page:

✅ **Basic Loading** - Page title, hero section, taglines  
✅ **Navigation** - All nav links (Home, About, Experience, Gallery, Resume)  
✅ **Projects** - All 4 project cards with correct links  
✅ **Contact Form** - Form fields, labels, validation  
✅ **Social Media** - GitHub, LinkedIn, Medium, Instagram, Facebook links  
✅ **Footer** - Contact information (address, phone, email)  
✅ **Responsive Design** - Mobile, tablet, and desktop viewports  
✅ **Security** - External links have proper attributes

## Setup

1. **Install dependencies** (if not already done):
```bash
npm install
```

2. **Install Playwright browsers**:
```bash
npx playwright install
```

## Running Tests

### Run all tests (headless mode):
```bash
npx playwright test
```

### Run tests with browser visible:
```bash
npx playwright test --headed
```

### Run specific test file:
```bash
npx playwright test tests/home.spec.js
```

### Run tests in debug mode (step through):
```bash
npx playwright test --debug
```

### View HTML test report:
```bash
npx playwright show-report
```

## Test Configuration

By default, tests run against your **Localhost site**

To test differently, update the `BASE_URL` in [home.spec.js](home.spec.js):

```javascript
// For local server (default):
const BASE_URL = 'http://localhost:port';
```

## Tips for Beginners

- **Green checkmarks** = tests passed ✅
- **Red X** = tests failed ❌
- Tests run automatically on every page element
- No need to click manually - Playwright does it for you
- Screenshots/videos saved on test failures in `test-results/` folder

## Common Issues

**Tests fail with timeout?**  
→ Check your internet connection (testing live site) or ensure local server is running

**Can't find element?**  
→ Element might have changed in HTML - update the test selector

**Want to skip a test?**  
→ Change `test('name', ...)` to `test.skip('name', ...)`

**Want to run only one test?**  
→ Change `test('name', ...)` to `test.only('name', ...)`

## Next steps

Write test cases for other pages - about -> experience -> gallery