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
let products =[
    {
        id: 1,
        name: '70L-Professional-Mountaineering-Bag',
        image: '1.JPG',
        price: 300
    },
    {
        id: 2,
        name: '80L-Professional-Waterproof-Men-Duffel-Bag',
        image: '2.JPG',
        price: 350
    },
    {
        id: 3,
        name: 'Outdoor-Mountaineering-Travel-Bag-60L',
        image: '3.JPG',
        price: 500
    },
    {
        id: 4,
        name: 'Military-Backpacks-1000D',
        image: '4.JPG',
        price: 800
    },
    {
        id: 5,
        name: 'Hewolf-Outdoor-Camping-Tent',
        image: '5.JPG',
        price: 620
    },
    {
        id: 6,
        name: 'Naturehike-Ultralight-Tent',
        image: '6.JPG',
        price: 450
    },
    {
        id: 5,
        name: 'CAMEL-Waterproof-Hiking-Shoes',
        image: '7.JPG',
        price: 380
    },
    {
        id: 5,
        name: 'Hiking-Shoes-Non-slip-Wear',
        image: '8.JPG',
        price: 800
    },
    {
        id: 5,
        name: 'GoPro-Hero-10',
        image: '9.JPG',
        price: 1000
    },
    {
        id: 5,
        name: 'X-TIGER-1200mAh-7-LED-Flashlight',
        image: '10.JPG',
        price: 250
    },
    {
        id: 5,
        name: 'Outdoor-Telescope-100x22-High-Power',
        image: '11.JPG',
        price: 180
    },
    {
        id: 5,
        name: 'Backpack-Style-Multi-Bag-Foldable-Stool',
        image: '12.JPG',
        price: 380
    },
];
let listCards = [];
function initApp(){
    products.forEach((value,key)=>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML =`
        <img src ="image/${value.image}"/>
        <div class ="title">${value.name}</div>
        <div class ="price">${value.price.toLocaleString()}</div>
        <button class="cart" onclick ="addToCart(${key})">Add To Cart</button>
        `;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCart(key){
    if (listCards[key] == null){
        listCards[key] = products[key];
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value ,key) =>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML =`
            <div><img src ="image/${value.image}"/></div>
            <div>${value.name}</div>
            <div>${value.price.toLocaleString()}</div>
            <div>
                <button onclick = "changeQuantity(${key},${value.quantity-1}">-<button>
                <div class ="count">${value.quantity}</div>
                <button onclick = "changeQuantity(${key},${value.quantity+1}">+<button>
            </div> 
            `;
            listCard.appendChild(newDiv);
        }
    })
    total.innerHTML = totalPrice.toLocaleString();
    quantity.innerHTML = count;
}
function changeQuantity(key, quantity){
    if (quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}
