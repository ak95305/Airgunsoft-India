//Hamburger Menu
var hamburgers = document.querySelectorAll(".hamburger");
var navCollapse = document.querySelector(".mobile-nav");

if (hamburgers.length > 0) {
    hamburgers.forEach(function(hamburger) {
    hamburger.addEventListener("click", function() {
        this.classList.toggle("is-active");
        navCollapse.classList.toggle('nav-show');
        document.body.classList.toggle('overflow-hidden');
    }, false);
    });
}


// Product Carousel
$('.owl-prd-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText : ['<a class="owl-left"> <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M26.6665 16H5.33317M14.6665 25.3334L5.33317 16L14.6665 6.66671" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /> </svg> </a>','<a class="owl-right"> <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M5.3335 16H26.6668M17.3335 6.66663L26.6668 16L17.3335 25.3333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /> </svg> </a>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})


// Category Dropdown
let catSubMenu = document.querySelectorAll('.cat-sub-menu');
let stick2 = document.querySelectorAll('.stick2');
catSubMenu.forEach((i, n)=>{
    i.addEventListener('click', ()=>{
        
        catSubMenu.forEach((j)=>{
            if(j.childNodes[3]){
                j.childNodes[3].classList.remove('active')
            }
        })
        stick2.forEach((k)=>{
            if(k){
                k.classList.remove('active')
            }
        })

        i.childNodes[3].classList.add('active');
        stick2[n].classList.add('active');
    });
  })









let gunImg = document.querySelectorAll('.prod-list .product-img img');

gunImg.forEach((i)=>{
    i.setAttribute('src', 'assets/gun0'+ (Math.floor(Math.random() * 8) + 1) +'.png');
})

let blogImg = document.querySelectorAll('.blogs-section .product-img img');

blogImg.forEach((i)=>{
    i.setAttribute('src', 'assets/blog'+ (Math.floor(Math.random() * 4) + 1) +'-img.png');
})