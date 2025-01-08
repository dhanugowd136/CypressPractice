import LoginPage from "./PageObjectModel/OrangeHrmLoginpage2";

describe('PageObjectModel with LOginPage verification',()=>{
 //using POM
    it('LoginTest',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        const loginpage= new LoginPage()
        loginpage.setUsername('Admin')
        loginpage.setPassword('admin123')
        loginpage.clickSubmint();
        loginpage.verifyLogin()
    })
    //Using POM with Fixtures
    it.only('LoginTest',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        const loginpage= new LoginPage()
        cy.fixture('LoginData').then((data)=>{
            loginpage.setUsername(data.username)
            loginpage.setPassword(data.password)
            loginpage.clickSubmint();
            loginpage.verifyLogin()
        })
       
    })
})