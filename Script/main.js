// Assignment Code
var generateBtn = document.querySelector("#generate");

// Define a function named genertatePassword
function generatePassword(){
  var passwordLength = prompt ("Enter password legnth (between 8 and 128):");
  passwordLength = parseInt(passwordLength);
  
  //Checks if passwordLength is valid
  if (isNaN(passwordLength)|| passwordLength < 8|| passwordLength > 128) {
    alert("Please enter a valid number between 8 and 128 for password length.");
    return "";
  }

  //Var with confirms
  var lowercase = confirm("Would you like to include lowercase?");
  var uppercase = confirm("Would you like to inclued uppercase?");
  var numericals = confirm("Would you like to include numbericals?");
  var special = confirm("Would you like to include special characters?");

  var characterSet = ("");

  if (lowercase) {
    characterSet += "abcdefghijklmnopqrstuvwxyz";
  }
  if (uppercase) {
    characterSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (numericals) {
    characterSet += "0123456789";
  }
  if (special) {
    characterSet += "!@#$%^&*?";
  }

  // If no characters selected alert prompts to select a valid charcter
  if (characterSet === "") {
    alert("Please select at least one character type.");
    return "";
  }

  //Stores the generated password in empty string
  var password = ""
  
  // Makes the password randomly from selected characters
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

  //set the password as the value of the html element
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
