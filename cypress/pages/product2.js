class Product2 {
  static product2Name() {
    return cy.get("h1.product-detail-name");
  }

  static quantitySelector() {
    return cy.get("#quantity");
  }

  static selectQuantity3() {
    return this.quantitySelector().select("3");
  }

  static addToCart() {
    return cy.get("[data-testid='add-to-cart']");
  }
}

export default Product2;
