//Concatenating Strings with Plus Operator
const myStr = "This is the start." + " This is the end.";

//Word Blanks
"The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + ".";


//Store Multiple Values in one Variable using JavaScript Arrays
const myArray = ["bread",1];

//Nest one Array within Another Array
const myArray = [["coco",1], ["well",4]];

//Access Array Data with Indexes
const myArray = [50, 60, 70];
console.log(myArray[0]);
const data = myArray[1];

//Modify Array Data With Indexes
const myArray = [18, 64, 99];
myArray[0] = 45;

//Access Multi-Dimensional Arrays With Indexes
const myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const myData = myArray[2][1];

//Manipulate Arrays With push()
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
myArray.push(["dog", 3]);


//// Manipulate Arrays With pop()
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
const removedFromMyArray = myArray.pop();
console.log(removedFromMyArray);
console.log(myArray);


//// Manipulate Arrays With shift()
const myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
const removedFromOurArray = myArray.shift();
console.log(removedFromOurArray);
console.log(myArray);

////Manipulate Arrays With unshift()
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line
myArray.unshift(["Paul", 35]);

///
//Shopping List
const myList =  [
  ["Canned Beans", 3],
  ["Milk Galon", 1],
  ["Cereal", 2],
  ["Toilet Paper", 12],
  ["Sack of Rice", 1]
];


/////Write Reusable JavaScript with Functions
function reusableFunction(){
  console.log("Hi World");
}
reusableFunction();

//
//Passing Values to Functions with Arguments
function functionWithArgs(one, two) {
  console.log(one + two);
}
functionWithArgs(1,2);


//Return a Value from a Function with Return
function timesFive(num) {
  return num * 5;
}
const answer = timesFive(2);


//Global Scope and Functions
let myGlobal=10;
function fun1() {
  oopsGlobal = 5;
}


//Local Scope and Functions
function myLocalScope() {
  // Only change code below this line

  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Global vs. Local Scope in Functions
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
const outerWear = "sweater";
  // Only change code above this line
  return outerWear;
}

myOutfit();



//// Understanding Undefined Value returned from a Function
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive(){
  sum += 5;
}

///
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
 processed = processArg(7);

//Stand in Line
function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item);
  const removed = arr.shift();
  return removed;

  // Only change code above this line
}


//Understanding Boolean Values
function welcomeToBooleans() {
  // Only change code below this line

  return true; // Change this line

  // Only change code above this line
}



//Use Conditional Logic with If Statements
function trueOrFalse(wasThatTrue) {
  // Only change code below this line
if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";


  // Only change code above this line

}

//// Comparison with the Equality Operator
function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);


// Comparison with the Strict Equality Operato
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

//Introducing Else If Statements
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }
else if (val < 5) {
    return "Smaller than 5";
  }
else{
  return "Between 5 and 10";
}
}

testElseIf(7);

//Logical Order in If Else Statements
function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);

//Chaining If Else Statements
function testSize(num) {
  // Only change code below this line
if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else {
    return "Huge";
  }


////Selecting from Many Options with Switch Statements
function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line
  switch(val){
case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;}


//Adding a Default Option in Switch Statements
function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line
switch (val){
  case "a":
  answer="apple";
  break;
  case "b":
  answer="bird";
  break;
  case "c":
  answer="cat";
  break;
 default:
  answer ="stuff";
}


//Multiple I dentical Options in Switch Statements
function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line
  switch(val){
  case 1:
    case 2:
    case 3:
      return "Low";
      break;
    case 4:
    case 5:
    case 6:
      return "Mid";
      break;
    case 7:
    case 8:
    case 9:
      return "High";
      break;

  }


//Replacing If Else Chains with Switch
function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line
switch (val) {
  case "bob":
    answer = "Marley";
    break;
  case 42:
    answer = "The Answer";
    break;
  case 1:
    answer = "There is no #1";
    break;
  case 99:
    answer = "Missed me by this much!";
    break;
  case 7:
    answer = "Ate Nine";
    break;
}
//Build JavaScript Objects
const myDog = {
  // Only change code below this lin
  name : "varsha",
  "legs":4,
    "tails":5,
  friends :["papa","opapa"],
};


// Accessing Object Properties with Variables
const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line
const playerNumber = 16;  // Change this line
const player = testObj[playerNumber];   // Change this line


// Iterate with JavaScript While Loops
const myArray = [];

// Only change code below this line
let i=5
while(i >= 0){
  myArray.push(i);
  i--;
}

// Iterate with JavaScript For Loops
const myArray = [];
for( let i=1;i<6;i++){
  myArray.push(i);
}

// Iterate Odd Numbers With a For Loop
const myArray = [];
for(let i=1;i<10;i +=2){
  myArray.push(i);
}


// Count Backwards With a For Loop

const myArray = [];
for (let i = 9; i > 0; i -= 2) {
  myArray.push(i);
}


// Iterate Through an Array with a For Loop
const myArr = [2, 3, 4, 5, 6];
let total = 0;
for(let i =0;i<myArr.length;i++){
  total += myArr[i];
}


// Iterate with JavaScript Do...While Loops
const myArray = [];
let i = 10;

// Only change code below this line

do {
  myArray.push(i);
  i++;
}while(i < 5)

//