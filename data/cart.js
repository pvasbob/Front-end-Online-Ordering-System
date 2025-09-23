export let cart = JSON.parse(localStorage.getItem("cart")) || [];

export function addToCart(cart, addProdButton, prodId, event) {
  // get the select quantity.
  let selectQuantity = Number(
    addProdButton
      .closest(".product-container")
      .querySelector(".product-quantity-container select").value
  );

  // Another way of getting the select quantity.
  // event.target is equalt o addProdButton
  let selectQuantity_0 = Number(
    event.target
      .closest(".product-container")
      .querySelector(".product-quantity-container select").value
  );

  // Another way of getting the select quantity.
  let selectQuantity_1 = Number(
    document.querySelector(`.js-select-quantity-${prodId}`).value
  );

  console.log(selectQuantity === selectQuantity_0);

  //
  // DONT DELETE COMMENT BELOW.
  // wrong code below. reason:
  // If there is no item from the start in cart, the code body will actually never run, and thus no item will be added to cart.
  // cart.forEach((item) => {
  //   console.log("hello");
  //   console.log(prodName);
  //   console.log(item.prodName);
  //   if (prodName === item.prodName) item.quantity++;
  //   else cart.push({ prodName, quantity: 1 });
  // });

  // declare existItem to record if the current prod exist in cart.
  let existItem;

  cart.forEach((cartItem) => {
    if (prodId === cartItem.prodId) existItem = cartItem;
  });

  if (existItem) existItem.quantity += selectQuantity;
  else cart.push({ prodId, quantity: selectQuantity });
}

// export function loadCart() {
//   return JSON.parse(localStorage.getItem("cart")) || [];
// }

export function loadCart() {
  try {
    const data = localStorage.getItem("cart");
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.warn("Corrupted cart data in localStorage, resetting.", e);
    return [];
  }
}

export function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// This function is about updating the webpage instead of handling the cart.
// Basically any function which has algo inside is moved to other module .js.
export function updateCartQuantity(cart) {
  // update cart total quantity.
  let cartQuantity = 0;
  cart.forEach((item) => {
    cartQuantity += item.quantity;
    // DONT DELETE:
    // The code below DOES NOT WORK becuase .innerHTML gives strings, so item.quantity
    // will first be converted to string or character and then pile into .innerHTML
    // document.querySelector(".cart-quantity").innerHTML += item.quantity;
  });
  document.querySelector(".js-cart-quantity").innerHTML = cartQuantity;
}

// export function updateCartQuantity() {
//   let updateCartEle = document.querySelector(".js-cart-quantity");
// }
