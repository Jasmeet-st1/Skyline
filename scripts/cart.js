let quantity=document.querySelectorAll(".quantity");
let plus=document.querySelectorAll(".plus-quantity");
let minus=document.querySelectorAll(".minus-quantity");
let price=document.querySelectorAll(".price");
let pricefix=[];

let totalPrice=document.querySelector(".total-price h5");
let discountPrice=document.querySelector(".discount-amount");
let finalPrice=document.querySelector(".final-price h4");
console.log(totalPrice);

let discount_percentage=5;
document.querySelector(".percentage-discount").innerHTML=discount_percentage;
let promocode=document.querySelector("#promocode");
promocode.addEventListener('keydown',function(){
    if(promocode.value.length>=6 && promocode.value.length<10){
        discount_percentage=15;
    }
    else{
        discount_percentage=5;
    }
    console.log(discount_percentage);
    discountPrice.innerHTML=parseInt(discount_percentage/100*totalprice);
    finalPrice.innerHTML=totalprice-parseInt(discountPrice.innerHTML);
    document.querySelector(".percentage-discount").innerHTML=discount_percentage;

});

for(let a=0;a<price.length;a++){
    pricefix[a]=parseInt(price[a].innerHTML);
    console.log(pricefix[a]);
}
let totalprice=0;
for(let x=0;x<price.length;x++){
    totalprice+=parseInt(price[x].innerHTML);
}
totalPrice.innerHTML=totalprice;
discountPrice.innerHTML=parseInt(discount_percentage/100*totalprice);
finalPrice.innerHTML=totalprice-parseInt(discountPrice.innerHTML);

for(let i=0;i<quantity.length;i++){
    
    minus[i].addEventListener('click',function(){
        let numbers=quantity[i].innerHTML;
        if(parseInt(numbers)>1){
            numbers--;
            quantity[i].innerHTML=numbers;
            price[i].innerHTML=parseInt(price[i].innerHTML)-pricefix[i];
            let totalprice=0;
            for(let x=0;x<price.length;x++){
                totalprice+=parseInt(price[x].innerHTML);
            }
            totalPrice.innerHTML=totalprice;
            discountPrice.innerHTML=parseInt(discount_percentage/100*totalprice);
            finalPrice.innerHTML=totalprice-parseInt(discountPrice.innerHTML);
        }
    });
    plus[i].addEventListener('click',function(){
        let numbers=quantity[i].innerHTML;
        if(parseInt(numbers)<20){
            numbers++;
            quantity[i].innerHTML=numbers;
            price[i].innerHTML=parseInt(price[i].innerHTML)+pricefix[i];
            let totalprice=0;
            for(let x=0;x<price.length;x++){
                totalprice+=parseInt(price[x].innerHTML);
            }
            totalPrice.innerHTML=totalprice;
            discountPrice.innerHTML=parseInt(discount_percentage/100*totalprice);
            finalPrice.innerHTML=totalprice-parseInt(discountPrice.innerHTML);
        }
    });
}
