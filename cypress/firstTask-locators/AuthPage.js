class AuthPage {
    elements = {
        emailInput: '#mail',
        passwordInput: '#pass',
        loginButton: '#loginButton',
        forgotPasswordButton: '#forgotEmailButton'
    }

    enterEmail(mail) {
        cy.get(this.elements.emailInput).type(mail);
    }

    enterPassword(password) {
        cy.get(this.elements.passwordInput).type(password);
    }

    clickLoginButton() {
        cy.get(this.elements.loginButton).click();
    }

    clickForgotPasswordButton() {
        cy.get(this.elements.forgotPasswordButton).click();
    }
}

export default new AuthPage();

