/// <reference types="Cypress" />

const random = Math.floor(Math.random() * 1000 + 1)

import registerPage from "../Pages/registerPage";

describe('Typeqast Automation Register Page', () => {

    let RegisterPage = new registerPage()

    before(() => {
        cy.visit('https://www.links.hr/hr/register')
        RegisterPage.ifAcceptCookieButtonAppearClickOnIt()
        
      })
  
it('TC-044 - Verify that the "Grad" field is filled in automatically when the "Poštanski broj" of the city is selected', () => {
    RegisterPage.enterZipPostalCodeInThePoštanskibrojField('Poštanski broj:', '21 000', 'Novi Sad')
                .assertCityFieldIsFilledAfterZipCodeSelection('Novi Sad')
                


})


})