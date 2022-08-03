/// <reference types="Cypress" />

const random = Math.floor(Math.random() * 1000 + 1)

import registerPage from "../Pages/registerPage";

describe('Typeqast Automation Register Page', () => {

    let RegisterPage = new registerPage()

    before(() => {
        cy.visit('https://www.links.hr/hr/register')
        RegisterPage.ifAcceptCookieButtonAppearClickOnIt()
        
      })

it('TC-003 - Verify that the required/mandatory fields are marked with * against the field.', () => {
        
    RegisterPage.clickOnTheRegisterButton()
                .assertMandatoryFieldsAremarkedWithStar('Ime:')
                .assertMandatoryFieldsAremarkedWithStar('Prezime:')
                .assertMandatoryFieldsAremarkedWithStar('lektronska pošta:')
                .assertMandatoryFieldsAremarkedWithStar('Lozinka:')
                .assertMandatoryFieldsAremarkedWithStar('Potvrdite lozinku:')
      
      })


})
      