export const cart = [];

export function addToCart(addProdButton, prodId, event) {
  // get the select quantity.
  let selectQuantity = Number(
    addProdButton
      .closest(".product-container")
      .querySelector(".product-quantity-container select").value
  );

  // Another way of getting the select quantity.
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
