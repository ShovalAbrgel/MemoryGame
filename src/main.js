import './style.css'
import { MemoryGame, numberOfCard } from './memoryGame';

let app = document.getElementById('app');

let cards = [];
for(let i=0;i<numberOfCard*2;i++){
  let imgCard = document.createElement('img');
  imgCard.className = 'card';
  imgCard.src = 'images/back.jpg';
  imgCard.i = i;
  imgCard.onclick = (event)=>{
    let i = event.target.i;
    memoryGame.clicked(i);
  };
  app.appendChild(imgCard);
  cards.push(imgCard);
}


let memoryGame = new MemoryGame((i, card)=>{
  cards[i].src = 'images/back.jpg';
}, (i, card)=>{
  let fileName = "img";
  if(card != 10){
    fileName += "0";
  }
  fileName += card + ".jpg";
  cards[i].src = 'images/'+fileName;
}, (mistake)=>{
  alert("yes!!! you win !! mistakes :" +mistake);
});



/*
function removeAllChildNodes(node){
  while(node.firstChild)
    node.removeChild(node.firstChild);
}
*/




