let login = 'USER_LOGIN'
let password = 'USER_PASSWORD'
let randomChildNumber = Math.floor(Math.random() * 10) + 1;

describe('e2e-shop', function () {
    it('auth', function () {
        // Вход на сайт
        cy.visit('https://pokemonbattle.ru/');

        // Авторизация
        cy.get('#k_email').type(login);
        cy.get('#k_password').type(password);
        cy.get('.MuiButton-root').click();

        // Поход в магазин аватаров
        cy.get('.header_card_trainer').click();
        cy.get('.k_mobile > :nth-child(5)').click();

        // Покупка первого доступного аватара
        cy.get('.available > .shop__button').first().click();
        
        // Заполнение карты
        cy.get('.payment_form_card_form > :nth-child(2) > .style_1_base_input').type('4620869113632996'); // Номер
        cy.get(':nth-child(1) > .style_1_base_input').type('1230'); // Срок
        cy.get('.payment_form_card_form_inputs > :nth-child(2) > .style_1_base_input').type('125'); // Код
        cy.get('.payment_form_card_form_input_last > .style_1_base_input').type('MIKHAIL ZUBENKO'); // Имя
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click(); //Оплатить

        // Подтверждение СМС
        cy.get('.style_1_base_input').type('56456');
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();

        // Проверка статуса покупки
        cy.get('.payment_status_top_title').contains('Покупка прошла успешно');
        
        // Возвращение в магазин
        cy.get('.payment_status_back').click();
    })
})