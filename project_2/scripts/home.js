let searchBtn=document.querySelectorAll(".search_btn");
let searchDiv=document.querySelector(".search-div");
let searchInput=document.querySelector(".search-div input");
let searchButton=document.querySelector(".search-div button");

let cutBtn=document.querySelector(".fa-xmark");
console.log(searchBtn);
console.log(searchBtn.length);
for(let d=0;d<searchBtn.length;d++){
    searchBtn[d].addEventListener('click',function(){
        searchDiv.classList.remove("invisible");
    });
}
cutBtn.addEventListener('click',function(){
    searchDiv.classList.add("invisible");

})
searchButton.addEventListener('click',function(){
    
    if(searchInput.value!=""){
        searchInput.value="";
        location.href="./single_type_product_list.html";
    }
})

let topBtn=document.querySelector("#btt");
topBtn.addEventListener('click',function(){
    document.documentElement.scrollTop = 0;

});

let upperTitle=document.querySelectorAll(".title.text-uppercase");
let lowerTitle=document.querySelectorAll(".list-unstyled a");
console.log(lowerTitle);
for(let i=0;i<upperTitle.length;i++){
    upperTitle[i].style.cursor="pointer";
    upperTitle[i].addEventListener('click',function(){
        location.href='./single_type_product_list.html';
    });
}
for(let i=0;i<lowerTitle.length;i++){
    lowerTitle[i].addEventListener('click',function(){
        location.href='./single_product_page.html';
        console.log("hello");
    });
}

let homeImg=document.querySelectorAll("#main-items .image");
for(let i=0;i<homeImg.length;i++){
    homeImg[i].style.cursor="pointer";
    homeImg[i].addEventListener('click',function(){
        location.href='./single_type_product_list.html';
        console.log("hello");
    });
}


let shopBtn=document.querySelectorAll(".card-body .btn");
for(let i=0;i<shopBtn.length;i++){
    shopBtn[i].addEventListener('click',function(){
        location.href='./single_product_page.html';
        console.log("hello");
    });
}
let cardImg=document.querySelectorAll(".card-img-top");
for(let i=0;i<cardImg.length;i++){
    cardImg[i].addEventListener('click',function(){
        location.href='./single_product_page.html';
        console.log("hello");
    });
}


let box=document.querySelectorAll(".outerbox");
let outercontainer=document.querySelector("#carouselExampleIndicators .carousel-inner");
console.log(box);
window.addEventListener('load',function(){
    for(let i=0;i<box.length;i++){
        box[i].style.transform="translateY(0px)";
    }
});

//timer
let offerDivs = document.querySelectorAll(".time-div");



for(let i=0; i<offerDivs.length; i++){
    var x = setInterval(xyz, 1000,i);
}

function xyz(i) {
    
    var now = new Date().getTime();
    var end = new Date();
    end.setUTCHours(18,29,59,999);
    
    var distance = end - now;
    // console.log(end);
    
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    let Times=days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    
    if(days==0){
        Times = hours + "h " + minutes + "m " + seconds + "s ";
    }
    if(days==0 && hours==0){
        Times = minutes + "m " + seconds + "s ";
    }
    if(days==0 && hours==0 && minutes==0){
        Times = seconds + "s ";
    }
    offerDivs[i].innerHTML = Times;
    if (distance < 0) {
        clearInterval(x);
        offerDivs[i].innerHTML = "EXPIRED";
    }
}


let main_items=document.querySelectorAll("#main-items .col-lg-5");
for(let i=0;i<main_items.length;i++){
    main_items[i].style.backgroundImage="url('./photos/home_items/pic"+(i+1)+".jpg')"
}

window.addEventListener('resize', function () { 
    "use strict";
    window.location.reload(); 
});

const scrWidth=screen.width;
let image1=document.querySelector(".img1");
let image2=document.querySelector(".img2");
console.log(scrWidth);
if(scrWidth<770){
    image1.src="./photos/carousel_1_mobile.png";
    image2.src="./photos/carousel_2_mobile.png";
}
