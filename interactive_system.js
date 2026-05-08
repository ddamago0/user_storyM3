// ==========================================
// Interactive Message System
// This program asks for the user's name
// and age, validates the information,
// and shows a custom message.
// ==========================================


// Ask the user for their name
const userName = prompt("Enter your name:");


// Ask the user for their age
const userAge = prompt("Enter your age:");


// Convert the age to a number
const ageNumber = Number(userAge);


// Validate if age is a valid number
if (isNaN(ageNumber)) {

    console.error("Error: Please enter a valid age in numbers.");

} else {

    // Check if the user is under 18
    if (ageNumber < 18) {

        alert(`${userName}, you are a minor. Keep learning and enjoying coding!`);

    } else {

        alert(`${userName}, you are an adult. Get ready for great opportunities in programming!`);

    }

}