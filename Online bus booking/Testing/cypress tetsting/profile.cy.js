describe("User Profile Test", () => {
  it("Should fetch and update user profile", () => {
    cy.visit("/profile");
    
    // Check initial data
    cy.get("#name").should("have.value", "John Doe");

    // Update and save
    cy.get("#phoneNumber").clear().type("1234567890");
    cy.get("form").submit();
    
    // Confirm update
    cy.contains("Profile updated successfully!");
  });
});
