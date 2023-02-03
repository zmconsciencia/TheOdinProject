let ROCK = 0;
let PAPER = 1;
let SCISSORS = 2;
let answer = parseInt(prompt("Enter a number(0 -> ROCK; 1 -> PAPER; 2 -> SCISSORS): "))
let playerScore = 0;
let computerScore =0;

function getRandomChoice()
{
	let randomNumber = Math.floor(Math.random() * 3)
	switch (randomNumber) {
	  case 0:
		return 'ROCK'
	  case 1:
		return 'PAPER'
	  case 2:
		return 'SCISSORS'
	}
}

function turn(playerSelection)
{
	if (playerSelection === 0)
		return("ROCK");
	else if (playerSelection === 1)
		return ("PAPER");
	else if (playerSelection === 2)
		return ("SCISSORS")
}

function play(playerSelection, computerSelection)
{
	console.log(turn(playerSelection) + ' vs ' + computerSelection )
	if (playerSelection === ROCK)
	{
		if (computerSelection === 'PAPER')
			return ("Loss")
		else if (computerSelection === 'ROCK')
			return ("Draw")
		else if (computerSelection === 'SCISSORS')
			return ("Win")
	}
	if (playerSelection === PAPER)
	{
		if (computerSelection === 'PAPER')
			return ("Draw")
		else if (computerSelection === 'ROCK')
			return ("Win")
		else if (computerSelection === 'SCISSORS')
			return ("Loss")
	}
	if (playerSelection === SCISSORS)
	{
		if (computerSelection === 'PAPER')
			return ("Win")
		else if (computerSelection === 'ROCK')
			return ("Loss")
		else if (computerSelection === 'SCISSORS')
			return ("Draw")
	}
}



function game()
{
	let res = play(answer, getRandomChoice())
	if (res == 'Loss')
		computerScore++;
	else if (res == 'Win')
		playerScore++;
	return (computerScore + ' vs ' + playerScore)
}
console.log(play(answer, getRandomChoice()))
console.log(game())