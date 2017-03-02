var cart = [];



var Item = function(name, price, length) {
this.name = name;
this.price = price;
this.length = length;
};


function addItemToCart(name, price, length){
for (var key in cart) {
if (cart[key].name === name) {
cart[key].length += length;	
cart[key].price += price;
return;
}

}
var item = new Item(name, price, length);
cart.push(item);
}



window.onbeforeunload = function() {
Cart = sessionStorage.removeItem("cartlength");
Cart = sessionStorage.removeItem("itemss");
};


function showbasket() {
var Cart = sessionStorage.getItem("cartlength");	
var Cart2 = sessionStorage.getItem("itemss");	
var Cart3 = " Total items :" + Cart + "  Price(USD): " + Cart2;
alert(Cart3);
}



function addNew() {
var content1 = document.getElementById('content1');
var Form = document.forms['form'];
var productname = Form.elements['productname'].value;
var productprice = Form.elements['productprice'].value;
 document.getElementById("Output").value = productname;
 document.getElementById("Output2").value = productprice;
	
    if (content1.style.display == "block") {
       content1.style.display = "show";
		 
    } else {
        content1.style.display = "block";
 
    }
	 alert('New Product : ' + productname + '\n Price(USD) : ' + productprice); 
 
 
}


function call() {
addItemToCart("HP - 15.6 Laptop", 260, 1);
cartlength();
cartprice();
cartHP1();
alert("Added");
}

function call2() {
addItemToCart("HP - Pavilion x360", 450, 1);
cartlength();
cartprice();
cartHP2();
alert("Added");
}

function call3() {
addItemToCart("Lenovo - Ideapad 110s", 170, 1);
cartlength();
cartprice();
LenovoLaptop1();
alert("Added");
}

function call4() {	
var productprice = parseInt(document.getElementById("Output2").value);		
 productname = document.getElementById("Output").value;
addItemToCart( "", productprice, 1);
cartlength();
cartprice();
newItem();
alert("Added");
}

document.getElementById("addHPLaptop1").addEventListener("mousedown", call);
document.getElementById("addHPLaptop2").addEventListener("mousedown", call2);
document.getElementById("addLenovoLaptop1").addEventListener("mousedown", call3);
document.getElementById("add").addEventListener("mousedown", addNew);
document.getElementById("addnew").addEventListener("mousedown", call4);
document.getElementById("show").addEventListener("mousedown", showbasket);



function cartlength() {
var x = 0;
for (var key in cart) {
x += cart[key].length;
}
document.getElementById("length").innerHTML
= "<br>" + "Items:" + x;
var cartlength = (sessionStorage.cartlength ? JSON.parse(sessionStorage.cartlength) : []);
sessionStorage.setItem("cartlength",JSON.stringify(x));
}

cartelength();



function cartprice() {	
var productprice = parseInt(document.getElementById("Output2").value);	
var y = 0;		
for (var key in cart) {
y += Number(cart[key].price);
}

document.getElementById("price").innerHTML
= "<br>" + "Total $" + y;
var itemss = (sessionStorage.itemss ? JSON.parse(sessionStorage.itemss) : []);
sessionStorage.setItem("itemss",JSON.stringify(y));
return productprice
}

cartprice();




	
function cartHP1() {
var u ="";
for (var key in cart) {
u = "<br>" + "HP - 15.6 Laptop";
}	
document.getElementById("name").innerHTML
+=  u;

}

cartHP1();

function cartHP2() {
var i ="";
for (var key in cart) {
i = "<br>" + "HP - Pavilion x360";
}	
document.getElementById("name").innerHTML
+= i;

}

cartHP2();

function LenovoLaptop1() {
var o ="";
for (var key in cart) {
o = "<br>" + "Lenovo - Ideapad 110s";
}	
document.getElementById("name").innerHTML
+= o;

}

LenovoLaptop1(); 

function newItem() {
var o ="";
document.getElementById("Output").value = productname;	
for (var key in cart) {
o = "<br>" + productname;
}	
document.getElementById("name").innerHTML
+= o;

}

newItem(); 
