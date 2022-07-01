function moduleStoreTitles(nodes)
{
	const h4Title3Text = document.createTextNode("Store");
	const h4Title4Text = document.createTextNode("We accept");
	nodes.h4Title3.append(h4Title3Text);
	nodes.h4Title4.append(h4Title4Text);
}

function moduleStoreSetAttribute(nodes)
{
	nodes.i1.setAttribute("class", "fa fa-fw fa-map-marker");
	nodes.i2.setAttribute("class", "fa fa-fw fa-phone");
	nodes.i3.setAttribute("class", "fa fa-fw fa-envelope");
	nodes.i4.setAttribute("class", "fa fa-fw fa-cc-amex");
	nodes.i5.setAttribute("class", "fa fa-fw fa-credit-card");

	nodes.i6.setAttribute("class", "fa fa-facebook-official w3-hover-opacity w3-large");
	nodes.i7.setAttribute("class", "fa fa-instagram w3-hover-opacity w3-large");
	nodes.i8.setAttribute("class", "fa fa-snapchat w3-hover-opacity w3-large");
	nodes.i9.setAttribute("class", "fa fa-pinterest-p w3-hover-opacity w3-large");
	nodes.i10.setAttribute("class", "fa fa-twitter w3-hover-opacity w3-large");
	nodes.i11.setAttribute("class", "fa fa-linkedin w3-hover-opacity w3-large");
}

function moduleStoreAppend(nodes)
{
	const p1Text = document.createTextNode("Company Name");
	const p2Text = document.createTextNode("0044123123");
	const p3Text = document.createTextNode("ex@mail.com");
	const p4Text = document.createTextNode("Amex");
	const p5Text = document.createTextNode("Credit Card");
	
	nodes.p1.append(nodes.i1);
	nodes.p2.append(nodes.i2);
	nodes.p3.append(nodes.i3);
	nodes.p4.append(nodes.i4);
	nodes.p5.append(nodes.i5);

	nodes.p1.append(p1Text);
	nodes.p2.append(p2Text);
	nodes.p3.append(p3Text);
	nodes.p4.append(p4Text);
	nodes.p5.append(p5Text);

	nodes.divColRight.append(nodes.h4Title3);
	nodes.divColRight.append(nodes.p1);
	nodes.divColRight.append(nodes.p2);
	nodes.divColRight.append(nodes.p3);
	nodes.divColRight.append(nodes.h4Title4);
	nodes.divColRight.append(nodes.p4);
	nodes.divColRight.append(nodes.p5);

	nodes.divColRight.append(nodes.i6);
	nodes.divColRight.append(nodes.i7);
	nodes.divColRight.append(nodes.i8);
	nodes.divColRight.append(nodes.i9);
	nodes.divColRight.append(nodes.i10);
	nodes.divColRight.append(nodes.i11);
}
