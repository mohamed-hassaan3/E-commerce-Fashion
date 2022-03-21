//ICON MENU SHOWN & HIDDEN
const menu = document.querySelector(".menu-icon");
const list = document.querySelector(".navbar");

menu.addEventListener('click', () => {
    if(list.style.display === "block" ) {
        list.style.display = "none"
    } else {
        list.style.display = "block"
    }
})

//NAVIGATION ACTIVE
const item = document.querySelectorAll('.navbar .item');

item.forEach((item) => {
    item.addEventListener('click', () => {
        document.querySelector('.navbar .active').classList.remove('active');
        item.classList.add('active')
    })
})

//STORING DATA
const products = [
    {img: "product.png",
    name: 'PANTS',
    price: "60.88",
    desc: "Lorem ipsum dolor sit amet, abc consectetur adipisicing elit",
    },
    {img: "product.png",
    name: 'Short',
    price: "20.00",
    desc: "Lorem ipsum dolor sit amet, abc consectetur adipisicing elit",
    },
    {img: "product.png",
    name: 'Short',
    price: "44.00",
    desc: "Lorem ipsum dolor sit amet, abc consectetur adipisicing elit",
    }
];

let cart = [];
const load = () => {
    products.forEach((i, index) => {

        // SELECT THE ELEMENT AND CREATE CHILD ELEMENT NESTED
        const card = document.querySelector('.card');
        const item = document.createElement('div');
        item.classList.add('card-contain');
        card.append(item);

        // THAT CONTAINER GENERATE PRODUCTS IN HTML
        item.innerHTML = `
        <div class="card-img">
            <img src=src/img/${i.img} width="100%">
            <p>${i.name}</p>
            <span>${i.price}</span>
        </div>
        <div class="card-title">
            <p>${i.desc}</p>
            <button class="add">ADD TO CART</button>
        </div>
        `
        item.querySelector('.add').addEventListener('click', () => {
            addToCart(index)
        })
    });
};
load();

const addToCart = (index) => {
    cart.push(index);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${products[index].name} Added to Cart`);
};


