let next = document.querySelector('.next')
let prev = document.querySelector('.prev')
let solotravelling = 'https://www.youtube.com/watch?v=dQnFIJv1u8A';
let tips = 'https://www.youtube.com/watch?v=6tBgdw4cDPU';
let culture = 'https://www.youtube.com/watch?v=OxFOuZCokLk';
let food = 'https://www.youtube.com/watch?v=rL1s7ZRk85Q;'
let equipments = 'https://www.youtube.com/watch?v=oO-qOkpsplk'
let destinations = 'https://www.youtube.com/watch?v=vYxNrehP_5w'






next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slider').appendChild(items[0])
})

prev.addEventListener('click',function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slider').prepend(items[items.length - 1])
})