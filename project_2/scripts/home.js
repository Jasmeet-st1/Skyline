let searchBtn=document.querySelector("#search_btn");
let searchInput=document.querySelector("#search-item");

searchBtn.addEventListener('click',function(){

    var x=searchInput.style.transform=="translateY(8px)";
    console.log(x);
    if(searchInput.value=="" && !x){
        searchInput.style.transform="translateY(8px)";
    }
    else if(x && searchInput.value!=""){
        location.href="./single_type_product_list.html";
    }
    else if(x){
        searchInput.style.transition='0.3s ease-in-out';
        searchInput.style.transform="translateY(-100px)";
    }
});

let topBtn=document.querySelector("#btt");
topBtn.addEventListener('click',function(){
    // let scrollPos = window.scrollY;
    document.documentElement.scrollTop = 0;

});

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