class ProductItems {
    constructor(product) {
        this.id = product.id;
        this.title = product.title;
        this.price = product.price;
        this.description = product.description;
        this.imgName = product.imgName;
    }

    render() {
        return `<div class="products-card">
                <img src="image/${this.imgName}.png" alt="Picture Loading">
                <p class="product-name">${this.title}</p>
                <p class="product-text">${this.description}</p>
                <p class="product-price">$${this.price}</p>
                <button class="btn-products1">Купить</button>
            </div>`
    }
}

class ProductList {
    constructor(container = `.wrap-products-main`) {
        this.container = container;
        this.goods = [];
        this._fetchProducts();
    }

    _fetchProducts() {
        this.goods = [
            {
                id: 1,
                title: "L-Glutathione",
                price: 51,
                description: "Способствует расщеплению окисленных жиров и необходим для углеводного обмена",
                imgName: "v799-10"
            },
            {
                id: 2,
                title: "Magnesium Citrate",
                price: 30,
                description: "Магний помогает преобразовывать углеводы, белки и жиры в энергию",
                imgName: "v433-09"
            },
            {
                id: 3,
                title: "Vitamin C",
                price: 35,
                description: "Способствует расщеплению окисленных жиров и необходим для углеводного обмена",
                imgName: "vtc1_31"
            },
            {
                id: 4,
                title: "Vitamin G",
                price: 25,
                description: "Способствует расщеплению окисленных жиров и необходим для углеводного обмена",
                imgName: "vtc1_31"
            },
            {
                id: 5,
                title: "Vitamin A",
                price: 80,
                description: "Способствует расщеплению окисленных жиров и необходим для углеводного обмена",
                imgName: "v799-10"
            },
            {
                id: 6,
                title: "Vitamin D",
                price: 67,
                description: "Способствует расщеплению окисленных жиров и необходим для углеводного обмена",
                imgName: "v433-09"
            },
        ]

    }

    render() {
        if (this.goods.length >= 4) {
            document.querySelector(".wrap-products-main").style.height = 1200 + `px`;
            document.querySelector(".wrap.wrap-products-catalog").style.height = 1500 + `px`;
        } else {
            document.querySelector(".wrap.wrap-products-catalog").style.height = 900 + `px`;
            document.querySelector(".wrap-products-main").style.height = 600 + `px`;
        }
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new ProductItems(product);
            block.insertAdjacentHTML("beforeend", productObj.render());
        }
    }
}

let list = new ProductList();
list.render();

