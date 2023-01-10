import Login from '../PegeObject/Login'
const login = new Login()

class Auth{

    auth(){        //Селедкин
        cy.visit("https://mail.ru/");
        cy.viewport(1920,1080);
        cy.get('.logo__img svelte-3hymh3').should('be.visible');                 
        cy.title().should('eq', 'Mail.ru: почта, поиск в интернете, новости, игры');   // проверка title вкладки
        cy.get('input[placeholder="Логин"]').clear().type('user.ultra@bk.ru').should('have.value', 'user.ultra@bk.ru'); 
        cy.get('input[placeholder=" Пароль"]').clear().type('%iPONeiRuy43').should('have.value', '%iPONeiRuy43');
        cy.contains("Вход").click();
        cy.wait(3000)
        cy.get('div.logo-fido').should('be.visible');        
             
    }   
}    
    

export default Auth



