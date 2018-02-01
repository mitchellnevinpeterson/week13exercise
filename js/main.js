// Creating an array
var randomArray = ["This is an array.", "This is week 13.", "There is only about 4 classes left!", "I hope I get a job that fits me!", "Who knows what could happen?"]
// New empty array
var lowerCaseArray = []
// Looping through the array to change all the letters to lowercase
for(var i = 0; i < randomArray.length; i++) {
	var lowerCaseStrings = randomArray[i].toLowerCase()
	console.log(lowerCaseStrings)
	lowerCaseArray.push(lowerCaseStrings)
}
console.log(lowerCaseArray)
// grabbing the first and last letter of the string in the full array
for(var i = 0; i < lowerCaseArray.length; i++) {
	var firstLetter = lowerCaseArray[i][0]
	console.log(firstLetter)
	var lastLetter = lowerCaseArray[i][lowerCaseArray[i].length - 1]
	console.log(lastLetter)
}
// creating a varibale to store my name
var myName = "Mitch"
// splitting my name into each letter
var lettersNameArray = myName.split("")
// looping through the array of letters in my name and logging it to the console
for(var i = 0; i < lettersNameArray.length; i++) {
	// since each string in the array of letters is only one letter long, I don't have to target the index of the string aka [0]
	console.log(lettersNameArray[i])
}
// joining the separated letters of my name and joining them back together without a comma separator
var joinedName = lettersNameArray.join("")
console.log(joinedName)
// Replacing all the letters "i"' with the letter "y"
var replaceI = joinedName.replace("i", "y")
console.log(replaceI)
// creating a function to grab the user input and testing it against a regular expression
function validateEmail() {
	var emailInput = document.getElementById("emailInput").value
	var regEx = /^[a-z0-9._%-]+@[a-z0-9.-]+\.[a-z]{2,5}$/
	console.log(regEx.test(emailInput))
}
document.getElementById("submitButton").addEventListener("click", validateEmail, false)