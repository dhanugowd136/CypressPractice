describe("API Automation", () => {
    it('Get Method Approach-1', () => {
        cy.request('GET', 'https://reqres.in/api/users?page=2').then((response) => {
            //Assertions
            expect(response.status).to.equal(200)
            expect(response.body).to.have.property('page', 2)
            //1st array
            expect(response.body.data[0].id).to.equal(7)
            //2nd array
            expect(response.body.data[1].first_name).to.equal('Lindsay')
            cy.writeFile('cypress/fixtures/response.txt', response)
        })
    })
    it('Get Method Approach-2', () => {
        cy.request('GET', 'https://reqres.in/api/users?page=2')
            .its('status')
            .should('equal', 200);

    })
    it('Get method real time example orangehrm', () => {
        cy.request({
            method: 'GET',
            url: '/web/index.php/api/v2/pim/employees?limit=50&offset=0&model=detailed&includeEmployees=onlyCurrent&sortField=employee.firstName&sortOrder=ASC',
            headers: {
                "cookie": "orangehrm=ht4189040v42kpumi2o70tejqt"
            }
        }).then((response) => {
            expect(response.status).to.equal(200)
            cy.writeFile('cypress/fixtures/OrangeHRMGetAllEmployees.txt', response)
        })
    })


    const arr = ["shashi", "Dhanu"]
    arr.forEach(element => {
        it.only(`POST method real time example orangehrm- ${element}`, () => {
            let r = (Math.random() + 1).toString(36).substring(7);
            cy.request({
                method: 'POST',
                url: 'web/index.php/api/v2/pim/employees',
                headers: {
                    "cookie": "orangehrm=tqs89jtbggccokeu8snmsvemt8"
                },
                body: {
                    "firstName": element, "middleName": "", "lastName": "g", "empPicture": null, "employeeId": r
                }
            }).then((response) => {
                expect(response.status).to.equal(200)
                cy.writeFile('cypress/fixtures/OrangeHRMCreateEmployee.txt', response)
            })
        });

    })


})