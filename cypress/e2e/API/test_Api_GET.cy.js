describe("Test api GET", () => {
    it('GET-test', () => {
        cy.request('GET', 'https://swapi.dev/api/people/1/').then((responce) =>{
            expect(responce).to.have.property('status', 200);
            expect(responce.body).to.not.be.null; 
            expect(responce.body.films).to.have.length(4); 
        })

    })
})