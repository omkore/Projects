
let computerMove=""

function playComputer(){
    computerMove = Math.random()
    if(computerMove <0.3){
        computerMove="Rock"
    }else if(computerMove<0.6){
        computerMove="Paper"
    }else{
        computerMove="Scissor"
    }
return computerMove
}

function playedPaper(){
   let  move =playComputer()
    if(move=="Paper"){
        alert(`You choose Paper and Computer choosen ${move}, so Game is tied`)
    }else if(move=="Rock"){
        alert(`You choose Paper and Computer choosen ${move}, so you wins `)

    }else{
        alert(`You choose Paper and Computer choosen ${move}, so Computer Wins`)
    }
}

function playedRock(){
    let  move =playComputer()
     if(move=="Rock"){
         alert(`You choose Rock and Computer choosen ${move}, so Game is Tied`)
     }else if(move=="Paper"){
         alert(`You choose Rock and Computer choosen ${move}, so Computer Wins`)
 
     }else{
         alert(`You choose Rock and Computer choosen ${move}, so You Wins`)
     }
 }

 function playedScissor(){
    let  move =playComputer()
     if(move=="Rock"){
         alert(`You choose Scissor and Computer choosen ${move}, so Computer wins`)
     }else if(move=="Paper"){
         alert(`You choose Scissor and Computer choosen ${move}, so you Wins`)
 
     }else{
         alert(`You choose Scissor and Computer choosen ${move}, so game is tied`)
     }
 }


