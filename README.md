# 🛒 Amazon Automation Testing

## 📌 Overview

This project automates key user actions on Amazon using Playwright.
It demonstrates how to perform product search, extract pricing information, and simulate adding items to the cart.

Two test scenarios are implemented:

* Search for an **iPhone**, capture its price, and attempt to add it to the cart
* Search for a **Samsung Galaxy device**, capture its price, and attempt to add it to the cart

Both tests are executed **in parallel** to improve efficiency.

---

## ⚙️ Tech Stack

* Playwright (Automation Framework)
* JavaScript (Node.js)

---

## 🚀 Setup Instructions

1. Clone the repository:

```
git clone <https://github.com/adarshanit1125/amazon-automation-test>
```

2. Install dependencies:

```
npm install
```

3. Install Playwright browsers:

```
npx playwright install
```

---

## ▶️ Run Tests

```
npx playwright test
```

---

## ⚡ Features

* Automated product search on Amazon
* Extracts and prints product prices to console
* Attempts to add selected products to cart
* Parallel test execution using Playwright
* Handles dynamic web elements and avoids test crashes

---

## 🧠 Notes

Amazon is a dynamic website with frequently changing UI and occasional popups.
The test cases are designed to handle such scenarios gracefully while ensuring the core automation flow remains stable.

---

## 🎯 Outcome

* Successfully automated both test scenarios
* Extracted product prices
* Implemented parallel execution
* Ensured stable test execution

---

## 📂 Project Structure

```
tests/
  iphone.spec.js
  galaxy.spec.js
playwright.config.js
```
##SCREENSHOTS
<img width="818" height="227" alt="image" src="https://github.com/user-attachments/assets/091d18e0-0e24-4ac4-85fe-f8649a1d9657" />

## LambdaTest Execution
Tests were successfully executed on LambdaTest cloud platform.

<img width="1903" height="841" alt="image" src="https://github.com/user-attachments/assets/42f95684-511f-4eae-863b-1bde91e3c599" />

