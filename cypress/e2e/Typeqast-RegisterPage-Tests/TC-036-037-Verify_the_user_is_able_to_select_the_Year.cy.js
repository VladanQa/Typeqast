/// <reference types="Cypress" />

const random = Math.floor(Math.random() * 1000 + 1)

import registerPage from "../Pages/registerPage";

describe('Typeqast Automation Register Page', () => {

    let RegisterPage = new registerPage()

    before(() => {
        cy.visit('https://www.links.hr/hr/register')
        RegisterPage.ifAcceptCookieButtonAppearClickOnIt()
        
      })

it('TC-036-037 - Validate the user is able to select Year, and dropdown options', () => {
    RegisterPage.selectValueFromDateOfBirthYearDropdown('2010')
                .assertDropdownValueYear()
})

})