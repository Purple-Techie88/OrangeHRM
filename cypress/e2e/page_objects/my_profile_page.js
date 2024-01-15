import BasePage from "./base_page";

class MyProfilePage extends BasePage{

    getItemFromMainMenu(menuItem) {
        return cy.get("ul.oxd-main-menu").contains(menuItem);
    }

}

class PersonalDetails extends MyProfilePage{

    getItemFromMainMenu(menuItem) {
        return cy.get("ul.oxd-main-menu").contains(menuItem);
    }

    getFirstNameField(){
        return cy.get("input[name = 'firstName']");
    }

    getLastNameField(){
        return cy.get("input[name = 'lastName']");
    }

    getBirthdateCalendar(){
        return cy.get(".oxd-date-input").eq(1);
    }

    getCalendarYearDropdown(){
        return cy.get(".oxd-calendar-selector-year-selected");
    }

    getCalndarYear(birthYear){
        return cy.get(".oxd-calendar-dropdown--option").contains(birthYear);

}

    getCalendarDay(day){
        return cy.get(".oxd-calendar-date").contains(day);
    }



    selectBirthdateOnCalendar(){
        let birthYears = [1988, 1995, 2005];
        let birthYear = birthYears[Math.floor(Math.random()*birthYears.length)];
        let date =  Math.floor(Math.random() * 30) + 1;
        
        this.getCalendarYearDropdown().click()
        this.getCalndarYear(birthYear).click()
        this.getCalendarDay(date).click()    }

}
    const myProfilePage = new MyProfilePage();
    const personalDetails = new PersonalDetails();
   
    export {
    myProfilePage,
    personalDetails,

    };
    export default myProfilePage;;