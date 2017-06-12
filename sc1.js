//actions 

//braves
$(document).ready(function(){
    $("divv").click(function(event) {
      event.preventDefault();
      var product = $(this).attr("h4");
      var price = Number($(this).attr(".price"));

      add(product, price, 1);
      displayCart();
});

displayCart();

function displayCart() {  //called 

  var shoppingCartArray = listCart();
  var result = "";
  for (var i in shoppingCartArray) {
    result += " " +shoppingCartArray[i].product+" "+shoppingCartArray[i].quantity+" " 
  }
$("#show-cart").html(result);
}


//functions 

//********Shopping Cart********** 
var shoppingCart = []; 
var item = function(product , price , quantity)
  {
    this.product = product;
    this.price = price;
    this.quantity = quantity;
    };

//code for calculating math
// add(name, price, quantity)
function add(product, price, quantity) {
  for (var i in shoppingCart) {
    if (shoppingCart[i].product === product) { //if they match, item was found
      shoppingCart[i].quantity++; //adds one 
      return;
    }
  }    
  var ticket = new item(product, price, quantity);
  shoppingCart.push(ticket);
}


//console.log(shoppingCart); //check add function

// remove(product)
function remove(product) {
  for (var i in shoppingCart) {
    if (shoppingCart[i].product === product) { //looping through every item if they match,item was found 
      shoppingCart[i].quantity--; //removes one 
      if (shoppingCart[i].quantity === -2) {
       shoppingCart.splice(i, 1); //remove items from array 
      }
      break;
    }
  }
}

console.log(shoppingCart[0].quantity); //check remove function

console.log(shoppingCart)


// removeAll(name)
function removeAll(product) {
  for (var i in shoppingCart) {
    if (shoppingCart[i].product === product) {
      shoppingCart.splice(i, 1);
      break;
    }
  }
}
add("Braves Ticket", 25.00, 1);
add("Atlanta Hawks Ticket", 35.00, 1);
add("Braves Ticket", 25.00, 1);
add("Braves Ticket", 25.00, 1);
add("Atlanta Hawks Ticket", 35.00, 1);
add("Braves Ticket", 25.00, 1);

console.log(shoppingCart.length);
console.log(shoppingCart);

remove("Braves Ticket");

console.log(shoppingCart.length);
console.log(shoppingCart);

/*removeAll("Braves Ticket");

console.log(shoppingCart.length);
console.log(shoppingCart); */

/*clearCart()
function clearCart() {
  shoppingCart = [];
}

clearCart();
console.log(shoppingCart); */

// countCart()
function quantityShoppingCart() {
  var totalQuantity = 0;
  for (var i in shoppingCart) {
    totalQuantity += shoppingCart[i].quantity;  
  }
  return totalQuantity;
} 

console.log( quantityShoppingCart() ); 


//grand total
// totalCart()
function totalShoppingCart() {
  var totalCost = 0;
  for (var i in shoppingCart) {
    totalCost += shoppingCart[i].price; //add the price of ea. item to total
  }
  return totalCost;
}

console.log( totalShoppingCart() );

// listCart() -> array of items
function listCart() {
  var shoppingCartCopy = [];
  for (var i in shoppingCart) { //looping through ea. item in the cart

    var item = shoppingCart[i];
    var itemCopy = {};
    for (var prop in item) { //loop through every property
      itemCopy[prop] = item[prop]; //give copy same properties/values
    } 
    shoppingCartCopy.push(itemCopy); //add itemCopy to shoppingCartCopy
  }
  return shoppingCartCopy(); //looping is done, return
}


