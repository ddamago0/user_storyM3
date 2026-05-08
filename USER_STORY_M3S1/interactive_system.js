// ==========================================
// Interactive Message System
// This program asks for the user's name
// and age and shows a message.
// ==========================================

// Ask for the user's name
const userName = prompt('Enter your name:');

// Validate the name
if (userName === '' || userName === null) {
  console.error('Error: Name is required.');
} else {
  // Ask for the user's age
  const userAge = prompt('Enter your age:');

  // Convert age to number
  const ageNumber = Number(userAge);

  // Validate the age
  if (userAge === '' || userAge === null) {
    console.error('Error: Age is required.');
  } else if (isNaN(ageNumber)) {
    console.error('Error: Enter a valid number.');
  } else if (ageNumber < 0) {
    console.error('Error: Age cannot be negative.');
  } else {
    // Check the age
    if (ageNumber < 18) {
      alert(`${userName}, you are a minor. Keep learning coding!`);
    } else {
      alert(`${userName}, you are an adult. Great future in programming!`);
    }
  }
}
