function controller_product_view(ref, cost, promo, imageProduct)
{
	const nodes = productNodes();

	productSetAttribute(nodes);
	productSetAttributePromo(nodes, promo);
	productSetAttributeImageProduct(nodes, imageProduct);
	productTextNode(nodes, ref, cost);
	productAppendChild(nodes);
}
