// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword(){
  var passwordLength = prompt ("Enter password legnth:");
  passwordLength = parseInt(passwordLength);
  
  if (isNaN(passwordLength)|| passwordLength <= 0) {
    alert("Please enter a valid number for password length.");
    return "";
  }

  var lowercase = confirm("Would you like to include lowercase?");
  var uppercase = confirm("Would you like to inclued uppercase?");
  var numericals = confirm("Would you like to include numbericals?");
  var special = confirm("Would you like to include special characters?");

  var characterSet = ("");

  if (lowercase) {
    characterSet += "abcdefghijklmnopqrstuvwxyz";
    console.log(lowercase)
  }
  if (uppercase) {
    characterSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (numericals) {
    characterSet += "0123456789";
  }
  if (special) {
    characterSet += "!@#$%^&*()-_=+[]{}|;:'\",.<>?/";
  }

  if (characterSet === "") {
    alert("Please select at least one character type.");
    return "";
  }
  
  var password = ""
  for(var i = 0; i < passwordLength; i++) {
    var random = Math.floor(Math.random() * characterSet.length);
    password += characterSet.charAt(random)
  }

  return password;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
