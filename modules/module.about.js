function moduleAboutTitle(nodes)
{
	const h4Title2Text = document.createTextNode("About");
	nodes.h4Title2.append(h4Title2Text);
}

function moduleAboutLinksText(nodes)
{
	const a1Text = document.createTextNode("About us");
	const a2Text = document.createTextNode("We're hiring");
	const a3Text = document.createTextNode("Support");
	const a4Text = document.createTextNode("Find store");
	const a5Text = document.createTextNode("Shipment");
	const a6Text = document.createTextNode("Payment");
	const a7Text = document.createTextNode("Gift card");
	const a8Text = document.createTextNode("Return");
	const a9Text = document.createTextNode("Help");
	
	nodes.a1.append(a1Text);
	nodes.a2.append(a2Text);
	nodes.a3.append(a3Text);
	nodes.a4.append(a4Text);
	nodes.a5.append(a5Text);
	nodes.a6.append(a6Text);
	nodes.a7.append(a7Text);
	nodes.a8.append(a8Text);
	nodes.a9.append(a9Text);
}

function moduleAboutLinksPath(nodes)
{
	nodes.a1.setAttribute("href", "#");
	nodes.a2.setAttribute("href", "#");
	nodes.a3.setAttribute("href", "#");
	nodes.a4.setAttribute("href", "#");
	nodes.a5.setAttribute("href", "#");
	nodes.a6.setAttribute("href", "#");
	nodes.a7.setAttribute("href", "#");
	nodes.a8.setAttribute("href", "#");
	nodes.a9.setAttribute("href", "#");
}

function moduleAboutAppend(nodes)
{
	nodes.p1c.append(nodes.a1);
	nodes.p2c.append(nodes.a2);
	nodes.p3c.append(nodes.a3);
	nodes.p4c.append(nodes.a4);
	nodes.p5c.append(nodes.a5);
	nodes.p6c.append(nodes.a6);
	nodes.p7c.append(nodes.a7);
	nodes.p8c.append(nodes.a8);
	nodes.p9c.append(nodes.a9);

	nodes.divColCenter.append(nodes.h4Title2);
	nodes.divColCenter.append(nodes.p1c);
	nodes.divColCenter.append(nodes.p2c);
	nodes.divColCenter.append(nodes.p3c);
	nodes.divColCenter.append(nodes.p4c);
	nodes.divColCenter.append(nodes.p5c);
	nodes.divColCenter.append(nodes.p6c);
	nodes.divColCenter.append(nodes.p7c);
	nodes.divColCenter.append(nodes.p8c);
	nodes.divColCenter.append(nodes.p9c);
}
