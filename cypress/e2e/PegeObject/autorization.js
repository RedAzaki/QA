import Login from '../PegeObject/Login'
const login = new Login()

class Auth{

    auth(){       
         
        cy.visit("https://www.livejournal.com/");
        cy.viewport(1920,1080);
        cy.wait(2000);
        cy.get('.s-logo').should('be.visible');                 
        cy.title().should('eq', 'Главное — ЖЖ');   // chek title tab
        cy.get('.s-header-item__link--login').click();
        cy.get('input[ng-init="loginForm.model.username=null"]').clear().type('testuser69').should('have.value', 'testuser69'); 
        cy.get('input[ng-init="loginForm.model.password=null"]').clear().type('DZtcqekxY_cinr7').should('have.value', 'DZtcqekxY_cinr7');
        cy.get('.b-loginform-btn--auth').contains("Log in").click();
        cy.wait(3000)
        cy.get('h2[class="mainpage__category-title"]').contains('ЖЖ рекомендует').should('be.visible');        
             
    }   
}    
    

export default Auth



