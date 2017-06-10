
 function item(name , price , quantity)
 	{
 		this.name = name;
 		this.price = price;
 		this.quantity = quantity;
 		}
 
var braveTick = new item("Braves Ticket","25.00");
var hawkTick = new item ("Atlanta Hawks Ticket","35.00");
var grandTotal = hawkTick;    

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
for (i = 0; i < shoppingCart.length; i++){
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
      $("#div3").find("#subTotal").text(braveQuan /+ hawkQuan)
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





//**********noticed that the arrows are only in chrome
