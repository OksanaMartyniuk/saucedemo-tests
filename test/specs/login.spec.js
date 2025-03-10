const LoginPage = require('../pageobjects/login.page.js');
const DashboardPage = require('../pageobjects/dashboard.page.js');

describe('Login Page Tests', () => {

    beforeEach(async () => {
        await LoginPage.open();  // Відкриваємо сторінку перед кожним тестом
    });

    afterEach(async () => {
        await browser.reloadSession();  // Перезавантаження сесії браузера
    });

    it('UC-1: Login with empty credentials', async () => {
        await LoginPage.login('', '');  // Порожні поля
        await browser.pause(2000);  // Пауза для перевірки DOM
        const errorMessage = await LoginPage.errorMessage.getText();
        console.log(errorMessage);  // Виведення тексту помилки
        await expect(LoginPage.errorMessage).toBeDisplayed();
        await expect(LoginPage.errorMessage).toHaveText('Epic sadface: Username is required');
    });

    it('UC-2: Login with empty password', async () => {
        await LoginPage.login('standard_user', '');  // Введення імені користувача та порожнього пароля
        const errorMessage = await $('//h3[text()="Epic sadface: Password is required"]');  // Перевірка повідомлення про помилку
        await expect(errorMessage).toBeDisplayed();  // Перевірка наявності повідомлення про помилку
        await expect(errorMessage).toHaveText('Epic sadface: Password is required');  // Перевірка тексту помилки
    });

    it('UC-3: Successful login', async () => {
        await LoginPage.login('standard_user', 'secret_sauce');  // Введення правильного ім'я користувача та пароля
    
        // Перевіряємо, чи відбувся перехід на нову сторінку за URL
        const currentUrl = await browser.getUrl();
        console.log('Current URL:', currentUrl);  // Логування URL для діагностики
        await expect(currentUrl).toContain('/inventory.html');  // Перевірка на наявність /inventory.html в URL
    
        // Перевіряємо наявність елемента на новій сторінці, який підтверджує, що ми потрапили на головну сторінку
        const inventoryPageTitle = await $('//span[text()="Products"]');  // XPath для елемента на новій сторінці (наприклад, "Products")
        await expect(inventoryPageTitle).toBeDisplayed();  // Перевіряємо, чи цей елемент відображається
    });
  
       
});
