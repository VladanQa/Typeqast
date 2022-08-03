/// <reference types="Cypress" />

const random = Math.floor(Math.random() * 1000 + 1)

import registerPage from "../Pages/registerPage";

describe('Typeqast Automation Register Page', () => {

    let RegisterPage = new registerPage()

    before(() => {
        cy.visit('https://www.links.hr/hr/register')
        RegisterPage.ifAcceptCookieButtonAppearClickOnIt()
        
      })

it('TC-004 - Verify error messige is displayed when required field is not filled', () => {
        
    RegisterPage.enterNameInTheImeField('Marko')
                .enterEmailITheElektronskaPostaField('markomarkovic' + random + '@mailinator.com')
                .enterPasswordInTheLozinkaField('123456')
                .enterConfirmPasswordInThePotvrditeLozinkuField('123456')
                .clickOnTheRegistrujSeButton()
                .assertLastNameInThePrezimeFieldIsEmpty()
                .assertValidationErrorExistOnMandatoryFieldAfterClickingRefisterButtonAtLastNameField('Prezime je potrebno.')
                .assertMandatoryFieldsAremarkedWithStar('Prezime:')
                
      })


})
   