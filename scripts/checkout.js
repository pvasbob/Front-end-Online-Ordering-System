import { loadCart } from "../data/cart.js";
import { products } from "../data/manga-source.js";
import { formatCurrency } from "./utils/cost.js";

let cart = loadCart();

let checkouthtml = ``;
cart.forEach((cartItem, index) => {
  let existItem;
  products.forEach((item) => {
    if (cartItem.prodId === item.id) {
      existItem = item;
    }
  });
  //
  checkouthtml += `
      <div class="cart-item-container">
        <div class="delivery-date">Delivery date: Tuesday, June 21</div>

        <div class="cart-item-details-grid">
          <img class="product-image" src=${existItem.image} />

          <div class="cart-item-details">
            <div class="product-name">${existItem.name}</div>
            <div class="product-price">${formatCurrency(
              existItem.priceCents * cartItem.quantity
            )}</div>
 
            <div class="product-quantity">
              <span> Quantity: <span class="quantity-label">${
                cartItem.quantity
              }</span> </span>
              <span class="update-quantity-link link-primary">
                Update
              </span>
              <span class="delete-quantity-link link-primary">
                Delete
              </span>
            </div>
          </div>

          <div class="delivery-options">
            <div class="delivery-options-title">
              Choose a delivery option:
            </div>
            <div class="delivery-option">
              <input
                type="radio"
                checked
                class="delivery-option-input"
                name="delivery-option-${cartItem.prodId}"
              />
              <div>
                <div class="delivery-option-date">Tuesday, June 21</div>
                <div class="delivery-option-price">FREE Shipping</div>
              </div>
            </div>
            <div class="delivery-option">
              <input
                type="radio"
                class="delivery-option-input"
                name="delivery-option-${cartItem.prodId}"
              />
              <div>
                <div class="delivery-option-date">Wednesday, June 15</div>
                <div class="delivery-option-price">$4.99 - Shipping</div>
              </div>
            </div>
            <div class="delivery-option">
              <input
                type="radio"
                class="delivery-option-input"
                name="delivery-option-${cartItem.prodId}"
              />
              <div>
                <div class="delivery-option-date">Monday, June 13</div>
                <div class="delivery-option-price">$9.99 - Shipping</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
});

document.querySelector(".js-order-summary").innerHTML = checkouthtml;

// DONT DELETE
//
// document.querySelector(
//   ".checkout-header-middle-section"
// ).innerHTML = `          Checkout (<a class="return-to-home-link" href="amazon.html">${cart.length} items</a
//           >)`;
