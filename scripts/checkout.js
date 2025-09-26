import {
  loadCart,
  saveCart,
  updateCartQuantity,
  removeItemCart,
  cart,
} from "../data/cart.js";
import { products } from "../data/manga-source.js";
import { formatCurrency } from "./utils/cost.js";
// external library
// import  function from external lib
import { hello } from "https://unpkg.com/supersimpledev@1.0.1/hello.esm.js";
// import default function from external lib
import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js";

import { deliveryOptions } from "../data/deliveryOptions.js";

// let cart = loadCart();

function checkoutHTMLGenerate() {
  let cart = loadCart();

  checkoutTitleUpdate(cart);

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
            ${deliveryOptionHTML(cartItem.prodId, cartItem)}
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

updateDeliveryDateHTMLGenerate();

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
      checkoutDelete.addEventListener("click", (event) => {
        // console.log(index);
        // cart.splice(index, 1);
        // console.log(cart);

        checkoutDelete.closest(".cart-item-container").remove();
        // remove the deleted item from cart
        let newCart = removeItemCart(checkoutDelete.dataset.prodIdCheckout);

        // save the modified cart to localStorage
        saveCart(newCart);

        // checkoutHTMLGenerate();
        checkoutTitleUpdate(newCart);

        // refresh the webpage.
        // No need to the following checkoutHTMLGenerate() anymore becuase .remove() already remove the delete container, which is exactly the point of checkoutHTMLGenerate() to show the new page.
        // checkoutHTMLGenerate();
      });
    });
}

function deliveryOptionHTML(cartItemDotprodId, cartItem) {
  let deliveryHTML = ``;
  deliveryOptions.forEach((deliveryOption, index) => {
    // construct the deliverDate
    const today = dayjs();
    const deliveryDate = today.add(deliveryOption.deliveryDays, "days");
    const dateString = deliveryDate.format("dddd, MMMM D");
    // construct price
    const priceString =
      deliveryOption.priceCents === 0
        ? "FREE"
        : `$${formatCurrency(deliveryOption.priceCents)} - `;

    //
    let isChecked =
      cartItem.deliveryOptionId === deliveryOption.id ? "checked" : "";
    // construct the deliveryHTML

    deliveryHTML += `
      <div class="delivery-option">
        <input
          type="radio"
          ${isChecked}
          class="delivery-option-input"
          name="delivery-option-${cartItemDotprodId}"
          data-delivery-id = ${deliveryOption.id}
        />
        <div>
          <div class="delivery-option-date">${dateString}</div>
          <div class="delivery-option-price"> ${priceString} Shipping</div>
        </div>
      </div>

    `;
  });

  return deliveryHTML;
}

function updateDeliveryDateHTMLGenerate() {
  let cart = loadCart();
  const deliveryEles = document.querySelectorAll(".delivery-option-input");

  deliveryEles.forEach((deliveryEle, index) => {
    const changeDateToEle = deliveryEle
      .closest(".delivery-option")
      .querySelector(".delivery-option-date");

    // check which one is checked by default and update the delivery date.
    if (deliveryEle.checked) changeDateToUpdateToDeliveryDate(changeDateToEle);
    // Add EventList to update delivery change.
    deliveryEle.addEventListener("change", () => {
      changeDateToUpdateToDeliveryDate(changeDateToEle);
      console.log(deliveryEle);
      const changeToId = deliveryEle.name.substring("delivery-option-".length);
      cart.forEach((cartItem, index) => {
        if (cartItem.prodId === changeToId)
          cartItem.deliveryOptionId = deliveryEle.dataset.deliveryId;
      });

      saveCart(cart);
    });
  });
}

function changeDateToUpdateToDeliveryDate(changeDateToEle) {
  changeDateToEle
    .closest(".cart-item-container")
    .querySelector(
      ".delivery-date"
    ).innerHTML = `Delivery date:  ${changeDateToEle.innerHTML}`;
}

function checkoutTitleUpdate(cart) {
  document.querySelector(
    ".checkout-header-middle-section"
  ).innerHTML = `          Checkout (<a class="return-to-home-link" href="amazon.html">${cart.length} items</a
          >)`;
}
// DONT DELETE
//
// document.querySelector(
//   ".checkout-header-middle-section"
// ).innerHTML = `          Checkout (<a class="return-to-home-link" href="amazon.html">${cart.length} items</a
//           >)`;

// ${deliveryOptionHTML(cartItem.prodId, cartItem)}
