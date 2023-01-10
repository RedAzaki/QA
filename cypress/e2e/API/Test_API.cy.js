describe('Test API', ()=>{
    let accessToken = "6624411c53ee4d7d45b38553721f44c116869a43af9f83787db378dc18154e3e"
    it('GET-Test', ()=>{    
        cy.request({

            method : 'GET',
            url : 'https://gorest.co.in/public-api/users',
            headers : {
                'autorization' : "Bearer " +accessToken
            }
        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body.meta.pagination.limit).to.eq(10)

        })
        
    })

    it('GET-users-by:id', ()=>{    
        cy.request({

            method : 'GET',
            url : 'https://gorest.co.in/public-api/users/5767',
            headers : {
                'autorization' : "Bearer " +accessToken
            }
        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body.data.name).to.eq('Mrs. Sharda Talwar')
        })
        
    })
})








/*cy.request('http://petstore.swagger.io/v2/pet').then((response)=>{
            expect(response).to.have.property('status', 200);//ожидаем что body не пустой.
            expect(response.body).to.not.be.null;//ожидаем что body не пустой.
            expect(response.body.films).to.have.length(4); //ожидаем что ответ body.films имеет длинну в 4 строки.
            //expect(response.body.height).to.have.value("172");
        }) */