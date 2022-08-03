/// <reference types="Cypress" />

const random = Math.floor(Math.random() * 1000 + 1)

import registerPage from "../Pages/registerPage";

describe('Typeqast Automation Register Page', () => {

    let RegisterPage = new registerPage()

    before(() => {
        cy.visit('https://www.links.hr/hr/register')
        RegisterPage.ifAcceptCookieButtonAppearClickOnIt()
        
      })

it('TC-020 -Verify the password limit when entering the value as required for a maximum', () => {
    RegisterPage.enterPasswordInTheLozinkaField('12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^An')
                .clickOnTheConfirmPasswordField()
                .assertPasswordDontHaveErrorMessageAfterEnteringValidPassWord()
   
})

})