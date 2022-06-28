function products(){

const products = document.getElementById("products");
const dblProduct = document.createElement("div");

const divProduct = document.createElement("div");
const divImg = document.createElement("div");
const divBtn = document.createElement("div");

const imgProduct = document.createElement("img");
const spanMessage = document.createElement("span");
const btnBuy = document.createElement("button");
const ibtnBuy = document.createElement("i");
const pName = document.createElement("p");
const bSale = document.createElement("b");

const spanText = document.createTextNode("New");
const btnBuyText = document.createTextNode("buy now");
const pNameText = document.createTextNode("Mega Ripped Jeans ");
const bSaleText = document.createTextNode("$19.99");

spanMessage.appendChild(spanText);
btnBuy.appendChild(btnBuyText);
pName.appendChild(pNameText);
bSale.appendChild(bSaleText);

products.setAttribute("class", "w3-row w3-grayscale");
dblProduct.setAttribute("class", "w3-col l3 s6");
divProduct.setAttribute("class", "w3-container");
divImg.setAttribute("class", "w3-display-container");
spanMessage.setAttribute("class", "w3-tag w3-display-topleft");
divBtn.setAttribute("class", "w3-display-middle w3-display-hover");
btnBuy.setAttribute("class", "w3-button w3-black");
ibtnBuy.setAttribute("class", "fa fa-shopping-cart");
bSale.setAttribute("class", "w3-text-red");

imgProduct.setAttribute("style", "width:100%");
spanMessage.setAttribute("style", "w3-tag w3-display-topleft");

imgProduct.setAttribute("src", "https://www.w3schools.com/w3images/jeans2.jpg");

btnBuy.appendChild(ibtnBuy);

divBtn.appendChild(btnBuy);

divImg.appendChild(imgProduct);
divImg.appendChild(spanMessage);
divImg.appendChild(divBtn);

pName.appendChild(bSale);

divProduct.appendChild(divImg);
divProduct.appendChild(pName);

dblProduct.appendChild(divProduct);
products.appendChild(dblProduct);

}

products();
products();
products();