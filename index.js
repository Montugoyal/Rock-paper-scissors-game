 let userscore=0;
 let comscore=0;
 const choices=document.querySelectorAll(".choice");
 const msg=document.querySelector("#msg");
 const userscores=document.querySelector("#userscore");
 const comscores=document.querySelector("#comscore");

 const gencomChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx= Math.floor(Math.random()*3);
    return options[randIdx];
 };
   
    const drawGame =()=>{
    console.log("game was draw");
    msg.innerText="Game was draw play again!"
    msg.style.backgroundColor="#081b31"
 }

 const showWinner=(userwin,comChoice,userChoice)=>{
    if(userwin){
        userscore++;
        userscores.innerText=userscore;
        console.log("you win!");
        msg.innerText=`You Win! Your ${userChoice} beats ${comChoice} `;
        msg.style.backgroundColor="green"
    }
    else{
        comscore++;
        comscores.innerText=comscore;
        console.log("you lose!");  
        msg.innerText= `You Lose! ${comChoice} beats  Your ${userChoice} `;
        msg.style.backgroundColor="red"
    }
 }


 const playGame=(userChoice)=>{
    console.log("userchoice=",userChoice);
    const comChoice = gencomChoice();
    console.log("comchoice=",comChoice);
    console.log(userChoice === comChoice, userChoice === comChoice);
    if(userChoice === comChoice){
      drawGame();
     }
     else{
        let userwin=true;
    
        if(userChoice === "rock"){
            //paper,scissors
            userwin=comChoice==="paper" ? false : true;
        }
        else if(userChoice==="paper"){
            //rock,scissors
            userwin=comChoice==="scissors" ? false : true;
        }
        else {
            //rock,paper
            userwin=comChoice==="rock" ? false : true;
        }
        showWinner(userwin, comChoice, userChoice);
     }
 };



 choices.forEach((choice)=> {
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
    
 });
