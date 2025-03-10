const Page = require('./page');

class DashboardPage extends Page {
    get title() { return $('//div[@class="login_logo"]'); }

    async getTitleText() {
        return this.title.getText();
    }
}

module.exports = new DashboardPage();
