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


//Prime Time
// Chose an arbitrary number
let n = 9;

// Start testing from n + 1
let current = n + 1;
let found = false;

// Check if current is prime
while (!found) {
  let isPrime = true;

  // Test divisibility from 2 to current - 1
  for (let i = 2; i < current; i++) {
    if (current % i === 0) {
      isPrime = false;
      console.log(`${current} is divisible by ${i}`); // test
      break;
    }
  }

  if (isPrime) {
    console.log(`Next prime number after ${n} is: ${current}`);
    found = true;
  } else {
    current++;
  }
}
