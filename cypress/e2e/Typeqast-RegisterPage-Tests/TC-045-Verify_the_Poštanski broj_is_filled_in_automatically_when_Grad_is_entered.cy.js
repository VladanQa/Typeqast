/// <reference types="Cypress" />

const random = Math.floor(Math.random() * 1000 + 1)

import registerPage from "../Pages/registerPage";

describe('Typeqast Automation Register Page', () => {

    let RegisterPage = new registerPage()

    before(() => {
        cy.visit('https://www.links.hr/hr/register')
        RegisterPage.ifAcceptCookieButtonAppearClickOnIt()
        
      })

it('TC-045 - Verify that the "Poštanski broj" field is filled in automatically when the "Grad" field is selected', () => {
    RegisterPage.enterCityNameInTheGradField('Grad:', 'BEOGRAD', '11000 BEOGRAD, Serbia')
                .assertCityFieldIsFilledAfterZipCodeSelection('BEOGRAD')
                .assertPostanskiBrijIsEntered('Poštanski broj:', '11000')

    })


})