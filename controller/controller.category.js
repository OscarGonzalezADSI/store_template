const category = document.createElement("div");
category.setAttribute("class","w3-padding-64 w3-large w3-text-grey");
category.setAttribute("style","font-weight:bold");

function data_category(data)
{
    let count = 0;
    data.forEach(i => {
    
        const divCategory = document.createElement("div");
        const aCategory = document.createElement("a");
        const aCategoryText = document.createTextNode(i.category);
        const iaCategory = document.createElement("i");

		const nodes = {};
		
		nodes.category = category;
		nodes.divCategory = divCategory;
		nodes.aCategory = aCategory;
		nodes.aCategoryText = aCategoryText;
		nodes.iaCategory = iaCategory;
		
		data_categoryItems(nodes, i);
		
		setAttributeCategory(nodes, count);
		appendChildCategory(nodes);
		
		count+=1;
	});
}

function data_categoryItems(nodes, i)
{
    i.subcategories.forEach(itext => {

        const a1divCategory = document.createElement("a");
        const a1divCategoryText = document.createTextNode(itext.subcategory);
        const iadivCategory = document.createElement("i");
        
        nodes.iadivCategory = iadivCategory;
        nodes.a1divCategory = a1divCategory;
        nodes.a1divCategoryText = a1divCategoryText;
        
        setAttributeItems(nodes, itext.linkend);
        appendChildItems(nodes);
    });
}

function setAttributeCategory(nodes, count)
{
    nodes.divCategory.setAttribute("id", "demoAcc"+count);
    nodes.divCategory.setAttribute("class", "w3-bar-block w3-hide w3-padding-large w3-medium");
    nodes.aCategory.setAttribute("class","w3-button w3-block w3-white w3-left-align");
    nodes.aCategory.setAttribute("href","javascript:void(0)");
    nodes.aCategory.setAttribute("onclick","myAccFunc('demoAcc"+count+"')");
    nodes.iaCategory.setAttribute("class", "fa fa-caret-down");
}

function setAttributeItems(nodes, linkend)
{   
    nodes.iadivCategory.setAttribute("class", "fa fa-caret-right w3-margin-right");
    nodes.a1divCategory.setAttribute("class", "w3-bar-item w3-button w3-light-grey");
    nodes.a1divCategory.setAttribute("href", linkend);
}

function appendChildCategory(nodes)
{
    nodes.aCategory.appendChild(nodes.aCategoryText);
    nodes.aCategory.appendChild(nodes.iaCategory);
    nodes.category.appendChild(nodes.aCategory);
    nodes.category.appendChild(nodes.divCategory);
}

function appendChildItems(nodes)
{
    nodes.a1divCategory.appendChild(nodes.iadivCategory);
    nodes.a1divCategory.appendChild(nodes.a1divCategoryText);
    nodes.divCategory.appendChild(nodes.a1divCategory);
}

