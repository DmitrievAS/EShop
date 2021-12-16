const API = "https://raw.githubusercontent.com/DmitrievAS/json/main/package.json";
const apiBasket = "https://raw.githubusercontent.com/DmitrievAS/json/main/Basket.json"

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
                <button class="btn-products1" id=product${this.id}>Купить</button>
            </div>`
    }
}

class ProductList {
    constructor(container = `.wrap-products-main`) {
        this.container = container;
        this.goods = [];
        this.fetchProducts();
    }

    fetchProducts() {
        this.goods = fetch(API)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.goods = [...data];
                this.render();
            })
            .catch((onerror) => {
                alert(`Ошибка при запросе на сервер - ${onerror}`);
            });
        // function send() {
        //     let xhr;
        //
        //     if (window.XMLHttpRequest) {
        //         //Chrome, Mozilla, Opera, Safari
        //         xhr = new XMLHttpRequest()
        //     } else if (window.ActiveXObject) {
        //         xhr = new ActiveXObject("Microsoft.XMLHTTP");
        //     }
        //     xhr.open("get", API,true);
        //     header.forEach((header) => {
        //         xhr.setRequestHeader(header.key, header.value);
        //     })
        //Второй вариант:
        //  fetch(API)
        //      .then((response) => {
        //          console.log(response.json());
        //          return response.json();
        //
        //      })
        //      .then((request) => {
        //          console.log(request);
        //          ProductList.goods = request.map(good => ({
        //              id: good.id,
        //              title: good.title,
        //              price: good.price,
        //              description: good.description,
        //              imgName: good.imgName
        //          }))
        //      })
        //      .catch((err) => {
        //          console.log(err.text);
        //      });

        // ProductList.goods = fetch(API)
        //     .then((text) => {
        //         return text.json();
        //     })
        //     .then((data) => {
        //         ProductList.goods = [...data];
        //         console.log(ProductList.goods);
        //     });

        // // _fetchProducts() {
        //     this.goods = fetch(API)
        //         .then(text => text.json()) //json метод, который парсит json объект и возвращает в объект промис
        //         .then(data => { //объект JS
        //             //this.goods = [...data];
        //             console.log(data);
        //             // return data;
        //             // document.getElementById("app").insertAdjacentHTML("beforeend", `<p>${data.id} - ${data.title}</p>`);
        //         });

        //     [
        //     {
        //         id: 1,
        //         title: "L-Glutathione",
        //         price: 51,
        //         description: "Способствует расщеплению окисленных жиров и необходим для углеводного обмена",
        //         imgName: "v799-10"
        //     },
        //     {
        //         id: 2,
        //         title: "Magnesium Citrate",
        //         price: 30,
        //         description: "Магний помогает преобразовывать углеводы, белки и жиры в энергию",
        //         imgName: "v433-09"
        //     },
        //     {
        //         id: 3,
        //         title: "Vitamin C",
        //         price: 35,
        //         description: "Способствует расщеплению окисленных жиров и необходим для углеводного обмена",
        //         imgName: "vtc1_31"
        //     },
        //     {
        //         id: 4,
        //         title: "Vitamin G",
        //         price: 25,
        //         description: "Способствует расщеплению окисленных жиров и необходим для углеводного обмена",
        //         imgName: "vtc1_31"
        //     },
        //     {
        //         id: 5,
        //         title: "Vitamin A",
        //         price: 80,
        //         description: "Способствует расщеплению окисленных жиров и необходим для углеводного обмена",
        //         imgName: "v799-10"
        //     },
        //     {
        //         id: 6,
        //         title: "Vitamin D",
        //         price: 67,
        //         description: "Способствует расщеплению окисленных жиров и необходим для углеводного обмена",
        //         imgName: "v433-09"
        //     },
        // ]

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

new ProductList();

class ProductItemsCart {
    constructor(productInCart) {
        this.id = productInCart.id;
        this.title = productInCart.title;
        this.price = productInCart.price;
        this.quantity = productInCart.quantity;
    }

    render() {
        return `<div class="sumBasket">
                    <div class="productCart-bio">
                        <p class="product-textCart">${this.title} &times ${this.quantity}</p>
                        <p class="product-priceCart">Цена: $${this.price}</p>
                    </div>
                    <div class="productCart-right">
                        <p class="productCart-sum">$${this.quantity*this.price}</p>   
                        <button class="btn-del" id=product${this.id}>X</button>
                    </div>
            </div>`
    }
}

class Basket {

    constructor(container = `#Trolley-header`) {
        this.container = container;
        this.goodsInBasket = [];
        this.addGoods();
    }


    addGoods() {
        this.goodsInBasket = fetch(apiBasket)
            .then((text) => {
                return text.json()
            })
            .then((data) => {
                this.goodsInBasket = [...data];
                this._render();
            })
    }

    isVisibleCart() {
        if (this.goodsInBasket.length > 0) {
            document.querySelector(this.container).style.display = `flex`;
        } else {
            document.querySelector(this.container).style.display = `none`;
        }
    }

    // removeGoods() {
    //
    // }
    //
    // changeGoods() {
    //
    // }

    _render() {
        {
            const block = document.querySelector(this.container);
            for (let productInCart of this.goodsInBasket) {
                const productObjCart = new ProductItemsCart(productInCart);
                block.insertAdjacentHTML("beforeend", productObjCart.render());
            }


        }

    }
}

new Basket();


// let ProductJSON = ProductItems.ProductList.goods.find(item => item.id == 1);
// console.log(ProductJSON);


// fetch('package.json')
//     .then(text.json =>text.json())