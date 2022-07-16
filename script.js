//Hamburger Menu
var hamburgers = document.querySelectorAll(".hamburger");
var navCollapse = document.querySelector(".mobile-nav");

if (hamburgers.length > 0) {
    hamburgers.forEach(function (hamburger) {
        hamburger.addEventListener("click", function () {
            this.classList.toggle("is-active");
            navCollapse.classList.toggle('nav-show');
            document.body.classList.toggle('overflow-hidden');
        }, false);
    });
}


// Product Detail
$(document).ready(function () {
    var slider = $("#slider");
    var thumb = $("#thumb");
    var slidesPerPage = 4; //globaly define number of elements per page
    var syncedSecondary = true;
    slider.owlCarousel({
        items: 1,
        slideSpeed: 2000,
        nav: false,
        autoplay: false,
        dots: false,
        loop: true,
        responsiveRefreshRate: 200
    }).on('changed.owl.carousel', syncPosition);
    thumb
        .on('initialized.owl.carousel', function () {
            thumb.find(".owl-item").eq(0).addClass("current");
        })
        .owlCarousel({
            items: slidesPerPage,
            dots: false,
            nav: true,
            item: 4,
            smartSpeed: 200,
            slideSpeed: 500,
            slideBy: slidesPerPage,
            navText: ['<svg width="18px" height="18px" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="25px" height="25px" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
            responsiveRefreshRate: 100
        }).on('changed.owl.carousel', syncPosition2);
    function syncPosition(el) {
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - (el.item.count / 2) - .5);
        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }
        thumb
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = thumb.find('.owl-item.active img').length - 1;
        var start = thumb.find('.owl-item.active img').first().index();
        var end = thumb.find('.owl-item.active img').last().index();
        if (current > end) {
            thumb.data('owl.carousel').to(current, 100, true);
        }
        if (current < start) {
            thumb.data('owl.carousel').to(current - onscreen, 100, true);
        }
    }
    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            slider.data('owl.carousel').to(number, 100, true);
        }
    }
    thumb.on("click", ".owl-item", function (e) {
        e.preventDefault();
        var number = $(this).index();
        slider.data('owl.carousel').to(number, 300, true);
    });


    $(".qtyminus").on("click", function () {
        var now = $(this).siblings(".qty").val();
        if ($.isNumeric(now)) {
            if (parseInt(now) - 1 > 0) { now--; }
            $(this).siblings(".qty").val(now);
        }
    })
    $(".qtyplus").on("click", function () {
        var now = $(this).siblings(".qty").val();
        if ($.isNumeric(now)) {
            $(this).siblings(".qty").val(parseInt(now) + 1);
        }
    });
});



// Product Carousel
$('.owl-prd-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: ['<a class="owl-left"> <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M26.6665 16H5.33317M14.6665 25.3334L5.33317 16L14.6665 6.66671" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /> </svg> </a>', '<a class="owl-right"> <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M5.3335 16H26.6668M17.3335 6.66663L26.6668 16L17.3335 25.3333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /> </svg> </a>'],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})


// Category Dropdown
let catSubMenu = document.querySelectorAll('.cat-sub-menu');
let stick2 = document.querySelectorAll('.stick2');
catSubMenu.forEach((i, n) => {
    i.addEventListener('click', () => {

        if (i.childNodes[3].classList.contains('active')) {
            stick2[n].classList.toggle('active');
            i.childNodes[3].classList.toggle('active');
        }
        else {
            catSubMenu.forEach((j) => {
                if (j.childNodes[3]) {
                    j.childNodes[3].classList.remove('active')
                }
            })
            stick2.forEach((k) => {
                if (k) {
                    k.classList.remove('active')
                }
            })

            i.childNodes[3].classList.add('active');
            stick2[n].classList.add('active');
        }
    });
})



// Mobile Category Drop Down
let catBox = document.querySelector('.submenus');
let catBoxDrop = document.querySelector('.cat-box-head');
let catBoxDropIcon = document.querySelector('.cat-box-head .drop-icon');

if (catBoxDrop) {
    catBoxDrop.addEventListener('click', () => {
        catBox.classList.toggle('active');
        catBoxDropIcon.classList.toggle('active');
    });

}










let gunImg = document.querySelectorAll('.prod-list .product-img img');

gunImg.forEach((i) => {
    i.setAttribute('src', 'assets/gun0' + (Math.floor(Math.random() * 8) + 1) + '.png');
})

let blogImg = document.querySelectorAll('.blogs-section .product-img img');

blogImg.forEach((i) => {
    i.setAttribute('src', 'assets/blog' + (Math.floor(Math.random() * 4) + 1) + '-img.png');
})




// Dashboard JS
$(document).ready(function () {
    var orderBtns = $('.dashboard-navlinks .prm-btn');
    orderBtns.each(function () {
        $(this).on('click', () => {
            $('#' + $(this).attr('data-tab-target')).click();
        })
    })
})




// Login Modal
var userIcon = $('.cart-profile .user-icon');
userIcon.on('click', () => {
    $.ajax({
        url: 'login.html',
        async: false,
        success: function (data) {
            $('body').prepend(data);
            $('html').css('overflow', 'hidden');
            setTimeout(() => { $('.login-modal').addClass('active'); }, 10);
        }
    });

    var closeModalIcon = $('.close-modal');
    closeModalIcon[0].addEventListener('click', () => {
        $('.login-modal').removeClass('active');
        setTimeout(() => {
            $('.login-modal').remove();
            $('html').css('overflow', 'auto');
        }, 300);
    });

});
