/// <reference types="Cypress" />

const random = Math.floor(Math.random() * 1000 + 1)

import registerPage from "../Pages/registerPage";

describe('Typeqast Automation Register Page', () => {

    let RegisterPage = new registerPage()

    before(() => {
        cy.visit('https://www.links.hr/hr/register')
        RegisterPage.ifAcceptCookieButtonAppearClickOnIt()
        
      })

it('TC-027 -Verify that when the user enters a confirm password it does not match to password', () => {
    RegisterPage.enterPasswordInTheLozinkaField('Test12#&')
                .enterConfirmPasswordInThePotvrditeLozinkuField('Test1234')
                .clickOnTheRegistrujSeButton()
                .assertPasswordDontHaveErrorMessageAfterEnteringValidPassWord()
                .assertConfirmPasswordHaveErrorMessageAfterEnteringDiferentInputAsPassWord('Lozinka i potvrda lozinke se ne podudaraju.')

})


})