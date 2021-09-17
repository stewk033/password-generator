// Assignment code here

// Function to determine length of password
function getLength() {

  var entry = "";
  
  entry = prompt("How long will your password be?");
  entry = parseInt(entry);

  if (entry >= 8 && entry <= 128) {
      return entry;

  } else {
      window.alert("Try again. Please enter a number between 8 and 128");
      return getLength();
  }
}

// User makes choices
function gatherChoices() {

  var answers = {
      lowercase:  confirm("Would you like to use lowercase letters?"),
      uppercase:  confirm("How about uppercase letters?"),
      numbers:    confirm("Numbers?"),
      specialChar:confirm("Maybe some special characters?")
  };

  if (answers.lowercase || answers.uppercase || answers.numbers || answers.specialChar) {
      return answers;

  } else {
      window.alert("You shall not pass! Please make at least one character selection.");
      return gatherChoices();
  }
}

// Password parameters defined
function generatePassword() {

  var length = getLength();
  var answers = gatherChoices();
  var pass = "";

  var characters = {
      uppercase:   ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
      lowercase:   ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
      numbers:     ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
      specialChar: ["!", "@", "#", "$", "%", "^", "&", "*", "?", "+", "-", "="],
  };

  var passwordChars = [];

  if (answers.lowercase) {
      passwordChars = passwordChars.concat(characters.lowercase);
  }
  if (answers.uppercase) {
      passwordChars = passwordChars.concat(characters.uppercase);
  }
  if (answers.numbers) {
      passwordChars = passwordChars.concat(characters.numbers);
  }
  if (answers.specialChar) {
      passwordChars = passwordChars.concat(characters.specialChar);
  }

  for (i = 1; i <= length; i++) {

      var char = Math.floor(Math.random() * passwordChars.length + 1);
      pass += passwordChars[char];
  }

  console.log(pass);

  return pass;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
