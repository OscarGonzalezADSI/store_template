function service_category(nodes, data)
{
    let count = 0;
    data.forEach(i => {
        controller_subcategory(i, nodes, count);
		count+=1;
	});
}

function service_categoryItems(nodes, line, i)
{
    i.subcategories.forEach(itext => {
		controller_Items(itext, nodes, line);
    });
}

function service_listItems(category, subcategory)
{
	let res = [];
	for(let i=0; data.length>i; i++)
	{
		if(data[i].category === category)
		{
			for(let ii=0; data[i].subcategories.length>ii; ii++)
			{
				if(data[i].subcategories[ii].subcategory === subcategory)
				{
					res = data[i].subcategories[ii].list;
				}
			}
			i = data.length;
		}
	}
	return res;
}

function service_countItems(category, subcategory)
{
	let res = 0;
	res = service_listItems(category, subcategory).length;
	return res;
}

function service_viewItems(category, subcategory)
{
	let list = [];
	list = service_listItems(category, subcategory);
	
	list.forEach(item => {
		controller_product_view(item.ref, item.cost, item.promo, item.imageProduct);
    });
}
