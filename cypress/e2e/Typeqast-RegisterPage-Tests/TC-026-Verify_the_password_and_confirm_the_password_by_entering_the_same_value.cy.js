/// <reference types="Cypress" />

const random = Math.floor(Math.random() * 1000 + 1)

import registerPage from "../Pages/registerPage";

describe('Typeqast Automation Register Page', () => {

    let RegisterPage = new registerPage()

    before(() => {
        cy.visit('https://www.links.hr/hr/register')
        RegisterPage.ifAcceptCookieButtonAppearClickOnIt()
        
      })

it('TC-026 -Verify the password and confirm the password by entering the same value', () => {
    RegisterPage.enterPasswordInTheLozinkaField('Test12#&')
                .enterConfirmPasswordInThePotvrditeLozinkuField('Test12#&')
                .clickOnTheRegistrujSeButton()
                .assertPasswordDontHaveErrorMessageAfterEnteringValidPassWord()
                .assertConfirmPasswordDontHaveErrorMessageAfterEnteringSameInputAsPassWord()

})


})