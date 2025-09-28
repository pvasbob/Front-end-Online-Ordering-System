import { cart, loadCart, saveCart } from "../../data/cart.js";
import { products } from "../../data/manga-source.js";
import {
  checkoutHTMLGenerate,
  deleteCart,
  updateDeliveryDateHTMLGenerate,
} from "./checkout.js";

import formatCurrency from "../utils/cost.js";
import { deliveryOptions } from "../../data/deliveryOptions.js";

// Generate the HTML of chekcout page
checkoutHTMLGenerate();
// add eventlistener to delete button
deleteCart(loadCart());
// add eventlistener to select shipping to update relevant information.
updateDeliveryDateHTMLGenerate();

orderSummaryHTMLGenerate();

export function orderSummaryHTMLGenerate() {
  let orderSummaryHTML = ``;
  const m_cartTotalPriceCents = cartTotalPriceCents();
  const m_shippingPriceCents = shippingHandling();
  const m_totalBeforeTaxCents = cartTotalPriceCents() + shippingHandling();
  const m_taxCents = tax(m_totalBeforeTaxCents);

  orderSummaryHTML = `
          <div class="payment-summary-title">Order Summary</div>

          <div class="payment-summary-row">
            <div>Items (${loadCart().length}):</div>
            <div class="payment-summary-money">$${formatCurrency(
              m_cartTotalPriceCents
            )}
            </div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">${formatCurrency(
              m_shippingPriceCents
            )}</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">${formatCurrency(
              m_totalBeforeTaxCents
            )}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">${formatCurrency(
              m_taxCents
            )}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">${formatCurrency(
              m_totalBeforeTaxCents + m_taxCents
            )}</div>
          </div>

          <button class="place-order-button button-primary">
            Place your order
          </button>
 
  `;

  document.querySelector(".js-payment-summary").innerHTML = orderSummaryHTML;

  shippingHandling_v();
  shippingHandling();
}

function cartTotalPriceCents() {
  let m_cartTotalPriceCents = 0;
  loadCart().forEach((cartItem, index) => {
    console.log(cartItem);
    products.forEach((prod, index) => {
      if (prod.id === cartItem.prodId) {
        m_cartTotalPriceCents += prod.priceCents * cartItem.quantity;
      }
    });
  });

  return m_cartTotalPriceCents;
}

function shippingHandling_v() {
  let m_cartTotalPriceCents = 0;
  loadCart().forEach((cartItem, index) => {
    console.log(cartItem);
    products.forEach((prod, index) => {
      if (prod.id === cartItem.prodId) {
        m_cartTotalPriceCents += prod.priceCents * cartItem.quantity;
      }
    });
  });

  return m_cartTotalPriceCents;
}

function shippingHandling() {
  let shippingPriceCents = 0;
  loadCart().forEach((cartItem, index) => {
    deliveryOptions.forEach((deliveryOption) => {
      if (deliveryOption.id === cartItem.deliveryOptionId) {
        // console.log(deliveryOption.id, cartItem.deliveryOptionId);
        shippingPriceCents += deliveryOption.priceCents;
      }
    });
  });

  console.log(shippingPriceCents);
  return shippingPriceCents;
}

function tax(rawTotal) {
  return (10 * rawTotal) / 100;
}
