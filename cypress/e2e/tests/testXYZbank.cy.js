import Data from '../PegeObject/Data'
import Auth from '../PegeObject/autorization'
import Surnames from '../PegeObject/Surnames'
import Names from '../PegeObject/Name'




describe("XYZ Bank", () => {
     
  const auth = new Auth()
  const data = new Data() 
  const surnames = new Surnames()
  const names = new Names()
 
    //Переменные для ввода:
    let randomNumber = ""
    let randomDeposit = ""
    let surname = surnames.generateSurnames(1)
    let name = names.generateNames(1)
    let fullName = name + ' ' + surname
    
    
        
    var pattern = "123456789"
    for (var i=0; i < 3; i++)
    randomNumber+=pattern.charAt(Math.floor(Math.random() * pattern.length));
    
    for (var i=0; i < 6; i++)
    randomDeposit+=pattern.charAt(Math.floor(Math.random() * pattern.length));

    let difference = randomDeposit - randomNumber

  it("Bank", () => {
    
    auth.auth();      //Авторизация в системе
    
    cy.get('button').contains('Bank Manager Login').click();
    cy.get('button').contains('Add Customer').should('be.visible');
    cy.get('button').contains('Open Account').should('be.visible');
    cy.get('button').contains('Customers').should('be.visible');
    
    //Add Customer
    cy.get('button').contains('Add Customer').click();
    cy.get('input[placeholder="First Name"]').type(`${name}`);
    cy.get('input[placeholder="Last Name"]').type(`${surname}`);
    cy.get('input[placeholder="Post Code"]').type(`${randomNumber}`);
    cy.get('button[class="btn btn-default"]').contains('Add Customer').click();
    console.log(fullName)
    
    //Open Account
    cy.get('button').contains('Open Account').click();
    cy.get('select').eq(0).select(`${fullName}`)
    cy.get('select').eq(1).select('Dollar');
    cy.get('button').contains('Process').click();

    //Customers
		cy.get('button[ng-class="btnClass3"]').contains('Customers').click();
    cy.get('input[placeholder="Search Customer"]').type(`${name}`)
    cy.get('.ng-binding').eq(0).contains(`${name}`).should('be.visible');
    cy.get('.ng-binding').eq(1).contains(`${surname}`).should('be.visible');
    cy.get('.ng-binding').eq(2).contains(`${randomNumber}`).should('be.visible');
    cy.get('button[ng-click="deleteCust(cust)"]').contains(`Delete`).should('be.visible');

    //back home
    cy.get('button').contains('Home').should('be.visible').click();

    //Customer Login
    cy.get('button').contains('Customer Login').should('be.visible').click();
    cy.get('select').select(`${fullName}`).should('be.visible');
    cy.get('button').contains('Login').should('be.visible').click();

    //Deposit
    cy.get('button').contains('Deposit').should('be.visible').click();
    cy.get('strong[class="ng-binding"]').eq(2).contains('Dollar').should('be.visible');
    cy.get('input[type="number"]').type(`${randomDeposit}`);
    cy.get('button[class="btn btn-default"]').contains('Deposit').should('be.visible').click();
    cy.get('span[ng-show="message"]').contains('Deposit Successful').should('be.visible');
    cy.get('strong[class="ng-binding"]').eq(1).contains(`${randomDeposit}`).should('be.visible');
    
    //Withdrawl
		cy.get('button[ng-click="withdrawl()"]').should('be.visible').click();
    cy.get('.form-group').contains('Amount to be Withdrawn :').parent().within(()=>{
    cy.get('input[type="number"]').type(`${randomNumber}`);
    })
    cy.get('button[class="btn btn-default"]').contains('Withdraw').should('be.visible').click();
    cy.get('span[ng-show="message"]').contains('Transaction successful').should('be.visible');
    cy.get('strong[class="ng-binding"]').eq(1).contains(`${difference}`).should('be.visible');



		/*
    cy.get('button[ng-class="btnClass3"]').contains('Withdrawl').should('be.visible').click();
    cy.get('.form-group').contains('Amount to be Withdrawn :').within(()=>{
      cy.get('input[placeholder="amount"]').type(`${randomNumber}`);
    })
    
    cy.get('button[class="btn btn-default"]').contains('Withdraw').should('be.visible').click();
    cy.get(1000)
    
    cy.get('strong[class="ng-binding"]').contains(`${difference}`).should('be.visible');
    console.log(difference)*/


    
    
    
    
    
    

    
    
  })
})