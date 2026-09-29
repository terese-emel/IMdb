import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

Then('I see the "Top Box Office" list', () => {
  cy.get(".ipc-metadata-list").should("be.visible");
});

When("I click on the second item in the list", () => {
  cy.get(".ipc-metadata-list-summary-item a")
    .eq(1) // Select the second item (index starts from 0)
    .click();
});

When('I click on the "IMDb Rating" button', () => {
  cy.get("[data-testid=hero-rating-bar__user-rating]").eq(1).click();
});

When('I click on the "Rate" button', () => {
  cy.get("[data-testid=hero-rating-bar__user-rating__unrated]")
    .contains("Rate")
    .should("be.visible")
    .click();
});

Then("I see the rating modal", () => {
  cy.get(".ipc-promptable-base__content").should("be.visible");
});

When("I set the rating to 5 stars", () => {
  cy.get(".ipc-starbar__rating__button")
    .eq(4)
    .should("be.visible")
    .click()
    .get(".ipc-rating-display__rating")
    .contains("5");
});

When('I click on the "Rate" button in the modal', () => {
  cy.get(".ipc-btn").contains("Rate").click({ force: true });
});

Then("I see a confirmation message for the rating", () => {
  cy.get(".ipc-promptable-base__content").should("not.be.visible");
});
