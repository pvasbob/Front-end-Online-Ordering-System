// import variables
import { saveCart, loadCart, updateCartQuantity } from "../data/cart.js";
import { products } from "../data/manga-source.js";
// import function
import { addToCart } from "../data/cart.js";
// import util function
import { formatCurrency } from "./utils/cost.js";
//

let cart = loadCart();
updateCartQuantity(cart);

let productHTML = ``;
products.forEach((prod, index) => {
  productHTML += `
    <div class="product-container">
      <div class="product-image-container">
        <img class="product-image" src=${prod.image} />
      </div>

      <div class="product-name limit-text-to-2-lines">${prod.name}</div>

      <div class="product-rating-container">
        <img
          class="product-rating-stars"
          src="images/ratings/rating-${prod.rating.stars * 10}.png"
        />
        <div class="product-rating-count link-primary">${
          prod.rating.count
        }</div>
      </div>

      <div class="product-price">$${formatCurrency(prod.priceCents)}</div>

      <div class="product-quantity-container ">
        <select class="js-select-quantity-${prod.id}">
          <option selected value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <div class="product-spacer"></div>

      <div class="added-to-cart">
        <img src="images/icons/checkmark.png" />
        Added
      </div>

      <button class="add-to-cart-button button-primary js-add-to-cart-button" data-prod-id="${
        prod.id
      }">Add to Cart</button>
    </div>
        `;
});

document.querySelector(".products-grid").innerHTML = productHTML;
document
  .querySelectorAll(".js-add-to-cart-button")
  .forEach((addProdButton, index) => {
    // the code below means event.target is equivalent to addProdButton,
    // the element which event works on.
    addProdButton.addEventListener("click", (event) => {
      // get product id
      const prodId = addProdButton.dataset.prodId;

      // add to cart function.
      addToCart(cart, addProdButton, prodId, event);
      // update cart quantity.
      updateCartQuantity(cart);
      saveCart(cart);
    });
  });

// the class needs to be separated between .css and .js
//  any classes used for .js should start with 'js'
// .toFixed     : keep two decimal.
