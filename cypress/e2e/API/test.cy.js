describe("Test api GET", () => {
    it('GET-test', () => {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/users').then((responce) =>{
            expect(responce).to.have.property('status', 200);
            expect(responce.body).to.not.be.null; 
            expect(responce.jsonData[0].id).to.eql(1); 
        })

    })
})