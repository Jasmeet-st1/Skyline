let mainImage=document.querySelector(".main-image img");
let imageMenu=document.querySelectorAll(".image-option img");

for(let i=0;i<imageMenu.length;i++){
    imageMenu[i].addEventListener('click',function(){
        for(let j=0;j<imageMenu.length;j++){
            imageMenu[j].classList.remove("active-img");
        };
        mainImage.src="./photos/single-prod"+(i+1)+".jpg";
        imageMenu[i].classList.add("active-img");
    });
}

let sizes=document.querySelectorAll(".sizes .btn");
for(let i=0;i<sizes.length;i++){
    sizes[i].addEventListener('click',function(){
        for(let j=0;j<sizes.length;j++){
            sizes[j].classList.remove("active-btn");
        };
        sizes[i].classList.add("active-btn");
    });
}


let quantity=document.querySelector(".quantity").innerHTML;
let plus=document.querySelector(".plus-quantity");
let minus=document.querySelector(".minus-quantity");

minus.addEventListener('click',function(){
    if(parseInt(quantity)>1){
        // quantity=parseInt(--quantity);
        quantity--;
        document.querySelector(".quantity").innerHTML=quantity;
        // console.log(quantity);
    }
});
plus.addEventListener('click',function(){
    if(parseInt(quantity)<20){
        // quantity=parseInt(--quantity);
        quantity++;
        document.querySelector(".quantity").innerHTML=quantity;
        // console.log(quantity);
    }
});

let desc=document.querySelector(".description-lower");
let desc1=document.querySelector(".description1").innerHTML;
let desc2=document.querySelector(".description2").innerHTML;
let btn1=document.querySelector(".description-btns .btn1");
let btn2=document.querySelector(".description-btns .btn2");

btn1.addEventListener('click',function(){
    desc.innerHTML=desc1;
    btn1.classList.add("active-button");
    btn2.classList.remove("active-button");
})
btn2.addEventListener('click',function(){
    desc.innerHTML=desc2;
    btn2.classList.add("active-button");
    btn1.classList.remove("active-button");
})