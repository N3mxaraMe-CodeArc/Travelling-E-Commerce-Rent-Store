// let openShopping = document.querySelector('.shopping');
// let closeShopping = document.querySelector('.closeShopping');
// let list = document.querySelector('.list');
// let listCard = document.querySelector('.listCard');
// let body = document.querySelector('body');
// let total = document.querySelector('.total');
// let quantity = document.querySelector('.quantity');

// openShopping.addEventListener('click', ()=>{
//     body.classList.add('active');
// })

// closeShopping.addEventListener('click', ()=>{
//     body.classList.remove('active');
// })

// var numb = 0;

// function addtocart(){
//     var count = document.getElementById("quant");
//     count.innerHTML = numb;

//     var item = document.createElement('div');
//     item.classList.add("cart-add");    
//     var cartItem = document.getElementById("cart-item");
//     var proName = cartItem.children[0].innerText;  
//     var image = document.createElement('img'); 
//     var proLink = cartItem.children[1].src;
//     image.src = proLink; 
//     var proPrz = cartItem.children[2].innerText;
//     var quanti = document.getElementById("5_quantity").value;
//     // var numOfItems = 
//     var Remove = document.createElement('span');
//     Remove.innerHTML='<i class = "fa fa-trash"></i>';
//     Remove.onclick = Remove.classList.add("deleteRow");

//     item.append(image);
//     item.append(proName);
//     item.append(proPrz);
//     item.append(quanti);

//     document.getElementById("itemContent").append(item);
//     numb++;
//     console.log(document.getElementById("itemContent"));

//     var count = document.getElementById("quant");
//     count.innerHTML = numb;
// }

let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let count = document.getElementById('quant');

openShopping.addEventListener('click', () => {
  body.classList.add('active');
});

closeShopping.addEventListener('click', () => {
  body.classList.remove('active');
});

let numb = 0;

function addtocart() {
  count.innerHTML = ++numb;

  let cartItem = event.target.parentElement;
  let proName = cartItem.querySelector('h4').innerText;
  let proLink = cartItem.querySelector('img').src;
  let proPrz = cartItem.querySelector('.price').innerText;
  let quanti = cartItem.querySelector('.size').value;

  let item = document.createElement('div');
  item.classList.add('cart-add');

  let image = document.createElement('img');
  image.src = proLink;

  let itemName = document.createElement('span');
  itemName.innerText = proName;

  let itemPrice = document.createElement('span');
  itemPrice.innerText = proPrz;

  let itemQuantity = document.createElement('span');
  itemQuantity.innerText = quanti;

  let removeItem = document.createElement('span');
  removeItem.innerHTML = '<i class="fa fa-trash"></i>';
  removeItem.classList.add('deleteRow');
  removeItem.onclick = function () {
    count.innerHTML = --numb;
    item.remove();
  };

  item.appendChild(image);
  item.appendChild(itemName);
  item.appendChild(itemPrice);
  item.appendChild(itemQuantity);
  item.appendChild(removeItem);

  listCard.appendChild(item);
}
