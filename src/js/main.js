//ICON MENU SHOWN & HIDDEN
const menu = document.querySelector(".menu-icon");
const list = document.querySelector(".navbar");
const cartIcon = document.querySelector(".cart-icon");
const cart1 = document.querySelector(".cart1");
const counter = document.querySelector('.counter')
const subtotal = document.querySelector('.subtotal');
const totalPrices = document.querySelector('.total');
const card = document.querySelector('.card');
const cardGown = document.querySelector('.card-gown');
const cart_items = document.querySelector('.cart');
const navbarElement = document.getElementById('navbar');
const menuItems = document.querySelectorAll('.navbar li a');

/* MENU LIST TOGGLE */
menu.addEventListener('click', () => {
    list.classList.toggle('navbar-list')
    cart1.style.display = "none"
    
});

/* Function to check scroll position and add/remove class */
function handleScroll() {
    if (window.scrollY > 50) {
        navbarElement.classList.add('scrolled');
    } else {
        navbarElement.classList.remove('scrolled');
    }
}
window.addEventListener('scroll', handleScroll);

function closeMenu() {
    navbarElement.classList.remove('navbar-list');
}

// Add event listeners to menu items
menuItems.forEach(item => {
    item.addEventListener('click', closeMenu);
});

/* CART LIST ITEM TOGGLE */
cartIcon.addEventListener('click', () => {
    if(cart1.style.display === 'block') {
        cart1.style.display = 'none'
    }else{
        cart1.style.display = 'block'
    }
});

/* NAVIGATION ACTIVE */
const item_nav = document.querySelectorAll('.navbar .item-nav');

item_nav.forEach((i) => {
    i.addEventListener('click', () => {
        document.querySelector('.navbar .active').classList.remove('active');
        i.classList.add('active')
    })
});




/* PRODUCTS ARRAY */

// RENDER PRODUCTS FROM ARRAY
const load = () => {
    products.forEach((product) => {
        card.innerHTML += `
        <div class="item">
            <div class="card-img">
                <img src=src/img/${product.img} width="100%">
                <p>${product.name}</p>
                <span>${product.price}</span>
            </div>
            <div class="card-title">
                <p>${product.desc}</p>
                <button class="add" onclick= "addToCart(${product.id})">ADD TO CART</button>
            </div>
        </div>
        `
    });
    gown.forEach((product) => {
        cardGown.innerHTML += "";
        cardGown.innerHTML += `
            <div class="card-contain">
                <div class="card-img" width="268px">
                    <img src="/src/img/${product.img}" width="100%" alt="${product.name}">
                    <p>${product.name}</p>
                    <span>$${product.price}</span>
                </div>
                <div class="card-title">
                    <p>${product.desc}</p>
                    <button class="add" onclick= "addToCartGown(${product.id})">ADD TO CART</button>
                </div>
            </div>
        `
    });
}
load()

// RENDER ITEMS IN CART
document.addEventListener("DOMContentLoaded", storageItem);

// STORE ITEMS IN CART
let cart = [];

// STORAGE ITEMS IF THE CART EMPTY
function storageItem () {
    if(localStorage.getItem("CART") === null) {
        cart = []
    } else {
        cart = JSON.parse(localStorage.getItem("CART"))
    }
    updateCart()
}

// ADD PRODUCTS TO CART
const addToCart = (id) => {
    if(cart.some((product) => product.id === id)){
        changeNumberOfUnits ('plus', id)
    } else {
        const item = products.find((product) => product.id === id);
        cart.push({
            ...item,
            unitNumber: 1,
        })
        console.log(cart);
    }
    updateCart();
};

const addToCartGown = (id) => {
    if(cart.some((product) => product.id === id)){
        changeNumberOfUnits ('plus', id)
    } else {
        const item = gown.find((product) => product.id === id);
        cart.push({
            ...item,
            unitNumber: 1,
        })
        console.log(cart);
    }
    updateCart();
};
const updateCart = () => {
    renderItem();
    calculateItem();

    // SAVE A CART ITEM IN LOCAL STORAGE
    localStorage.setItem("CART", JSON.stringify(cart));
};

// RENDER ITEM IN CART
const renderItem = () => {
    
    cart_items.innerHTML = "";
    cart.forEach ((item) => {
        cart_items.innerHTML += `
            <div class="cart-content">
                <div class="item">
                    <img src="/src/img/${item.img}" width="100%" alt="${item.name}">
                </div>
                <div class="title">
                    <h3 class="head">${item.name}</h3>
                </div>
                <div class="quantity">
                    <button class="minus" onclick="changeNumberOfUnits ('minus', ${item.id})">-</button>
                    <span class="number">${item.unitNumber}</span>
                    <button class="plus" onclick= "changeNumberOfUnits ('plus', ${item.id})">+</button>
                </div>
                <div class="price">
                    <h4>$${item.price}</h4>
                </div>
                <div class="remove">
                    <button class="remove" onclick="removeItem(${item.id})">Remove</button>
                </div>
            </div>
        `
    });
};

// CALCULATE ITEMS IN CART
function calculateItem (item) {
    let totalItem = 0,
    totalPrice = 0;

    cart.forEach((item) => {
        totalItem += item.unitNumber;
        totalPrice += item.price * item.unitNumber;
    })

    counter.innerHTML = `${totalItem}`;
    subtotal.innerHTML = `Subtotal: ${totalItem} items`;
    totalPrices.innerHTML = `Total Price: $${totalPrice.toFixed(2)}`;
}

// REMOVE ITEM FROM THE CART
function removeItem(id) {
    cart = cart.filter((item) => item.id !== id);
    updateCart()
}

// INCREASE & DECREASE 
function changeNumberOfUnits(action, id) {

    cart = cart.map((item) => {

        let oldNumber = item.unitNumber;

        if(item.id === id) {
            if (action === "minus" && oldNumber > 1) {
                oldNumber--;
            } else if (action === "plus" && oldNumber < item.stock) {
                oldNumber++;
            }
        }
        return {
            ...item,
            unitNumber: oldNumber,
        }
    });
    updateCart();
};


