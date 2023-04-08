class Auth{

    auth(){       
         
        cy.visit("https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login");
        cy.viewport(1920,1080);
        cy.wait(2000);
        cy.title().should('eq', 'XYZ Bank');   // chek title tab
        cy.get('strong[class="mainHeading"]').contains('XYZ Bank').should('be.visible'); 
        cy.get('button').contains('Customer Login').should('be.visible');
        cy.get('button').contains('Bank Manager Login').should('be.visible');
              
             
    }   
}    
    

export default Auth



