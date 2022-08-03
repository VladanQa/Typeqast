/// <reference types="Cypress" />

const random = Math.floor(Math.random() * 1000 + 1)

import registerPage from "../Pages/registerPage";

describe('Typeqast Automation Register Page', () => {

    let RegisterPage = new registerPage()

    before(() => {
        cy.visit('https://www.links.hr/hr/register')
        RegisterPage.ifAcceptCookieButtonAppearClickOnIt()
        
      })
  
it('TC-042 - Verify that the "Zemlja" field is filled in automatically when the "Poštanski broj" is entered', () => {
    RegisterPage.enterZipPostalCodeInThePoštanskibrojField('Poštanski broj:', '21 000', 'Novi Sad')
                .assertCountryFieldIsFilledAfterZipCodeSelection('85')

})


})