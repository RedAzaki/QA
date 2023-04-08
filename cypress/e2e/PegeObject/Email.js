class Email {
  email1() {
    return cy.get('input[formcontrolname="email"]').type("test@mail.uz");
  }

  email2() {
    return cy.get('input[formcontrolname="email"]').type("sdfhhtw@mail.uz");
  }
}

export default Email;
