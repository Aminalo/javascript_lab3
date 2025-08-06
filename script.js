//PARTIE 1 : FIZZ BUZZ

// Loop from 1 to 100
for (let i = 1; i <= 100; i++) {
  // First test to check if divisible by both 3 and 5
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("Fizz Buzz");
  } 
  // Then check if divisible by 3 only
  else if (i % 3 === 0) {
    console.log("Fizz");
  } 
  // Then check if divisible by 5 only
  else if (i % 5 === 0) {
    console.log("Buzz");
  } 
  // If not divisible by either
  else {
    console.log(i);
  }
}


//
