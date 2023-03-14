function randBetween(lower,upper){
    return lower + Math.floor(Math.random()*(upper-lower));
}

export const numberOfCard = 10;

export class MemoryGame{

    constructor(hide, reveal, win){
        this.cards = [];
        this.a = -1;
        this.b = -1;
        this.counter = 0;
        for(let i=1;i<=numberOfCard;i++){
            this.cards.push(i);
            this.cards.push(i);
        }
        this.shuffle();
        this.hide = hide;
        this.reveal = reveal;
        this.win = win;
        this.lock = false;
        this.mistake = 0;

        for(let i=0;i<this.cards.length;i++){
            reveal(i , this.cards[i]);
        }
        this.lock = true;
        this.mistake++;
        setTimeout(()=>{
            for(let i = 0;i<this.cards.length;i++){
                hide(i , this.cards[i]);
            }
            this.lock = false;
        },2000);
    }

   

    
    shuffle(){
        for(let i=0;i<2000;i++){
            let k = randBetween(0, this.cards.length);
            let j = randBetween(0, this.cards.length);
            let temp = this.cards[k];
            this.cards[k] = this.cards[j];
            this.cards[j] = temp;
        }
    }

    clicked(i){
        if(this.lock) return;
        if(i<0 || i>=this.cards.length)
            return;
        if(this.cards[i] < 0) return;
        if(this.a == -1){ //we know b == -1
            this.a = i;
            //reveal card i
            this.reveal(i, this.cards[i]);
        }else{
            this.b = i;
            //reveal card i
            this.reveal(i, this.cards[i]);

            //check if two card are the same.
            if(this.cards[this.a]==this.cards[this.b]){//same cards
                this.cards[this.a] *= -1;
                this.cards[this.b] *= -1;
                this.a = -1;
                this.b = -1;
                this.counter++;
                if(this.counter == numberOfCard){
                    //YOU WIN!!!!
                    this.win(this.mistake);
                }
            }else{
                //hide a and hide b
                this.lock = true;
                setTimeout(()=>{
                    this.hide(this.a, this.cards[i]);
                    this.hide(this.b, this.cards[i]);
                    this.a = -1;
                    this.b = -1;
                    this.lock = false;
                }, 2000);
                
            }

            
        }
    }

}
  
  