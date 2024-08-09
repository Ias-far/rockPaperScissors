// here we go!
const choices = ['rock', 'paper', 'scissors'];

// Get user input from command line arguments
const userChoice = process.argv[2].toLowerCase();

if (!choices.includes(userChoice)) {
  console.log('Invalid choice! Please choose rock, paper, or scissors.');
  process.exit();
}

// Generate a random choice for the computer
const computerChoice = choices[Math.floor(Math.random() * choices.length)];
//or 
//const computerChoice = choices[Math.floor(Math.random() * 3)];

console.log(`You chose: ${userChoice}`);
console.log(`Computer chose: ${computerChoice}`);

// Determine the winner
if (userChoice === computerChoice) {
  console.log('It\'s a tie!');
} else if (
  (userChoice === 'rock' && computerChoice === 'scissors') ||
  (userChoice === 'paper' && computerChoice === 'rock') ||
  (userChoice === 'scissors' && computerChoice === 'paper')
) {
  console.log('You win!');
} else {
  console.log('You lose!');
}