class Form_buy {
	render(count) {
		const formStore = localStorageUtil.getProducts();
		let htmlCatalog = '';
		let sumCatalog = 0;

		CATALOG.forEach(({ id, name, price, count}) => {
			if (formStore.indexOf(id) !== -1) {
				htmlCatalog += `
					<div class="row">
						<div class="col shopping_cart">
                    		<p class="shopping_element__name">${name}</p>
                    		<p class="shopping-element__price">${price.toLocaleString()} грн</p>
						</div>
					</div>
				`;
				sumCatalog += price;
			}
		});
		const html = `
		<div class="form_container shadow bg-white">
			<h1 class="mb-2">Ваш заказ</h1>
            	${htmlCatalog}
            	<div class="row d-flex justify-content-space-around">
            		<div class="col form_buy_button">
                    	<button class="p-2">ОФОРМИТЬ</button>
					</div>
					<div class="col form_cost">
                    	<p class="form-element__price"><b>Сумма</b>: ${sumCatalog.toLocaleString()} грн</p>
					</div>
					</div>
		</div>
		`;
		ROOT_FORM_BUY.innerHTML = html;
	}
}

const form_buy_page = new Form_buy();

const formStore = localStorageUtil.getProducts();
form_buy_page.render(formStore.length);