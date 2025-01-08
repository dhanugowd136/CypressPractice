///// <reference types="Cypress"/>

describe('API POST Method', () => {
    let accessToken = "0e2909c3d585d02b120a4bd32f7001bdd9d2debaae91a084b70619d510c63600"
    let randomText = ""
    let testMail = ""
    it('POST Method', () => {
        let randomText = (Math.random() + 1).toString(36).substring(7);
        testMail = randomText + '@gmail.com'
        cy.fixture('example').then((payload) => {

            //1st call
            cy.request({
                method: 'POST',
                url: 'https://gorest.co.in/public/v2/users',
                headers: {
                    'Authorization': 'Bearer ' + accessToken
                },
                body: {
                    "name": "Test Automation",
                    "gender": payload.gender,
                    "email": testMail,
                    "status": "active"
                }
            }).then((res) => {
                cy.log(JSON.stringify(res))
                expect(res.status).to.eq(201) *
                expect(res.body).has.property('email', testMail)
                expect(res.body).has.property('gender', payload.gender)
            }).then((response)=>{
                const userId = response.body.id
                cy.log("User Id is:" + userId)
                //2nd call 
                cy.request({
                    method: "GET",
                    url: 'https://gorest.co.in/public/v2/users/'+userId,
                    headers: {
                        'Authorization': 'Bearer ' + accessToken
                    }
                }).then((res)=>{
                    expect(res.status).to.eq(200)
                    expect(res.body).has.property('id', userId)
                })
            })
        })
    })
})