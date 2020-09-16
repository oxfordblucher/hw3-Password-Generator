// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var submitted = false;

  while (!submitted) {
  var pwdLngth = Number(window.prompt("# of characters in your new password (pick a # between 8 and 128)"));
  if(isNaN(pwdLngth) || pwdLngth <= 8 || pwdLngth >= 128) {
    alert("Please pick a # between 8 and 128.");
    submitted = false;
  }else{
    submitted = true;
    var pwdUpper = confirm("Would you like uppercase letters?");
    var pwdLower = confirm("Would you like lowercase letters?");
    var pwdNum = confirm("Would you like numbers?");
    var pwdSpec = confirm("Would you like special characters?");
  }}};
