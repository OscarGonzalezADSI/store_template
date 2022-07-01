function moduleContactTitle(nodes)
{
	const h4Title1Text = document.createTextNode("Contact");
	nodes.h4Title1.append(h4Title1Text);
}

function moduleContactName(nodes)
{
	nodes.input1L.setAttribute("class", "w3-input w3-border");
	nodes.input1L.setAttribute("type", "text");
	nodes.input1L.setAttribute("placeholder", "Name");
	nodes.input1L.setAttribute("name", "Name");
	nodes.input1L.required;	
}

function moduleContactEmail(nodes)
{
	nodes.input2L.setAttribute("class", "w3-input w3-border");
	nodes.input2L.setAttribute("type", "text");
	nodes.input2L.setAttribute("placeholder", "Email");
	nodes.input2L.setAttribute("name", "Email");
	nodes.input2L.required;

}

function moduleContactSubject(nodes)
{
	nodes.input3L.setAttribute("class", "w3-input w3-border");
	nodes.input3L.setAttribute("type", "text");
	nodes.input3L.setAttribute("placeholder", "Subject");
	nodes.input3L.setAttribute("name", "Subject");
	nodes.input3L.required;	
}

function moduleContactMessage(nodes)
{
	nodes.input4L.setAttribute("class", "w3-input w3-border");
	nodes.input4L.setAttribute("type", "text");
	nodes.input4L.setAttribute("placeholder", "Message");
	nodes.input4L.setAttribute("name", "Message");
	nodes.input4L.required;	
}

function moduleContactSubmit(nodes)
{
	nodes.buttonL.setAttribute("type", "submit");
	nodes.buttonL.setAttribute("class", "w3-button w3-block w3-black");	
}

function moduleContactAppend(nodes)
{
	nodes.p1L.append(p1LText);
	nodes.p2L.append(input1L);
	nodes.p3L.append(input2L);
	nodes.p4L.append(input3L);
	nodes.p5L.append(input4L);
	nodes.buttonL.append(buttonLText);
	nodes.formL.append(p2L);
	nodes.formL.append(p3L);
	nodes.formL.append(p4L);
	nodes.formL.append(p5L);
	nodes.formL.append(buttonL);
	nodes.divColLeft.append(h4Title1);
	nodes.divColLeft.append(p1L);
	nodes.divColLeft.append(formL);	
}
