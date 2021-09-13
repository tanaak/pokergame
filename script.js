const app = function(){
    const game = {};
    const suits = ["spades","hearts","clubs","diams"];
    const ranks = ["A",2,3,4,5,6,7,8,9,10,"J","Q","K"];
    
    
    
    function init(){
        console.log('init ready');
        buildGameboard();
        turnOff(game.btnChange);
        turnOff(game.btnStand);
        buildDeck();
        addClicker();
        
        
    }
    
    
    function addClicker(){
      game.btnDeal.addEventListener('click',deal);
      game.btnStand.addEventListener('click',playerStand);
      game.btnChange.addEventListener('click',changeCard);
      //game.betButton.addEventListener('click', setBet);
      //game.inputBet.addEventListener('change', updateCash);
  }
    
    
    
    
    function deal(){
        game.dealerHand = [];
        game.playerHand = [];
        game.start = true;
        turnOff(game.btnDeal); 
        game.playerCards.innerHTML = "";
        game.dealerCards.innerHTML = "";
        takeCard(game.dealerHand,game.dealerCards,false);
        takeCard(game.dealerHand,game.dealerCards,false);
        takeCard(game.dealerHand,game.dealerCards,false);
        takeCard(game.dealerHand,game.dealerCards,false);
        takeCard(game.dealerHand,game.dealerCards,false);
        
        takeCard(game.playerHand,game.playerCards,false);
        takeCard(game.playerHand,game.playerCards,false);
        takeCard(game.playerHand,game.playerCards,false);
        takeCard(game.playerHand,game.playerCards,false);
        takeCard(game.playerHand,game.playerCards,false);
        
        Playeronepair(game.playerHand,game.playerCards,false);
        
    }
    
    
    function Playeronepair(hand,el,h){
        if(hand == hand){
           game.status.innerHTML = "player onepair";
           }
        
    }
    
    
    function takeCard(hand,ele,h){
        let temp = game.deck.shift();
        //console.log(temp)
        hand.push(temp)
        //console.log(game);
        showCard(temp,ele);
    }
    
    function showCard(card,el){
        if  (card != undefined){
            
        el.style.backgroundColor = "white";
        let div = document.createElement("div");
        div.classList.add('card');
        if(card.suit === "hearts" || card.suit === "diams"){
            div.classList.add('red');
        }
            
        let span1 = document.createElement('div');
        span1.innerHTML = card.rank + "&" + card.suit + ";";
        span1.classList.add('tiny');
        div.appendChild(span1);
            
        let span2 = document.createElement('div');
        span2.innerHTML = card.rank;
        span2.classList.add('big');
        div.appendChild(span2);
            
        let span3 = document.createElement('div');
        span3.innerHTML = "&" + card.suit + ";";
        span3.classList.add('big');
        div.appendChild(span3);
            
        el.appendChild(div);       
            
        }
    }
  
    
    
    function turnOff(btn){
        btn.disable = true;
        btn.style.backgroundColor = "#ddd";
    }
    
    function turnOn(btn){
        btn.disable = false;
        btn.style.backgroundColor = "#000";
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    function changeCard(){
        
    }
        
    
    
    function playerStand(){
        
    }
        
    
    
    
    
    function buildDeck(){
        game.deck = [];
         for(let i = 0;i<suits.length;i++){
             for(let j = 0;j<ranks.length;j++){
                 
                 let card = {};
                 let tempValue
                 
                 if(ranks[j] == "K"){
                     tempValue = 13
                 }else if(ranks[j] == "Q"){
                     tempValue = 12
                 }else if(ranks[j] == "J"){
                     tempValue = 11
                 }else if(ranks[j] == "A"){
                     tempValue = 14
                 }else{
                     tempValue = ranks[j]
                 }
                 
                 card.suit = suits[i];
                 card.rank = ranks[j];
                 card.value = tempValue;
                 //console.log(suits[i],ranks[j],tempValue)
                 game.deck.push(card); 
         } 
        }
        shuffle(game.deck);
        console.log(game.deck);
    }
    
    function shuffle(cards){
      cards.sort(function(){
          return .5 - Math.random();
      })
      return cards;
  }
    
    

    
    
    
    function buildGameboard(){
        game.main = document.querySelector('#game');
        game.winner = document.createElement('div');
        game.winner.textContent = "winner";
        game.winner.style.fontSize = "4em"
        game.main.append(game.winner);
        
        game.table = document.createElement('div');
        game.dealer = document.createElement('div');
        game.dealerCards = document.createElement('div');
        game.dealerCards.textContent = "DEALER CARD";
        game.deaelerScore = document.createElement('div');
        game.deaelerScore.textContent = "-";
        game.deaelerScore.classList.add('score');
        game.dealer.append(game.deaelerScore);
        game.table.append(game.dealer);
        game.table.append(game.dealerCards);
        
        game.player = document.createElement('div');
        game.playerCards = document.createElement('div');
        game.playerCards.textContent = "PLAYER CARD";
        game.playerScore = document.createElement('div');
        game.playerScore.textContent = "-";
        game.playerScore.classList.add('score');
        game.player.append(game.playerScore);
        game.table.append(game.player);
        game.table.append(game.playerCards);
        
        game.dashboard = document.createElement('div');
        game.status = document.createElement('div');
        game.status.classList.add('message');
        game.status.textContent = "Message for player";
        game.dashboard.append(game.status);
        
        game.btnDeal = document.createElement('button');
        game.btnDeal.textContent = "DEAL";
        game.btnDeal.classList.add('btn');
        game.dashboard.append(game.btnDeal);
        
        game.btnChange = document.createElement('button');
        game.btnChange.textContent = "CHANGE";
        game.btnChange.classList.add('btn');
        game.dashboard.append(game.btnChange);
        
        game.btnStand = document.createElement('button');
        game.btnStand.textContent = "STAND";
        game.btnStand.classList.add('btn');
        game.dashboard.append(game.btnStand);
        
        game.playerCash = document.createElement('div');
        game.playerCash.classList.add('message');
        game.playerCash.textContent = "Player Cash $100";
        game.dashboard.append(game.playerCash);
        
        game.inputBet = document.createElement('input');
        game.inputBet.setAttribute('type','number');
        game.inputBet.style.width = "4em";
        game.inputBet.style.fontSize = "1.4em";
        game.inputBet.style.marginTop = "1em";
        game.inputBet.value = 0;
        game.dashboard.append(game.inputBet);
        
        game.betButton = document.createElement('button');
        game.betButton.textContent = "Bet Amount";
        game.betButton.classList.add('btn');
        game.dashboard.append(game.betButton);
        
        game.main.append(game.table);
        game.table.append(game.dashboard);
    }
    
    
    return {
        init:init
    }
}();