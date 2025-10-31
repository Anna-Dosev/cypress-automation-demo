class AllProducts {
  static header() {
    return cy.get("h2").contains("All Products");
  }
  static product2() {
    return cy.get("[data-testid='product-2']");
  }
}
export default AllProducts;
