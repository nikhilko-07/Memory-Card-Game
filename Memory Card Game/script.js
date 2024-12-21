const cards = document.querySelectorAll('.card');
const newbtn = document.querySelector('.newGame');
const step = document.querySelector('.step')
const winner = document.querySelector('.winner')

let count = 0;
let matchedCard = 0;
let cardOne, cardTwo;
let disablDeck = false

function flipcard(e){
    let clickedCard = e.target;
    if(clickedCard !== cardOne && !disablDeck){
        clickedCard.classList.add('flip');
        if(!cardOne){
            count++
            step.innerText=count
            console.log(count)
            return cardOne = clickedCard;
        }
        cardTwo = clickedCard;
        disablDeck = true;
        let cardOneImg = cardOne.querySelector('img').src,
        cardTwoImg = cardTwo.querySelector('img').src;
        matchCards(cardOneImg, cardTwoImg);
    }
}
function matchCards(img1, img2){
    if(img1 === img2){
        matchedCard++;
        if(matchedCard === 8){
            clearInterval(time); // Stop the current timer
            sec = 0; // Reset seconds to 0
            timer.innerHTML = '00:00'; // Update the timer display
            seconds(); 
            count=0
            step.innerText = count;
            winner.classList.remove("winneroff")
            setTimeout(()=>{
                return shuffleCard()
            },1000)
  }
        cardOne.removeEventListener("click",flipcard);
        cardTwo.removeEventListener("click",flipcard);
        cardOne = cardTwo = ""
        return disablDeck = false;
    }
    setTimeout(()=>{
        cardOne.classList.add('shake');
        cardTwo.classList.add('shake');
    },400)
    setTimeout(()=>{
        cardOne.classList.remove('shake','flip');
        cardTwo.classList.remove('shake','flip');
        cardOne = cardTwo = "";
        disablDeck = false;
    },1200);
}

function shuffleCard(){
    winner.classList.add("winneroff")
    matchedCard = 0;
    cardOne = cardTwo = "";
    disablDeck = false;
    let arr = [1,2, 3, 4, 5, 6, 7, 8, 1,2, 3, 4, 5, 6, 7, 8];
    arr.sort(() => Math.random() > 0.5 ? 1 : -1);

    cards.forEach((card, index) => {
        card.classList.remove('flip');
        let imgTag = card.querySelector('img');
        imgTag.src = `images/img-${arr[index]}.png`
        card.addEventListener('click',flipcard);
    })
}
shuffleCard();
let sec = 0;
let time;
function seconds() {
    const timer = document.getElementById('timer'); // Corrected: Removed '#' from the ID
    const time = setInterval(() => {
        timer.innerHTML = '00:' + (sec < 10 ? '0' : '') + sec;
        sec++;
    }, 1000);
}

seconds();


newbtn.addEventListener("click", ()=>{
    console.log("clicked");
    winner.classList.add("winneroff")
    shuffleCard();
    count=0
    step.innerText = count;

    clearInterval(time); // Stop the current timer
    sec = 0; // Reset seconds to 0
    timer.innerHTML = '00:00'; // Update the timer display
    seconds(); 
});

cards.forEach(card => {
    card.addEventListener('click',flipcard)
});




















