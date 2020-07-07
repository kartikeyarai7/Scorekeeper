let p1 = document.querySelector(".p1");
let p2 = document.querySelector(".p2");
let score = document.querySelector(".score");
let w1 = document.querySelector(".w1");
let w2 = document.querySelector(".w2");
let reset = document.querySelector(".res");
let numInput = document.querySelector("input");
let p1Score = p1.textContent;
let p2Score = p2.textContent;
let gameOver = false;
let winningScore = 3;

if(!gameOver){
    w1.addEventListener("click",() =>{
        if(p1Score < winningScore){
            p1Score++;
            p1.textContent = p1Score;
        } 
        else if(p1Score == winningScore){
            p1.style.color = "green";
        } 
        else{
            gameOver = true;
        }       
    });
}

if(!gameOver){
    w2.addEventListener("click",() =>{
        if(p2Score < winningScore){
            p2Score++;
            p2.textContent = p2Score;
        } 
        else if(p2Score == winningScore){
            p2.style.color = "green";
        }
        else{
            gameOver = true;
        }       
    });
}

reset.addEventListener("click",function reset(){
    p1Score = 0;
    p2Score = 0;
    p1.textContent = p1Score;
    p2.textContent = 0;
    p1.style.color = "white";
    p2.style.color = "white";
    gameOver = false;
});

numInput.addEventListener("change",()=>{
    score.textContent = numInput.value;
    winningScore = numInput.value;
});

// function reset(){
//     p1Score = 0;
//     p2Score = 0;
//     p1.textContent = 0;
//     p2.textContent = 0;
//     gameOver = false;
// }