let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})

closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

function addtocart(){
    var item = document.createElement('p');
    item.classList.add("cart");    
    var cartItem = document.getElementById("cart-item");
    var proName = cartItem.children[0].innerHTML;
    
}