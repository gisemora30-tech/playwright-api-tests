# Playwright API Auth Tests

API automation testing project using Playwright.

## Technologies
- Playwright
- JavaScript
- GitHub Actions
- Node.js

## Features
- Login API simulation
- Token generation
- Authorization header validation
- Protected endpoint testing
- GET requests
- POST requests

## Test Scenarios

### Login API
- Validates successful login simulation
- Generates fake auth token
- Verifies token format

### Protected Users Endpoint
- Sends Authorization Bearer token
- Validates protected GET request
- Verifies users response

## Run Locally

```bash
npm install
npx playwright test
```

## CI/CD
Tests run automatically using GitHub Actions on every push.

## Author
Gisela Mora  
QA Automation Engineer
