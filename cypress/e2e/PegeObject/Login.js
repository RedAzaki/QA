class Login{

log1(){
    return cy.get('input[placeholder="Логин"]').clear().type('dir_BZ').should('have.value', 'dir_BZ'); 
    // should('have.value' сравнивает варианты как должно быть введено и как введено по факту
}

log2(){
    return cy.get('input[placeholder="Логин"]').clear().type('kancccc_BZ').should('have.value', 'kancccc_BZ');     
}

log3(){
    return cy.get('input[placeholder="Логин"]').type('buh_BZ').should('have.value', 'buh_BZ');     
}

log4(){
    return cy.get('input[placeholder="Логин"]').type('men_BZ').should('have.value', 'men_BZ');     
}

log5(){
    return cy.get('input[placeholder="Логин"]').type('ur_BZ').should('have.value', 'ur_BZ');     
}

log6(){
    return cy.get('input[placeholder="Логин"]').type('sec_BZ').should('have.value', 'sec_BZ');  
}

log7(){
    return cy.get('input[placeholder="Логин"]').type('reg_BZ').should('have.value', 'reg_BZ'); 
}

log8(){
    return cy.get('input[placeholder="Логин"]').clear().type('admin_BZ').should('have.value', 'admin_BZ'); 
}

pass(){
return cy.get('input[placeholder=" Пароль"]').clear().type('510842').should('have.value', '510842');

}




}



export default Login   