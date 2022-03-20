const menu = document.querySelector(".menu-icon");
const list = document.querySelector(".navbar");

menu.addEventListener('click', () => {
    if(list.style.display === "block" ) {
        list.style.display = "none"
    } else {
        list.style.display = "block"
    }
})