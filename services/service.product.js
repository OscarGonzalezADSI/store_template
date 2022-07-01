function service_product(category, subcategory)
{
	let list = [];
	list = service_data_list(category, subcategory);
	list.forEach(item => {
		controller_product(item.ref, item.cost, item.promo, item.imageProduct);
    });
}
