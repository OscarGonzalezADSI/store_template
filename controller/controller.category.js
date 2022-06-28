const category = document.createElement("div");
category.setAttribute("class","w3-padding-64 w3-large w3-text-grey");
category.setAttribute("style","font-weight:bold");

function data_category(data)
{
	let cont = 0;
	data.forEach(i => {
		
		const divCategory = document.createElement("div");
		const aCategory = document.createElement("a");
		const aCategoryText = document.createTextNode(i.category);
		const iaCategory = document.createElement("i");
		
		divCategory.setAttribute("class", "w3-bar-block w3-hide w3-padding-large w3-medium");
		divCategory.setAttribute("id", "demoAcc"+cont);
		aCategory.setAttribute("class","w3-button w3-block w3-white w3-left-align");
		aCategory.setAttribute("href","javascript:void(0)");
		aCategory.setAttribute("onclick","myAccFunc('demoAcc"+cont+"')");
		iaCategory.setAttribute("class", "fa fa-caret-down");
		
		i.subcategories.forEach(itext => {
			
			const a1divCategory = document.createElement("a");
			const a1divCategoryText = document.createTextNode(itext);
			const iadivCategory = document.createElement("i");
			
			iadivCategory.setAttribute("class", "fa fa-caret-right w3-margin-right");
			a1divCategory.setAttribute("class", "w3-bar-item w3-button w3-light-grey");
			a1divCategory.setAttribute("href", "#");
			
			a1divCategory.appendChild(iadivCategory);
			a1divCategory.appendChild(a1divCategoryText);
			divCategory.appendChild(a1divCategory);			
		});
		
		aCategory.appendChild(aCategoryText);
		aCategory.appendChild(iaCategory);
		category.appendChild(aCategory);
		category.appendChild(divCategory);
		cont+=1;
	});
}
