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
    var item = document.createElement('div');
    item.classList.add("cart-add");    
    var cartItem = document.getElementById("cart-item");
    var proName = cartItem.children[0].innerHTML;  
    var image = document.createElement('img'); 
    image.src = proImg; 
    var proImg = cartItem.children[1].src;
    var proPrz = cartItem.children[2].innerHTML;

    item.append(image);
    item.append(proName);
    item.append(proPrz);

    document.getElementById("itemContent").append(item);

    console.log(document.getElementById("itemContent"));
0
}