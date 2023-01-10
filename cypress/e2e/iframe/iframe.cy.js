describe("API", () => {

    Cypress.Commands.add('swithToIframe', (iframe) =>{
        return cy
        .get(iframe)
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap);
    });
    

    it("test API", () => {
        cy.visit("http://the-internet.herokuapp.com/iframe");
        cy.swithToIframe('#mce_0_ifr').clear().type('hello');   


        /*const iframe = cy
        .get('#mce_0_ifr') //Получаем селектор iframe, который называется # mce_0_ifr
        .its('0.contentDocument.body')/* Затем, чтобы получить к нему доступ, нам нужно использовать 
        ` 0.contentDocument.body`. В JavaScript $0 возвращает последний выбранный элемент,
        которым в данном случае является iframe.
        ContentDocument возвращает объект документа, который генерирует iframe, 
        и из него мы просто получаем доступ к его телу и утверждаем, что он виден.*//*
        .should('be.visible')
        .then(cy.wrap); //После этого мы вызываем ` cy.wrap` , который в Cypress является способом связывания команд с ним.
        iframe.clear().type('hello');
        //Если мы снова запустим тест, мы должны увидеть, что теперь мы можем взаимодействовать с iframe*/
    })
})