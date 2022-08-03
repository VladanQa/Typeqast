/// <reference types="Cypress" />

const random = Math.floor(Math.random() * 1000 + 1)

import registerPage from "../Pages/registerPage";

describe('Typeqast Automation Register Page', () => {

    let RegisterPage = new registerPage()

    beforeEach(() => {
        cy.visit('https://www.links.hr/hr/register')
        RegisterPage.ifAcceptCookieButtonAppearClickOnIt()
        
      })

it('TC-010 - VVerify user can not register with invalid email address- without @', () => {
    RegisterPage.enterEmailITheElektronskaPostaField('markomarkovicmailinator.com')
                .assertValidationErrorExistOnMandatoryFieldAfterClickingRefisterButtonAtEmailField('Pogrešan e-mail')
})

it('TC-010 - VVerify user can not register with invalid email address- without .com', () => {
    RegisterPage.enterEmailITheElektronskaPostaField('markomarkovic2@mailinator')
                .assertValidationErrorExistOnMandatoryFieldAfterClickingRefisterButtonAtEmailField('Pogrešan e-mail')
})

it('TC-010 - VVerify user can not register with invalid email address- without prefix before.com', () => {
    RegisterPage.enterEmailITheElektronskaPostaField('markomarkovic2@.com')
                .assertValidationErrorExistOnMandatoryFieldAfterClickingRefisterButtonAtEmailField('Pogrešan e-mail')
})

it('TC-010 - VVerify user can not register with invalid email address- without text after @', () => {
    RegisterPage.enterEmailITheElektronskaPostaField('markomarkovic2@')
                .assertValidationErrorExistOnMandatoryFieldAfterClickingRefisterButtonAtEmailField('Pogrešan e-mail')
})

it('TC-010 - VVerify user can not register with invalid email address- text before @', () => {
    RegisterPage.enterEmailITheElektronskaPostaField('markomarkovic')
                .assertValidationErrorExistOnMandatoryFieldAfterClickingRefisterButtonAtEmailField('Pogrešan e-mail')

})

it('TC-010 - VVerify user can not register with invalid email address- with .c', () => {
    RegisterPage.enterEmailITheElektronskaPostaField('abc.def1@mail.c') // Bug - B004
                .assertValidationErrorExistOnMandatoryFieldAfterClickingRefisterButtonAtEmailField('Pogrešan e-mail')

})

it('TC-010 - VVerify user can not register with invalid email address- with .c', () => {
    RegisterPage.enterEmailITheElektronskaPostaField('markmarkovic@mailinator.com.com') // Bug - B004
                .assertValidationErrorExistOnMandatoryFieldAfterClickingRefisterButtonAtEmailField('Pogrešan e-mail')

})


})