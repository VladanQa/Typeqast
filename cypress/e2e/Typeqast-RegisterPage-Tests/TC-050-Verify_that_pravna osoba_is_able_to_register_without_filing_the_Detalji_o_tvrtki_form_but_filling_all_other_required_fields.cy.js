/// <reference types="Cypress" />

const random = Math.floor(Math.random() * 1000 + 1)

import registerPage from "../Pages/registerPage";

describe('Typeqast Automation Register Page', () => {

    let RegisterPage = new registerPage()

    before(() => {
        cy.visit('https://www.links.hr/hr/register')
        RegisterPage.ifAcceptCookieButtonAppearClickOnIt()
        
      })

it('TC-050 - Verify that "pravna osoba" is able to register without filing the "Detalji o tvrtki" form, but filling all other required  fields', () => {
    RegisterPage.checkRegisterAsCompanyCkeckbox()
                .assertCompanyInfoHeaderIsVissibleAftreCheckinhTheCompanyInfoHeader('Detalji o tvrtki')
                .enterNameInTheImeField('Marko')
                .enterLastNameInThePrezimeField('Markovic')
                .enterEmailITheElektronskaPostaField('markomarkovic' + random + '@mailinator.com')
                .enterPasswordInTheLozinkaField('123456')
                .enterConfirmPasswordInThePotvrditeLozinkuField('123456')
                .clickOnTheRegistrujSeButton()
                .assertValidationErrorMessageAtCompanyForm('Ime tvrtke:') // Bug-B-014


})


})