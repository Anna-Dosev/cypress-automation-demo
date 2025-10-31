class HomePage {
  static welcomeText() {
    return cy.get("h2").contains("Welcome to PlantShop");
  }

  static featuredProduct1() {
    return cy.get("[data-testid='featured-product-1']");
  }

  static cartLink() {
    return cy.get("a.nav-link[href='cart.html']");
  }

  static allProductsLink() {
    return cy.get("a.nav-link[href='products.html']");
  }
}

export default HomePage;
