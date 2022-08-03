/// <reference types="Cypress" />

const random = Math.floor(Math.random() * 1000 + 1)

import registerPage from "../Pages/registerPage";

describe('Typeqast Automation Register Page', () => {

    let RegisterPage = new registerPage()

    before(() => {
        cy.visit('https://www.links.hr/hr/register')
        RegisterPage.ifAcceptCookieButtonAppearClickOnIt()
        
      })

it('TC-028 -Check all buttons, radio buttons, checkboxes - check Želim se registrirati kao pravna osoba', () => {
    RegisterPage.checkRegisterAsCompanyCkeckbox()
                .assertCompanyInfoHeaderIsVissibleAftreCheckinhTheCompanyInfoHeader('Detalji o tvrtki')
                .uncheckRegisterAsCompanyCkeckbox()
                .assertCompanyInfoHeaderIsNotVissibleAftreUnCheckighTheCompanyInfoHeader()
    })

it('TC-028 -Check all buttons, radio buttons, checkboxes - Male-Female radiobutton', () => {
    RegisterPage.checkMaleRadioButton()
                .assertMaleRadioButtonText('Muški')
                .checkFemaleRadioButton()
                .assertFemaleRadioButtonText('Ženski')

    })

it('TC-028 -Check all buttons, radio buttons, checkboxes - Novosti checkbox', () => {
        RegisterPage.checkNewslaterCheckbox()
                    .assertNewslaterText('Novosti')
                    .uncheckNewslaterCheckbox()
                    

})

})