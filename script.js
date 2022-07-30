let buttons=document.querySelectorAll('.rate');

let ratingVar;

for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',()=>{
        ratingVar=buttons[i].innerHTML;
    });
}

let submitButton=document.getElementById('submit');
let mainCard=document.querySelector('.card');
let thanksCard=document.querySelector('.thanks-card');

let userRating=document.getElementById('rating');

submitButton.addEventListener('click',()=>{
    if(ratingVar!=null){
        mainCard.classList.add('hide');
        thanksCard.classList.remove('hide');
        userRating.innerText=ratingVar;
    }else{
        alert("Please help us improve")
    }
});


