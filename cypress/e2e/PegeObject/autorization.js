import Login from '../PegeObject/Login'
const login = new Login()

class Auth{

    auth1(){        //Селедкин
        cy.visit("https://itsm-test.fido.uz/#/auth");
        cy.viewport(1920,1080);
        cy.get('div.div-container.header-text', {timeout: 3000}).should('be.visible');                 
        cy.title().should('eq', 'ITSM FB');   // проверка title вкладки
        login.log1().should('be.visible'); 
        login.pass().should('be.visible');
        cy.contains("Вход").click();
        cy.wait(3000)
        cy.get('div.logo-fido').should('be.visible');        
             
    }

    auth2(){        //Ромашкин
        cy.visit("https://itsm-test.fido.uz/#/auth");
        cy.viewport(1920,1080);
        cy.get('div.div-container.header-text', {timeout: 3000}).should('be.visible');                 
        cy.title().should('eq', 'ITSM FB');   // проверка title вкладки
        login.log8().should('be.visible'); 
        login.pass().should('be.visible');
        cy.contains("Вход").click();
        cy.wait(3000)
        cy.get('div.logo-fido').should('be.visible');        
             
    }

    auth3(){        //Печенькина
        cy.visit("https://itsm-test.fido.uz/#/auth");
        cy.viewport(1920,1080);
        cy.get('div.div-container.header-text', {timeout: 3000}).should('be.visible');                 
        cy.title().should('eq', 'ITSM FB');   // проверка title вкладки
        login.log3().should('be.visible'); 
        login.pass().should('be.visible');
        cy.contains("Вход").click();
        cy.wait(3000)
        cy.get('div.logo-fido').should('be.visible');        
             
    }
}    
    

export default Auth



