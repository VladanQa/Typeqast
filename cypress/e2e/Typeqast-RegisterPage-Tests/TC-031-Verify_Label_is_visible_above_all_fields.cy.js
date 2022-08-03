/// <reference types="Cypress" />

const random = Math.floor(Math.random() * 1000 + 1)

import registerPage from "../Pages/registerPage";

describe('Typeqast Automation Register Page', () => {

    let RegisterPage = new registerPage()

    before(() => {
        cy.visit('https://www.links.hr/hr/register')
        RegisterPage.ifAcceptCookieButtonAppearClickOnIt()
        
      })

it('TC-031 - Verify Label is visible above all fields.', () => {
    RegisterPage.assertLabelNameAboveField('Rod:')
                .assertLabelNameAboveField('Ime:')
                .assertLabelNameAboveField('Prezime:')
                .assertLabelNameAboveField('Datum rođenja:')
                .assertLabelNameAboveField('Elektronska pošta:')
                .assertLabelNameAboveField('Adresa ulice:')
                .assertLabelNameAboveField('Poštanski broj:')
                .assertLabelNameAboveField('Grad:')
                .assertLabelNameAboveField('Zemlja:')
                .assertLabelNameAboveField('Telefon:')
                .assertLabelNameAboveField('Lozinka:')
                .assertLabelNameAboveField('Potvrdite lozinku:')

    })

})