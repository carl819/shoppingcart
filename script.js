const products = [
  {
  name: "Strawberries",
  price: 5,
  quantity: 0,
  productId: 1000, 
  image: "./images/strawberry.jpg",
  },
  
  {
    name: "Oranges",
    price: 4,
    quantity: 0,
    productId: 1001, 
    image: "./images/orange.jpg",
  },

  {
    name: "Cherries",
    price: 8,
    quantity: 0,
    productId: 1002,
    image: "./images/cherry.jpg",
  },
]

const cart = [];

// productList.find() is finding the products that match, then returns results
function findProduct(productId, productList) {
  return productList.find(function(product) { 
    return product.productId === productId
  });
}
//addProductToCart function adds products found to cart
function addProductToCart(productId) {
  let product = findProduct(productId, products)
  //If there's no product in the cart, then product is pushed to the cart array
  if (!cart.includes(product)) {
    cart.push(product)
  }
  increaseQuantity(productId)
}

//Increase the quantity of a product in the cart
function increaseQuantity(productId) 
{
  let product = findProduct(productId, cart);
//If the product exists, increase its quantity.
  if (product){
    product.quantity += 1; 
}
}

//Decrease the quantity of a product in the cart
function decreaseQuantity(productId){
  let product = findProduct (productId, cart); 

  //If the product doesn't exist, decrease its quantity.
  product.quantity -=1; 
  if (product.quantity === 0) {
    const index = cart.indexOf(product); 
    if (index > -1) {
    cart.splice(index,1);
  }
}
}

//Product is removed completely.
function removeProductFromCart (productId) {
  let product = findProduct(productId, cart) 
  product.quantity = 0
  cart.splice(product.name,1)}

function cartTotal() {
  let totalCost = 0;

  //Calculates total, then returns total cost
  for (let x =0; x < cart.length; x++) {
    totalCost += cart [x].quantity * cart[x].price;

  }
  return totalCost;
}

//This function empties the shopping cart
function emptyCart (){
 
  cart.splice (0, cart.length); 
}


let totalPaid = 0;

function pay(amount) {

 //Amount paid
  totalPaid = totalPaid + amount;

  //The remaining balance is subtracting cart total from total paid.

  let remainingBalance = totalPaid - cartTotal();

  if (remainingBalance >= 0) {
    totalPaid = 0;
    emptyCart();
  }
   return remainingBalance;
}

module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay, 
  emptyCart,

}