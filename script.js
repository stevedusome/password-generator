// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numberChars = "1234567890"
var specialChars = `#$%&'()*+,-./:;<=>?`

function getRandomInt(max) {
  return Math.floor(Math.random() * max + 1);
}



// Write password to the #password input
function writePassword() {

  generatePassword = function () {

    passwordLength = window.prompt("Please choose a password length. Password must be at least 8 characters and no more than 128 characters.");
    passwordLength = parseInt(passwordLength)
     
    while ( isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128)
    {
      passwordLength = window.prompt("Sorry! Password must be at least 8 characters and no more than 128 characters.");
      passwordLength = parseInt(passwordLength)
    }
    
    useLowers = false;
    useUppers = false;
    useNumbers = false;
    useSpecials = false;

    chooseTypes = function () {
    useLowers = window.confirm("Would you like to use lowercase letters?");
    useUppers = window.confirm("Would you like to use uppercase letters?");
    useNumbers = window.confirm("Would you like to use numbers?");
    useSpecials = window.confirm("Would you like to use special characters?");
    }

window.alert("Please choose a type of character. If none is selected, dialogue will repeat");

    while (useLowers === false && useUppers === false && useNumbers === false && useSpecials === false){
      chooseTypes();
    }

    let allowedChars = ``
    if (useLowers === true){
      allowedChars += lowerCase;
    };
    if (useUppers === true){
      allowedChars += upperCase;
    };
    if (useNumbers === true){
      allowedChars += numberChars;
    };
    if (useSpecials === true){
      allowedChars += specialChars;
    };

    let currentPassword = ``;
    
    for (let i = 0; i < passwordLength; i++) {
    
      let pickedCharacterInt = getRandomInt(allowedChars.length);
      let pickedCharacter = allowedChars.charAt(pickedCharacterInt);
      currentPassword += pickedCharacter;

    }

    return currentPassword;

  
  };

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
