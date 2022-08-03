/// <reference types="Cypress" />

const random = Math.floor(Math.random() * 1000 + 1)

import registerPage from "../Pages/registerPage";

describe('Typeqast Automation Register Page', () => {

    let RegisterPage = new registerPage()

    before(() => {
        cy.visit('https://www.links.hr/hr/register')
        RegisterPage.ifAcceptCookieButtonAppearClickOnIt()
        
      })
  
it('TC-002 - Verify user should Register by filling all the required fields', () => {
    RegisterPage.enterNameInTheImeField('Marko')
                .enterLastNameInThePrezimeField('Markovic')
                .enterEmailITheElektronskaPostaField('markomarkovic' + random + '@mailinator.com')
                .enterPasswordInTheLozinkaField('123456')
                .enterConfirmPasswordInThePotvrditeLozinkuField('123456')
                .clickOnTheRegistrujSeButton()
                .assertRegistrationMessageAfterClickingTheRegistrujSeButton('Poslan vam je e-mail koji sadrži upute za aktivaciju članstva.')
    
    })

})