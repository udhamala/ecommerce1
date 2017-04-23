//product constructor
function headset(brand, ratings, price, stock, image) {
	this.brand = brand
	this.ratings = ratings
	this.price = price
	this.stock = stock
	this.image = image
}
//creating new products from product constuctor
var headset1 = new headset("Philips", 4.9, 799, 21, "img/headphone1.png")
var headset2 = new headset("Senheizer", 4.8, 599, 18, "img/headphone2.png")
var headset3 = new headset("Samsung", 4.7, 499, 34, "img/headphone3.png")
var headset4 = new headset("Bleudio", 4.9, 699, 7, "img/headphone4.png")
var headset5 = new headset("Beats", 4.9, 549, 11, "img/headphone5.png")
var headset6 = new headset("Udhamala", 4.8, 439, 17, "img/headphone6.png")
var headset7 = new headset("Beats", 4.8, 599, 4, "img/headphone7.png")
var headset8 = new headset("Sony", 4.7, 999, 6, "img/headphone8.png")

//creating preorder products constructor
// function preorder(brand, price, available, image) {
// 	this.brand = brand
// 	this.price = price
// 	this.available = available
// 	this.image = image
// }

// var preorder1 = new preorder("Beats", 499, "May 2018", "img/headphone9.jpg")
// var preorder2 = new preorder("B&O Play", 249, "Early 2018", "img/headphone10.jpg")
// var preorder3 = new preorder("Sony", 599, "December 2017", "img/headphone11.jpg")
// var preorder4 = new preorder("VD", 949, "January 2018", "img/headphone12.jpg")

//Creating Array for headset
var headsetArray = new Array

//Push headphones to array
headsetArray.push(headset1, headset2, headset3, headset4, headset5, headset6, headset7, headset8)
//loop through products
for(var i = 0; i < headsetArray.length; i++) {
//create new elements for each product
	var newItem = document.createElement("div")
	var newDiv = document.createElement("div")
	var brandH3 = document.createElement("h3")
	var ratingsH4 = document.createElement("h4")
	var priceH4 = document.createElement("h4")
	var stockH4 = document.createElement("h4")
	var btn = document.createElement("button")
	var image = document.createElement("img")
//Create text node for elements created
	var hBrand   = document.createTextNode(headsetArray[i].brand)
	var hRatings   = document.createTextNode("Rating: " + headsetArray[i].ratings)
	var hPrice  = document.createTextNode("Price: $" + headsetArray[i].price)
	var hStock  = document.createTextNode("In stock: " + headsetArray[i].stock)
	var hButton = document.createTextNode("Buy Now!")
// update source attribute
	image.src = headsetArray[i].image
// update class attributes
	image.className = "img-responsive"
	btn.className = "btn btn-primary btn-lg"
	newItem.className = "col-sm-3"
	newDiv.className = "headset headset" + [i] + " thumbnail"
// add text to elements
	brandH3.appendChild(hBrand)
	ratingsH4.appendChild(hRatings)
	priceH4.appendChild(hPrice)
	stockH4.appendChild(hStock)
	btn.appendChild(hButton)
// add elements to new div
	newDiv.appendChild(brandH3)
	newDiv.appendChild(image)
	newDiv.appendChild(ratingsH4)
	newDiv.appendChild(priceH4)
	newDiv.appendChild(stockH4)
	newDiv.appendChild(btn)
// add new div to new item div
	newItem.appendChild(newDiv)
// add new item to the element with id="popularItems"
	document.getElementById("popularItems").appendChild(newItem)
	
}
