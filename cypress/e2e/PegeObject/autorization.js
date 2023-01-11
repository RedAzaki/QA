import Login from '../PegeObject/Login'
const login = new Login()

class Auth{

    auth(){        //Селедкин
        cy.visit("https://uzum.uz/");
        cy.viewport(1920,1080);
        cy.wait(2000);
        cy.get('a[data-test-id="link__logo"]').should('be.visible');                 
        cy.title().should('eq', 'Uzum Market — интернет-магазин');   // проверка title вкладки
        cy.get('input[placeholder="Логин"]').clear().type('user.ultra@bk.ru').should('have.value', 'user.ultra@bk.ru'); 
        cy.get('input[placeholder=" Пароль"]').clear().type('%iPONeiRuy43').should('have.value', '%iPONeiRuy43');
        cy.contains("Вход").click();
        cy.wait(3000)
        cy.get('div.logo-fido').should('be.visible');        
             
    }   
}    
    

export default Auth



