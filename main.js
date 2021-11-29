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
    // {
    //     id: 4,
    //     title: "Vitamin A",
    //     price: 98,
    //     descriptionProduct: "Чистая кристаллическая L-аскорбиновая кислота в доступной форме.",
    //     imgName: "vtc1_31"
    // },
    // {
    //     id: 5,
    //     title: "Vitamin G",
    //     price: 24,
    //     descriptionProduct: "Чистая кристаллическая L-аскорбиновая кислота в доступной форме.",
    //     imgName: "vtc1_31"
    // },
    // {
    //     id: 6,
    //     title: "Vitamin B",
    //     price: 16,
    //     descriptionProduct: "Чистая кристаллическая L-аскорбиновая кислота в доступной форме.",
    //     imgName: "vtc1_31"
    // },
];
// fetch('package.json')
//     .then(text.json =>text.json())


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

let productsCardHeight = document.getElementsByClassName('products-card').length;
let renderProductCardHeight = (productsCardHeight) => {
    if (productsCardHeight >= 4) {
        document.querySelector(".wrap-products-main").style.height = 1200 + `px`;
        document.querySelector(".wrap.wrap-products-catalog").style.height = 1500 + `px`;
    } else {
        document.querySelector(".wrap.wrap-products-catalog").style.height = 900 + `px`;
        document.querySelector(".wrap-products-main").style.height = 600 + `px`;
    }
}

renderProductCardHeight(productsCardHeight);