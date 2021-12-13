class Products_wine {
	render() {
		let htmlCatalog_wine = '';
		CATALOG_WINE.forEach(({ id, name, price, img}) => {
			htmlCatalog_wine += `
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
                <button><p><a href="#" class="card-link">КУПИТЬ</a></a></p></button>
            </div>
            </div>
        </div>
			`
		});

		const html = `
			<div class="row d-flex justify-content-space-around">
			${htmlCatalog_wine}
			</div>
		`;

		ROOT_PRODUCTS.innerHTML = html;
	}
}

const products_wine_item = new Products_wine();
products_wine_item.render();