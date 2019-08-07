//Question 1
//Create two variables. One should equal “My name is: “ and the other should equal your name.
var yourName = prompt("What is your name?");
var userName = prompt("My name is ");
// Print the two variables in one print message.
alert("Your name is " + userName);

//Question 2
//Ask the user “What is your balance”. Make sure to save that answer in a variable balance.
// Subtract 10 from that balance. Print "You lost $10. Your new balance is: [THE BALANCE]".
var balance = prompt("What is your balance?");
var newBalance = (parseInt(balance) - 10);
alert("You lost $10. Your new balance is: $" + newBalance);

//Question 3
//Create a variable. Ask the user to “Enter your number grade”.
// Ask the user “Enter your extra credit". Print the grade plus extra credit.
var gradeInt = parseInt(prompt("Enter your number grade."));
var extraCreditInt = parseInt(prompt("Enter your extra credit."));
var totalGradeInt = (gradeInt + extraCreditInt);
alert(totalGradeInt);

//Question 4
//Create a variable called balance and save it after asking the user “What is your balance?”.
// Create a variable called deduction and save it when asking the user “How much do you want to deduct?”
// Print the remaining balance after subtracting the deduction.
var balance = parseInt(prompt("What is your balance?"));
var deduction = parseInt(prompt("How much do you want to deduct?"));
var remainingBal = (balance - deduction);
alert("Your balance is " + remainingBal);