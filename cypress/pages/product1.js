class Product1 {
  static product1Name() {
    return cy.get("h1.product-detail-name");
  }

  static addToCart() {
    return cy.get("[data-testid='add-to-cart']");
  }
}

export default Product1;
