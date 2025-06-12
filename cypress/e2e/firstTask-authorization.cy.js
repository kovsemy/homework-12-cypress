import AuthPage from '../firstTask-locators/AuthPage'
import RedirectPage from '../firstTask-locators/RedirectPage'
import ForgotPasswordPage from '../firstTask-locators/ForgotPasswordPage'

describe ('Проверка авторизации', function () {
    afterEach('Отображение крестика', function () {
        RedirectPage.checkCloseButton();
    })
    
    it('Ввод правильных почты и пароля', function () {
        cy.visit('/');
        
        AuthPage.enterEmail('german@dolnikov.ru');
        AuthPage.enterPassword('iLoveqastudio1');
        AuthPage.clickLoginButton();
        RedirectPage.checkResultMessage('Авторизация прошла успешно');
    })

    it('Восстановление пароля при вводе правильной почты', function () {
        cy.visit('/');
        
        AuthPage.clickForgotPasswordButton();
        ForgotPasswordPage.enterEmail('german@dolnikov.ru');
        ForgotPasswordPage.clickRestoreButton();
        RedirectPage.checkResultMessage('Успешно отправили пароль на e-mail');
    })

    it('Ввод правильной почты и неправильного пароля', function () {
        cy.visit('/');
        
        AuthPage.enterEmail('german@dolnikov.ru');
        AuthPage.enterPassword('incorrectPassword');
        AuthPage.clickLoginButton();
        RedirectPage.checkResultMessage('Такого логина или пароля нет');
    })

    it('Ввод неправильной почты и правильного пароля', function () {
        cy.visit('/');
        
        AuthPage.enterEmail('incorrectMail@dolnikov.ru');
        AuthPage.enterPassword('iLoveqastudio1');
        AuthPage.clickLoginButton();
        RedirectPage.checkResultMessage('Такого логина или пароля нет');
    })

    it('Отсутствие обязательного символа @ в почте', function () {
        cy.visit('/');
        
        AuthPage.enterEmail('germandolnikov.ru');
        AuthPage.enterPassword('iLoveqastudio1');
        AuthPage.clickLoginButton();
        RedirectPage.checkResultMessage('Нужно исправить проблему валидации');
    })

    it('Отсутствие регистрозависимости почты', function () {
        cy.visit('/');

        AuthPage.enterEmail('GerMan@Dolnikov.ru');
        AuthPage.enterPassword('iLoveqastudio1');
        AuthPage.clickLoginButton();
        RedirectPage.checkResultMessage('Авторизация прошла успешно');
    })
})