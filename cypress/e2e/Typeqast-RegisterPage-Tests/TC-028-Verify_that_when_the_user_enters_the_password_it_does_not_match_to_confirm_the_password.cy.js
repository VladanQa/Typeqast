/// <reference types="Cypress" />

const random = Math.floor(Math.random() * 1000 + 1)

import registerPage from "../Pages/registerPage";

describe('Typeqast Automation Register Page', () => {

    let RegisterPage = new registerPage()

    before(() => {
        cy.visit('https://www.links.hr/hr/register')
        RegisterPage.ifAcceptCookieButtonAppearClickOnIt()
        
      })

it('TC-028 -Verify that when the user enters the password it does not match to confirm the password', () => {
    RegisterPage.enterConfirmPasswordInThePotvrditeLozinkuField('Test1234')
                .enterPasswordInTheLozinkaField('Test2345')
                .clickOnTheRegistrujSeButton()
                .assertPasswordDontHaveErrorMessageAfterEnteringValidPassWord()
                .assertConfirmPasswordHaveErrorMessageAfterEnteringDiferentInputAsPassWord('Lozinka i potvrda lozinke se ne podudaraju.')

})


})