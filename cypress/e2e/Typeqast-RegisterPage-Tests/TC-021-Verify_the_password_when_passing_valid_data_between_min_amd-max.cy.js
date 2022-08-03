/// <reference types="Cypress" />

const random = Math.floor(Math.random() * 1000 + 1)

import registerPage from "../Pages/registerPage";

describe('Typeqast Automation Register Page', () => {

    let RegisterPage = new registerPage()

    before(() => {
        cy.visit('https://www.links.hr/hr/register')
        RegisterPage.ifAcceptCookieButtonAppearClickOnIt()
        
      })

it('TC-021 -Verify the password when passing valid data (between min amd max)', () => {
    RegisterPage.enterPasswordInTheLozinkaField('@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And1234567890@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^An')
                .clickOnTheConfirmPasswordField()
                .assertPasswordDontHaveErrorMessageAfterEnteringValidPassWord()
   
})

})