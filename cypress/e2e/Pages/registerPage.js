/// <reference types="Cypress" />

export default class registerPage {
 
    //SELECTORS
    registerAsCompanyCkeckbox = ('#RegisterAsCompany')
    maleRadioButton = ('#gender-male')
    femaileRadioButton = ('#gender-female')
    adresaUliceField = ('#StreetAddress')
    firstNameField = ('#FirstName')
    lastNameField = ('#LastName')
    dateOfBirthdayDayDropdown = ('[name="DateOfBirthDay"] > option')
    dateOfBirthdayDaySelect = ('[name="DateOfBirthDay"]')
    dateOfBirthdayMonthDropdown = ('[name="DateOfBirthMonth"] > option')
    dateOfBirthdayYear = ('[name="DateOfBirthYear"]')
    dateOfBirthYearSelect = ('[name="DateOfBirthYear"] > option')
    emailField = ('#Email')
    streetAddressField = ('#StreetAddress')
    zipPostalCodeLabel = ('[for="ZipPostalCode"]')
    cityLabel = ('[for="City"]')
    cityField = ('#City')
    countryDropdown = ('#CountryId_dropdown') 
    countryHidenValueField = ('#CountryId')
    countryDropOption = ('#CountryId_dropdown > option')
    phoneNumberField = ('#Phone')
    passwordField = ('#Password')
    confirmPasswordField = ('#ConfirmPassword')
    registerButton = ('#register-button')
    newslaterCheckBox = ('#Newsletter')
    acceptCookiesButton = ('#eu-cookie-ok')
    breadcrumb = ('#category-breadcrumb')
    fieldValidationError = ('.field-validation-error')
    fieldSet = ('.fieldset')
    registrationSuccesMessage = ('div.result')
    mandatoryFieldSign = ('.mandatory')
    labelAboveTheField = ('label')
    dropdownAfterTypingValue = ('.ui-corner-all')
    zipPostalCodeHidden = ('#ZipPostalCode')
    validationError = ('.validation-summary-errors')
    countryLabel = ('[for="CountryId"]')

    //Company info form selectors 
    companyNameField = ('#Company')
    companyOIBField = ('#CompanyOIB')    
    companyEmailField = ('#CompanyEmail')
    companyPhoneField = ('#CompanyTelephone')
    companyContactPersonField = ('#CompanyContactPerson')
    companyAddressField = ('#CompanyAddress')
    companyZipCodeLabel = ('[for="CompanyZipPostalCode"]')
    companyCityLabel = ('[for="CompanyCity"]')
    companyInfoHeader = ('#companyInfo > .title')


    //METHODS
    enterPostalCodeAtCompanyForm(zipcode){
        cy.get(this.companyZipCodeLabel)
        .siblings('input').eq(0)
        .clear()
        .type(zipcode)
        return this
    }
    enterCompanyAddressnTheAdresauliceField(companyAddress){
        cy.get(this.companyAddressField).first()
        .clear()
        .type(companyAddress)
        .should('have.value', companyAddress)
        return this
    }
    enterompanyOIBInTheOIBtvrtkeField(OIBNumber){
        cy.get(this.companyOIBField)
        .clear()
        .type(OIBNumber)
        .should('have.value', OIBNumber)
        return this
    }
    enterCompanyNameInTheImetvrtkeField(companyName){
        cy.get(this.companyNameField)
        .clear()
        .type(companyName)
        .should('have.value', companyName)
        return this
    }
    assertMandatoryFieldsAremarkedWithStarAtCompanyForm(labelName){
        cy.get(this.labelAboveTheField)
        .contains(labelName).first()
        .should('have.class', 'mandatory')
        return this
    }
    assertValidationErrorMessageAtCompanyForm(labelName, email){
        if(cy.get(this.labelAboveTheField).contains(labelName)){
              cy.get(this.companyNameField).siblings('span').should('have.class', 'field-validation-error')
        }  
        return this
    }
    assertclickOnTheCountryFieldIsDisabled(labelName){
        if(cy.get(this.labelAboveTheField).contains(labelName).should('not.have.class', 'mandatory')){
              cy.get(this.countryLabel).siblings('select')
              .should('be.disabled')
        return this
      }
    }
    assertPostanskiBrijIsEntered(labelName, postalCode){
        if(cy.get(this.labelAboveTheField).contains(labelName).should('not.have.class', 'mandatory')){
              cy.get(this.zipPostalCodeLabel).siblings('input').eq(0)
              .should('have.value', postalCode)
        return this
      }
    }
    enterCityNameInTheGradField(labelName, cityName, dropOption){
        if(cy.get(this.labelAboveTheField).contains(labelName).should('not.have.class', 'mandatory')){
              cy.get(this.cityLabel).siblings('input').eq(0).clear().type(cityName)
              cy.wait(1000)
              cy.get(this.dropdownAfterTypingValue).contains(dropOption)
              .click()
        }  
        return this
      }
    assertAddressDontHaveErrorMessageAfterEnteringValued(){
        cy.get(this.streetAddressField)
        .should('not.have.class', 'input-validation-error')
        .siblings('span')
        .should('have.text', '')
        return this
    }
    assertDropdownValueYear(){
        //const togglOptions = ['Year', '2010', '2020']
        cy.get(this.dateOfBirthYearSelect).then(($items) => {
            expect($items).to.have.length(112)
            expect($items).to.contain([2010])
            expect($items).to.contain([2019])
      
        })
        return this
    }
    selectValueFromDateOfBirthYearDropdown(value){
        cy.get(this.dateOfBirthdayYear)
        .select(value)
        .should('have.value', value)
        return this
    }
    assertDropdownValueMonth(){
        const togglOptions = ['Mjesec', 'siječanj', 'veljača', 'ožujak', 'travanj', 'svibanj', 'lipanj', 'srpanj', 'kolovoz', 'rujan', 'listopad', 'studeni', 'prosinac']
        cy.get(this.dateOfBirthdayMonthDropdown).each(($el, index, $list) => {
            cy.wrap($el).should('have.text', togglOptions[index])
        })
        return this
    }
    selectValueFromDateOfBirthMonthDropdown(value){
        cy.get(this.dateOfBirthdayMonthDropdown)
        .contains(value)
        .should('have.text', value)
        return this
    }
    assertDropdownValueDay(){
        const togglOptions = ['Dan', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']
        cy.get(this.dateOfBirthdayDayDropdown).each(($el, index, $list) => {
            cy.wrap($el).should('have.text', togglOptions[index])
        })
        return this
    }
    selectValueFromDateOfBirthDayDropdown(value){
        cy.get(this.dateOfBirthdayDaySelect)
        .select(value)
        .should('have.value', value)
        return this
    }
    uncheckNewslaterCheckbox(){
        cy.get(this.newslaterCheckBox)
        .uncheck().should('not.be.true')
        return this
    }
    assertNewslaterText(text){
        cy.get(this.newslaterCheckBox)
        .siblings('label')
        .should('have.text', text)
        return this
    }
    checkNewslaterCheckbox(){
        cy.get(this.newslaterCheckBox)
        .check().should('be.checked')
        return this
    }
    checkFemaleRadioButton(){
        cy.get(this.femaileRadioButton)
        .check().should('be.checked')
        return this
    }
    assertFemaleRadioButtonText(text){
        cy.get(this.femaileRadioButton)
        .siblings('label')
        .should('have.text', text)
        return this
    }
    checkMaleRadioButton(){
        cy.get(this.maleRadioButton)
        .check().should('be.checked')
        return this
    }
    assertMaleRadioButtonText(text){
        cy.get(this.maleRadioButton)
        .siblings('label')
        .should('have.text', text)
        return this
    }
    assertCompanyInfoHeaderIsVissibleAftreCheckinhTheCompanyInfoHeader(headerText){
         cy.get(this.companyInfoHeader)
         .should('be.visible')
         .and('contain', headerText)
         return this
    }
    assertCompanyInfoHeaderIsNotVissibleAftreUnCheckighTheCompanyInfoHeader(headerText){
        cy.get(this.companyInfoHeader)
        .should('not.be.visible')
        return this
   }
    checkRegisterAsCompanyCkeckbox(){
        cy.get(this.registerAsCompanyCkeckbox)
        .check().should('be.checked')
        return this
    }
    uncheckRegisterAsCompanyCkeckbox(){
        cy.get(this.registerAsCompanyCkeckbox)
        .uncheck().should('not.be.true')
        return this
    }
    clickOnTheConfirmPasswordField(){
        cy.get(this.confirmPasswordField)
        .click()
        return this
    }
    assertPhoneFiledHaveErrorMessageAfterEnteringInvalidPhoneNumber(phoneErrorValidation){
        cy.get(this.phoneNumberField)
        .should('have.class', 'input-validation-error')
        .siblings('span')
        .should('have.text', phoneErrorValidation)
        return this
    }
    assertPhoneFileDoNotHaveErrorMessageAfterEnteringValidPhoneNumber(){
        cy.get(this.phoneNumberField)
        .should('not.have.class', 'input-validation-error')
        .siblings('span')
        .should('have.text', '')
        return this
    }

    assertPasswordDontHaveErrorMessageAfterEnteringValidPassWord(){
        cy.get(this.passwordField)
        .should('not.have.class', 'input-validation-error')
        .siblings('span')
        .should('have.text', '')
        return this
    }
    assertConfirmPasswordDontHaveErrorMessageAfterEnteringSameInputAsPassWord(){ 
        cy.get(this.confirmPasswordField)
        .should('not.have.class', 'input-validation-error')
        .siblings('span')
        .should('have.text', '')
        return this
    }

    assertConfirmPasswordHaveErrorMessageAfterEnteringDiferentInputAsPassWord(validationError){ 
        cy.get(this.confirmPasswordField)
        .should('have.class', 'input-validation-error')
        .siblings('span')
        .should('have.text', validationError)
        return this
    }

    assertValidationErrorMessage(validationMessage){
        cy.get(this.validationError)
        .should('exist')
        .and('be.visible')
        .and('contain.text', validationMessage)
    }

    assertRegistrationMessageAfterClickingTheRegistrujSeButton(registrationMessage){
        cy.get(this.registrationSuccesMessage)
        .should('exist')
        .and('be.visible')
        .and('contain.text', registrationMessage)
    }

    clickOnTheRegistrujSeButton(){
        cy.get(this.registerButton)
        .click()
        return this
    }

    enterNameInTheImeField(firstName){
        cy.get(this.firstNameField)
        .clear()
        .type(firstName)
        .should('have.value', firstName)
        return this
    }

    enterLastNameInThePrezimeField(lasttName){
        cy.get(this.lastNameField)
        .clear()
        .type(lasttName).should('have.value', lasttName)
        return this
    }

    assertLastNameInThePrezimeFieldIsEmpty(){
        cy.get(this.lastNameField)
       .should('have.value', '')
        return this
    }

    enterEmailITheElektronskaPostaField(email){
        cy.get(this.emailField)
        .clear()
        .type(email + '{enter}')
        .should('have.value', email)
        return this
    }

    enterPasswordInTheLozinkaField(password){
        cy.get(this.passwordField)
        .clear()
        .type(password)
        .should('have.value', password)
        return this
    }

    enterConfirmPasswordInThePotvrditeLozinkuField(confirmPassword){
        cy.get(this.confirmPasswordField)
        .clear()
        .type(confirmPassword)
        .should('have.value', confirmPassword)
        return this
    }

    assertValidationErrorExistOnMandatoryFieldAfterClickingRefisterButtonAtFirstNameField(errorMessage){
        cy.get(this.firstNameField)
        .should('have.class', 'input-validation-error')
        .siblings('span')
        .should('have.text', errorMessage)
        return this
    }

    assertValidationErrorExistOnMandatoryFieldAfterClickingRefisterButtonAtLastNameField(errorMessage){
        cy.get(this.lastNameField)
        .should('have.class', 'input-validation-error')
        .siblings('span')
        .should('have.text', errorMessage)
        return this
    }

    assertValidationErrorExistOnMandatoryFieldAfterClickingRefisterButtonAtEmailField(errorMessage){
        cy.get(this.emailField)
        .should('have.class', 'input-validation-error')
        .siblings('span')
        .should('have.text', errorMessage)
        return this
    }

    assertValidationErrorExistOnMandatoryFieldAfterClickingRefisterButtonAtPasswordField(errorMessage){
        cy.get(this.passwordField)
        .should('have.class', 'input-validation-error')
        .siblings('span')
        .should('have.text', errorMessage)
        return this
    }

    assertValidationErrorExistOnMandatoryFieldAfterClickingRefisterButtonAtConfirmPasswordField(errorMessage){
        cy.get(this.confirmPasswordField)
        .should('have.class', 'input-validation-error')
        .siblings('span')
        .should('have.text', errorMessage)
        return this
    }

    clickOnTheRegisterButton(){
        cy.get(this.registerButton)
        .click()
        return this
    }
    //adresa sa siblingom zboh promenbljivog id
    enterAdresaUlice(adresaUlice){
        cy.get(this.zipPostalCodeLabel)
        .siblings('input').eq(0)
        .clear()
        .type(adresaUlice)
        return this
    }
    
     ifAcceptCookieButtonAppearClickOnIt(){
        //cy.get(this.acceptCookiesButton)
        if(cy.get(this.acceptCookiesButton).should('exist')){
            cy.get(this.acceptCookiesButton)
            .click()
        } else {

        }
        return this
    }
    
    assertMandatoryFieldsAremarkedWithStar(labelName){
        cy.get(this.labelAboveTheField)
        .contains(labelName)
        .should('have.class', 'mandatory')
        return this
    }

    assertValidationErrorWhenEnterNonAlphabeticValueInTheFirstNameField(errorMessage){
        cy.get(this.firstNameField)
        .siblings('span')
        .should('have.text', errorMessage)
        return this
    }

    assertValidationErrorWhenEnterNonAlphabeticValueInTheLastNameField(errorMessage){
        cy.get(this.lastNameField)
        .siblings('span')
        .should('have.text', errorMessage)
        return this
    }

    assertValidationErrorWhenEnter300CharacterInTheFirstNameField(errorMessage){
        cy.get(this.firstNameField)
        .siblings('span')
        .should('have.text', errorMessage)
        return this
    }

    assertValidationErrorWhenEnter300CharacterInTheLastNameField(errorMessage){
        cy.get(this.lastNameField)
        .siblings('span')
        .should('have.text', errorMessage)
        return this
    }

    enterNameInMandatoryFieldIme(labelName, firstName){
      if(cy.get(this.labelAboveTheField).contains(labelName).should('have.class', 'mandatory')){
            cy.get(this.firstNameField).clear().type(firstName).should('have.value', firstName)
      }  
      return this
    }

    enterLastNameInMandatoryFieldPrezime(labelName, lastName){
        if(cy.get(this.labelAboveTheField).contains(labelName).should('have.class', 'mandatory')){
              cy.get(this.lastNameField).clear().type(lastName).should('have.value', lastName)
        }  
        return this
      }

    enterEmailInMandatoryFieldElektronskaposta(labelName, email){
        if(cy.get(this.labelAboveTheField).contains(labelName).should('have.class', 'mandatory')){
              cy.get(this.emailField).clear().type(email).should('have.value', email)
        }  
        return this
      }

    enterPasswordInMandatoryFieldLozinka(labelName, password){
        if(cy.get(this.labelAboveTheField).contains(labelName).should('have.class', 'mandatory')){
              cy.get(this.passwordField).clear().type(password).should('have.value', password)
        }  
        return this
      }

    enterConfirmPasswordInMandatoryFieldPotvrditelozinku(labelName, confirmPassword){
        if(cy.get(this.labelAboveTheField).contains(labelName).should('have.class', 'mandatory')){
              cy.get(this.confirmPasswordField).clear().type(confirmPassword).should('have.value', confirmPassword)
        }  
        return this
      }

    enterStreetAddressInTheAdresaUliceField(labelName, streetAddress){
        if(cy.get(this.labelAboveTheField).contains(labelName).should('not.have.class', 'mandatory')){
              cy.get(this.streetAddressField).clear().type(streetAddress).should('have.value', streetAddress)
        }  
        return this
      }

    enterZipPostalCodeInThePoštanskibrojField(labelName, postalCode , cityName){
        if(cy.get(this.labelAboveTheField).contains(labelName).should('not.have.class', 'mandatory')){
              cy.get(this.zipPostalCodeLabel).siblings('input').eq(0).clear().type(postalCode)
              cy.get(this.dropdownAfterTypingValue).contains(cityName)
              .click()
        }  
        return this
      }

    getValueHidenFieldZipPostalCode(postalCode){
        cy.get(this.zipPostalCodeHidden)
        .should('not.have.class', 'mandatory')
        .and('not.have.value', '')
        .and('have.value', postalCode)
        return this
      }

    assertCityFieldIsFilledAfterZipCodeSelection(cityName){ ////
        cy.get(this.cityField)
        .should('not.have.class', 'mandatory')
        .and('have.value', cityName)
        .and('not.have.value', '')
        return this
      }
  
    assertCountryFieldIsFilledAfterZipCodeSelection(value){
        cy.get(this.countryHidenValueField)
        .should('have.value', value )
        return this
      }

    enterPhoneNumberInTheTelefonField(labelName, phoneNumber){
        if(cy.get(this.labelAboveTheField).contains(labelName).should('not.have.class', 'mandatory')){
              cy.get(this.phoneNumberField).clear()
              .type(phoneNumber).should('have.value', phoneNumber)
              
        }  
        return this
      }
     
    assertZipPostalCodeFieldIsEmpty(){
        cy.get(this.zipPostalCodeHidden)
        .should('not.have.class', 'mandatory')
        .and('have.value', '')
        return this
      }

    assertLabelNameAboveField(labelName){
        cy.get(this.labelAboveTheField)
        .contains(labelName)
        .should('have.text', labelName)
        return this
    }
    enterAlhabeticCharactersInZipPostalCode(labelName, postalCode){
        if(cy.get(this.labelAboveTheField).contains(labelName).should('not.have.class', 'mandatory')){
              cy.get(this.zipPostalCodeLabel).siblings('input').eq(0).clear().type(postalCode)
        }  
        return this
      }
       
    assertDropdownOptionsNotAppears(){
        cy.get(this.dropdownAfterTypingValue)
        .should('not.be.visible')
        return this
      }
    enterAlhabeticCharactersInZipPostalCode(labelName, cityName){
        if(cy.get(this.labelAboveTheField).contains(labelName).should('not.have.class', 'mandatory')){
              cy.get(this.cityField).siblings('input').eq(0).clear().type(cityName)
        }  
        return this
      }
       
      }

