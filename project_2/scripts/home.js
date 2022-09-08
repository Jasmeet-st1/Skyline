let searchBtn=document.querySelector("#search_btn");
let searchInput=document.querySelector("#search-item");

searchBtn.addEventListener('click',function(){

    var x=searchInput.style.transform=="translateY(8px)";
    console.log(x);
    if(searchInput.value=="" && !x){
        searchInput.style.transform="translateY(8px)";
    }
    else if(x && searchInput.value!=""){
        alert("Hello");
    }
    else if(x){
        searchInput.style.transition='0.3s ease-in-out';
        searchInput.style.transform="translateY(-100px)";
    }
});

let header=document.querySelector("#header");
let upperHead=document.querySelector("#upper_head");
console.log(upperHead);
let headPos = upperHead.getBoundingClientRect().top;
console.log(headPos);

window.addEventListener("scroll", e => {
    let scrollPos = window.scrollY;
    if (scrollPos > headPos) {
      upperHead.classList.add('sticky');
      header.classList.add('headerOffsetMargin');
      console.log("Sticky");
      console.log(headPos);
    } else {
        upperHead.classList.remove('sticky');
        header.classList.remove('headerOffsetMargin');
        console.log("Not");
    }
});