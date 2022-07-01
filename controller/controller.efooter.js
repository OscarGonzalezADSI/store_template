function controller_efooter()
{
	service_form_contact(nodesContact);
	service_about(nodesContact);
	service_store(nodesContact);
	
	efooterSetAttribute();
	efooterAppend();
}