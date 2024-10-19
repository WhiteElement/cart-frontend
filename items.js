function postNewItem(element) {
	const parentDiv = element.parentElement;
	const name = parentDiv.querySelector('input[type="text"]').value;
	const category = parentDiv.querySelector('h3').textContent;

	if (name === "") {
		// TODO show Toast
		// empty item not allowed
	}

	// checked is hardcoded
	const item = {
		name: name,
		category: category,
		checked: false,
		shoppinglist: "Test"
	};

	fetch("/cart/item", {
		method: "POST",
		body: JSON.stringify(item)
	}).then(res => res.json()).then(json => console.log(json));
	// TODO jetzt noch reinschreiben ins html
}
