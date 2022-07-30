/// <reference types="Cypress" />

export default class registerPage {
 
    //SELECTORS
    adresaUliceField = ('#StreetAddress')
    
    //METHODS
    enterAdresaUlice(adresaUlice){
        cy.get(this.adresaUliceField)
        .scrollIntoView()
        .clear()
        .type(adresaUlice)
        return this
    }
    

}