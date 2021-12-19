class Shopping {
	handleClear() {
		ROOT_SHOPPING.innerHTML = '';
	}
	render() {
		const productsStore = localStorageUtil.getProducts();
		let htmlCatalog = '';
		let sumCatalog = 0;

		CATALOG.forEach(({ id, name, price, img}) => {
			if (productsStore.indexOf(id) !== -1) {
				htmlCatalog += `
					<div class="row">
						<div class="col shopping_cart">
							<img class="shopping_element__img mr-3" src="${img}" alt="item">
                    		<p class="shopping_element__name">${name}</p>
                    		<p class="shopping-element__price">${price.toLocaleString()} грн</p>
						</div>
					</div>
				`;
				sumCatalog += price;
			}
		});

		const html = `
		<div class="shopping-container shadow">
			<div class="shopping__close" onclick="shoppingPage.handleClear();"></div>
            	${htmlCatalog}
            	<div class="row">
            		<div class="col-lg-7 col-md-5 col-sm-12 shopping_cart_sum">
                    	<button class="p-2 mr-5"><a href="form_buy.html">Оформить заказ</a></button>
					</div>
					<div class="col shopping_cart_sum">
                    	<p class="shopping-element__price">Сумма: ${sumCatalog.toLocaleString()} грн</p>
					</div>
					</div>
		</div>
		`;
		ROOT_SHOPPING.innerHTML = html;
	}
}

const shoppingPage = new Shopping();