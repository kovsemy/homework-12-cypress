class ForgotPasswordPage {
    elements = {
        header: '#forgotForm > .header',
        emailInput: '#mailForgot',
        restoreEmailButton: '#restoreEmailButton',
        closeButton: '#exitRestoreButton > .exitIcon'
    }

    enterEmail(mail) {
        cy.get(this.elements.emailInput).type(mail);
    }

    clickRestoreButton() {
        cy.get(this.elements.restoreEmailButton).click();
    }
}

export default new ForgotPasswordPage();