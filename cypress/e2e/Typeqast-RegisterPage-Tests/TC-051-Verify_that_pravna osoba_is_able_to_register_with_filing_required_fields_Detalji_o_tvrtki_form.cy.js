/// <reference types="Cypress" />

const random = Math.floor(Math.random() * 1000 + 1)

import registerPage from "../Pages/registerPage";

describe('Typeqast Automation Register Page', () => {

    let RegisterPage = new registerPage()

    before(() => {
        cy.visit('https://www.links.hr/hr/register')
        RegisterPage.ifAcceptCookieButtonAppearClickOnIt()
        
      })

it('TC-051 - Verify that "pravna osoba" is able to register with filing required fields "Detalji o tvrtki" form  but not filling all other required  fields', () => {
    RegisterPage.checkRegisterAsCompanyCkeckbox()
                .assertCompanyInfoHeaderIsVissibleAftreCheckinhTheCompanyInfoHeader('Detalji o tvrtki')
                .enterCompanyNameInTheImetvrtkeField('Quality control')
                .enterompanyOIBInTheOIBtvrtkeField('12345678901')
                .enterCompanyAddressnTheAdresauliceField('Golubacka 25')
                .enterPostalCodeAtCompanyForm('21 000')


})

})