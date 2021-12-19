class Products {
	constructor() {
        this.labelAdd = 'Добавить в корзину';
        this.labelRemove = 'Удалить из корзины';
    }

    handleSetLocatStorage(element, id) {
        const { pushProduct, products } = localStorageUtil.putProducts(id);

        if (pushProduct) {
            element.innerText = this.labelRemove;
        } else {
            element.innerText = this.labelAdd;
        }
        cartPage.render(products.length);
    }
	render() {
		const productsStore = localStorageUtil.getProducts();
		let htmlCatalog = '';

		CATALOG.forEach(({ id, name, price, img}) => {
			let activeText = '';
			if (productsStore.indexOf(id) === -1) {
                activeText = this.labelAdd;
            } else {
                activeText = this.labelRemove;
            }
			htmlCatalog += `
				<div class="col-lg-3">
            <div class="card d-flex align-items-center my-4">
                <img src="${img}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text text-align-center">${name}</p>
            </div>
            <ul class="list-group list-group-flush text-align-center">
                <li class="list-group-item"><img src="images/wine/image 132.png" class="mr-3" alt="132">Вино Красное Сухое</li>
                <li class="list-group-item"><img src="images/wine/image 131.png"class="mr-3" alt="131">Каберне Совиньйон</li>
                <li class="list-group-item">${price}</li>
            </ul>
            <div class="card-body">
                <button class="card-link" onclick="productsPage.handleSetLocatStorage(this, '${id}');">${activeText}</button>
            </div>
            </div>
        </div>
			`
		});

		const html = `
			<div class="row d-flex justify-content-space-around">
			${htmlCatalog}
			</div>
		`;

		ROOT_PRODUCTS.innerHTML = html;
	}
}

const productsPage = new Products();
productsPage.render();