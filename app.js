let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const gameOptions=["rock","paper","scissors"];
   const randomIdx= Math.floor(Math.random()*3);
   return gameOptions[randomIdx]; 
};
const drawGame=()=>{
    msg.innerText="Game was draw.Play again.";
    msg.style.backgroundColor="rgb(10, 4, 51)";
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin===true){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Win!! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;

        msg.innerText=`U lose!!${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};
const playGame=(userChoice)=>{ 
    const compChoice=genCompChoice();
    if(userChoice === compChoice){
        //draw game
        drawGame();
    }
else{
    let userWin=true;
    if(userChoice==="rock"){
        // comp choice will either be paper or scissor
        userWin=compChoice==="paper"?false:true;
    }
    else if(userChoice==="paper"){
        // comp choice will either be rock or scissor
       userWin= compChoice==="scissors"?false:true;
    }
    else{
        //comp choice will either be rock or paper
        userWin=compChoice==="rock"?false:true;
    }
    showWinner(userWin,userChoice,compChoice);
}
};
choices.forEach((choice)=>{
   choice.addEventListener("click",()=>{
    const userChoice =choice.getAttribute("id");
     playGame(userChoice);
     
   });
   
    });
