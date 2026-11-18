# Playwright JavaScript Demo

A beginner-friendly Playwright project with two login test cases using the public SauceDemo practice website.

## Requirements

- Node.js (LTS version recommended)
- Visual Studio Code (recommended)
- Internet connection

## Setup

1. Extract the ZIP file.
2. Open the `PlaywrightDemo` folder in Visual Studio Code.
3. Open the VS Code terminal.
4. Install project dependencies:

   ```bash
   npm install
   ```

5. Install the Playwright browser:

   ```bash
   npx playwright install
   ```

## Run tests

Run tests in headless mode:

```bash
npm test
```

Run tests with the browser visible:

```bash
npm run test:headed
```

Open the HTML report after a test run:

```bash
npm run report
```

## Included test cases

| Test case | Expected result |
|---|---|
| Successful login | User is taken to the Products page |
| Incorrect password | Login error message is displayed |

## Demo website

https://www.saucedemo.com/

Practice credentials:

- Username: `standard_user`
- Password: `secret_sauce`

This is a learning demo. The website is external, so test execution requires internet access.
