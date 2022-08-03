/// <reference types="Cypress" />

const random = Math.floor(Math.random() * 1000 + 1)

import registerPage from "../Pages/registerPage";

describe('Typeqast Automation Register Page', () => {

    let RegisterPage = new registerPage()

    before(() => {
        cy.visit('https://www.links.hr/hr/register')
        RegisterPage.ifAcceptCookieButtonAppearClickOnIt()
        
      })
  
it('TC-001 - Verify all required fields by not entering the data', () => {
  //  RegisterPage.enterAdresaUlice('11')
    RegisterPage.clickOnTheRegisterButton()
                .assertValidationErrorExistOnMandatoryFieldAfterClickingRefisterButtonAtFirstNameField('Ime je potrebno')
                .assertValidationErrorExistOnMandatoryFieldAfterClickingRefisterButtonAtLastNameField('Prezime je potrebno.')
                .assertValidationErrorExistOnMandatoryFieldAfterClickingRefisterButtonAtEmailField('Elektronska pošta je potrebna')
                .assertValidationErrorExistOnMandatoryFieldAfterClickingRefisterButtonAtPasswordField('Lozinka je potrebna.')
                .assertValidationErrorExistOnMandatoryFieldAfterClickingRefisterButtonAtConfirmPasswordField('Lozinka je potrebna.')
    
    })

})