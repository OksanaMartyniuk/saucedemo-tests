# WebDriverIO Automated Tests for SauceDemo

## Installation
1. Install [Node.js](https://nodejs.org/) v20.18.3
2. Clone this repository
3. Run:
   npm install
4. Install wdio version 9.11.0:
   npm install --save-dev webdriverio
5. Initialization and setting wdio


## Running Tests
To execute tests, run:
npx wdio wdio.conf.js

## Test Scenarios
- **UC-1:** Login with empty credentials should show "Username is required".
- **UC-2:** Login with an empty password should show "Password is required".
- **UC-3:** Successful login should navigate to (https://www.saucedemo.com/inventory.html)