/// <reference types="Cypress" />

const random = Math.floor(Math.random() * 1000 + 1)

import registerPage from "../Pages/registerPage";

describe('Typeqast Automation Register Page', () => {

    let RegisterPage = new registerPage()

    before(() => {
        cy.visit('https://www.links.hr/hr/register')
        RegisterPage.ifAcceptCookieButtonAppearClickOnIt()
        
      })

it('TC-064 - Verify that the user should be able to enter only numeric characters in the "OIB tvrtke" field at  "Detalji o tvrtki" form', () => {
    RegisterPage.checkRegisterAsCompanyCkeckbox()
                .assertCompanyInfoHeaderIsVissibleAftreCheckinhTheCompanyInfoHeader('Detalji o tvrtki')
                .enterompanyOIBInTheOIBtvrtkeField('123456789ab')
                .clickOnTheImeTvrtkefield()
                .assertValidationErrorMessageAtCompanyFormOiB('OIB tvrtke', 'Neispravan OIB')


})
})