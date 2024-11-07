// Define function
function printHeart() {
    console.log("<3"); 
  }
  
  printHeart(); 
  //output : <3

  //Return Value Practice
  function multiply(num1, num2) {
    return num1 * num2; 
  }
  
  console.log(multiply(2, 3));  // Output: 6
  console.log(multiply(9, 9));  // Output: 81
  console.log(multiply(5, 4));  // Output: 20

  //Scope Practice
  //Soal A
  let animal = "Giant Pacific Octoptus"; 
function obeserve(){ 
let animal= "Pajama Squid"; 
console.log(animal); 
} 
amati();
//output: Pajama Squid


//Soal B
let deadlyAnimal  = "Blue-Ringed Octopus"; 
function handleAnimal() { 
let deadlyAnimal = "Scorpionfish"; 
console.log(deadlyAnimal); 
} 
handleAnimal(); 
console.log(deadlyAnimal)
//output: Blue-Ringed Octopus ScorpionfisScorpionfish