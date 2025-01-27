

# Playwright Automation Framework with POM, Allure Reports, and CI/CD  

## Overview  
This project is a robust automation testing framework built using **Playwright** to ensure seamless testing of web applications. The framework follows the **Page Object Model (POM)** design pattern, enhancing code maintainability and scalability. It also integrates **Allure Reports** for detailed and visually appealing test reports and leverages **GitHub Actions** for a fully automated **CI/CD pipeline**. Test reports are published via **GitHub Pages** for easy access to stakeholders.  

## Features  
- **Playwright Framework**: For fast, reliable, and cross-browser automation testing.  
- **Page Object Model (POM)**: Ensures clean code structure, maintainability, and reusability.  
- **Allure Reports**: Provides detailed and interactive reports for test execution results.  
- **CI/CD with GitHub Actions**: Automates the testing process with every commit or pull request.  
- **GitHub Pages**: Hosts the Allure test reports for easy sharing and collaboration.  

## Prerequisites  
- Node.js (version >= 14.x)  
- Git  

## Installation  
1. Clone the repository:  
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```  
2. Install dependencies:  
   ```bash
   npm install
   ```  

## Usage  
- **Run Tests**:  
   ```bash
   npx playwright test
   ```  
- **Generate Allure Report**:  
   ```bash
   npx allure generate allure-results --clean -o allure-report
   ```  
- **View Allure Report Locally**:  
   ```bash
   npx allure open allure-report
   ```  

## CI/CD Pipeline  
The framework is integrated with **GitHub Actions** to:  
- Automatically execute tests on every pull request or commit.  
- Generate Allure reports post-test execution.  
- Deploy reports to **GitHub Pages** for stakeholder visibility.  

## Allure Report Access  
The Allure reports are published at: [View Allure Report](<insert GitHub Pages URL>).  

## Contributing  
Contributions are welcome! Feel free to open issues or submit pull requests to improve this framework.  

## License  
This project is licensed under the [MIT License](LICENSE).  

---
