class LoginPage {
    // Поле для введення імені користувача
    get inputUsername() {
        return $('//input[@id="user-name"]'); // XPath для поля username
    }

    // Поле для введення пароля
    get inputPassword() {
        return $('//input[@id="password"]'); // XPath для поля password
    }

    // Кнопка для входу
    get btnSubmit() {
        return $('//*[@id="login-button"]'); // XPath для кнопки submit
    }

    // Повідомлення про помилку
    get errorMessage() {
        return $('//h3[text()="Epic sadface: Username is required"]');
    }
    //get errorMessage2() {
    //    return $('//h3[text()="Epic sadface: Password is required"]');
    //}

    // Метод для входу
    async login(username, password) {
        await this.inputUsername.setValue(username); // Вводимо ім'я користувача
        await this.inputPassword.setValue(password); // Вводимо пароль
        await this.btnSubmit.click(); // Натискаємо кнопку входу
    }

    // Відкриваємо сторінку входу
    async open() {
        await browser.url('https://www.saucedemo.com/'); // Перехід на сторінку логіну
    }
}

module.exports = new LoginPage();

