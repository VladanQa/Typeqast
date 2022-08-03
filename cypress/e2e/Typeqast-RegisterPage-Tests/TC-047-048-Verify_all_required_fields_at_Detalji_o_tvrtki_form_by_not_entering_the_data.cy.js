/// <reference types="Cypress" />

const random = Math.floor(Math.random() * 1000 + 1)

import registerPage from "../Pages/registerPage";

describe('Typeqast Automation Register Page', () => {

    let RegisterPage = new registerPage()

    before(() => {
        cy.visit('https://www.links.hr/hr/register')
        RegisterPage.ifAcceptCookieButtonAppearClickOnIt()
        
      })

it('TC-047-048 - Verify that the user is not able to select Country from the drop-down menu in "Zemlja" field', () => {
    RegisterPage.checkRegisterAsCompanyCkeckbox()
                .assertCompanyInfoHeaderIsVissibleAftreCheckinhTheCompanyInfoHeader('Detalji o tvrtki')
                .clickOnTheRegisterButton()
                .assertValidationErrorMessageAtCompanyForm('Ime tvrtke:') // Bug-B-012

})

})