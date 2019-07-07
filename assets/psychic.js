// VARIABLES 
var win = 0;
var lose = 0;
var remain = 15;
var usedletters = [];
var compplay;

// HTML REFERENCES
var winElement = document.getElementById('win');
var lossElement = document.getElementById('loss');
var remainElement = document.getElementById('remain');
var guessElement = document.getElementById('guess');

// USER PRESSING KEY 
var direction = confirm("Guess which letter I am thinking of! Press the letter key to guess. You only have 15 guesses.");

// generate this function for computer anwer
function companswer() {
    var computer = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    return compplay = computer[Math.floor(Math.random() * computer.length)];
    
}

// restricting to letter
companswer()
document.onkeypress = function (play) {
    var guess = play.key;
    var press = play.key;

    // Reset Guesses

    var guessreset = function () {
        remain = 15;
        document.getElementById('guess').innerHTML = "";
        usedletters = [];
    }

    // Guess history

    if (usedletters.indexOf(guess) >= 0) {
        return;
        } else {
        usedletters.push(guess);
        document.getElementById('guess').innerHTML = usedletters;
    }

    // guesses and wins or miss

    if (guess === compplay) {
        win++;
        alert("You Win! One point added for you! :)");
        guessreset();
        companswer();
    }  else if (remain == 0) {
        lose++;
        guessreset();
        alert("Sorry, try again next time!")
        companswer();

    } else {
        remain--;
    }


    remainElement.textContent = remain;
    lossElement.textContent = lose;
    winElement.textContent = win;

}
