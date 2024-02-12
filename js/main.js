
// naming variables
var firstName = "Michael";  //firtname is a word
var lastName = "Hammond";
var age = 9; // age is a number

// let fullName = firstName + lastName;
let fullName = `${firstName} ${lastName}`
console.log(fullName);

// constant variables
const boilingWaterTemperature = 100;

// let variable
let areYouHappy = true;  

for (let i = 1; i != 8; i++) {
    console.log('The value if i is', i);
}
// function defining
function isEligible () {
    if(age>= 18) {
        console.lof('welcome to xxx');
    } else 
    {console.log('this page is not for you');}
}

// function invoking
isEligible();

console.log("we are using GIT!");