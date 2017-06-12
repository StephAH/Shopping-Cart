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
};
  
 function item(name , price , quantity)
  {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    }
 
var braveTick = new item("Braves Ticket","25.00");
var hawkTick = new item ("Atlanta Hawks Ticket","35.00");
var atlBraveAdjustPrice = parseFloat($("#braveAdjustprice"));
var atlHawkAdjustPrice = parseFloat($("#hawkAdjsutPrice"));

//code for calculating math
var braveTickPrice = 25.00;
var hawkTickPrice = 35.00;
var tax = 0.075;
var shipping = 5.00;
  //*****Greeting******

$(document).ready(function(){
    $("document").click(function(){
        alert("Hello and welcome!! ^_^");
    });
});
//if that syntax is correct it should alert greeting as soon as doc is ready



  //********Shopping Cart********** I know it's supposed to be an array of objs but need help
  var shoppingCart = []; 




//total over 100
/*if(totalAndTax => 100){
  alert("You are eligible to complete your transaction with a credit line!")
}

else{
  alert("Please note that all transactions that take place under $100 require cash payment only!")
}*/



//this should loop thru the items in cart but I do not know how to make an array of objects
/*for (i = 0; i < shoppingCart.length; i++){
}
*/




//code for interactive page... when quantity is changed, so should adjusted prices
//braves
$(document).ready(function(){
    $("#braveQuan").change(function(){
      var braveQuan = $(this).val();
    $("#div1").find("#braveAdjustPrice").text(braveTickPrice * braveQuan);
    });
});

//hawks
$(document).ready(function(){
    $("#hawkQuan").change(function(){
      var hawkQuan = $(this).val();
      $("#div2").find("#hawkAdjustPrice").text(hawkTickPrice * hawkQuan)
    });
});

//subtotal
$(document).ready(function(){
    $("#braveQuan").change(function(){
      var almostTotal = $(this).text();
      $("#div3").find("#subTotal").val();
    });
});

//tax*********stuck here***********888
$(document).ready(function(){
    $("#hawkQuan").val(function(){
      $("#div2").find("#hawkAdjustPrice").val(hawkTick * hawkQuan)
    });
});

//grand total
var totalAndTax = 
$(document).ready(function(){
    $("input").val(function(){
      $("#div3").find("#grandTotal").val(braveAdjustPrice + hawkAdjustPrice + tax + shipping);
    });
});

//***********remove braves button*****************
$("#removeBraves").click(function(){
    $("#div1").find("#braveQuan").remove()
  $("#div1").find("#braveAdjustPrice").remove()
});


$("#removeHawks").click(function(){
    $("#div2").find("#hawkQuan").remove()
  $("#div2").find("#hawkAdjustPrice").remove()
});

