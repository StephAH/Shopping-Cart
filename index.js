//********Shopping Cart********** I know it's supposed to be an array of objs but need help
var shoppingCart = []; 
var item = function(product , price , quantity)
  {
    this.product = product;
    this.price = price;
    this.quantity = quantity;
    };

//code for calculating math
// add(product, price, quantity)
function add(product, price, quantity) {
  for (var i in shoppingCart) {
    if (shoppingCart[i].product === product) { //loop so that if they match, item was found
      shoppingCart[i].quantity++; //adds one 
      return;
    }
  }    
  var ticket = new item(product, price, quantity); //if no match, new item is added 
  shoppingCart.push(ticket);
}


add("Braves Ticket", 25.00, 1);
add("Atlanta Hawks Ticket", 35.00, 1);
add("Braves Ticket", 25.00, 1);

//console.log(shoppingCart); this checks add function

//this should loop thru the items in cart but I do not know how to make an array of objects
//for (i = 0; i < shoppingCart.length; i++)

// remove(product)
function remove(product) {
  for (var i in shoppingCart) {
    if (shoppingCart[i].product === product) { //looping through every item if they match,item was found 
      shoppingCart[i].quantity--; //removes one 
      if (shoppingCart[i].quantity === 0) {
        shoppingCart.splice(i, 1);
      }
      break;
    }
  }
}

/*console.log(shoppingCart[0].quantity); //checks the remove function
remove("Braves Ticket");
remove("Braves Ticket");
console.log(shoppingCart);*/

// removeAll(name)      not sure if we need this one
function removeAll(name) {
  for (var i in shoppingCart) {
    if (shoppingCart[i].product === product) {}
  }
}
//console.log(shoppingCart.length); //checks the removeAll 
//console.log(shoppingCart);

// clearCart()
function clearCart(){
  ShoppingCart = [];
}

// countCart()
function quantityTotal() {
  var totalQuantity = 0;
  for (var i in shoppingCart) {
    totalQuantity += shoppingCart[i] + quantity;  
  }
  return totalQuantity;
}

//grand total
// totalCart()
function total() {
  var totalAndTax = 0;
  for (var i in shoppingCart) {}
}

//Tajai's code comparing it to the method above  
/*grand total           
var totalAndTax = 
$(document).ready(function(){
    $("input").val(function(){
      $("#div3").find("#grandTotal").val(braveAdjustPrice + hawkAdjustPrice + tax + shipping);
    });
});
*/


// listCart() -> array of items
//I STOPPED HERE I WILL CONTINUE WITH THE ACTUAL EXECUTIONS...RIGHT NOW THE JS ABOVE IS BEING PROCESSED IN THE CONSOLE(to see them take off the //s in front/end cause they're commented out) //

//Tajai's remaining code 
/*var braveTickPrice = 25.00;
var hawkTickPrice = 35.00;
var tax = 0.075;
var shipping = 5.00;
 
var braveTicket = new item("Braves Ticket", 25.00, 1);
var hawkTicket = new item ("Atlanta Hawks Ticket", 35.00, 1);
var atlBraveAdjustPrice = parseFloat($("#braveAdjustprice"));
var atlHawkAdjustPrice = parseFloat($("#hawkAdjsutPrice"));

//code for calculating math
var braveTickPrice = 25.00;
var hawkTickPrice = 35.00;
var tax = 0.075;
var shipping = 5.00; */

  //*****Greeting******

//$(document).ready(function(){
  //  $("document").click(function(){
    //    alert("Hello and welcome!! ^_^");
//    });
//});
//if that syntax is correct it should alert greeting as soon as doc is ready


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
});*/