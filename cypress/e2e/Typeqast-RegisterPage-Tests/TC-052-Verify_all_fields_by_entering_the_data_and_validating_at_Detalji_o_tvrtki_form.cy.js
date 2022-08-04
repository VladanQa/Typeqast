/// <reference types="Cypress" />

const random = Math.floor(Math.random() * 1000 + 1)

import registerPage from "../Pages/registerPage";

describe('Typeqast Automation Register Page', () => {

    let RegisterPage = new registerPage()

    before(() => {
        cy.visit('https://www.links.hr/hr/register')
        RegisterPage.ifAcceptCookieButtonAppearClickOnIt()
        
      })

it('TC-052 - Verify all fields by entering the data and validating at "Detalji o tvrtki" form ', () => {
    RegisterPage.checkRegisterAsCompanyCkeckbox()
                .assertCompanyInfoHeaderIsVissibleAftreCheckinhTheCompanyInfoHeader('Detalji o tvrtki')
                .enterCompanyNameInTheImetvrtkeField('Quality control')
                .enterompanyOIBInTheOIBtvrtkeField('12345678901')
                .enterEmailITheElektronskaPostaFieldAtCompanyForm('test234@ab.com')
                .enterPhoneInTheEmailTvrtkeFieldAtCompanyForm('+123121234567')
                .enterContactPersonInTheKontaktOsobaTvrtkeFieldAtCompanyForm('Pera Peric')
                .enterCompanyAddressnTheAdresauliceField('Golubacka 25')
                .enterPostalCodeAtCompanyForm('21 000')
                .selectOptionWhenTyping('21 000 Novi Sad, Serbia')
    RegisterPage.assertCityFieldIsFilledAfterZipCodeSelectionAtCompanyForm('Novi Sad')
                .assertCountryFieldIsFilledAfterZipCodeSelectionAtCompanyForm('85')
                

})

})