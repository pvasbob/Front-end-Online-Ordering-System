import {
  loadCart,
  saveCart,
  updateCartQuantity,
  removeItemCart,
} from "../data/cart.js";
import { products } from "../data/manga-source.js";
import { formatCurrency } from "./utils/cost.js";

// let cart = loadCart();

function checkoutHTMLGenerate() {
  let cart = loadCart();

  document.querySelector(
    ".checkout-header-middle-section"
  ).innerHTML = `          Checkout (<a class="return-to-home-link" href="amazon.html">${cart.length} items</a
          >)`;

  // cart.length;

  let checkouthtml = ``;
  cart.forEach((cartItem, index) => {
    let existItem;
    products.forEach((item) => {
      if (cartItem.prodId === item.id) {
        // existItem  belongs to products.
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
              <span class="delete-quantity-link link-primary js-checkout-delete" data-prod-id-checkout="${
                cartItem.prodId
              }">
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
  deleteCart(cart);
}

checkoutHTMLGenerate();

deleteCart(loadCart());

// This delete function can also be constructed by using the prod id.
// use index is dangerous because any dynamically rearraning of the arry
// will destroy the order.
// Better way: add data-prod-id to checkoutHTMLGenerate();
//             Use, construct class labeled with prodid,
//                  and use element.remover()
//             construct removeCart() to update cart.
function deleteCart(cart) {
  // let cart = loadCart();
  document
    .querySelectorAll(".js-checkout-delete")
    .forEach((checkoutDelete, index) => {
      console.log("hello");
      checkoutDelete.addEventListener("click", (event) => {
        // console.log(index);
        // cart.splice(index, 1);
        // console.log(cart);

        checkoutDelete.closest(".cart-item-container").remove();
        // remove the deleted item from cart
        let newCart = removeItemCart(checkoutDelete.dataset.prodIdCheckout);

        // save the modified cart to localStorage
        saveCart(newCart);
        // refresh the webpage.
        // No need to the following checkoutHTMLGenerate() anymore becuase .remove() already remove the delete container, which is exactly the point of checkoutHTMLGenerate() to show the new page.
        // checkoutHTMLGenerate();
      });
    });
}

// checkoutHTMLGenerate();

// const checkoutDeleteButton = document.querySelector(".js-checkout-delete");
// checkoutDeleteButton.addEventListener("click", () => {
//   checkoutDeleteHTMLGenerate();
// });

// function checkoutDeleteHTMLGenerate() {
//   let cart = loadCart();
//   cart.forEach((cartItem, index) => {
//     console.log(cartItem.prodId);
//   });
// }

// DONT DELETE
//
// document.querySelector(
//   ".checkout-header-middle-section"
// ).innerHTML = `          Checkout (<a class="return-to-home-link" href="amazon.html">${cart.length} items</a
//           >)`;
