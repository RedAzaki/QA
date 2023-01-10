const dataJson = require('../../../fixtures/createuser')

describe('Test API', ()=>{
    let accessToken = "09f09f4f044a1ff8a884029e57928d41cd69604cfa834701b03eda2df353f9d2"
    let randomText = ""
    let testEmail = ""
    it('create user test', ()=>{

        var pattern = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        for (var i=0; i < 10; i++)
        randomText+=pattern.charAt(Math.floor(Math.random() * pattern.length));
        testEmail = randomText + '@gmail.com'

          
        //1. create user (POST)
        cy.request({
            method : 'POST',
            url : 'https://gorest.co.in/public/v2/users',
            headers : {
                'Authorization' : "Bearer " +accessToken
            },

            body: {
                "name": "Jhon",
                "gender": "male",
                "email": testEmail,
                "status": "active"
            },
        }).then((res)=>{
            cy.log(JSON.stringify(res)) // преобразования объекта или обычной строки в строку в формате JSON 
            expect(res.status).to.eq(201)
            expect(res.body).to.have.property('name', "Jhon")
            expect(res.body).to.have.property('gender',"male")
            expect(res.body).to.have.property('email',testEmail)             
            expect(res.body).to.have.property('status',"active")
            cy.wait(2000)
            }).then((res1)=>{                
              
                const userId = res1.body.id
               
                cy.log("user id is: " + userId)
                //2. get user (GET)
                cy.request({
                    method : 'GET',
                    url : 'https://gorest.co.in/public/v2/users/'+userId,
                    headers : {
                        'Authorization' : "Bearer " +accessToken
                    }
                    
                }).then((res2) =>{
                         expect(res2.status).to.eq(200)
                        expect(res2.body).to.have.property('id',userId)
                        expect(res2.body).to.have.property('name',payload.name)
                        expect(res2.body).to.have.property('status',payload.status)
                        expect(res2.body).to.have.property('email',testEmail)

                    })
                    
            })
        

    })
})



