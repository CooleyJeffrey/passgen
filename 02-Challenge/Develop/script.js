// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword(){
  var passwordLength = prompt ("Enter password legnth:");
  passwordLength = parseInt(passwordLength);
  
  if (isNaN(passwordLength)|| passwordLength <= 0) {
    alert("Please enter a valid number for password length.");
    return "";
  }

  if (confirm("Lowercase?")) {
    var lowercase = true;
    console.log(lowercase);
  }
  
  if (confirm("Uppercase?")) {
    var uppercase = true;
    console.log(uppercase);
  }
  
  if (confirm("Numericals?")){
    var numericals = true;
    console.log(numericals)
  }

  if (confirm("Special Characters")){
    var special = true;
    console.log(special)
  }





}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
