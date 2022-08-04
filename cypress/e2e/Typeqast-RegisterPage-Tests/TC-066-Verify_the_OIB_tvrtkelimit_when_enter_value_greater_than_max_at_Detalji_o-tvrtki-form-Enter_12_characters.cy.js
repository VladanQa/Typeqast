/// <reference types="Cypress" />

const random = Math.floor(Math.random() * 1000 + 1)

import registerPage from "../Pages/registerPage";

describe('Typeqast Automation Register Page', () => {

    let RegisterPage = new registerPage()

    before(() => {
        cy.visit('https://www.links.hr/hr/register')
        RegisterPage.ifAcceptCookieButtonAppearClickOnIt()
        
      })

it('TC-066 - Verify the "OIB tvrtke" limit when enter value greater than max at  "Detalji o tvrtki" form. Enter 12 characters', () => {
    RegisterPage.checkRegisterAsCompanyCkeckbox()
                .assertCompanyInfoHeaderIsVissibleAftreCheckinhTheCompanyInfoHeader('Detalji o tvrtki')
                .enterompanyOIBInTheOIBtvrtkeField('123456789012')
                .clickOnTheImeTvrtkefield()
                .assertValidationErrorMessageAtCompanyFormOiB('OIB tvrtke', 'Neispravan OIB')


})
})