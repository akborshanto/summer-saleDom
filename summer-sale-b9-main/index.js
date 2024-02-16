/* title-count */
let count=1;
let totalPrice=0;
const cards=document.querySelectorAll('.card')
//console.log(cards)


for (var i=0; i<cards.length; i++){

const card=cards[i]
//console.log(card)
card.addEventListener('click',function(){
    //console.log("cllicked")

const title=card.querySelector('h3').innerText;
//const titleValue=card.innerText;
const price=parseFloat(card.querySelector('span').innerText.split(' ')[1]);
//console.log(price)

const titleContainer=document.getElementById("title-container")
const p=document.createElement('p');
p.innerText=count + " ." + title;


titleContainer.appendChild(p)
count++;


totalPrice +=price;
/* totalpriceDisplay */
const totalPriceDisplay=document.getElementById('totalPrice').innerText=totalPrice.toFixed(2);


console.log(totalPrice)

})

}