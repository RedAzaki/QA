/*describe("Test api GET", () => {
    it('GET-test', () => {
        cy.request('GET', 'https://swapi.dev/api/people/1/').then((responce) =>{
            expect(responce).to.have.property('status', 200);
            expect(responce.body).to.not.be.null; 
            expect(responce.body.films).to.have.length(4); 
        })

    })
})*/

describe('Test API', ()=>{
    let accessToken = "fc429ea469eab87eaa9bc3744e1eb1f265b9a81362112eef76ec0c730e1b8ac7"
    let randomText = ""
    let testEmail = ""
    let testName = ""
    it('create user test', ()=>{

        var pattern = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        for (var i=0; i < 5; i++)
        randomText+=pattern.charAt(Math.floor(Math.random() * pattern.length));
        testEmail = randomText + '@gmail.com'
        
        cy.fixture('createuser').then((payload) =>{      
          
            //1. create user (POST)
            cy.request({
                method : 'POST',
                url : 'https://gorest.co.in/public/v2/users',
                headers : {
                    'Authorization' : "Bearer " +accessToken
                },

                body: {
                    "name": payload.name,
                    "gender": payload.gender,
                    "email": `${testEmail}`,
                    "status": payload.status,
                },
            }).then((response) =>{
                expect(response.status).to.eq(201);
                expect(response.body).to.have.property('name', payload.name);
                expect(response.body).to.have.property('gender',payload.gender);
                expect(response.body).to.have.property('email',`${testEmail}`);           
                expect(response.body).to.have.property('status',payload.status);
            }).then((res)=>{                
              
                const userId = res.body.id
            
                cy.log("user id is:" + userId)
                
                //2. get user (GET)
                cy.request({
                    method : 'GET',
                    url : 'https://gorest.co.in/public/v2/users/'+ userId,
                    headers : {
                        'Authorization' : "Bearer " +accessToken
                    }
                })
            }).then((res2) =>{

                const userId = res2.body.id
                cy.log("user id is:" + userId)

                expect(res2.status).to.eq(200)
                expect(res2.body).to.have.property('id',userId)
                expect(res2.body).to.have.property('name',payload.name)
                expect(res2.body).to.have.property('status',payload.status)
                expect(res2.body).to.have.property('email',`${testEmail}`)
            })/*.then((res3) =>{

                const userId = res3.body.data.id
                cy.log("user id is:" + userId)

                 //3. update user (PUT)
                 cy.request({
                    method: 'PUT',
                    url: 'https://gorest.co.in/public/v1/users/'+userId,
                    headers: {
                        'Authorization': 'Bearer ' + accessToken
                    },
                    body: {
                        "name":"Test name Updated",
                        "gender":"male",
                        "email": "update@gmail.com",
                        "status":"inactive"
                      }
                }).then((res)=>{
                    expect(res.status).to.eq(200)
                    expect(res.body.data).has.property('email', 'update@gmail.com')
                    expect(res.body.data).has.property('name','Test name Updated')
                    expect(res.body.data).has.property('status','inactive')
                    expect(res.body.data).has.property('gender','male')
                })

            })*/
        })
    })
})

//PUT пока не получается сделать за GET, но получается сделать за POST, надо разобраться как это можно устранить