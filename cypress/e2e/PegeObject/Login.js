class Login {
  log() {
    return cy.get('input[placeholder="Логин"]').clear().type("user.ultra@bk.ru").should("have.value", "user.ultra@bk.ru");
  }

  pass() {
    return cy.get('input[placeholder=" Пароль"]').clear().type("%iPONeiRuy43").should("have.value", "%iPONeiRuy43");
  }
}

export default Login;
