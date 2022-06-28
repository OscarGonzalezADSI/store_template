// const

const efooter = document.getElementById("footer");
const divContent = document.createElement("div");
const divColLeft = document.createElement("div");
const divColCenter= document.createElement("div");
const divColRight = document.createElement("div");

const h4Title1 = document.createElement("h4");
const h4Title2 = document.createElement("h4");
const h4Title3 = document.createElement("h4");
const h4Title4 = document.createElement("h4");

const h4Title1Text = document.createTextNode("Contact");
const h4Title2Text = document.createTextNode("About");
const h4Title3Text = document.createTextNode("Store");
const h4Title4Text = document.createTextNode("We accept");

// column 1 - const - start

const p1L = document.createElement("p");
const p2L = document.createElement("p");
const p3L = document.createElement("p");
const p4L = document.createElement("p");
const p5L = document.createElement("p");

const formL = document.createElement("form");

const input1L = document.createElement("input");
const input2L = document.createElement("input");
const input3L = document.createElement("input");
const input4L = document.createElement("input");

const buttonL = document.createElement("button");

const p1LText = document.createTextNode("Questions? Go ahead.");
const buttonLText = document.createTextNode("Send");

// column 1 - const - end

// column 2 - const - start

const a1Text = document.createTextNode("About us");
const a2Text = document.createTextNode("We're hiring");
const a3Text = document.createTextNode("Support");
const a4Text = document.createTextNode("Find store");
const a5Text = document.createTextNode("Shipment");
const a6Text = document.createTextNode("Payment");
const a7Text = document.createTextNode("Gift card");
const a8Text = document.createTextNode("Return");
const a9Text = document.createTextNode("Help");

const a1 = document.createElement("a");
const a2 = document.createElement("a");
const a3 = document.createElement("a");
const a4 = document.createElement("a");
const a5 = document.createElement("a");
const a6 = document.createElement("a");
const a7 = document.createElement("a");
const a8 = document.createElement("a");
const a9 = document.createElement("a");

const p1c = document.createElement("p");
const p2c = document.createElement("p");
const p3c = document.createElement("p");
const p4c = document.createElement("p");
const p5c = document.createElement("p");
const p6c = document.createElement("p");
const p7c = document.createElement("p");
const p8c = document.createElement("p");
const p9c = document.createElement("p");

// column 2 - const - end

// column 3 - const - start

const p1Text = document.createTextNode("Company Name");
const p2Text = document.createTextNode("0044123123");
const p3Text = document.createTextNode("ex@mail.com");
const p4Text = document.createTextNode("Amex");
const p5Text = document.createTextNode("Credit Card");

const p1 = document.createElement("p");
const p2 = document.createElement("p");
const p3 = document.createElement("p");
const p4 = document.createElement("p");
const p5 = document.createElement("p");

const i1 = document.createElement("i");
const i2 = document.createElement("i");
const i3 = document.createElement("i");
const i4 = document.createElement("i");
const i5 = document.createElement("i");

const i6 = document.createElement("i");
const i7 = document.createElement("i");
const i8 = document.createElement("i");
const i9 = document.createElement("i");
const i10 = document.createElement("i");
const i11 = document.createElement("i");

// column 3 - const - end

// setAttribute

efooter.setAttribute("class", "w3-padding-64 w3-light-grey w3-small w3-center");
divContent.setAttribute("class", "w3-row-padding");
divColLeft.setAttribute("class", "w3-col s4");
divColCenter.setAttribute("class", "w3-col s4");
divColRight.setAttribute("class", "w3-col s4 w3-justify");

// column 1 - setAttribute - start

input1L.setAttribute("class", "w3-input w3-border");
input1L.setAttribute("type", "text");
input1L.setAttribute("placeholder", "Name");
input1L.setAttribute("name", "Name");
input1L.required;

input2L.setAttribute("class", "w3-input w3-border");
input2L.setAttribute("type", "text");
input2L.setAttribute("placeholder", "Email");
input2L.setAttribute("name", "Email");
input2L.required;

input3L.setAttribute("class", "w3-input w3-border");
input3L.setAttribute("type", "text");
input3L.setAttribute("placeholder", "Subject");
input3L.setAttribute("name", "Subject");
input3L.required;

input4L.setAttribute("class", "w3-input w3-border");
input4L.setAttribute("type", "text");
input4L.setAttribute("placeholder", "Message");
input4L.setAttribute("name", "Message");
input4L.required;

buttonL.setAttribute("type", "submit");
buttonL.setAttribute("class", "w3-button w3-block w3-black");

// column 1 - setAttribute - end

// column 2 - setAttribute - start

a1.setAttribute("href", "#");
a2.setAttribute("href", "#");
a3.setAttribute("href", "#");
a4.setAttribute("href", "#");
a5.setAttribute("href", "#");
a6.setAttribute("href", "#");
a7.setAttribute("href", "#");
a8.setAttribute("href", "#");
a9.setAttribute("href", "#");

// column 2 - setAttribute - end

// column 3 - setAttribute - start

i1.setAttribute("class", "fa fa-fw fa-map-marker");
i2.setAttribute("class", "fa fa-fw fa-phone");
i3.setAttribute("class", "fa fa-fw fa-envelope");
i4.setAttribute("class", "fa fa-fw fa-cc-amex");
i5.setAttribute("class", "fa fa-fw fa-credit-card");

i6.setAttribute("class", "fa fa-facebook-official w3-hover-opacity w3-large");
i7.setAttribute("class", "fa fa-instagram w3-hover-opacity w3-large");
i8.setAttribute("class", "fa fa-snapchat w3-hover-opacity w3-large");
i9.setAttribute("class", "fa fa-pinterest-p w3-hover-opacity w3-large");
i10.setAttribute("class", "fa fa-twitter w3-hover-opacity w3-large");
i11.setAttribute("class", "fa fa-linkedin w3-hover-opacity w3-large");

// column 3 - setAttribute - end

// append

h4Title1.append(h4Title1Text);
h4Title2.append(h4Title2Text);
h4Title3.append(h4Title3Text);
h4Title4.append(h4Title4Text);

// column 1 - append - start

p1L.append(p1LText);
p2L.append(input1L);
p3L.append(input2L);
p4L.append(input3L);
p5L.append(input4L);

buttonL.append(buttonLText);

formL.append(p2L);
formL.append(p3L);
formL.append(p4L);
formL.append(p5L);
formL.append(buttonL);

divColLeft.append(h4Title1);
divColLeft.append(p1L);
divColLeft.append(formL);

// column 1 - append - end

// column 2 - append - start

a1.append(a1Text);
a2.append(a2Text);
a3.append(a3Text);
a4.append(a4Text);
a5.append(a5Text);
a6.append(a6Text);
a7.append(a7Text);
a8.append(a8Text);
a9.append(a9Text);

p1c.append(a1);
p2c.append(a2);
p3c.append(a3);
p4c.append(a4);
p5c.append(a5);
p6c.append(a6);
p7c.append(a7);
p8c.append(a8);
p9c.append(a9);

divColCenter.append(h4Title2);
divColCenter.append(p1c);
divColCenter.append(p2c);
divColCenter.append(p3c);
divColCenter.append(p4c);
divColCenter.append(p5c);
divColCenter.append(p6c);
divColCenter.append(p7c);
divColCenter.append(p8c);
divColCenter.append(p9c);

// column 2 - append - end

// column 3 - append - start

p1.append(i1);
p2.append(i2);
p3.append(i3);
p4.append(i4);
p5.append(i5);

p1.append(p1Text);
p2.append(p2Text);
p3.append(p3Text);
p4.append(p4Text);
p5.append(p5Text);

divColRight.append(h4Title3);
divColRight.append(p1);
divColRight.append(p2);
divColRight.append(p3);
divColRight.append(h4Title4);
divColRight.append(p4);
divColRight.append(p5);

divColRight.append(i6);
divColRight.append(i7);
divColRight.append(i8);
divColRight.append(i9);
divColRight.append(i10);
divColRight.append(i11);

// column 3 - append - end

divContent.append(divColLeft);
divContent.append(divColCenter);
divContent.append(divColRight);
efooter.append(divContent);
