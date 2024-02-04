let userScore =0;
let compScore =0;
const choices = document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");
const scoreUser = document.querySelector("#user-score");
const scoreComp = document.querySelector("#comp-score");
const genCompChoice =() =>
{
    const options = ["rock", "paper", "scissors"];
    const randIndx = Math.floor(Math.random() * 3);
    return options[randIndx];
}
const drawGame = () => 
{
    console.log("Game was draw.");
}
const showwinner = (userWin,userchoice,compChoice) =>
{
    if(userWin)
    {
        userScore++;
        scoreUser.innerText = userScore;
        console.log("You win!");
        msg.innerText = `You win! Your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else
    {
        compScore++;
        scoreComp.innerText = compScore;
        console.log("You lose!");
        msg.innerText = `You lose!  ${compChoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playGame =(userchoice) => {
console.log("user choice = ", userchoice);
const compChoice = genCompChoice();
console.log("comp choice = ", compChoice);
if(userchoice=== compChoice)
{
    // draw game
    msg.innerText = "Game was draw. Play again!";
    msg.style.backgroundColor = "black";
    drawGame();
}
else 
{
    let userWin = true;
    if(userchoice === "rock")
    {
        userWin =  compChoice === "paper" ? false : true;
    }
    else if (userchoice === "paper")
    {
        userWin =  compChoice === "scissors" ? false: true;
    }
    else{
        userWin =  compChoice === "rock" ? false: true;
    }
    showwinner(userWin,userchoice,compChoice);
}

}
choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userchoice = choice.getAttribute("id");
       
        playGame(userchoice);
    })
})