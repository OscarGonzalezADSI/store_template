function service_data_list(category, subcategory)
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
