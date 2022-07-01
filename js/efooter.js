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

const nodesContact = {}

nodesContact.input1L = input1L;
nodesContact.input2L = input2L;
nodesContact.input3L = input3L;
nodesContact.input4L = input4L;
nodesContact.buttonL = buttonL;
nodesContact.p1L = p1L;
nodesContact.p2L = p2L;
nodesContact.p3L = p3L;
nodesContact.p4L = p4L;
nodesContact.p5L = p5L;
nodesContact.formL = formL;
nodesContact.divColLeft = divColLeft;
nodesContact.p1LText = p1LText;
nodesContact.buttonLText = buttonLText;
nodesContact.h4Title1 = h4Title1;
nodesContact.a1 = a1; 
nodesContact.a2 = a2;
nodesContact.a3 = a3;
nodesContact.a4 = a4;
nodesContact.a5 = a5;
nodesContact.a6 = a6;
nodesContact.a7 = a7;
nodesContact.a8 = a8;
nodesContact.a9 = a9;
nodesContact.h4Title2 = h4Title2;
nodesContact.a1 = a1;
nodesContact.a2 = a2;
nodesContact.a3 = a3;
nodesContact.a4 = a4;
nodesContact.a5 = a5;
nodesContact.a6 = a6;
nodesContact.a7 = a7;
nodesContact.a8 = a8;
nodesContact.a9 = a9;
nodesContact.p1c = p1c;
nodesContact.p2c = p2c;
nodesContact.p3c = p3c;
nodesContact.p4c = p4c;
nodesContact.p5c = p5c;
nodesContact.p6c = p6c;
nodesContact.p7c = p7c;
nodesContact.p8c = p8c;
nodesContact.p9c = p9c;
nodesContact.divColCenter = divColCenter;
nodesContact.h4Title3 = h4Title3;
nodesContact.h4Title4 = h4Title4;
nodesContact.i1 = i1;
nodesContact.i2 = i2;
nodesContact.i3 = i3;
nodesContact.i4 = i4;
nodesContact.i5 = i5;
nodesContact.i6 = i6;
nodesContact.i7 = i7;
nodesContact.i8 = i8;
nodesContact.i9 = i9;
nodesContact.i10 = i10;
nodesContact.i11 = i11;
nodesContact.p1 = p1;
nodesContact.p2 = p2;
nodesContact.p3 = p3;
nodesContact.p4 = p4;
nodesContact.p5 = p5;
nodesContact.divColRight = divColRight;

function efooterSetAttribute()
{
	efooter.setAttribute("class", "w3-padding-64 w3-light-grey w3-small w3-center");
	divContent.setAttribute("class", "w3-row-padding");
	divColLeft.setAttribute("class", "w3-col s4");
	divColCenter.setAttribute("class", "w3-col s4");
	divColRight.setAttribute("class", "w3-col s4 w3-justify");
}

function efooterAppend()
{
	divContent.append(divColLeft);
	divContent.append(divColCenter);
	divContent.append(divColRight);
	efooter.append(divContent);
}
