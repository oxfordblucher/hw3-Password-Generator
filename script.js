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

// Creating arrays for the random generators to pull from.
var pwdLngth = "";
var numerals = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function generatePassword() {
  var pwd = "";
  var charChc = [];

  var submitted = false;
// While loop to ensure user is reprompted if they don't pick the right # of characters.
  while (!submitted) {
  var pwdLngth = Number(window.prompt("# of characters in your new password (pick a # between 8 and 128)"));
  if(isNaN(pwdLngth) || pwdLngth < 8 || pwdLngth > 128) {
    alert("Please pick a # between 8 and 128.");
    submitted = false;
  }else{
    submitted = true;
    var pwdUpper = confirm("Would you like uppercase letters?");
    var pwdLower = confirm("Would you like lowercase letters?");
    var pwdNum = confirm("Would you like numbers?");
    var pwdSpec = confirm("Would you like special characters?");
}}
// While loop to ensure user confirms at least 1 of the char classes.
  while (!pwdUpper && !pwdLower && !pwdNum && !pwdSpec) {
    alert("You must pick at least one character class.")
    var pwdUpper = confirm("Would you like uppercase letters?");
    var pwdLower = confirm("Would you like lowercase letters?");
    var pwdNum = confirm("Would you like numbers?");
    var pwdSpec = confirm("Would you like special characters?");
  }
  if(pwdUpper) {
    charChc = charChc.concat(upperCase);
  }
  if(pwdLower) {
    charChc = charChc.concat(lowerCase);
  }
  if(pwdNum) {
    charChc = charChc.concat(numerals);
  }
  if(pwdSpec) {
    charChc = charChc.concat(specChar);
  }

  for (let i = 0; i < pwdLngth; i++) {
    pwd = pwd + charChc[Math.floor(Math.random()*charChc.length)];
  }
  return pwd;
}
