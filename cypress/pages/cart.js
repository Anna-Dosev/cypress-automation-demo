class Cart {
  static cartItems() {
    return cy.get("[data-testid='cart-items']").contains("Monstera Deliciosa");
  }

  static clearCart() {
    return cy.get("[data-testid='clear-cart']");
  }

  static emptyCart() {
    return cy.get("[data-testid='cart-empty']");
  }

  static quantityDisplay() {
    return cy.get(".quantity-display");
  }
}
export default Cart;
