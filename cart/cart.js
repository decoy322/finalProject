class Cart {

    handlerOpenShoppingPage() {
        shoppingPage.render();
    }

	render(count) {
		const html = `
			<div class="cart_container d-flex flex-row align-items-center justify-content-end" onclick="cartPage.handlerOpenShoppingPage();">
                    <div class="cart_icon"> <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918704/cart.png" alt="">
                        <div class="cart_count"><span>${count}</span></div>
                    </div>
                    <div class="cart_content">
                        <div class="cart_text">
                            Корзина
                        </div>
                        <div class="cart_price"></div>
                    </div>
                </div>
		`;

		ROOT_CART.innerHTML = html;
	}
}

const cartPage = new Cart();

const productStore = localStorageUtil.getProducts();
cartPage.render(productStore.length);