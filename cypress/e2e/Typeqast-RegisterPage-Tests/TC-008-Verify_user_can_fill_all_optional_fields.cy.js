/// <reference types="Cypress" />

const random = Math.floor(Math.random() * 1000 + 1)

import registerPage from "../Pages/registerPage";

describe('Typeqast Automation Register Page', () => {

    let RegisterPage = new registerPage()

    before(() => {
        cy.visit('https://www.links.hr/hr/register')
        RegisterPage.ifAcceptCookieButtonAppearClickOnIt()
        
      })

it('TC-008 - Verify user can fill all optional fields', () => {
    RegisterPage.enterStreetAddressInTheAdresaUliceField('Adresa ulice:','Takovska 101')
                .enterZipPostalCodeInThePoštanskibrojField('Poštanski broj:', '11000', 'BEOGRAD')
                .getValueHidenFieldZipPostalCode('11000')
                .assertCityFieldIsFilledAfterZipCodeSelection('BEOGRAD')
                .assertCountryFieldIsFilledAfterZipCodeSelection('85')
                .enterPhoneNumberInTheTelefonField('Telefon:', '+123121234567')

    })


})