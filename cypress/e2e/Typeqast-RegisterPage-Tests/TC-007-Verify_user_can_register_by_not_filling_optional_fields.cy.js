/// <reference types="Cypress" />

const random = Math.floor(Math.random() * 1000 + 1)

import registerPage from "../Pages/registerPage";

describe('Typeqast Automation Register Page', () => {

    let RegisterPage = new registerPage()

    before(() => {
        cy.visit('https://www.links.hr/hr/register')
        RegisterPage.ifAcceptCookieButtonAppearClickOnIt()
        
      })

it('TC-007 - Verify user can register by not filling optional field', () => {
    RegisterPage.enterNameInMandatoryFieldIme('Ime:','Marko')
                .enterLastNameInMandatoryFieldPrezime('Prezime:', 'Markovic')
                .enterEmailInMandatoryFieldElektronskaposta('Elektronska pošta:', 'markomarkovic' + random + '@mailinator.com')
                .enterPasswordInMandatoryFieldLozinka('Lozinka:', '123456')
                .enterConfirmPasswordInMandatoryFieldPotvrditelozinku('Potvrdite lozinku:', '123456')
                .clickOnTheRegistrujSeButton()
                .assertRegistrationMessageAfterClickingTheRegistrujSeButton('Poslan vam je e-mail koji sadrži upute za aktivaciju članstva.')

})


})