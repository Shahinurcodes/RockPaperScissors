let user_score= 0;
let comp_score=0;
let drawCount=0;

let allChoices= document.querySelectorAll(".image");
let allMessage= document.querySelector("#msg");
let UserScoring= document.querySelector("#user-score");
let compScoring=document.querySelector("#comp-score");
let reset_button= document.querySelector("#reset-game")

const getCompChoice=()=>{
    const ChoiceArray= ["Rock","Paper","Scissors"];
    const randomIndex= Math.floor(Math.random()*3);
    return ChoiceArray[randomIndex];
}

const drawGame=()=>{
    drawCount++;
    if(drawCount>1){
        allMessage.innerText=`Draw Again ${drawCount} times. Play again.`
    }
    else{
        allMessage.innerText=`Draw Match. Play again!`
    }
    allMessage.style.background="rgb(226, 185, 123)";
}


const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        user_score++;
        UserScoring.innerText=user_score;
        allMessage.innerText=`You win! Your ${userChoice} beats ${compChoice}`;
        allMessage.style.background= "green";
        allMessage.style.color="white"
    }
    else{
        comp_score++;
        compScoring.innerText=comp_score;
       allMessage.innerText=`You lose! ${compChoice} beats your ${userChoice}`; 
       allMessage.style.background="red";
    }
}

const playGame=(userChoice)=>{
    const compChoice=getCompChoice();
    if(userChoice===compChoice){
        drawGame();
    }
    else{
        drawCount=0;
    let userWin=true;

    if(userChoice==="Rock"){
        userWin=compChoice==="Paper"?false:true;
    }
    else if(userChoice==="Paper"){
        userWin=compChoice==="Scissors"?false:true;
    }
    else{
        userWin=compChoice==="Rock"?false:true;
    }
    showWinner(userWin,userChoice,compChoice);
}
}

allChoices.forEach((image) => {
    image.addEventListener("click",()=>{
       const userChoice= image.getAttribute("id");
       playGame(userChoice);
    });
});

reset_button.addEventListener("click",()=>{
    user_score=0;
    comp_score=0;
    drawCount=0;
    UserScoring.innerText=user_score;
    compScoring.innerText=comp_score;
    allMessage.innerText=`Game Start`;
    allMessage.style.background= " rgb(226, 185, 123)";
    allMessage.style.color="rgba(41, 3, 3, 0.671)"

});



