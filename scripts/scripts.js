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


function game(){
    let totalWins = 0;
    let totalLoses = 0;
    console.log("Play a 5 round game");
    console.log("First to 5 wins")
    let i=1;
    while(i)
    {

        let playerSelection = prompt("Give a value - Rock or Paper or Scissors");

        let computerSelection = computerPlay();

        console.log(`The computer selected ${computerSelection}`);

        console.log(playRound(playerSelection, computerSelection));

        
        if(playRound(playerSelection, computerSelection).search("Tie!") != -1){
            console.log("That was a tie, try again")
        }
        else if (playRound(playerSelection, computerSelection).search("Win!") != -1)
        {
            totalWins = totalWins + 1;
        }
        else if (playRound(playerSelection, computerSelection).search("Lose!") != -1)
        {
            totalLoses = totalLoses + 1;
        }

        console.log(`Total Wins: ${totalWins}`);
        console.log(`Total Loses: ${totalLoses}`);
        if (totalWins == 5 || totalLoses == 5)
        {
            break;
        }

    }

    if(totalWins > totalLoses)
    {
        console.log("Great!, you won the 5 round game");
    }

    else if(totalWins < totalLoses)
    {
        console.log("Sad!, you lost the 5 round game");
    }

}