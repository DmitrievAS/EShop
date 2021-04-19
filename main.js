const products = [
    {
        id: 1,
        title: "L-Glutathione",
        price: 35,
        descriptionProduct: "Способствует расщеплению окисленных жиров и необходим для углеводного обмена",
        imgName: "v799-10"
    },
    {
        id: 2,
        title: "Magnesium Citrate",
        price: 25,
        descriptionProduct: "Магний помогает преобразовывать углеводы, белки и жиры в энергию",
        imgName: "v433-09"
    },
    {
        id: 3,
        title: "Vitamin C",
        price: 15,
        descriptionProduct: "Чистая кристаллическая L-аскорбиновая кислота в доступной форме.",
        imgName: "vtc1_31"
    },
];

class Basket {


    addProducts() {
    }

    deleteProducts() {
    }

    changeQuantity() {

    }
    renderBasket () {

    }
}

// массив объектов Корзина, в которой будет сохраняться количество (далее думаю сделать привязку
// при нажатии кнопки Купить добавление +1 количество товара
let basket = [
    {
        productId: 1,
        amount: 7,
    },
    {
        productId: 2,
        amount: 10
    }
]

// функция подсчета суммы в корзине, вывод суммы пока в консоль.
// Вариант подсчета взял с реализованного в прошлом курсе, не успел физически придумать и доделать,
// как лучше сделать структуру, по логике нужно сделать функцию подсчета корзины и переделать её в метод в объекте корзина.
let basketSum = 0;
console.log('Товары в корзине: ');
for (let i = 0; i < basket.length; i++) {
    let productId = basket[i].productId;
    basketSum += products[productId].price * basket[i].amount;
    console.log(`${products[productId].title} x ${basket[i].amount} шт.`);
}
console.log(`Итого стоимость: ${basketSum}$`);


// функция для создания нового объекта Products, id определяется как текущий id+1
function makeProducts(title, price, descriptionProduct, imgName) {
    this.id = `${products.length+1}`
    this.title = title,
    this.price = price,
    this.descriptionProduct = descriptionProduct,
    this.imgName = imgName
}


const item1= new makeProducts('VitaminB', 1500, 'Витамин B', "VVV");
console.log((item1));


const renderProduct = (products) => {
    return `<div class="products-card">
                <img src="image/${products.imgName}.png" alt="Picture Loading">    
                <p class="product-name">${products.title}</p>
                <p class="product-text">${products.descriptionProduct}</p>
                <p class="product-price">$${products.price}</p>
                <button class="btn-products1">Купить</button>
            </div>`
};

const renderPage = list => {
    document.querySelector(".wrap-products-main").innerHTML = list.map(item => renderProduct(item)).join('');
};

renderPage(products);