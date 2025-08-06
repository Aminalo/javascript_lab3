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


//Part2: Prime Time
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


//Part 3: Feeling loopy

// Exemple de chaîne CSV
let csvData = "ID, Name, Occupation, Age\n42, Bruce, Knight, 41\n57, Bob, Fry Cook, 19\n63, Blaine, Quiz Master, 58\n98, Bill, Doctor's Assistant, 26";

// Variables pour stocker les cellules
let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell4 = "";
let cellCount = 1;

// Lire caractère par caractère
for (let i = 0; i < csvData.length; i++) {
  let char = csvData[i];

  if (char === ",") {
    cellCount++;
  } else if (char === "\n") {
    console.log(cell1, cell2, cell3, cell4); // Affiche une ligne
    // Réinitialiser
    cell1 = "";
    cell2 = "";
    cell3 = "";
    cell4 = "";
    cellCount = 1;
  } else {
    // Stocker les caractères dans la bonne cellule
    if (cellCount === 1) {
      cell1 += char;
    } else if (cellCount === 2) {
      cell2 += char;
    } else if (cellCount === 3) {
      cell3 += char;
    } else if (cellCount === 4) {
      cell4 += char;
    }
  }
}

// 🧪 Test final pour la dernière ligne qui ne finit pas avec "\n"
console.log(cell1, cell2, cell3, cell4); 
