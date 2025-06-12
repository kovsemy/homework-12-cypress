class RedirectPage {
    elements = {
        closeButton: '#exitMessageButton > .exitIcon',
        resultMessage: '#messageHeader'
    }

    checkCloseButton() {
        cy.get(this.elements.closeButton).should('be.visible');
    }

    checkResultMessage(message) {
        cy.get(this.elements.resultMessage).contains(message);
    }
}

export default new RedirectPage();