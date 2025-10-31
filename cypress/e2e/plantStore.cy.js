import HomePage from "../pages/homePage.js";
import Product1 from "../pages/product1.js";
import Product2 from "../pages/product2.js";
import Cart from "../pages/cart.js";
import AllProducts from "../pages/allProducts.js";

describe("Demoblaze E-commerce test", () => {
  beforeEach(() => {
    // This runs before each test
    cy.visit("https://anna-dosev.github.io/demo-plant-website/index.html");
  });

  it("C1:Assert user lands on Plant Store home page", () => {
    HomePage.welcomeText().should("be.visible");
  });

  it("C2:User can add Product 1 to cart, then clear the cart", () => {
    HomePage.featuredProduct1().click();
    Product1.product1Name().should("be.visible");
    Product1.addToCart().click();
    HomePage.cartLink().click();
    Cart.cartItems().should("be.visible");
    Cart.clearCart().click();
    Cart.emptyCart().should("be.visible");
  });

  it("C3:User adds more than 1 item to cart", () => {
    //This test should fail, as the UI does not support adding more than one item to the cart
    HomePage.allProductsLink().click();
    AllProducts.header().should("be.visible");
    AllProducts.product2().click();
    Product2.product2Name().should("be.visible");
    Product2.selectQuantity3().should("have.value", "3");
    Product2.addToCart().click();
    HomePage.cartLink().click();
    //This is where the failure should happen
    Cart.quantityDisplay()
      .then(($el) => {
        const actualText = $el.text();
        if (actualText !== "3") {
          console.log("There should be 3 plants in the cart! This is a bug.");
          console.log(`Expected: "3", but got: "${actualText}"`);
        }
      })
      .should("have.text", "3");
  });
});
