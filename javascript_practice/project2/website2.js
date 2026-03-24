const minNum = 1;
const maxNum= 100;
const guessedNum = Math.floor(Math.random() * (maxNum - minNum +1)) + minNum;

let attempts = 0;
let running = true;
let guess;

while(running) {
    guess = window.prompt(`Guess a number between ${minNum} and ${maxNum}`);
    
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert(`Enter a valid input`);
    } else if(guess < minNum || guess > maxNum) {
        window.alert(`Enter a valid input`);
    } else {
        attempts++;
        if(guess == guessedNum) {
            window.alert(`You have won!\nNumber of your attempts: ${attempts}`);
            running = false;
        } else if (guess >= minNum & guess < guessedNum) {
            window.alert(`Value is too small`);
        } else {
            window.alert(`Value is too big`);
        }
    }

    console.log(typeof guess, guess);
}