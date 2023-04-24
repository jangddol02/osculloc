// 메뉴

var list = document.querySelectorAll(".item_dep1"),
    header_bg = document.querySelector(".header_background");

list[0].addEventListener("mouseover", function () {
    header_bg.style.height = 400 + "px";
})
list[0].addEventListener("mouseout", function () {
    header_bg.style.height = 0;
})
list[2].addEventListener("mouseover", function () {
    header_bg.style.height = 400 + "px";
})
list[2].addEventListener("mouseout", function () {
    header_bg.style.height = 0;
})
list[3].addEventListener("mouseover", function () {
    header_bg.style.height = 400 + "px";
})
list[3].addEventListener("mouseout", function () {
    header_bg.style.height = 0;
})

//헤더 배경색 바꾸기
var item = document.querySelectorAll(".item_dep1");
var rightItem = document.querySelectorAll(".nav_item");

function change_scroll() {
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        // 600이 넘으면 mouseout해도 백그라운드가 사라지지 않는 거ㅠ!! 어케 해....
        document.querySelector(".header").style.background = "white";
        document.querySelector(".logo_img").style.backgroundImage = "url('img/header/logo_black.png')";
        document.querySelector(".search").style.backgroundImage = "url('img/header/icon_search_black.png')";
        document.querySelector(".cart").style.backgroundImage = "url('img/header/icon_cart_black.png')";
        document.querySelector(".more").style.backgroundImage = "url('img/header/icon_more_black.png')";
        document.querySelector(".item").style.color = "black";
        item[0].style.color = "black";
        item[1].style.color = "black";
        item[2].style.color = "black";
        item[3].style.color = "black";
        rightItem[0].style.color = "black";
        rightItem[1].style.color = "black";
    }
    else if(document.body.scrollTop < 600 || document.documentElement.scrollTop < 600) {
        document.querySelector(".header").style.background = "linear-gradient(to bottom, rgba(0, 0, 0, 0.25), transparent)";
        document.querySelector(".logo_img").style.backgroundImage = "url('img/header/logo_white.png')";
        document.querySelector(".search").style.backgroundImage = "url('img/header/icon_search_white.png')";
        document.querySelector(".cart").style.backgroundImage = "url('img/header/icon_cart_white.png')";
        document.querySelector(".more").style.backgroundImage = "url('img/header/icon_more_white.png')";
        document.querySelector(".item").style.color = "white";
        item[0].style.color = "white";
        item[1].style.color = "white";
        item[2].style.color = "white";
        item[3].style.color = "white";
        rightItem[0].style.color = "white";
        rightItem[1].style.color = "white";
    }
}

function scrollTop() {
    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
        document.querySelector(".to_top").style.right = "20px";
    }
    else{
        document.querySelector(".to_top").style.right = "-50px";
    }
}
// document.querySelector(".header").addEventListener("mouseover", function () {
//     document.querySelector(".header").style.background = "white";
// })
// document.querySelector(".header").addEventListener("mouseout", function () {
//     document.querySelector(".header").style.background = "linear-gradient(to bottom, rgba(0, 0, 0, 0.25), transparent)";
// })

//to_top 버튼


document.querySelector(".to_top").addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
})
