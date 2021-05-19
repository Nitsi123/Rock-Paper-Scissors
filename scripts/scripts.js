function computerPlay()
{
    let randomValue = Math.floor(Math.random()*3);
    if (randomValue == 0)
    {
        return "rock";
    }
    else if (randomValue == 1)
    {
        return "paper";
    }
    else
    {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection)
{
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == "rock")
    {
        if (computerSelection == "rock")
        {
            return "It's a Tie! Rock is same as Rock";
        }
        else if (computerSelection == "paper")
        {
            return "You Lose! Paper beats Rock";
        }
        else
        {
            return "You Win! Rock beats Scissors";
        }
    }

    else if (playerSelection == "paper")
    {
        if (computerSelection == "rock")
        {
            return "You Win! Paper beats Rock";
        }
        else if (computerSelection == "paper")
        {
            return "It's a Tie! Paper is same as Paper";
        }
        else
        {
            return "You Lose! Scissors beats Paper";
        }
    }

    else if (playerSelection == "scissors")
    {
        if (computerSelection == "rock")
        {
            return "You Lose! Rock beats Scissors";
        }
        else if (computerSelection == "paper")
        {
            return "You Win! Scissors beats Paper";
        }
        else
        {
            return "It's a Tie! Scissors is same as Scissors";
        }
    }

    else{
        return 'Incorrect input, give "Rock or "Paper" or "Scissors"'
    }
}


function game(result){
   
    // console.log("Play a 5 round game");
    // console.log("First to 5 wins")
    
    if(result.search("Tie!") != -1){
        console.log("That was a tie, try again")
    }
    else if (result.search("Win!") != -1)
    {
        totalWins = totalWins + 1;
    }
    else if (result.search("Lose!") != -1)
    {
        totalLoses = totalLoses + 1;
    }


    // if (totalWins == 5 || totalLoses == 5)
    // {
    //     break;
    // }


    // if(totalWins > totalLoses)
    // {
    //     console.log("Great!, you won the 5 round game");
    // }

    // else if(totalWins < totalLoses)
    // {
    //     console.log("Sad!, you lost the 5 round game");
    // }

}

function removeChildNodes(parentNode){
    while(parentNode.firstChild)
    {
        parentNode.removeChild(parentNode.firstChild);
    }
}

let totalWins =0;
let totalLoses =0;

const buttonList = Array.from(document.querySelectorAll(".button"))
buttonList.forEach(button => { button.addEventListener("click", function(e){

    const resultDiv = document.querySelector(".game-result");
    removeChildNodes(resultDiv);

    const playerSelection = button.textContent;
    console.log(playerSelection);
    const computerSelection = computerPlay();
    result = playRound(playerSelection, computerSelection);
    console.log(result);

    const resultPara = document.createElement("p");

    const computerSelected = document.createElement("p");
    computerSelected.textContent = "The computer selected " + computerSelection;
    resultPara.textContent = result;
    
    resultDiv.appendChild(computerSelected);
    resultDiv.appendChild(resultPara);

    game(result, totalWins, totalLoses);

    const winPara = document.createElement("p");
    const losePara = document.createElement("p");

    winPara.textContent = "Total Wins: " + totalWins;
    losePara.textContent = "Total Loses: " + totalLoses;

    resultDiv.appendChild(winPara);
    resultDiv.appendChild(losePara);

    if (totalWins == 5 || totalLoses == 5)
    {
        removeChildNodes(resultDiv)
        let finalResult = document.createElement("p");

        if(totalWins > totalLoses)
        {
            finalResult.textContent = "Great!, you won the 5 round game";
        }

    else if(totalWins < totalLoses)
        {
            finalResult.textContent = "Sad!, you lost the 5 round game";
        }

        resultDiv.appendChild(finalResult);
        totalWins =0;
        totalLoses =0;
    }


});
    
});