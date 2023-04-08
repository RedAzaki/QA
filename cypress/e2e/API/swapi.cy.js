describe("Test api GET", () => {
    it('GET-test', () => {
        cy.request('GET', 'https://swapi.dev/api/people/1/').then((responce) =>{
            expect(responce).to.have.property('status', 200);
            expect(responce.body).to.not.be.null; 
            expect(responce.body).to.have.property('name', 'Luke Skywalker');
            expect(responce.body.films[1]).to.be.eql('https://swapi.dev/api/films/2/');
        }).then((res)=>{
            cy.request({
            method: 'PUT',
            url: 'https://swapi.dev/api/people/1/',
            
            body: {
                "name": "Best men",
                "height":"222",
                "mass": "99",
                "hair_color":"red"
            }
            })

        })

    })
})