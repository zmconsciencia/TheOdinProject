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

function play(playerSelection, computerSelection)
{
	if (playerSelection === ROCK)
	{
		if (computerSelection === ROCK)
			console.log("Draw");
		else if (computerSelection === PAPER)
			console.log("Loss");
		else if (computerSelection === SCISSORS)
			console.log("Win");
	}
}
console.log(play('ROCK', getRandomChoice()))