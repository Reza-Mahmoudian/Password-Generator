// variabales to confirm the prompts about password criteria
var pslength;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase; 
character = ["!", "$","#","@","&","%", "+","=","-", "*","."];
number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var choices;
var uppercase = function (a) {
    return a.toUpperCase();
};
upperalphabet = alphabet.map(uppercase);

var button = document.getElementById('generate');

button.onclick = function () {
    var ps = generatePassword();
    document.getElementById("password").placeholder = ps;
};

// function  for generating new password
function generatePassword() {
    
    pslength = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
    
    if (!pslength) {
        alert("This needs a value");
    } else if (pslength < 8 || pslength > 128) {
        alert("You must choose between 8 and 128");
        return;

    } else {
    
        confirmNumber = confirm("Will this contain numbers ?");
        confirmCharacter = confirm("Will this contain special characters ?");
        confirmUppercase = confirm("Will this contain Uppercase lettes ?");
        confirmLowercase = confirm("Will this contain Lowercase letters ?");
    };

    
    if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        choices = alert("You must choose a criteria!");

    }
    
    else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

        choices = character.concat(number, alphabet, upperalphabet);
    }
    
    else if (confirmCharacter && confirmNumber && confirmUppercase) {
        choices = character.concat(number, upperalphabet);
    }
    else if (confirmCharacter && confirmNumber && confirmLowercase) {
        choices = character.concat(number, alphabet);
    }
    else if (confirmCharacter && confirmLowercase && confirmUppercase) {
        choices = character.concat(alphabet, upperalphabet);
    }
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
        choices = number.concat(alphabet, upperalphabet);
    }
    
    else if (confirmCharacter && confirmNumber) {
        choices = character.concat(number);

    } else if (confirmCharacter && confirmLowercase) {
        choices = character.concat(alphabet);

    } else if (confirmCharacter && confirmUppercase) {
        choices = character.concat(upperalphabet);
    }
    else if (confirmLowercase && confirmNumber) {
        choices = alphabet.concat(number);

    } else if (confirmLowercase && confirmUppercase) {
        choices = alphabet.concat(upperalphabet);

    } else if (confirmNumber && confirmUppercase) {
        choices = number.concat(upperalphabet);
    }
    else if (confirmCharacter) {
        choices = character;
    }
    else if (confirmNumber) {
        choices = number;
    }
    else if (confirmLowercase) {
        choices = alphabet;
    }
    else if (confirmUppercase) {
        choices = upperalphabet;
    };

    var passarray = [];

    for (var i = 0; i < pslength; i++) {
        var fChoices = choices[Math.floor(Math.random() * choices.length)];
        passarray.push(fChoices);
    }
    var ps = passarray.join("");
    result(ps);
}

// showing the result
function result(ps) {
    document.getElementById("password").textContent = ps;

};
