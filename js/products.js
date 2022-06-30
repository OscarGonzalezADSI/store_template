function productNodes()
{
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
	
	const nodes = {};
	
	nodes.spanMessage = spanMessage;
	nodes.btnBuy = btnBuy;
	nodes.pName = pName;
	nodes.bSale = bSale;
	nodes.divBtn = divBtn;
	nodes.divImg = divImg;
	nodes.divProduct = divProduct;
	nodes.dblProduct = dblProduct;
	nodes.products = products;
	nodes.ibtnBuy = ibtnBuy;
	nodes.imgProduct = imgProduct;
	
	return nodes;
}

function productSetAttribute(nodes)
{
	nodes.products.setAttribute("class", "w3-row w3-grayscale");
	nodes.dblProduct.setAttribute("class", "w3-col l3 s6");
	nodes.divProduct.setAttribute("class", "w3-container");
	nodes.divImg.setAttribute("class", "w3-display-container");
	nodes.spanMessage.setAttribute("class", "w3-tag w3-display-topleft");
	nodes.divBtn.setAttribute("class", "w3-display-middle w3-display-hover");
	nodes.btnBuy.setAttribute("class", "w3-button w3-black");
	nodes.ibtnBuy.setAttribute("class", "fa fa-shopping-cart");
	nodes.spanMessage.setAttribute("style", "w3-tag w3-display-topleft");
}

function productSetAttributePromo(nodes, promo)
{
	if(promo === "yes")
	{
		nodes.bSale.setAttribute("class", "w3-text-red");
	}
}

function productSetAttributeImageProduct(nodes, imageProduct)
{
	nodes.imgProduct.setAttribute("style", "width:100%");
	nodes.imgProduct.setAttribute("src", imageProduct);
}

function productTextNode(nodes, ref, cost)
{
	const spanText = document.createTextNode("New");
	const btnBuyText = document.createTextNode("buy now");
	const pNameText = document.createTextNode(ref);
	const bSaleText = document.createTextNode(cost);
	
	nodes.pNameText = pNameText;
	nodes.bSaleText = bSaleText;
	nodes.spanText = spanText;
	nodes.btnBuyText = btnBuyText;
}

function productAppendChild(nodes)
{
	nodes.spanMessage.appendChild(nodes.spanText);
	nodes.btnBuy.appendChild(nodes.btnBuyText);
	nodes.pName.appendChild(nodes.pNameText);
	nodes.bSale.appendChild(nodes.bSaleText);
	nodes.btnBuy.appendChild(nodes.ibtnBuy);
	nodes.divBtn.appendChild(nodes.btnBuy);
	nodes.divImg.appendChild(nodes.imgProduct);
	nodes.divImg.appendChild(nodes.spanMessage);
	nodes.divImg.appendChild(nodes.divBtn);
	nodes.pName.appendChild(nodes.bSale);
	nodes.divProduct.appendChild(nodes.divImg);
	nodes.divProduct.appendChild(nodes.pName);
	nodes.dblProduct.appendChild(nodes.divProduct);
	nodes.products.appendChild(nodes.dblProduct);
}

function productsClean()
{
	const products = document.getElementById("products");
	products.innerHTML = "";
}